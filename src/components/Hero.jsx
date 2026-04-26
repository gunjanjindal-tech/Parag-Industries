"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Factory,
  Zap,
  Download,
} from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "Industrial Grade" },
  { icon: Award, label: "ISO Standards" },
  { icon: Factory, label: "Own Manufacturing" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] pt-12 pb-16 sm:pt-14 sm:pb-20">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-[-4%] h-96 w-96 rounded-full " />
        <div className="absolute right-[-10%] bottom-[-5%] h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-[0.35]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-yellow-300/80 mb-4">
              Committed to Quality Since 1996
            </p>

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight">
              Delivering Premium{" "}
              <span className="text-yellow-400">Fencing Solutions</span>{" "}
              Backed by 30+ Years of Expertise
            </h1>

            <p className="mt-5 text-slate-300 max-w-lg text-base leading-8 sm:text-lg">
              Delivering high-quality fencing solutions including Chain Link,
              Welded Mesh, Barbed Wire, and more — trusted by industries,
              infrastructure, and government projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                 href="/ParagIndustries_Catalogue.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_16px_36px_rgba(250,204,21,0.28)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-yellow-300"
              >
                <Download size={17} />
                Download E-Catalogue
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-yellow-300/40 hover:bg-white/10"
              >
                Explore Products
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Trust badge pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-xl"
                >
                  <Icon size={13} className="text-yellow-300" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Image + floating overlays ── */}
          <motion.div
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/[0.14] shadow-[0_40px_100px_rgba(3,7,18,0.6)]">
             <div className="relative overflow-hidden rounded-[2.2rem] border border-white/[0.14] shadow-[0_40px_100px_rgba(3,7,18,0.6)]">
  
  <video
    src="/Parag-Hero-Video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="h-[540px] w-full object-cover"
  />

</div>
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-transparent" />

              {/* ── Top row badges ── */}
              <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
               

                {/* Top-right: Trusted since */}
                <div className="flex items-center gap-2 rounded-full border border-yellow-300/30 bg-slate-950/40 px-4 py-2.5 backdrop-blur-xl">
                  <ShieldCheck size={14} className="text-yellow-300 shrink-0" />
                  <span className="text-xs font-semibold text-yellow-200 whitespace-nowrap">Trusted Since 1996</span>
                </div>
              </div>

             

              {/* ── Bottom stats row ── */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "30+", label: "Years" },
                    { value: "1000+", label: "Projects" },
                    { value: "Pan India", label: "Reach" },
                  ].map(({ value, label }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/[0.12] bg-slate-950/40 px-3 py-3 text-center backdrop-blur-xl"
                    >
                      <p className="text-xl font-extrabold text-yellow-300 sm:text-2xl">{value}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-widest text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
