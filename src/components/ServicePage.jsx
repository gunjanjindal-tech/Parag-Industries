import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Sun, Building2, Shield, Train, Landmark, Factory, Search, Layout, Settings } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className=" bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] text-white">

      {/* HERO */}
      <section className="py-20 px-6 text-center max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Fencing Solutions Built for{" "}
          <span className="text-yellow-400">Industrial Scale & Security</span>
        </h1>

        <p className="mt-6 text-slate-300">
          With 30+ years of experience, Parag Industries delivers high-performance
          fencing systems for solar parks, infrastructure, defence and industrial projects.
        </p>
      </section>

      {/* SERVICE BLOCKS (PREMIUM STYLE) */}
      <section className="space-y-16 px-6 max-w-7xl mx-auto pb-24">

        {/* BLOCK 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-semibold">
              Perimeter Security Solutions
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              We provide complete perimeter protection systems including chain link,
              welded mesh, anti-climb fencing and barbed wire designed for industrial
              and high-security environments.
            </p>

           <ul className="mt-6 space-y-3 text-sm text-slate-300">
  {[
    "Chain Link (GI, SS, PVC)",
    "Anti-Climb Fence",
    "Barbed Wire & Concertina",
  ].map((item) => (
    <li key={item} className="flex items-start gap-3">
      <CheckCircle
        size={18}
        className="text-yellow-400 mt-[2px] shrink-0"
      />
      <span>{item}</span>
    </li>
  ))}
              
</ul>
          </div>

          <div className="h-[300px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"></div>
        </div>

        {/* BLOCK 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="order-2 md:order-1 h-[300px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"></div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold">
              Structural & Fabrication Support
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              We offer structural fencing materials including angles, GI wires and
              custom fabricated solutions tailored for infrastructure and large-scale projects.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
  {[
    "GI / MS Angles for strong boundary structures",
    "Binding & GI Wire for industrial applications",
    "Custom fabrication tailored to project needs",
  ].map((item) => (
    <li key={item} className="flex items-start gap-3">
      <CheckCircle className="text-yellow-400 mt-[2px] shrink-0" size={18} />
      <span>{item}</span>
    </li>
  ))}
</ul>
          </div>

        </div>

        {/* BLOCK 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-semibold">
              Infrastructure & Civil Solutions
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Our gabion boxes and fencing systems are widely used in infrastructure,
              erosion control and government projects ensuring durability and long-term performance.
            </p>

           <ul className="mt-6 space-y-3 text-sm text-slate-300">
  {[
    "Gabion Box systems for erosion control",
    "Retaining wall and landscape support solutions",
    "Heavy-duty mesh for infrastructure projects",
  ].map((item) => (
    <li key={item} className="flex items-start gap-3">
      <CheckCircle className="text-yellow-400 mt-[2px] shrink-0" size={18} />
      <span>{item}</span>
    </li>
  ))}
</ul>
          </div>

          <div className="h-[300px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"></div>
        </div>

      </section>

      {/* INDUSTRIES */}
     <section className="py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-4">
    Industries We Serve
  </h2>

  <p className="text-slate-400 max-w-3xl mx-auto mb-12">
    We deliver specialized fencing solutions tailored to meet the demands of
    diverse industries across India.
  </p>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

    {[
      { name: "Solar Projects", icon: <Sun size={22} /> },
      { name: "Infrastructure", icon: <Building2 size={22} /> },
      { name: "Defence", icon: <Shield size={22} /> },
      { name: "Railways", icon: <Train size={22} /> },
      { name: "Government Projects", icon: <Landmark size={22} /> },
      { name: "PEB Structures", icon: <Factory size={22} /> },
    ].map((item) => (
      <div
        key={item.name}
        className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-400/40 transition"
      >
        <div className="text-yellow-400 mb-3 flex justify-center">
          {item.icon}
        </div>

        <h3 className="text-sm font-semibold text-white group-hover:text-yellow-300 transition">
          {item.name}
        </h3>
      </div>
    ))}

  </div>
      </section>
      
{/* Process */}
<section className="py-24 px-6 max-w-7xl mx-auto">

  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold">
      Our Process
    </h2>

    <p className="text-slate-400 mt-4 max-w-xl mx-auto">
      We follow a structured approach to ensure every project is delivered with
      precision, efficiency, and long-term reliability.
    </p>
  </div>

  <div className="border-t border-white/10">

    {[
      {
        title: "Requirement Analysis",
        desc: "Understanding project scope, site conditions, and security requirements.",
      },
      {
        title: "Solution Design",
        desc: "Designing a tailored fencing solution based on technical and operational needs.",
      },
      {
        title: "Manufacturing",
        desc: "Producing high-quality materials with strict quality control and durability standards.",
      },
      {
        title: "Delivery & Support",
        desc: "Ensuring timely delivery along with on-ground support and execution guidance.",
      },
    ].map((step, i) => (
      <div
        key={i}
        className="grid md:grid-cols-3 gap-6 py-8 border-b border-white/10"
      >

        {/* STEP NUMBER */}
        <div className="text-yellow-400 font-semibold text-sm">
          {`0${i + 1}`}
        </div>

        {/* TITLE */}
        <div className="font-semibold text-white">
          {step.title}
        </div>

        {/* DESCRIPTION */}
        <div className="text-slate-400 text-sm leading-relaxed">
          {step.desc}
        </div>

      </div>
    ))}

  </div>

</section>
      

      {/* CTA */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold">
          Let’s Build Your Project Together
        </h2>

        <p className="text-slate-400 mt-4">
          Get custom fencing solutions designed for your exact requirements.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Request a Quote
          </Link>

          <a
            href="tel:+919829080341"
            className="border border-white/20 px-6 py-3 rounded-xl"
          >
            Talk to Sales
          </a>
        </div>
      </section>

    </main>
  );
}