"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero-slides/01-womens-styling.png",
    alt: "Woman receiving a premium haircut at STYLEHVN salon",
    title: "Luxury Women's\nHair Styling",
    description:
      "Experience precision haircuts, customised styling, premium colouring and elegant finishing techniques by expert stylists in one of the best luxury unisex salons in Yelahanka New Town.",
  },
  {
    image: "/hero-slides/02-hair-botox.png",
    alt: "Shiny smooth hair after a premium Hair Botox treatment",
    title: "Advanced Hair\nRepair Treatments",
    description:
      "Restore damaged hair with advanced Hair Botox Treatment, Keratin Treatment Bangalore and Nanoplastia Hair Treatment services that leave your hair healthier, smoother, shinier and naturally beautiful.",
  },
  {
    image: "/hero-slides/03-bridal-makeup.png",
    alt: "Professional bridal makeup artist in a luxury beauty studio",
    title: "Professional Makeup\nBeauty Studio",
    description:
      "From Bridal Makeup Bangalore to party makeup, glowing Luxury Facial care, luxurious manicures and pedicures, our beauty professionals create flawless experiences for every occasion.",
  },
  {
    image: "/hero-slides/04-kids-haircut.png",
    alt: "Happy child enjoying a comfortable kids haircut",
    title: "Kids Haircuts\nMade Fun",
    description:
      "Our child-friendly stylists provide comfortable, fun and stress-free Kids Haircut experiences that children love and parents trust.",
  },
  {
    image: "/hero-slides/05-mens-grooming.png",
    alt: "Modern men's haircut by a professional barber",
    title: "Modern Men's\nPremium Grooming",
    description:
      "Sharp fades, stylish Men Haircut services, beard grooming, Premium Hair Spa rituals and complete men's grooming designed for today's modern gentleman.",
  },
  {
    image: "/hero-slides/06-nail-studio.png",
    alt: "Luxury nail art and extension service",
    title: "Luxury Nail Art\nStudio",
    description:
      "Discover elegant nail extensions, gel polish, artistic nail designs and Luxury Nail Studio manicure experiences created with precision and creativity.",
  },
  {
    image: "/hero-slides/07-head-massage.png",
    alt: "Relaxing head massage in a luxury salon spa",
    title: "Relaxing Spa &\nWellness Experience",
    description:
      "Escape the everyday with a relaxing Head Massage, rejuvenating Body Massage and premium wellness therapies that restore both body and mind.",
  },
];

const features = [
  "Hair Experts",
  "Hair Botox",
  "Keratin Treatment",
  "Nanoplastia",
  "Luxury Facial",
  "Bridal Makeup",
  "Nail Art",
  "Kids Haircuts",
  "Body Massage",
  "Head Massage",
  "Men • Women • Kids",
];

function Arrow() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      3000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section
      className="luxury-hero slider-hero"
      id="home"
      aria-roledescription="carousel"
      aria-label="STYLEHVN salon services"
    >
      <div className="slider-background">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.image}
            className="slider-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={active === 0}
              loading={active === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hero-shade slider-shade" />

      <div className="slider-layout">
        <div className="left-rail">
          <motion.div
            className="hours-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div><span>Open Every Day</span><strong>09:00 AM – 09:00 PM</strong></div>
            <div><span>Location</span><strong>Yelahanka New Town<br />Bangalore</strong></div>
            <div><span>Call</span><a href="tel:+919187157676">+91 91871 57676</a><br /><a href="tel:+917019511512">+91 70195 11512</a></div>
            <div className="slots"><i />Book Today — Limited Slots Available</div>
          </motion.div>

          <motion.div
            className="slider-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              Experience luxury beauty, personalised haircare and premium
              wellness services crafted for modern lifestyles. At STYLEHVN,
              every visit is designed to help you look confident, feel refreshed
              and express your unique style.
            </p>
          </motion.div>

          <motion.aside
            className="experience-card slider-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="gold-stars" aria-label="Rated 4.9 out of 5">
                ★★★★★
              </div>
              <p>Rated 4.9 / 5</p>
              <small>Based on Hundreds of Happy Clients</small>
            </div>
            <div className="card-stat-row">
              <div><strong>2,000+</strong><span>Happy Clients</span></div>
              <div><strong>08+</strong><span>Years of Excellence</span></div>
            </div>
            <div className="card-perks">
              <span>✓ Certified Stylists</span>
              <span>✓ Premium International Products</span>
              <span>✓ Hygienic Luxury Salon</span>
              <span>✓ Men • Women • Kids</span>
            </div>
          </motion.aside>
        </div>

        <div className="slider-copy">
          <span className="eyebrow">STYLEHVN UNISEX SALON</span>
          <span className="location-label">
            Luxury Salon in Yelahanka New Town • Bangalore
          </span>
          <div className="changing-copy" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              >
                <h1 id="hero-title">
                  {slide.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h1>
                <p>{slide.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mini-trust">
            <span className="mini-stars">★★★★★</span>
            <strong>Trusted by Families Across Bangalore</strong>
            <span>Luxury Hair Experts</span>
            <span>Professional Beauty Artists</span>
            <span>Premium Hair Treatments</span>
            <span>Kids Friendly Salon</span>
          </div>
          <div className="hero-actions slider-actions">
            <a href="#contact" className="gold-button">
              Book Your Appointment <Arrow />
            </a>
            <a href="#services" className="outline-button">
              Explore Luxury Services <Arrow />
            </a>
          </div>
        </div>

        <motion.aside
          className="right-rail"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <div className="slide-navigation" aria-label="Select hero slide">
            <span className="slide-count"><b>0{active + 1}</b> / 07</span>
            <div className="slide-progress">
              <i key={active} />
            </div>
            <div className="slide-dots">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  className={index === active ? "active" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}: ${item.title}`}
                  aria-current={index === active}
                />
              ))}
            </div>
          </div>
        </motion.aside>

        <div className="trust-badges slider-features">
          {features.map((feature) => (
            <span key={feature}><i>✓</i>{feature}</span>
          ))}
        </div>
      </div>

    </section>
  );
}
