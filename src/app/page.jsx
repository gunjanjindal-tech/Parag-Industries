import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HomeProductsSection from "@/components/HomeProductsSection";
import HomeProjects from "@/components/HomeProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

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