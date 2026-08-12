import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import WorksPortfolio from "../../components/WorksPortfolio";

export const metadata: Metadata = {
  title: "STYLEHVN Works | Hair & Beauty Transformations in Yelahanka",
  description:
    "Explore hair, beauty, grooming and wellness transformations by STYLEHVN Unisex Salon in Yelahanka New Town, Bengaluru, including haircuts, Hair Botox, Keratin, Nanoplastia, makeup, nail art and more.",
  alternates: { canonical: "/works" },
  openGraph: {
    title: "STYLEHVN Works | Hair & Beauty Transformations in Yelahanka",
    description: "Explore the craft, treatments and beauty looks created at STYLEHVN Unisex Salon.",
    url: "/works",
    images: [{ url: "/hero-slides/01-womens-styling.png", alt: "STYLEHVN hair styling concept in Yelahanka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "STYLEHVN Works | Transformations in Yelahanka",
    description: "Hair, grooming, makeup, nail and wellness work by STYLEHVN Unisex Salon.",
    images: ["/hero-slides/01-womens-styling.png"],
  },
};

export default function WorksPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://stylehvnunisexsalon.com" },
          { "@type": "ListItem", position: 2, name: "Works", item: "https://stylehvnunisexsalon.com/works" },
        ],
      },
      {
        "@type": "Service",
        name: "Hair, beauty, grooming and wellness transformations",
        provider: { "@id": "https://stylehvnunisexsalon.com/#salon" },
        areaServed: "Yelahanka New Town, Bengaluru",
        serviceType: ["Haircuts", "Hair treatments", "Makeup", "Nail care", "Beauty and wellness"],
      },
    ],
  };

  return (
    <main className="works-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <WorksPortfolio />
    </main>
  );
}
