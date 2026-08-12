"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type ServiceCategory = {
  id: string;
  nav: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  services: string[];
};

const categories: ServiceCategory[] = [
  {
    id: "womens-hair", nav: "Women's Hair", eyebrow: "01 • WOMEN'S HAIR",
    title: "Women's Hair Styling",
    description: "Our stylists create personalised haircuts and styling solutions that complement your face shape, lifestyle and personality.",
    image: "/hero-slides/01-womens-styling.png",
    alt: "Woman receiving a precision haircut at STYLEHVN salon in Yelahanka",
    services: ["Precision Haircut", "Hair Wash", "Hair Styling", "Blow Dry", "Hair Spa", "Global Colour", "Highlights", "Balayage", "Fringe Cut", "Hair Consultation"],
  },
  {
    id: "treatments", nav: "Hair Treatments", eyebrow: "02 • ADVANCED HAIRCARE",
    title: "Advanced Hair Treatments",
    description: "Our consultation-led Hair Botox, Keratin and Nanoplastia rituals repair, smooth and strengthen hair while respecting its natural character.",
    image: "/hero-slides/02-hair-botox.png",
    alt: "Advanced Hair Botox treatment on glossy hair at STYLEHVN",
    services: ["Hair Botox", "Keratin Treatment", "Nanoplastia", "Smoothening", "Scalp Therapy", "Repair Treatments"],
  },
  {
    id: "hair-colour", nav: "Hair Colour", eyebrow: "03 • COLOUR ATELIER",
    title: "Hair Colour Studio",
    description: "Dimensional colour, luminous finishes and carefully considered tones created by a Hair Colour Specialist in Bangalore.",
    image: "/gallery/hair-colour.png",
    alt: "Premium global hair colour session in a black and gold salon",
    services: ["Global Colour", "Highlights", "Balayage", "Fashion Colours", "Root Touch-up", "Colour Correction", "Colour Protection"],
  },
  {
    id: "men", nav: "Men", eyebrow: "04 • MEN'S GROOMING",
    title: "Modern Men's Grooming",
    description: "Precision, polish and effortless style—modern grooming tailored to your features, routine and personal expression.",
    image: "/hero-slides/05-mens-grooming.png",
    alt: "Professional men's haircut and grooming at STYLEHVN Yelahanka",
    services: ["Haircut", "Fade", "Classic Cut", "Beard Styling", "Hair Spa", "Hair Colour", "Scalp Care"],
  },
  {
    id: "kids", nav: "Kids", eyebrow: "05 • KIDS HAIR STUDIO",
    title: "Comfortable. Calm. Fun.",
    description: "A patient, child-friendly experience designed to make every visit relaxed for little guests and their parents.",
    image: "/hero-slides/04-kids-haircut.png",
    alt: "Happy child enjoying a haircut at the STYLEHVN Kids Hair Studio",
    services: ["Kids Haircut", "Kids Styling", "First Haircut Experience"],
  },
  {
    id: "beauty", nav: "Beauty", eyebrow: "06 • SKIN & BEAUTY",
    title: "Beauty & Skin Care",
    description: "Thoughtful skin rituals and premium beauty services designed to restore hydration, clarity, radiance and confidence.",
    image: "/gallery/facial.png",
    alt: "Luxury facial treatment in an elegant STYLEHVN beauty room",
    services: ["Luxury Facial", "Clean-up", "Skin Brightening", "Hydration", "Detan", "Threading", "Waxing", "Body Polishing"],
  },
  {
    id: "makeup", nav: "Makeup", eyebrow: "07 • OCCASION BEAUTY",
    title: "Bridal & Party Makeup",
    description: "Camera-ready artistry with an elegant, individual finish for weddings, celebrations and every unforgettable occasion.",
    image: "/hero-slides/03-bridal-makeup.png",
    alt: "Bridal makeup artist applying makeup in the STYLEHVN studio",
    services: ["Bridal Makeup", "Engagement Makeup", "Reception Makeup", "Party Makeup", "HD Makeup", "Hair Styling", "Saree Draping"],
  },
  {
    id: "nails", nav: "Nails", eyebrow: "08 • NAIL ATELIER",
    title: "Luxury Nail Studio",
    description: "Immaculate nail care, refined finishes and expressive artistry delivered in our premium black-and-gold nail studio.",
    image: "/hero-slides/06-nail-studio.png",
    alt: "Elegant nail art and manicure at STYLEHVN Luxury Nail Studio",
    services: ["Gel Polish", "Nail Extensions", "French Nails", "Chrome Nails", "Cat Eye", "Nail Art", "Luxury Manicure", "Luxury Pedicure"],
  },
  {
    id: "spa", nav: "Spa", eyebrow: "09 • WELLNESS",
    title: "Spa & Wellness",
    description: "Slow down in a warm, tranquil space with restorative therapies created to release tension and renew your energy.",
    image: "/hero-slides/07-head-massage.png",
    alt: "Relaxing head massage in the STYLEHVN wellness room",
    services: ["Head Massage", "Body Massage", "Relaxation Therapy", "Stress Relief", "Luxury Spa Experience"],
  },
];

const faqs = [
  ["What is Hair Botox?", "Hair Botox is a deep-conditioning repair treatment that helps improve softness, shine and manageability. A consultation helps us select the right formula for your hair."],
  ["How long does Keratin treatment last?", "Results commonly last three to five months depending on hair type, aftercare, washing frequency and the products used at home."],
  ["Is Nanoplastia better than Keratin?", "They serve different needs. Nanoplastia focuses on smoothing and alignment, while Keratin primarily controls frizz and improves manageability. Our experts recommend the best option after consultation."],
  ["How often should I get a facial?", "Most clients benefit from a professional facial every four to six weeks, although your ideal schedule depends on your skin type and goals."],
  ["How long does nail art last?", "Gel nail art commonly lasts two to three weeks with good aftercare. Wear time varies by nail condition, lifestyle and service type."],
  ["Do you offer kids haircuts?", "Yes. STYLEHVN offers comfortable, patient and family-friendly kids haircut experiences in Yelahanka New Town."],
  ["Do I need to book an appointment?", "Walk-ins are welcome when availability permits, but booking ahead is recommended for treatments, makeup, nail services and weekends."],
];

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Arrow() {
  return <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11 11 3M5 3h6v6" /></svg>;
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };
  const businessSchema = {
    "@context": "https://schema.org", "@type": ["BeautySalon", "LocalBusiness"],
    name: "STYLEHVN UNISEX SALON", telephone: "+91 91871 57676",
    address: { "@type": "PostalAddress", streetAddress: "1st Floor, D4-377, KHB Colony, Self Financed Society 407 Colony", addressLocality: "Yelahanka New Town", addressRegion: "Karnataka", postalCode: "560064", addressCountry: "IN" },
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Salon Services", itemListElement: categories.map(category => ({ "@type": "OfferCatalog", name: category.title, itemListElement: category.services.map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) })) },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Services", item: "/services" }],
  };

  return (
    <>
      {[faqSchema, businessSchema, breadcrumbSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

      <section className="svc-hero" aria-labelledby="svc-title">
        <Image src="/about/salon-experience.png" alt="Luxury black and gold STYLEHVN salon interior in Yelahanka New Town" fill priority sizes="100vw" />
        <div className="svc-hero-shade" />
        <motion.div className="svc-hero-copy" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="svc-kicker">STYLEHVN • PREMIUM BEAUTY & WELLNESS</span>
          <h1 id="svc-title">Luxury Salon Services<br />Designed Around You</h1>
          <p>At STYLEHVN Unisex Salon, premium hair, beauty and wellness services for women, men and children are personalised by experienced professionals—from precision haircuts and advanced treatments to bridal makeup, nail art and relaxing massage.</p>
          <div className="svc-actions"><a href="#book" className="svc-gold-btn">Book Appointment <Arrow /></a><a href="#womens-hair" className="svc-line-btn">Explore Services <Arrow /></a></div>
        </motion.div>
      </section>

      <nav className="svc-quick" aria-label="Service categories">
        <div>{categories.map(category => <a key={category.id} href={`#${category.id}`}>{category.nav}</a>)}</div>
      </nav>

      <div className="svc-list">
        {categories.map((category, index) => (
          <section className={`svc-category ${index % 2 ? "reverse" : ""}`} id={category.id} key={category.id}>
            <motion.figure initial={{ opacity: 0, x: index % 2 ? 55 : -55 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .85 }}>
              <Image src={category.image} alt={category.alt} fill loading="lazy" sizes="(max-width: 800px) 100vw, 52vw" />
              <figcaption>{category.eyebrow}</figcaption>
            </motion.figure>
            <motion.div className="svc-category-copy" initial={{ opacity: 0, x: index % 2 ? -55 : 55 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .85 }}>
              <span className="svc-kicker">{category.eyebrow}</span>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <ul>{category.services.map(service => <li key={service}><i>✓</i>{service}</li>)}</ul>
              <a href="#book" className="svc-text-link">Book {category.nav} Service <Arrow /></a>
            </motion.div>
          </section>
        ))}
      </div>

      <section className="svc-treatment-feature">
        <motion.header {...reveal}><span className="svc-kicker">SIGNATURE SMOOTHING RITUALS</span><h2>Consultation first.<br />Beautiful results always.</h2></motion.header>
        <div>
          {[["/services/keratin-treatment.png", "Keratin Treatment"], ["/services/nanoplastia-treatment.png", "Nanoplastia Treatment"]].map(([src, title]) => <motion.figure key={title} {...reveal}><Image src={src} alt={`${title} at STYLEHVN Yelahanka`} fill sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>{title}</figcaption></motion.figure>)}
        </div>
      </section>

      <section className="svc-why">
        <motion.header {...reveal}><span className="svc-kicker">THE STYLEHVN DIFFERENCE</span><h2>Why Choose STYLEHVN</h2></motion.header>
        <div className="svc-feature-grid">{["Experienced Professionals", "Luxury Interior", "Premium Products", "Advanced Techniques", "Hygienic Environment", "Personalised Consultation", "Family Friendly", "Comfortable Parking"].map((feature, index) => <motion.article key={feature} {...reveal}><small>0{index + 1}</small><span>✦</span><h3>{feature}</h3></motion.article>)}</div>
        <div className="svc-stats">{[["2,000+", "Happy Clients"], ["08+", "Years Experience"], ["4.9★", "Google Rating"], ["15+", "Luxury Services"]].map(([value, label]) => <motion.div key={label} {...reveal}><strong>{value}</strong><span>{label}</span></motion.div>)}</div>
      </section>

      <section className="svc-faq">
        <motion.header {...reveal}><span className="svc-kicker">GOOD TO KNOW</span><h2>Frequently Asked Questions</h2></motion.header>
        <div>{faqs.map(([question, answer], index) => <article key={question} className={openFaq === index ? "open" : ""}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>0{index + 1}</span>{question}<i>{openFaq === index ? "−" : "+"}</i></button><div><p>{answer}</p></div></article>)}</div>
      </section>

      <section className="svc-final" id="book">
        <motion.div {...reveal}><span>YOUR NEXT EXPERIENCE STARTS HERE</span><h2>Ready For Your Next<br />Salon Experience?</h2><p>STYLEHVN UNISEX SALON • 1st Floor, D4-377, KHB Colony, Yelahanka New Town, Bengaluru 560064</p><div className="svc-actions"><a className="svc-dark-btn" href="tel:+919187157676">Book Appointment <Arrow /></a><a className="svc-outline-btn" href="tel:+919187157676">Call Now <Arrow /></a><a className="svc-outline-btn" href="https://wa.me/919187157676" target="_blank" rel="noreferrer">WhatsApp Us <Arrow /></a></div></motion.div>
      </section>
    </>
  );
}
