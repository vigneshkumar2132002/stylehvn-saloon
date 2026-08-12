"use client";

import { motion } from "framer-motion";
import CallNowMenu from "./CallNowMenu";

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Arrow() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" />
    </svg>
  );
}

export default function TransformationCta() {
  return (
    <section
      className="transformation-cta-section"
      aria-labelledby="transformation-cta-title"
    >
      <motion.div className="services-areas" {...reveal}>
        <span>Serving Bangalore North</span>
        <p>
          Yelahanka New Town • KHB Colony • RMZ Galleria Mall • Attur Layout •
          Judicial Layout • Jakkur • Vidyaranyapura • Sahakara Nagar • Hebbal
        </p>
      </motion.div>

      <motion.div className="services-cta" {...reveal}>
        <div>
          <span>Your Next Chapter Starts Here</span>
          <h2 id="transformation-cta-title">
            Ready For Your Next Transformation?
          </h2>
          <p>
            Whether you’re looking for a stylish haircut, advanced Hair Botox,
            Keratin, Nanoplastia, premium facials, bridal makeup, nail artistry
            or a relaxing massage, STYLEHVN Unisex Salon is here to create an
            experience you’ll love.
          </p>
        </div>
        <div className="services-cta-actions">
          <a href="#contact" className="cta-dark">
            Book Appointment <Arrow />
          </a>
          <CallNowMenu className="cta-outline-dark" />
        </div>
      </motion.div>
    </section>
  );
}
