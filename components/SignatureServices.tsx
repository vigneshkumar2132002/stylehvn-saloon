"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Women's Hair Styling",
    image: "/hero-slides/01-womens-styling.png",
    alt: "Woman receiving a precision haircut at STYLEHVN Unisex Salon",
    description:
      "Transform your look with precision haircuts, customised styling, premium colouring, balayage, global colour, Hair Spa Yelahanka and personalised consultations designed to enhance your natural beauty.",
    highlights: ["Precision Haircuts", "Hair Colour", "Hair Spa", "Hair Styling", "Hair Wash"],
    cta: "Explore Hair Services",
  },
  {
    number: "02",
    title: "Advanced Hair Treatments",
    image: "/hero-slides/02-hair-botox.png",
    alt: "Professional Hair Botox treatment on long glossy hair",
    description:
      "Repair damaged hair with industry-leading Hair Botox Treatment Bangalore, Keratin Treatment Yelahanka and Nanoplastia Hair Treatment Bangalore services that restore strength, eliminate frizz and create silky smooth, healthy hair.",
    highlights: ["Hair Botox", "Keratin Treatment", "Nanoplastia", "Hair Smoothening", "Hair Repair"],
    cta: "Book Hair Consultation",
  },
  {
    number: "03",
    title: "Luxury Beauty & Makeup",
    image: "/hero-slides/03-bridal-makeup.png",
    alt: "Bridal makeup artist working in an illuminated luxury beauty studio",
    description:
      "From bridal transformations by a Bridal Makeup Artist Yelahanka to party makeup, glowing facials, skin treatments, Luxury Pedicure Bangalore and Luxury Manicure Bangalore, our specialists create flawless experiences for every occasion.",
    highlights: ["Bridal Makeup", "Party Makeup", "Luxury Facials", "Pedicure", "Manicure"],
    cta: "View Beauty Services",
  },
  {
    number: "04",
    title: "Luxury Nail Studio",
    image: "/hero-slides/06-nail-studio.png",
    alt: "Premium nail art service in a sophisticated black and gold studio",
    description:
      "Express your personality at our Luxury Nail Studio Bangalore with elegant nail extensions, gel polish, chrome finishes, creative nail art and elevated manicure experiences.",
    highlights: ["Nail Extensions", "Nail Art", "Gel Polish", "French Nails", "Luxury Manicure"],
    cta: "Explore Nail Studio",
  },
  {
    number: "05",
    title: "Modern Men's Grooming",
    image: "/hero-slides/05-mens-grooming.png",
    alt: "Professional barber providing a modern men's haircut",
    description:
      "Premium Men's Haircut Yelahanka, beard styling, hair spa and complete grooming experiences designed for today's gentleman by experienced professionals.",
    highlights: ["Men's Haircut", "Beard Styling", "Hair Spa", "Hair Colour", "Grooming"],
    cta: "Book Men's Grooming",
  },
  {
    number: "06",
    title: "Kids Hair Studio",
    image: "/hero-slides/04-kids-haircut.png",
    alt: "Happy child receiving a haircut in a family-friendly luxury salon",
    description:
      "Comfortable, safe and enjoyable Kids Haircut Bangalore experiences delivered by patient stylists in a friendly luxury environment that children and parents trust.",
    highlights: ["Kids Haircut", "Gentle Styling", "Child Friendly", "Comfortable Experience"],
    cta: "Book Kids Haircut",
  },
  {
    number: "07",
    title: "Spa & Wellness",
    image: "/hero-slides/07-head-massage.png",
    alt: "Relaxing head massage in a premium black and gold wellness room",
    description:
      "Relax your body and refresh your mind with Body Massage Yelahanka, Head Massage Bangalore and premium wellness therapies in our tranquil salon spa.",
    highlights: ["Head Massage", "Body Massage", "Relaxation Therapy", "Stress Relief"],
    cta: "Book Spa Session",
  },
];

const reveal = {
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Arrow() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" />
    </svg>
  );
}

export default function SignatureServices() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveService((current) => (current + 1) % services.length),
      4500,
    );
    return () => window.clearInterval(timer);
  }, []);

  const service = services[activeService];

  return (
    <section className="signature-services" id="services" aria-labelledby="services-title">
      <motion.header className="services-header" {...reveal}>
        <span className="eyebrow">OUR SIGNATURE SERVICES</span>
        <h2 id="services-title">
          <span>Luxury Beauty Services</span>
          <span>Designed Around You</span>
        </h2>
        <p>
          At STYLEHVN Unisex Salon, we bring together advanced haircare, luxury
          beauty treatments and personalised grooming experiences for Men, Women
          and Kids. Every service is delivered by experienced professionals using
          premium international products in a relaxing luxury environment.
        </p>
      </motion.header>

      <motion.div className="service-showcase" {...reveal}>
        <div className="service-stage">
          <div className="service-stage-image">
            <AnimatePresence initial={false}>
              <motion.div
                key={service.image}
                className="service-image-layer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </motion.div>
            </AnimatePresence>
            <span className="service-stage-number">{service.number}</span>
          </div>

          <div className="service-stage-copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              >
                <span className="service-kicker">
                  STYLEHVN SIGNATURE • {service.number}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.highlights.map((highlight) => (
                    <li key={highlight}><i>✓</i>{highlight}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="service-selector" aria-label="Select signature service">
          {services.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={index === activeService ? "active" : ""}
              onClick={() => setActiveService(index)}
              aria-current={index === activeService}
            >
              <span>{item.number}</span>
              <b>{item.title}</b>
            </button>
          ))}
        </div>
        <div className="service-auto-progress" key={activeService}><i /></div>
      </motion.div>

      <motion.div className="services-areas" {...reveal}>
        <span>Serving Bangalore North</span>
        <p>
          Yelahanka New Town • KHB Colony • RMZ Galleria Mall • Attur Layout •
          Judicial Layout • Jakkur • Vidyaranyapura • Sahakara Nagar • Hebbal
        </p>
      </motion.div>

      <motion.div className="services-cta" {...reveal}>
        <div>
          <span>YOUR NEXT CHAPTER STARTS HERE</span>
          <h3>Ready For Your Next Transformation?</h3>
          <p>
            Whether you’re looking for a stylish haircut, advanced Hair Botox,
            Keratin, Nanoplastia, premium facials, bridal makeup, nail artistry
            or a relaxing massage, STYLEHVN Unisex Salon is here to create an
            experience you’ll love.
          </p>
        </div>
        <div className="services-cta-actions">
          <a href="#contact" className="cta-dark">Book Appointment <Arrow /></a>
          <a href="tel:+919187157676" className="cta-outline-dark">Call Now <Arrow /></a>
        </div>
      </motion.div>
    </section>
  );
}
