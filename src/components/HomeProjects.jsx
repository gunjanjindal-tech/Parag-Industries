"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Solar Energy Sector",
    badge: "500+ Projects",
    desc: "Secured solar power assets across India with fencing systems engineered for extreme environments — delivering long-term durability and minimal maintenance.",
    highlights: ["Long-term durability", "Corrosion resistance", "Minimal maintenance"],
    img: "/projects/Solar-Energy-Sector.jpg",
  },
  {
    title: "PEB & Industrial Infrastructure",
    badge: "10,000+ Projects",
    desc: "Trusted supply partner for leading Pre-Engineered Building companies across warehouses, logistics parks, and manufacturing units.",
    highlights: ["Warehouses & logistics", "Manufacturing units", "Turnkey infrastructure"],
    img: "/projects/Industrial-Infrastructure.jpg",
  },
  {
    title: "Government & Highway Projects",
    badge: "400+ Sites",
    desc: "Delivered fencing solutions for NHAI, defence establishments, and critical public infrastructure to stringent government compliance standards.",
    highlights: ["NHAI highways", "Defence establishments", "Govt compliance"],
    img: "/projects/Govt-2.jpg",
  },
  {
    title: "Private & Corporate Sector",
    badge: "Pan-India",
    desc: "Long-standing relationships with leading private clients, offering custom-engineered solutions with consistent quality and on-time delivery.",
    highlights: ["Custom engineering", "Consistent quality", "On-time delivery"],
    img: "/projects/Private.jpg",
  },
];

export default function HomeProjects() {
  return (
    <section className="relative bg-gradient-to-br from-[#154c79] via-[#1b5f8a] to-[#0d3b66] px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] mb-6 text-yellow-300 backdrop-blur-xl">
            Our Projects
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Recent Work &{" "}
            <span className="text-yellow-400">Installations</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
          {projects.map((item, index) => (
            <div key={index} className="shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051923]/80 to-transparent" />
                  {/* Badge */}
                  <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-black">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs border border-white/20 bg-white/10 px-3 py-1 rounded-full text-white"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mt-2 mb-4">
                    {item.desc}
                  </p>

                  {/* Enquire Now — redirects to /contact */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-300 hover:text-yellow-200 transition"
                  >
                    Enquire Now
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}