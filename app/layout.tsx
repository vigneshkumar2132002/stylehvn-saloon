import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stylehvnunisexsalon.com",
  ),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "STYLEHVN | Best Unisex Salon in Yelahanka",
    template: "%s | STYLEHVN Unisex Salon",
  },
  description:
    "STYLEHVN is a luxury salon in Bangalore offering expert haircuts, Hair Botox, Keratin, Nanoplastia, bridal makeup, nail art and wellness services in Yelahanka New Town.",
  keywords: [
    "Best Unisex Salon in Yelahanka",
    "Luxury Salon Bangalore",
    "Hair Salon Yelahanka New Town",
    "Hair Salon in Yelahanka New Town",
    "Hair Botox",
    "Hair Botox Treatment",
    "Keratin Treatment",
    "Nanoplastia",
    "Nanoplastia Hair Treatment",
    "Hair Spa",
    "Luxury Facial",
    "Facial",
    "Kids Haircut",
    "Bridal Makeup",
    "Nail Art",
    "Luxury Nail Studio",
    "Manicure",
    "Pedicure",
    "Head Massage",
    "Body Massage",
    "Men Haircut",
    "Women's Haircut",
    "Hair Colouring",
    "Beard Styling",
    "Professional Makeup",
    "Luxury Beauty Studio",
  ],
  authors: [{ name: "STYLEHVN Unisex Salon" }],
  creator: "STYLEHVN Unisex Salon",
  category: "Beauty Salon",
  icons: {
    icon: [{ url: "/stylehvn-logo.png", type: "image/png" }],
    shortcut: "/stylehvn-logo.png",
    apple: "/stylehvn-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "STYLEHVN Unisex Salon",
    title: "STYLEHVN | Best Unisex Salon in Yelahanka",
    description:
      "Premium hair, beauty, makeup, nail and wellness experiences in Yelahanka New Town, Bangalore.",
    images: [
      {
        url: "/hero-slides/01-womens-styling.png",
        width: 1672,
        height: 940,
        alt: "STYLEHVN luxury unisex salon in Yelahanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STYLEHVN | Luxury Salon Bangalore",
    description:
      "Discover premium salon, beauty, nail and wellness services in Yelahanka New Town.",
    images: ["/hero-slides/01-womens-styling.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body><SmoothScroll>{children}</SmoothScroll></body>
    </html>
  );
}
