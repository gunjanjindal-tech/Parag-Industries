import Link from "next/link";
import MotionCard from "@/components/MotionCard";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "500+", label: "Solar Projects Delivered" },
  { number: "10,000+", label: "PEB & Industrial Projects" },
  { number: "400+", label: "Govt & High-Security Sites" },
   { number: 30, suffix: "+", label: "Years Experience" },
];


const whyUs = [
  {
    title: "Proven Track Record",
    desc: "	Proven track record across high-volume, multi-location projects .",
    stat: "10,000+",
  },
  {
    title: "Premium Quality Standards",
    desc: "Commitment to premium quality and compliance standards .",
    stat: "ISO Grade",
  },
  {
    title: "Scalable Manufacturing",
    desc: "Robust manufacturing infrastructure with scalable capacity .",
    stat: "Pan-India",
  },
  {
    title: "On-Time Delivery",
    desc: "Reliable supply chain ensuring on-time deliveries .",
    stat: "100% Commit",
  },
  {
    title: "Custom Engineering",
    desc: "	Technical expertise to deliver customized project solutions .",
    stat: "BOQ Ready",
  },
  {
    title: "Sector-Wide Expertise",
    desc: "Deep experience across solar, defence, highways, industrial and government sectors.",
    stat: "5+ Sectors",
  },
];


const sectors = [
  {
    title: "Solar Energy Sector",
    badge: "500+ Projects",
    desc: "Secured solar power assets across India with fencing systems engineered for extreme environments — delivering long-term durability, superior corrosion resistance, and minimal maintenance across the project lifecycle.",
    highlights: ["Long-term durability", "Superior corrosion resistance", "Global quality benchmarks", "Minimal maintenance"],
    image: "/projects/Solar-Energy-Sector.jpg",
  },
  {
    title: "PEB & Industrial Infrastructure",
    badge: "10,000+ Projects",
    desc: "Trusted supply partner for leading Pre-Engineered Building companies across warehouses, logistics parks, manufacturing units, industrial sheds, and turnkey infrastructure developments.",
    highlights: ["Warehouses & logistics parks", "Manufacturing units", "Industrial sheds", "Turnkey infrastructure developments "],
    image: "/projects/Industrial-Infrastructure.jpg",
  },
  {
    title: "Government & High-Security Projects",
    badge: "400+ Sites",
    desc: "Delivered fencing and structural solutions for national highways (NHAI), defence establishments, and critical public infrastructure — manufactured to meet stringent government compliance standards.",
    highlights: ["NHAI highway developments", "Defence establishments", "Critical public infrastructure", "Stringent compliance standards"],
    image: "/projects/Govt-2.jpg",
  },
  {
    title: "Private & Corporate Sector",
    badge: "Pan-India",
    desc: "Long-standing relationships with leading private and corporate clients, offering custom-engineered solutions with consistent quality and dependable supply timelines.",
    highlights: ["Custom-engineered solutions", "Consistent quality", "On-time delivery", "High-value projects"],
    image: "/projects/Private.jpg",
  },
];



export default function ProjectsPage() {
  return (
    <main className="bg-[linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] text-white">

      {/* HERO */}
      <section className="text-center px-6 pt-16 pb-16 max-w-5xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] mb-6 text-yellow-300 backdrop-blur-xl">
          Projects & Execution Excellence
        </span>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Delivering at <span className="text-yellow-400">Scale. </span>
    Trusted Across <span className="text-yellow-400">India.</span>
        </h1>
<p className="mt-6 text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Decades of combined expertise in manufacturing and supply of advanced fencing systems and structural solutions — built on scale, reliability, and performance.
        </p>
      </section>

      {/* STATS BAR */}
<section className="pb-20">
  <div className="flex sm:grid sm:grid-cols-4 gap-4 overflow-x-auto px-6 max-w-6xl sm:mx-auto scrollbar-hide snap-x snap-mandatory">
    {stats.map((stat, i) => (
      <div key={i} className="shrink-0 w-[80vw] sm:w-auto snap-start">
        <MotionCard delay={i * 0.1}>
          <div className="p-8 text-center">
            <p className="text-4xl sm:text-5xl font-black text-yellow-400">{stat.number}</p>
            <p className="mt-2 text-slate-300 font-medium">{stat.label}</p>
          </div>
        </MotionCard>
      </div>
    ))}
  </div>
</section>

      {/* SECTOR CARDS */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our <span className="text-yellow-400">Project Portfolio</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {sectors.map((sector, i) => (
            <MotionCard key={i} delay={i * 0.1}>
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051923]/80 to-transparent" />
                {/* Badge — yellow for all */}
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-black">
                  {sector.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Tags (highlights) — MainProductCard style */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {sector.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs border border-white/20 bg-white/10 px-3 py-1 rounded-full text-white"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Title — MainProductCard style */}
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {sector.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-2 mb-4">
                  {sector.desc}
                </p>

                {/* CTA — MainProductCard style */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-300 hover:text-yellow-200"
                >
                  Enquire Now
                  <ArrowRight size={14} />
                </Link>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

{/* WHY WE ARE PREFERRED */}
<section className="pb-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 px-6">
    Why We Are <span className="text-yellow-400">Preferred</span>
  </h2>
  <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto px-6 max-w-5xl sm:mx-auto scrollbar-hide snap-x snap-mandatory">
    {whyUs.map((item, i) => (
      <div key={i} className="shrink-0 w-[80vw] sm:w-auto snap-start">
        <MotionCard delay={i * 0.08}>
          <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-1 rounded-full bg-yellow-400" />
              <span className="text-xs font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-full">
                {item.stat}
              </span>
            </div>
            <p className="text-white font-bold text-base leading-snug">{item.title}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </MotionCard>
      </div>
    ))}
  </div>
</section>

{/* PRODUCT PORTFOLIO */}
<section className="pb-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 px-6">
    Core <span className="text-yellow-400">Product Portfolio</span>
  </h2>
  <div className="flex sm:grid sm:grid-cols-4 gap-4 overflow-x-auto px-6 max-w-5xl sm:mx-auto scrollbar-hide snap-x snap-mandatory">
    {[
      { name: "Chain Link Fencing",          tag: "Perimeter" },
      { name: "Welded Wire Mesh",            tag: "Structural" },
      { name: "Concertina Coil",             tag: "High Security" },
      { name: "Barbed Wire",                 tag: "Deterrence" },
      { name: "Anti-Climb Security Fencing", tag: "Anti-Climb" },
      { name: "3D Fence Panels",             tag: "Modern Design" },
      { name: "Gabion Box Systems",          tag: "Civil Works" },
      { name: "GI Wire & Structural",        tag: "Fabrication" },
    ].map((product, i) => (
      <div key={i} className="shrink-0 w-[60vw] sm:w-auto snap-start">
        <MotionCard delay={i * 0.07}>
          <div className="h-28 flex flex-col justify-center gap-2 px-4 border-l-2 border-yellow-400">
            <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wide">
              {product.tag}
            </span>
            <p className="text-sm sm:text-base font-bold text-white leading-snug">
              {product.name}
            </p>
          </div>
        </MotionCard>
      </div>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="text-center px-6 pb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Let's Build Your <span className="text-yellow-400">Next Project</span>
        </h2>
<p className="mt-5 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Partner with Parag Industries for reliable, high-quality fencing and structural solutions — delivered on time, every time.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-yellow-400 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition"
        >
          Contact Us →
        </Link>
      </section>

    </main>
  );
}