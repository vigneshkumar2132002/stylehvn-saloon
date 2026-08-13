import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SignatureServices from "../components/SignatureServices";
import WhoWeAre from "../components/WhoWeAre";
import TransformationCta from "../components/TransformationCta";
import GalleryShowcase from "../components/GalleryShowcase";

export default function Home() {
  const salonSchema = {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "BeautySalon", "NailSalon", "LocalBusiness"],
    "@id": "https://stylehvnunisexsalon.com/#salon",
    name: "STYLEHVN Unisex Salon",
    description:
      "STYLEHVN is a luxury unisex hair, beauty, makeup, nail and wellness salon in Yelahanka New Town, Bangalore.",
    image: [
      "https://stylehvnunisexsalon.com/hero-slides/01-womens-styling.png",
      "https://stylehvnunisexsalon.com/contact/contact-hero.png"
    ],
    url: "https://stylehvnunisexsalon.com",
    telephone: "+919187157676",
    email: "hello@stylehvn.com",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, D4-377, KHB Colony, Self Financed Society 407 Colony",
      addressLocality: "Yelahanka New Town",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.099076",
      longitude: "77.581458"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "08:00",
        closes: "21:00"
      }
    ],
    areaServed: [
      { "@type": "AdministrativeArea", "name": "Yelahanka" },
      { "@type": "AdministrativeArea", "name": "Yelahanka New Town" },
      { "@type": "AdministrativeArea", "name": "North Bangalore" },
      { "@type": "AdministrativeArea", "name": "Bangalore" },
      { "@type": "AdministrativeArea", "name": "Karnataka" }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2000",
      bestRating: "5",
    },
    sameAs: [
      "https://www.instagram.com/stylehvn/",
      "https://www.facebook.com/stylehvn/",
      "https://wa.me/919187157676",
      "https://maps.app.goo.gl/SnmPULvuh2pK4y3o7"
    ],
    makesOffer: [
      "Women's Hair Styling",
      "Men Haircut",
      "Kids Haircut",
      "Hair Botox",
      "Hair Botox Treatment",
      "Keratin Treatment",
      "Nanoplastia",
      "Nanoplastia Hair Treatment",
      "Hair Spa",
      "Luxury Facial",
      "Facial",
      "Bridal Makeup",
      "Nail Art",
      "Luxury Nail Studio",
      "Manicure",
      "Pedicure",
      "Head Massage",
      "Body Massage",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }}
      />
      <Navbar />
      <Hero />
      <SignatureServices />
      <WhoWeAre />
      <GalleryShowcase />
      <TransformationCta />
    </main>
  );
}
