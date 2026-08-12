"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: "✦",
    title: "Premium International Products",
    text: "We use trusted professional brands to protect your hair and skin while delivering exceptional results.",
  },
  {
    icon: "◇",
    title: "Certified Beauty Experts",
    text: "Experienced stylists trained in modern haircutting, colouring, skincare and advanced hair treatments.",
  },
  {
    icon: "✧",
    title: "Luxury Salon Experience",
    text: "Relax in a sophisticated black-and-gold salon designed for comfort, elegance and personalised care.",
  },
  {
    icon: "○",
    title: "Personalised Consultation",
    text: "Every service begins with understanding your lifestyle, hair type, skin concerns and beauty goals.",
  },
];

const stats = [
  { value: 2000, suffix: "+", label: "Happy Clients" },
  { value: 8, prefix: "0", suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Personalised Care" },
  { value: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
];

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Counter({
  value,
  prefix = "",
  suffix,
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    `${prefix}${latest.toFixed(decimals)}${suffix}`,
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [count, inView, value]);

  return <motion.strong ref={ref}>{display}</motion.strong>;
}

function Arrow() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" />
    </svg>
  );
}

export default function WhoWeAre() {
  return (
    <section className="who-section" id="about" aria-labelledby="who-title">
      <div className="who-glow" aria-hidden="true" />
      <div className="who-particles" aria-hidden="true">
        <i /><i /><i /><i />
      </div>

      <motion.header className="who-header" {...reveal}>
        <span className="eyebrow">WHO WE ARE</span>
        <h2 id="who-title">
          <span>More Than A Salon. A Destination For</span>
          <span>Luxury, Confidence &amp; Self-Expression.</span>
        </h2>
      </motion.header>

      <div className="who-layout">
        <motion.div
          className="who-image"
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/stylehvn-who-we-are.png"
            alt="Professional STYLEHVN hairstylist in a luxury black and gold salon"
            fill
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 60vw"
          />
          <span>STYLEHVN • YELAHANKA NEW TOWN</span>
        </motion.div>

        <motion.div
          className="who-content"
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="who-badge">Trusted Beauty Destination</span>
          <h3>Crafting Beautiful<br />Experiences Every Day</h3>
          <p className="who-mission">
            Our mission is simple—to help every client look and feel their
            absolute best. From everyday grooming to complete transformations,
            our professional hair stylists and beauty experts deliver premium
            salon services with personal consultations and exceptional care.
          </p>

          <motion.div
            className="who-features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <i>{feature.icon}</i>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </motion.article>
            ))}
          </motion.div>

          <div className="who-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <Counter {...stat} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <motion.blockquote className="who-quote" {...reveal}>
            <p>
              “Beauty isn’t about changing who you are. It’s about revealing the
              confidence that already exists within you.”
            </p>
            <cite>— STYLEHVN Philosophy</cite>
          </motion.blockquote>

          <motion.div className="who-actions" {...reveal}>
            <a href="#story" className="gold-button">Discover Our Story <Arrow /></a>
            <a href="#contact" className="outline-button">Book Consultation <Arrow /></a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="who-local" {...reveal}>
        <span>Serving clients across Bangalore North</span>
        <p>
          Yelahanka New Town • KHB Colony • RMZ Galleria • Attur Layout •
          Jakkur • Judicial Layout • Vidyaranyapura • Sahakara Nagar • Hebbal
        </p>
      </motion.div>
    </section>
  );
}
