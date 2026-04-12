"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Solar Park Fencing - Rajasthan",
    category: "Solar Project",
    desc: "Complete perimeter fencing solution for a large-scale solar power plant ensuring security and durability in harsh environments.",
    image: "/projects/solar.jpg",
  },
  {
    title: "Industrial Boundary - Gujarat",
    category: "Industrial",
    desc: "Heavy-duty fencing installation for an industrial facility with long-term corrosion resistance and structural strength.",
    image: "/projects/industrial.jpg",
  },
  {
    title: "Highway Safety Fencing - NHAI",
    category: "Infrastructure",
    desc: "Execution of fencing solutions along national highways for safety, control and durability.",
    image: "/projects/highway.jpg",
  },
  {
    title: "Defence Security Fencing",
    category: "Defence",
    desc: "High-security anti-climb fencing system designed for restricted and sensitive zones.",
    image: "/projects/defence.jpg",
  },
  {
    title: "Railway Boundary Protection",
    category: "Railways",
    desc: "Reliable fencing solutions for railway infrastructure ensuring safety and clear demarcation.",
    image: "/projects/railway.jpg",
  },
  {
    title: "Commercial Site Fencing",
    category: "Commercial",
    desc: "Modern fencing system for commercial properties ensuring security with clean aesthetics.",
    image: "/projects/commercial.jpg",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ProjectsPage() {
  return (
    <main className="bg-[radial-gradient(_transparent_25%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] text-white">

      {/* HERO */}
      <section className="text-center px-6 pt-20 pb-16 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Our <span className="text-yellow-400">Projects</span>
        </h1>

        <p className="mt-5 text-slate-400">
          Over the years, Parag Industries has delivered fencing solutions across solar, infrastructure, industrial and government sectors — built on quality, trust and execution excellence.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-yellow-400 text-sm font-semibold mb-2">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <Link
                  href="/contact"
                  className="inline-block mt-5 text-yellow-400 font-semibold hover:underline"
                >
                  Enquire Now →
                </Link>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 pb-20">
        <h2 className="text-3xl md:text-5xl font-bold">
          Let’s Build Your Next Project
        </h2>

        <p className="mt-5 text-slate-400">
          Partner with Parag Industries for reliable, high-quality fencing solutions.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
}