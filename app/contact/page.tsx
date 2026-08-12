import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import ContactPage from "../../components/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Book STYLEHVN Salon Yelahanka",
  description: "Book your haircut, Hair Botox, Keratin, Nanoplastia, makeup, facial, nails or massage at STYLEHVN Unisex Salon in Yelahanka New Town.",
  keywords: ["Contact Luxury Salon in Yelahanka", "Best Salon Near Me", "Book Haircut Yelahanka", "Hair Botox Appointment", "Keratin Consultation", "Nanoplastia Treatment", "Bridal Makeup Booking"],
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact STYLEHVN Unisex Salon", description: "Book a premium salon experience in Yelahanka New Town.", images: ["/contact/contact-hero.png"] },
  twitter: { card: "summary_large_image", title: "Book STYLEHVN Unisex Salon", images: ["/contact/contact-hero.png"] },
};

export default function ContactRoute() {
  return <main className="contact-page"><Navbar /><ContactPage /></main>;
}
