import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import ServicesPage from "../../components/ServicesPage";

export const metadata: Metadata = {
  title: "Luxury Salon Services in Yelahanka New Town",
  description:
    "Explore women's and men's haircuts, Hair Botox, Keratin, Nanoplastia, hair colour, bridal makeup, luxury facials, nails and massage at STYLEHVN Yelahanka.",
  keywords: [
    "Luxury Unisex Salon in Yelahanka New Town", "Best Hair Salon in Yelahanka",
    "Hair Salon Bangalore North", "Women's Haircut Yelahanka",
    "Men's Haircut Bangalore", "Kids Haircut Yelahanka",
    "Hair Botox Treatment Bangalore", "Keratin Treatment Yelahanka",
    "Nanoplastia Hair Treatment Bangalore", "Hair Colour Specialist Bangalore",
    "Bridal Makeup Artist Yelahanka", "Luxury Facial", "Luxury Nail Studio",
    "Gel Nail Extensions", "Head Massage", "Body Massage",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Luxury Salon Services | STYLEHVN",
    description: "Premium personalised hair, beauty and wellness in Yelahanka New Town.",
    images: ["/about/salon-experience.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "STYLEHVN Luxury Salon Services",
    images: ["/about/salon-experience.png"],
  },
};

export default function ServicesRoute() {
  return <main className="services-page"><Navbar /><ServicesPage /></main>;
}
