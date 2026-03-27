import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <FAQ/>
      <CTA/>
    </>
  );
}