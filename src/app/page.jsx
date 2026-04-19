import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HomeProductsSection from "@/components/HomeProductsSection";
import HomeProjects from "@/components/HomeProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Parag Industries | Industrial Fencing Manufacturer — Jaipur, India",
  description:
    "Parag Industries — trusted manufacturer and supplier of Chain Link Fence, Welded Mesh, Barbed Wire, Concertina Coil, Anti Climb Fence, and Gabion Box in Jaipur since 1996. Pan-India supply to government, defence, railways, and NHAI projects.",
  alternates: { canonical: "https://paragindustries.in/" },
  openGraph: {
    title: "Parag Industries | Industrial Fencing Manufacturer Jaipur",
    description:
      "30+ years of industrial fencing excellence. Premium quality wire mesh and security fencing for defence, railways, NHAI, and infrastructure projects across India.",
    url: "https://paragindustries.in/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parag Industries | Industrial Fencing Manufacturer Jaipur",
    description:
      "30+ years of industrial fencing excellence. Chain Link, Welded Mesh, Barbed Wire, Concertina Coil & more. Pan-India supply.",
    images: ["/images/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
     <HomeProductsSection/>
      <HomeProjects />
      <WhyChooseUs />
      <Testimonials />
      <FAQ/>
      <CTA/>
    </>
  );
}