import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Sun, Building2, Shield, Train, Landmark, Factory, Search, Layout, Settings } from "lucide-react";
import TrustBar from "./TrustBar";
import ProcessSection from "@/components/ProcessSection";

export default function ServicesPage() {
  return (
    <main className=" bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] text-white">

      {/* HERO */}
      <section className="px-4 sm:px-6 md:px-8 pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 text-center max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Fencing Solutions Built for{" "}
          <span className="text-yellow-400">Industrial Scale & Security</span>
        </h1>

        <p className="mt-6 text-gray-300">
          With 30+ years of experience, Parag Industries delivers high-performance
          fencing systems for solar parks, infrastructure, defence and industrial projects.
        </p>
      </section>
    
     {/* SERVICE BLOCKS */}
<section className="space-y-10 md:space-y-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto pb-14 md:pb-16">

  {/* BLOCK 1 */}
  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">

    {/* TEXT */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">
        Perimeter Security Solutions
      </h2>

      <p className="mt-4 text-gray-300 leading-relaxed">
        We provide complete perimeter protection systems including chain link,
        welded mesh, anti-climb fencing and barbed wire designed for industrial
        and high-security environments.
      </p>

      <ul className="mt-6 space-y-3 text-sm text-gray-300">
        {[
          "Chain Link (GI, SS, PVC)",
          "Anti-Climb Fence",
          "Barbed Wire & Concertina",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle size={18} className="text-yellow-400 mt-[2px] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* IMAGE */}
    <div className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src="/services/PerimeterIntrusionDetection.jpeg"
        alt="Perimeter Security"
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* BLOCK 2 */}
  <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

    {/* IMAGE */}
    <div className="order-2 md:order-1 relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src="/services/StructuralFabrication.jpeg"
        alt="Fabrication Support"
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>

    {/* TEXT */}
    <div className="order-1 md:order-2">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">
        Structural & Fabrication Support
      </h2>

      <p className="mt-4 text-gray-300 leading-relaxed">
        We offer structural fencing materials including angles, GI wires and
        custom fabricated solutions tailored for infrastructure and large-scale projects.
      </p>

      <ul className="mt-6 space-y-3 text-sm text-gray-300">
        {[
          "GI / MS Angles for strong boundary structures",
          "Binding & GI Wire for industrial applications",
          "Custom fabrication tailored to project needs",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle size={18} className="text-yellow-400 mt-[2px] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* BLOCK 3 */}
  <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

    {/* TEXT */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">
        Infrastructure & Civil Solutions
      </h2>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Our gabion boxes and fencing systems are widely used in infrastructure,
        erosion control and government projects ensuring durability and long-term performance.
      </p>

      <ul className="mt-6 space-y-3 text-sm text-gray-300">
        {[
          "Gabion Box systems for erosion control",
          "Retaining wall and landscape support solutions",
          "Heavy-duty mesh for infrastructure projects",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle size={18} className="text-yellow-400 mt-[2px] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* IMAGE */}
    <div className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src="/services/InfrastructureSolutions.jpeg"
        alt="Infrastructure Solutions"
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  </div>

</section>

        <TrustBar/>

      {/* INDUSTRIES */}
<section className="px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 max-w-7xl mx-auto">
  
  {/* HEADING */}
  <div className="text-center max-w-2xl mx-auto mb-8 md:mb-8">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      Industries We <span className="text-yellow-400">Serve</span>
    </h2>

    <p className="mt-4 text-gray-300 text-base sm:text-lg">
      Built for performance across industries where security, durability and scale matter the most.
    </p>
  </div>

  {/* LAYOUT */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

    {/* LEFT SIDE */}
    <div className="space-y-6">

      {[
        { name: "Solar Projects", icon: <Sun size={22} /> },
        { name: "Infrastructure", icon: <Building2 size={22} /> },
        { name: "Railways", icon: <Train size={22} /> },
      ].map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-yellow-400/40 transition"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400 text-black">
            {item.icon}
          </div>

          <h3 className="text-white font-semibold">
            {item.name}
          </h3>
        </div>
      ))}

    </div>

    {/* CENTER BIG CARD */}
    <div className="relative">

      <div className="rounded-[2.5rem] p-[1px] bg-gradient-to-b from-yellow-400/40 to-transparent">

        <div className="rounded-[2.5rem] bg-[#051923]/90 backdrop-blur-xl p-10 text-center border border-white/10">

          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-lg">
            <Shield size={30} />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            Defence & High Security
          </h3>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Specialized fencing solutions designed for high-security zones,
            defence installations, and sensitive infrastructure.
          </p>

        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-6">

      {[
        { name: "Government Projects", icon: <Landmark size={22} /> },
        { name: "PEB Structures", icon: <Factory size={22} /> },
        { name: "Industrial Plants", icon: <Factory size={22} /> },
      ].map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-yellow-400/40 transition"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400 text-black">
            {item.icon}
          </div>

          <h3 className="text-white font-semibold">
            {item.name}
          </h3>
        </div>
      ))}

    </div>

  </div>

</section>
      


<ProcessSection />
      

      {/* CTA */}
      <section className="pt-12 pb-14 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          Let’s Build Your Project Together
        </h2>

        <p className="text-gray-300 mt-4">
          Get custom fencing solutions designed for your exact requirements.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
         <Link
  href="/contact"
  className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold 
  hover:scale-105 hover:-translate-y-1 transition duration-300 shadow-lg hover:cursor-pointer"
>
  Request a Quote
</Link>

       <a
  href="https://wa.me/919829080341?text=Hi%20I%20am%20interested%20in%20your%20fencing%20products.%20Please%20share%20more%20details."
  target="_blank"
  className="border border-white bg-white font-semibold text-black px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg hover:cursor-pointer"
>
  Talk to Sales
</a>
        </div>
      </section>

    </main>
  );
}