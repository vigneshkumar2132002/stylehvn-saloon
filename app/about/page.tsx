import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import AboutPage from "../../components/AboutPage";

export const metadata: Metadata = {
  title: "About STYLEHVN | Luxury Unisex Salon in Yelahanka",
  description:
    "Discover STYLEHVN Unisex Salon, a premium hair, beauty and wellness destination in Yelahanka New Town, Bangalore.",
  keywords: [
    "STYLEHVN Unisex Salon",
    "Luxury Unisex Salon in Yelahanka New Town",
    "Best Hair Salon in Yelahanka",
    "Hair Salon Bangalore North",
    "Premium Beauty Salon",
    "Hair Botox Treatment Bangalore",
    "Keratin Treatment Yelahanka",
    "Nanoplastia Hair Treatment",
    "Bridal Makeup Artist Yelahanka",
    "Luxury Nail Studio",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About STYLEHVN Unisex Salon",
    description: "Where luxury meets confidence in Yelahanka New Town.",
    images: ["/about/about-hero.png"],
  },
};

export default function AboutRoute() {
  return (
    <main className="about-page">
      <Navbar />
      <AboutPage />
    </main>
  );
}
