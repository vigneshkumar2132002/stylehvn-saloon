"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

type Work = { id: number; category: string; slug: string; title: string; description: string; image: string; shape: string; alt: string };

const works: Work[] = [
  { id: 1, category: "Women's Hair", slug: "womens-hair", title: "Precision Cut, Personalised Style", description: "A haircut shaped around face structure, hair texture and personal style.", image: "/hero-slides/01-womens-styling.png", shape: "wide", alt: "Women's haircut styling concept at STYLEHVN Unisex Salon in Yelahanka New Town" },
  { id: 2, category: "Hair Botox", slug: "hair-botox", title: "Smoothness Meets Shine", description: "A premium Hair Botox concept focused on a smoother, polished finish.", image: "/hero-slides/02-hair-botox.png", shape: "tall", alt: "Hair Botox treatment concept at STYLEHVN Unisex Salon Bangalore" },
  { id: 3, category: "Makeup", slug: "makeup", title: "Elegant Bridal Transformation", description: "A refined bridal look designed around the bride's features, outfit and occasion.", image: "/hero-slides/03-bridal-makeup.png", shape: "portrait", alt: "Bridal makeup concept at STYLEHVN Unisex Salon Yelahanka" },
  { id: 4, category: "Kids Haircuts", slug: "kids-haircuts", title: "Comfortable Cuts For Little Ones", description: "Friendly, relaxed grooming experiences designed for children.", image: "/hero-slides/04-kids-haircut.png", shape: "small", alt: "Kids haircut concept at STYLEHVN Unisex Salon Yelahanka" },
  { id: 5, category: "Men's Grooming", slug: "mens-grooming", title: "Clean. Sharp. Contemporary.", description: "Modern men's haircut and grooming tailored to individual preferences.", image: "/hero-slides/05-mens-grooming.png", shape: "tall", alt: "Men's grooming concept at STYLEHVN Unisex Salon" },
  { id: 6, category: "Nail Art", slug: "nail-art", title: "Details That Make The Look", description: "Creative nail art with carefully finished manicure details.", image: "/hero-slides/06-nail-studio.png", shape: "wide", alt: "Luxury nail art concept at STYLEHVN Unisex Salon" },
  { id: 7, category: "Massage - For Women's only", slug: "massage", title: "Time To Unwind", description: "Relaxing head and body massage experiences in a comfortable salon environment.", image: "/hero-slides/07-head-massage.png", shape: "portrait", alt: "Women's head massage concept at STYLEHVN Unisex Salon" },
  { id: 8, category: "Facials", slug: "facials", title: "Fresh, Refreshed, Radiant", description: "A relaxing facial experience designed around individual skincare needs.", image: "/gallery/facial.png", shape: "small", alt: "Facial care concept at STYLEHVN Unisex Salon" },
  { id: 9, category: "Hair Colour", slug: "hair-colour", title: "A Richer, More Defined Colour", description: "Personalised colour designed to complement the client's style and overall look.", image: "/gallery/hair-colour.png", shape: "wide", alt: "Hair colour styling concept at STYLEHVN Unisex Salon" },
  { id: 10, category: "Hair Spa", slug: "hair-spa", title: "A Restorative Hair Ritual", description: "A considered hair spa experience with a refined salon finish.", image: "/gallery/hair-wash.png", shape: "portrait", alt: "Hair spa concept at STYLEHVN Unisex Salon Yelahanka" },
  { id: 11, category: "Keratin", slug: "keratin", title: "Silky, Manageable Hair", description: "A Keratin styling concept designed for a sleek and refined appearance.", image: "/services/keratin-treatment.png", shape: "tall", alt: "Keratin hair treatment concept at STYLEHVN Unisex Salon Yelahanka" },
  { id: 12, category: "Nanoplastia", slug: "nanoplastia", title: "A Sleek, Modern Finish", description: "Advanced Nanoplastia styling for a smooth, polished hair look.", image: "/services/nanoplastia-treatment.png", shape: "wide", alt: "Nanoplastia treatment concept at STYLEHVN Unisex Salon" },
  { id: 13, category: "Manicure", slug: "manicure", title: "A Clean, Refined Finish", description: "Thoughtful manicure care finished with polished attention to detail.", image: "/hero-slides/06-nail-studio.png", shape: "small", alt: "Manicure service concept at STYLEHVN Unisex Salon" },
  { id: 14, category: "Pedicure", slug: "pedicure", title: "Polished From Head To Toe", description: "A comfortable pedicure experience for a neat, carefully finished look.", image: "/gallery/wellness.png", shape: "portrait", alt: "Pedicure service concept at STYLEHVN Unisex Salon" },
];

const categories = ["All", "Women's Hair", "Men's Grooming", "Kids Haircuts", "Hair Colour", "Hair Botox", "Keratin", "Nanoplastia", "Hair Spa", "Makeup", "Facials", "Nail Art", "Manicure", "Pedicure", "Massage - For Women's only"];

export default function WorksPortfolio() {
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Work | null>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("category");
    const match = categories.find((category) => category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === slug);
    if (match) setFilter(match);
  }, []);

  const chooseFilter = (category: string) => {
    setFilter(category);
    const url = new URL(window.location.href);
    if (category === "All") url.searchParams.delete("category");
    else url.searchParams.set("category", category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    window.history.replaceState({}, "", url);
  };
  const filtered = useMemo(() => filter === "All" ? works : works.filter((work) => work.category === filter), [filter]);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [selected, close]);

  return <>
    <section className="works-hero">
      <div className="works-hero-copy">
        <span>STYLEHVN • WORKS</span>
        <h1>Transformations Crafted With Precision</h1>
        <p>Explore the hair, beauty, grooming and wellness transformations created at STYLEHVN Unisex Salon in Yelahanka New Town, Bengaluru. Every look is created around the individual.</p>
        <div><a href="#transformations">Explore Transformations</a><Link href="/contact">Book an Appointment</Link></div>
      </div>
      <div className="works-hero-image"><Image src="/hero-slides/01-womens-styling.png" alt="Women's haircut styling concept at STYLEHVN" fill priority sizes="(max-width: 800px) 100vw, 52vw" /><small>STYLE CONCEPT</small></div>
    </section>

    <section className="works-story">
      <span>OUR WORK</span><h2>Every Look Has A Story</h2>
      <p>Great salon work begins with understanding the person behind the look. Our stylists and beauty professionals combine consultation, technique and attention to detail to create results that feel personal—not simply copied from a trend.</p>
    </section>

    <section id="transformations" className="works-portfolio" aria-labelledby="works-portfolio-title">
      <div className="works-filters" role="group" aria-label="Filter transformations">
        {categories.map(category => <button key={category} type="button" className={filter === category ? "active" : ""} aria-pressed={filter === category} onClick={() => chooseFilter(category)}>{category}</button>)}
      </div>
      <div className="works-feature">
        <div className="works-feature-image"><Image src="/hero-slides/02-hair-botox.png" alt="Hair Botox styling concept at STYLEHVN" fill sizes="(max-width: 800px) 100vw, 58vw" /><small>STYLE CONCEPT</small></div>
        <div><span>HAIR TRANSFORMATION</span><h2 id="works-portfolio-title">Smooth, Glossy Hair With A Refined Finish</h2><p>A personalised advanced hair treatment designed to improve smoothness, shine and manageability while creating a polished salon finish.</p><dl><div><dt>Service</dt><dd>Hair Botox</dd></div><div><dt>Location</dt><dd>STYLEHVN · Yelahanka New Town</dd></div></dl><button type="button" onClick={() => setSelected(works[1])}>View Transformation</button></div>
      </div>
      <motion.div className="works-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((work, index) => <motion.article className={`work-card ${work.shape}`} layout key={work.id} initial={{ opacity: 0, y: reduceMotion ? 0 : 60, scale: reduceMotion ? 1 : .97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .12 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : Math.min(index * .08, .32) }}>
            <div className="work-card-image"><Image src={work.image} alt={work.alt} fill loading="lazy" sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 34vw" /><small>STYLE CONCEPT</small></div>
            <div className="work-card-copy"><span>{work.category}</span><h3>{work.title}</h3><p>{work.description}</p><button type="button" onClick={() => setSelected(work)}>View Work <b aria-hidden="true">↗</b></button></div>
          </motion.article>)}
        </AnimatePresence>
      </motion.div>
    </section>

    <section className="works-process"><span>THE STYLEHVN APPROACH</span><h2>Precision Behind Every Transformation</h2><div>{[["Personalised Consultation","We begin by understanding your hair, skin, lifestyle and desired look before recommending a service."],["Professional Technique","Our approach focuses on precision, detail and a finish that suits the individual."],["Premium Experience","Every appointment is designed to feel comfortable, refined and personal."],["Complete Beauty Care","Hair, grooming, makeup, skin, nails and wellness—all under one salon experience."]].map(([title, copy], i) => <article key={title}><b>0{i+1}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="works-local"><div><span>YELAHANKA NEW TOWN · BENGALURU</span><h2>Beauty Transformations In Yelahanka New Town</h2></div><p>STYLEHVN Unisex Salon provides professional hair, beauty, grooming and wellness services in Yelahanka New Town, Bengaluru. We welcome women, men and kids from KHB Colony and nearby areas including Jakkur, Attur Layout, Vidyaranyapura, Sahakara Nagar and Hebbal for haircuts, Hair Botox, Keratin, Nanoplastia, colour, makeup, facials, nails and relaxation services.</p></section>

    <section className="works-cta"><span>YOUR STYLE · YOUR STORY</span><h2>Your Next Look Starts Here</h2><p>From precision haircuts and advanced hair treatments to makeup, nails, skincare and relaxing wellness services, STYLEHVN is ready to create your next signature look.</p><div><Link href="/contact">Book Your Appointment</Link><Link href="/services">Explore Services</Link><a href="tel:+919187157676">Call +91 91871 57676</a></div></section>

    <AnimatePresence>{selected && <motion.div className="work-modal" role="dialog" aria-modal="true" aria-labelledby="work-modal-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}><motion.div className="work-modal-panel" initial={{ opacity: 0, scale: reduceMotion ? 1 : .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: reduceMotion ? 0 : .55 }} onClick={e => e.stopPropagation()}><button className="work-modal-close" autoFocus type="button" onClick={close} aria-label="Close transformation">×</button><div className="work-modal-image"><Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 800px) 100vw, 55vw" /><small>STYLE CONCEPT</small></div><div className="work-modal-copy"><span>{selected.category}</span><h2 id="work-modal-title">{selected.title}</h2><p>{selected.description}</p><small>Recommended service</small><strong>{selected.category}</strong><Link href="/contact">Book Appointment</Link></div></motion.div></motion.div>}</AnimatePresence>
  </>;
}
