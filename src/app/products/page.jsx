"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "../data/products";
import {
ArrowRight,
  CheckCircle2,
  Factory,
  FileText,
  Phone,
  ShieldCheck,
  SunMedium,
} from "lucide-react";
import CTA from "@/components/CTA";



const stats = [
  { value: "9+", label: "Core fencing and wire products" },
  { value: "Solar Ready", label: "Suitable for solar parks and utility sites" },
  { value: "Custom Specs", label: "Size, finish and project-fit options" },
];

const solarUseCases = [
  {
    title: "Solar Plant Boundaries",
    desc: "Secure long perimeters around solar parks, substations and equipment zones with systems chosen for scale and durability.",
    icon: SunMedium,
  },
  {
    title: "Industrial & Infrastructure Sites",
    desc: "Protect warehouses, factories, plants and project compounds with fencing matched to site risk and terrain.",
    icon: Factory,
  },
  {
    title: "Custom BOQ Support",
    desc: "Shortlist the right product mix for your tender, site drawing or execution requirement before procurement starts.",
    icon: FileText,
  },
];

const assurancePoints = [
  "Project-focused product recommendations",
  "Options for large boundary coverage",
  "Durable finishes for outdoor exposure",
  "Quote support for execution planning",
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function ProductsPage() {
  return (
    <section       className="relative overflow-hidden       bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] pt-20 ">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-8 h-72 w-72 rounded-full bg-yellow-400/20 blur-[110px]" />
        <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
<div className="absolute bottom-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.14]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-yellow-300 backdrop-blur-xl">
              <ShieldCheck size={14} />
              Product Portfolio
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-5xl">
  Engineered fencing solutions for
  <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
    solar parks, industrial security & large-scale infrastructure.
  </span>
</h1>

<p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
  At Parag Industries, we deliver high-strength fencing systems designed for durability,
  scalability, and real-world site conditions. From solar power plants to industrial
  zones, our solutions ensure long-term security with minimal maintenance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center">
  {[
    "10+ Years Industry Experience",
    "Trusted by Industrial Clients",
    "Pan India Supply Capability",
    "Custom Project Solutions",
  ].map((item) => (
    <div key={item} className="text-sm text-slate-300">
      <CheckCircle2 className="mx-auto mb-2 text-yellow-300" />
      {item}
    </div>
  ))}
</div>
            
           <div className="mt-8 flex flex-col gap-3 px-4 sm:flex-row sm:flex-wrap sm:justify-start">
  {[
"Solar Project Ready",
    "Custom Requirement Support",
    "Industrial Grade Materials",
  ].map((item) => (
    <span
      key={item}
      className="w-full sm:w-auto text-center rounded-full border border-white/12 bg-white/6 px-4 py-3 text-sm text-slate-100 backdrop-blur-xl"
    >
      {item}
    </span>
  ))}
</div>

     <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 px-4">
  
  <Link
    href="/contact"
    className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
  >
    Request a Quote
    <ArrowRight size={18} />
  </Link>

  <a
    href="tel:+919829080341"
    className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:border-yellow-300/50 hover:bg-white/10"
  >
    <Phone size={18} />
    Talk to Sales
  </a>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-[0_28px_80px_rgba(3,7,18,0.45)] backdrop-blur-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                      Best Fit For
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Large boundaries that need strength, speed and reliable coverage
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                    <SunMedium size={28} />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-slate-950/30 p-5"
                    >
                      <p className="text-2xl font-bold text-yellow-300">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-200">
                    Why this page matters
                  </p>
                  <div className="mt-4 space-y-3">
                    {assurancePoints.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-yellow-300"
                        />
                        <p className="text-sm leading-7 text-slate-100">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

                    <motion.div
{...fadeUp}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-4 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-300">
            Product Range
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Choose the right system for protection, structure and site conditions.
          </h2>
          <p className="mx-auto max-w-5xl text-base leading-6 text-slate-300">
            Our product range is engineered to meet diverse site conditions — from solar
  park perimeters to industrial high-security zones. Each solution is optimized
  for durability, installation efficiency, and long-term performance.
          </p>
        </motion.div>

<div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
  {products.map((product, index) => (
    <motion.article
      key={product.slug}
      {...fadeUp}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="group flex flex-col h-full rounded-3xl border border-white/12 bg-white/7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-300/30 hover:bg-white/10"
    >
      
     {/* IMAGE */}
<div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-3xl">
  
  {/* BADGE (TOP LEFT 🔥) */}
<span className="absolute top-3 left-3 z-10 text-xs font-semibold text-yellow-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-400/30">
  Best for Industrial Use
</span>

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70" />

  <img
    src={product.image}
    alt={product.title}
    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
  />
</div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-6">
        
        {/* TAGS (FIXED HEIGHT BLOCK ✅) */}
        <div className="flex flex-wrap gap-2 h-[60px] content-start overflow-hidden">
          {product.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1 text-xs text-slate-200 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        

    {/* TITLE + CTA ROW */}
<div className="mt-4 flex items-start justify-between gap-3">
  <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug line-clamp-2">
    {product.title}
          </h3>
          
          

  <Link
    href={`/products/${product.slug}`}
    className="flex items-center mt-2 gap-1 text-xs sm:text-sm font-semibold text-yellow-300 whitespace-nowrap hover:text-yellow-200 transition"
  >
    View Details
    <ArrowRight size={14} />
  </Link>
</div>
      </div>
    </motion.article>
  ))}
        </div>
        
     
      </div>
      <div className="mt-20">
  <CTA />
</div>
    </section>
    
  );
}