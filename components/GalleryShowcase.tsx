"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  shape: "tall" | "medium" | "small" | "wide" | "portrait";
};

const categories = [
  "All", "Haircuts", "Hair Treatments", "Hair Colour", "Bridal Makeup",
  "Nail Studio", "Facials", "Massage", "Kids", "Men",
];

const sources = [
  ["/hero-slides/01-womens-styling.png", "Hair Transformation", "Haircuts"],
  ["/hero-slides/02-hair-botox.png", "Luxury Hair Botox", "Hair Treatments"],
  ["/hero-slides/03-bridal-makeup.png", "Bridal Radiance", "Bridal Makeup"],
  ["/hero-slides/04-kids-haircut.png", "Kids Hair Studio", "Kids"],
  ["/hero-slides/05-mens-grooming.png", "Modern Men's Cut", "Men"],
  ["/hero-slides/06-nail-studio.png", "Premium Nail Art", "Nail Studio"],
  ["/hero-slides/07-head-massage.png", "Head Massage Ritual", "Massage"],
  ["/gallery/facial.png", "Luxury Facial", "Facials"],
  ["/gallery/hair-colour.png", "Dimensional Hair Colour", "Hair Colour"],
  ["/gallery/hair-wash.png", "Premium Hair Wash", "Hair Treatments"],
  ["/gallery/reception.png", "STYLEHVN Interior", "All"],
  ["/gallery/wellness.png", "Wellness Therapy", "Massage"],
  ["/luxury-salon-hero.png", "Luxury Styling Floor", "All"],
  ["/stylehvn-who-we-are.png", "Professional Consultation", "Haircuts"],
] as const;

const shapes: GalleryItem["shape"][] = ["tall", "wide", "portrait", "tall", "small", "medium"];

const galleryItems: GalleryItem[] = Array.from({ length: 31 }, (_, index) => {
  const source = sources[index % sources.length];
  return {
    id: index + 1,
    image: source[0],
    title: index < sources.length ? source[1] : `${source[1]} ${Math.floor(index / sources.length) + 1}`,
    category: source[2],
    shape: shapes[index % shapes.length],
  };
});

const stats = [
  ["2500+", "Happy Clients"],
  ["08+", "Years Experience"],
  ["4.9★", "Google Rating"],
  ["15+", "Luxury Services"],
];

const statsByCard: Record<number, (typeof stats)[number]> = {
  0: stats[0],
  2: stats[1],
  6: stats[2],
  8: stats[3],
};

export default function GalleryShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef(0);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  const close = useCallback(() => setLightbox(null), []);
  const move = useCallback((direction: number) => {
    setLightbox((current) => current === null ? null : (current + direction + filtered.length) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".gallery-card");
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 80, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1, duration: 1, delay: (index % 5) * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          },
        );
        const image = card.querySelector(".gallery-card-image");
        if (image) {
          gsap.fromTo(image, { y: -20 }, {
            y: 20, ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1.1 },
          });
        }
      });
    }, sectionRef);
    return () => context.revert();
  }, [filter]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [close, lightbox, move]);

  return (
    <section className="gallery-section" id="gallery" ref={sectionRef} aria-labelledby="gallery-title">
      <motion.header
        className="gallery-header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >
        <span className="eyebrow">OUR GALLERY</span>
        <h2 id="gallery-title">
          <span>Real Transformations.</span>
          <span>Real Confidence.</span>
          <span>Luxury Experiences.</span>
        </h2>
        <p>
          Every hairstyle, makeover, facial, treatment and grooming session
          reflects our passion for craftsmanship. Explore transformations created
          at STYLEHVN Unisex Salon for clients across Yelahanka New Town and Bangalore North.
        </p>
      </motion.header>

      <div className="gallery-filters" role="group" aria-label="Filter gallery">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className="gallery-grid" ref={gridRef} layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.button
              type="button"
              layout
              key={item.id}
              className={`gallery-card ${item.shape}`}
              onClick={() => setLightbox(index)}
              exit={{ opacity: 0, scale: .95 }}
              transition={{ duration: .45 }}
              aria-label={`Open ${item.title} image`}
            >
              <div className="gallery-card-image">
                <Image src={item.image} alt={item.title} fill loading="lazy" sizes="(max-width: 700px) 50vw, 26vw" />
              </div>
              {filter === "All" && statsByCard[index] && (
                <span className="gallery-stat-overlay">
                  <small>STYLEHVN • 0{index + 1}</small>
                  <strong>{statsByCard[index][0]}</strong>
                  <em>{statsByCard[index][1]}</em>
                </span>
              )}
              <span className="gallery-overlay"><i />{item.title}<small>{item.category}</small></span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="gallery-local">
        Luxury Salon in Yelahanka New Town • KHB Colony • RMZ Galleria • Attur
        Layout • Jakkur • Judicial Layout • Vidyaranyapura • Sahakara Nagar • Hebbal
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            className="gallery-lightbox"
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-label={`${filtered[lightbox].title} image viewer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
            onTouchEnd={(event) => {
              const distance = event.changedTouches[0].clientX - touchStart.current;
              if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
            }}
          >
            <button className="lightbox-close" onClick={close} aria-label="Close gallery">×</button>
            <button className="lightbox-prev" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Previous image">←</button>
            <motion.div className="lightbox-image" onClick={(event) => event.stopPropagation()} initial={{ scale: .96 }} animate={{ scale: 1 }}>
              <Image src={filtered[lightbox].image} alt={filtered[lightbox].title} fill priority sizes="95vw" />
              <span>{filtered[lightbox].title}<small>{filtered[lightbox].category}</small></span>
            </motion.div>
            <button className="lightbox-next" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Next image">→</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
