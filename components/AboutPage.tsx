"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const reasons = [
  "Certified Professionals", "Premium International Products",
  "Luxury Interiors", "Personalised Consultation",
  "Advanced Hair Treatments", "Family Friendly",
  "Modern Equipment", "Relaxing Ambience",
];

const teamRoles = [
  "Experienced Hairstylists", "Professional Makeup Artists", "Beauty Experts",
  "Nail Specialists", "Massage Therapists", "Hair Treatment Experts",
];

const experience = [
  ["/about/salon-experience.png", "Premium Salon"],
  ["/gallery/reception.png", "Waiting Lounge"],
  ["/hero-slides/01-womens-styling.png", "Hair Station"],
  ["/hero-slides/03-bridal-makeup.png", "Makeup Studio"],
  ["/gallery/wellness.png", "Wellness Room"],
  ["/hero-slides/06-nail-studio.png", "Nail Studio"],
] as const;

const areas = [
  "Yelahanka New Town", "KHB Colony", "RMZ Galleria", "Attur Layout",
  "Judicial Layout", "Jakkur", "Vidyaranyapura", "Sahakara Nagar",
  "Hebbal", "Kodigehalli", "Thanisandra", "Airport Road", "Bangalore North",
];

const reviewSource = {
  provider: "Google Business Profile",
  rating: 4.9,
  total: "2,000+",
  profileUrl: "https://www.google.com/search?q=STYLEHVN+UNISEX+SALON+Yelahanka",
  reviews: Array.from({ length: 3 }, (_, index) => ({
    id: `google-review-${index + 1}`,
    name: "Verified Google Client",
    date: "Live review connection ready",
    rating: 5,
    text: "Google Business Profile review content will appear here when the review service is connected.",
  })),
};

function Arrow() {
  return <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11 11 3M5 3h6v6" /></svg>;
}

export default function AboutPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "LocalBusiness"],
    name: "STYLEHVN UNISEX SALON",
    image: "/about/about-hero.png",
    telephone: "+91 91871 57676",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, D4-377, KHB Colony, Self Financed Society 407 Colony",
      addressLocality: "Yelahanka New Town",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "21:00",
    }],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2000" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "About STYLEHVN", item: "/about" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="about-hero" aria-labelledby="about-hero-title">
        <Image src="/about/about-hero.png" alt="Black and gold interior of STYLEHVN luxury unisex salon in Yelahanka" fill priority sizes="100vw" />
        <div className="about-hero-shade" />
        <motion.div className="about-hero-copy" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <nav aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><b>About</b></nav>
          <span className="about-kicker">STYLEHVN • YELAHANKA NEW TOWN</span>
          <h1 id="about-hero-title">About STYLEHVN<br />Unisex Salon</h1>
          <h2>Where Luxury Meets Confidence</h2>
          <p>STYLEHVN Unisex Salon is a premium destination for hair, beauty and wellness in Yelahanka New Town, Bangalore. Personalised care, advanced techniques and international products create exceptional experiences for men, women and children.</p>
          <div className="about-actions">
            <a className="about-gold-btn" href="#about-contact">Book Appointment <Arrow /></a>
            <a className="about-line-btn" href="tel:+919187157676">Call Now <Arrow /></a>
          </div>
        </motion.div>
      </section>

      <section className="about-story about-shell">
        <motion.div className="about-story-copy" {...reveal}>
          <span className="about-kicker">OUR STORY</span>
          <h2>Creating Beautiful Experiences,<br />One Client At A Time.</h2>
          <p>STYLEHVN Unisex Salon was created with one vision: to offer a luxury salon experience where every guest feels valued, confident and cared for. Beauty is personal, so every haircut, hair treatment, facial, makeup session and wellness service begins with understanding your style, hair type and goals.</p>
          <p>Located in the heart of Yelahanka New Town, we welcome clients for precision haircuts, Hair Botox Treatment Bangalore, Keratin Treatment Yelahanka, Nanoplastia Hair Treatment, luxury nail artistry, bridal makeup, facials and relaxing spa therapies.</p>
        </motion.div>
        <motion.figure className="about-story-image" {...reveal}>
          <Image src="/stylehvn-who-we-are.png" alt="STYLEHVN stylist consulting a client at the premium beauty salon" fill sizes="(max-width: 800px) 100vw, 48vw" />
          <figcaption>Personal attention. Exceptional artistry.</figcaption>
        </motion.figure>
      </section>

      <section className="about-identity">
        <div className="about-shell">
          <motion.header className="about-section-head" {...reveal}>
            <span className="about-kicker">WHO WE ARE</span>
            <h2>Purpose in every detail.<br />Care in every experience.</h2>
          </motion.header>
          <div className="about-glass-grid">
            <motion.article {...reveal}><small>01</small><h3>Our Mission</h3><p>To deliver premium beauty experiences with personalised care, creativity and professionalism.</p></motion.article>
            <motion.article {...reveal}><small>02</small><h3>Our Vision</h3><p>To become the most trusted luxury unisex salon in Yelahanka and one of Bangalore’s preferred beauty destinations.</p></motion.article>
            <motion.article {...reveal}><small>03</small><h3>Our Values</h3><div className="about-value-list">{["Luxury", "Creativity", "Hygiene", "Innovation", "Professionalism", "Customer First"].map(value => <span key={value}>{value}</span>)}</div></motion.article>
          </div>
        </div>
      </section>

      <section className="about-philosophy">
        <Image src="/about/about-hero.png" alt="Elegant STYLEHVN salon interior representing the salon philosophy" fill sizes="100vw" />
        <div className="about-philosophy-shade" />
        <motion.blockquote {...reveal}>
          <span className="about-kicker">OUR PHILOSOPHY</span>
          <p>“Luxury is not just how you look.<br />It’s how you feel the moment<br />you walk through our doors.”</p>
          <cite>— STYLEHVN</cite>
        </motion.blockquote>
      </section>

      <section className="about-why about-shell">
        <motion.header className="about-section-head" {...reveal}>
          <span className="about-kicker">THE STYLEHVN STANDARD</span>
          <h2>Why Clients Choose STYLEHVN</h2>
        </motion.header>
        <div className="about-reasons">
          {reasons.map((reason, index) => <motion.article key={reason} {...reveal}><small>0{index + 1}</small><i>✦</i><h3>{reason}</h3></motion.article>)}
        </div>
        <div className="about-stats">
          {[["2,000+", "Happy Clients"], ["08+", "Years Experience"], ["4.9★", "Google Rating"], ["15+", "Luxury Services"]].map(([value, label]) => <motion.div key={label} {...reveal}><strong>{value}</strong><span>{label}</span></motion.div>)}
        </div>
      </section>

      <section className="about-team about-shell">
        <motion.figure {...reveal}><Image src="/about/stylehvn-team.png" alt="Professional STYLEHVN hairstylists, makeup artists and beauty experts" fill sizes="(max-width: 850px) 100vw, 58vw" /></motion.figure>
        <motion.div className="about-team-copy" {...reveal}>
          <span className="about-kicker">MEET OUR EXPERT TEAM</span>
          <h2>Expert hands.<br />Genuine care.</h2>
          <p>Our specialists combine technical excellence with a warm, personal approach to hair styling, beauty, makeup, nail care and wellness.</p>
          <div>{teamRoles.map(role => <span key={role}>✓ {role}</span>)}</div>
          <a className="about-text-link" href="#about-contact">Meet Our Experts <Arrow /></a>
        </motion.div>
      </section>

      <section className="about-experience">
        <motion.header className="about-section-head" {...reveal}>
          <span className="about-kicker">THE LUXURY EXPERIENCE</span>
          <h2>Designed for your comfort.<br />Crafted for your confidence.</h2>
        </motion.header>
        <div className="about-collage">
          {experience.map(([src, label], index) => (
            <motion.figure key={label} {...reveal}>
              <Image src={src} alt={`${label} at STYLEHVN Unisex Salon Yelahanka`} fill sizes="(max-width: 700px) 100vw, 40vw" />
              <figcaption><small>0{index + 1}</small>{label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="about-reviews about-shell">
        <motion.header className="about-section-head" {...reveal}>
          <span className="about-kicker">GOOGLE REVIEWS</span>
          <h2>Confidence, reflected<br />in every review.</h2>
        </motion.header>
        <div className="about-review-layout">
          <motion.article className="about-rating" {...reveal}>
            <span>★★★★★</span><strong>{reviewSource.rating}</strong><p>Based on {reviewSource.total} client experiences</p><small>{reviewSource.provider}</small>
          </motion.article>
          <div className="about-review-cards">
            {reviewSource.reviews.map(review => <motion.article key={review.id} {...reveal}><span>{"★".repeat(review.rating)}</span><p>{review.text}</p><footer><strong>{review.name}</strong><small>{review.date}</small></footer></motion.article>)}
          </div>
        </div>
        <a className="about-text-link" href={reviewSource.profileUrl} target="_blank" rel="noreferrer">Read more reviews on Google <Arrow /></a>
      </section>

      <section className="about-areas about-shell">
        <motion.div {...reveal}>
          <span className="about-kicker">SERVICE AREAS</span>
          <h2>Proudly Serving<br />Bangalore North</h2>
          <p>Visit STYLEHVN, the luxury unisex salon in Yelahanka New Town, from neighbourhoods across North Bengaluru.</p>
          <div className="about-area-pills">{areas.map(area => <span key={area}>{area}</span>)}</div>
        </motion.div>
        <motion.div className="about-map" {...reveal}>
          <iframe title="Map showing STYLEHVN Unisex Salon in Yelahanka New Town" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=STYLEHVN%20UNISEX%20SALON%20Yelahanka%20New%20Town&output=embed" />
        </motion.div>
      </section>

      <section className="about-final-cta" id="about-contact">
        <motion.div {...reveal}>
          <span className="about-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Ready For Your Next<br />Transformation?</h2>
          <p>1st Floor, D4-377, KHB Colony, Self Financed Society 407 Colony,<br />Yelahanka New Town, Bengaluru, Karnataka 560064</p>
          <div className="about-actions">
            <a className="about-dark-btn" href="tel:+919187157676">Book Appointment <Arrow /></a>
            <a className="about-outline-dark-btn" href="tel:+919187157676">Call Now <Arrow /></a>
            <a className="about-outline-dark-btn" href="https://wa.me/919187157676" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
