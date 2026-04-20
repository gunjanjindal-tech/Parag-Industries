import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | 30+ Years of Industrial Fencing Excellence — Parag Industries",
  description:
    "Learn about Parag Industries — a Jaipur-based manufacturer with 30+ years of experience producing premium industrial fencing solutions for defence, railways, NHAI, and infrastructure projects across India since 1996.",
  alternates: { canonical: "https://paragindustries.in/about" },
  openGraph: {
    title: "About Parag Industries | Industrial Fencing Manufacturer Since 1996",
    description:
      "Established in 1996, Parag Industries has been a trusted name in industrial fencing. Located in RIICO Industrial Area, Jaipur, supplying Pan-India.",
    url: "https://paragindustries.in/about",
    images: [{ url: "/images/og-about.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Parag Industries | Industrial Fencing Manufacturer Since 1996",
    description:
      "30+ years of industrial fencing excellence. Located in RIICO Industrial Area, Jaipur.",
    images: ["/images/og-about.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}