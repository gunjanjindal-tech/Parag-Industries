
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";

const stats = [
  { value: "30+", label: "Years of industrial expertise" },
  { value: "1000+", label: "Projects delivered across sectors" },
  { value: "Pan India", label: "Supply and execution capability" },
  { value: "24/7", label: "Commitment to responsive support" },
];

const highlights = [
  "Engineered fencing systems for infrastructure, solar, industrial and government projects.",
  "Reliable production planning with a sharp focus on durability, finishing and delivery timelines.",
  "A hands-on team that works closely with clients from requirement to dispatch.",
];

const pillars = [
  {
    title: "Precision Manufacturing",
    desc: "Every product is built with consistency, strength and finish in mind so it performs confidently on demanding sites.",
    icon: Factory,
  },
  {
    title: "Project-Focused Customization",
    desc: "From site conditions to security needs, we shape solutions around actual project requirements instead of one-size-fits-all supply.",
    icon: Wrench,
  },
  {
    title: "Trusted Execution",
    desc: "Years of repeat business from infrastructure and institutional clients reflect our quality standards and dependable delivery.",
    icon: ShieldCheck,
  },
];

const timeline = [
  {
    year: "1996",
    title: "Foundation built on trust",
    desc: "Parag Industries began with a simple goal: manufacture dependable fencing solutions that clients could rely on for years.",
  },
  {
    year: "2008",
    title: "Expanded manufacturing strength",
    desc: "The company scaled its production capabilities and sharpened its focus on quality, finishing and project responsiveness.",
  },
  {
    year: "2018",
    title: "Serving larger sectors nationwide",
    desc: "With stronger systems and experience, the brand grew into a trusted partner for industrial, infrastructure and government requirements.",
  },
  {
    year: "Today",
    title: "Building the next generation of protection",
    desc: "We continue to blend experience with modern methods to deliver stronger, smarter and more reliable boundary solutions.",
  },
];

const process = [
  {
    step: "01",
    title: "Understand the site",
    desc: "We study project needs, environment, application and durability expectations before proposing the right system.",
  },
  {
    step: "02",
    title: "Engineer the right solution",
    desc: "Our team aligns material choice, construction quality and design practicality to create a strong, execution-ready plan.",
  },
  {
    step: "03",
    title: "Deliver with accountability",
    desc: "From production to dispatch, we stay focused on quality control, communication and timelines that projects can trust.",
  },
];

const trustPoints = [
  "High-grade raw material selection",
  "Quality checks at critical stages",
  "Custom dimensions and project adaptability",
  "Strong after-sales confidence and support",
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

export const metadata = {
  title: "About Us | 30+ Years of Industrial Fencing Excellence — Parag Industries",
  description:
    "Learn about Parag Industries — a Jaipur-based manufacturer with 30+ years of experience producing premium industrial fencing solutions for defence, railways, NHAI, and infrastructure projects across India since 1996.",
  alternates: { canonical: "https://paragindustries.in/about" },
  openGraph: {
    title: "About Parag Industries | Industrial Fencing Manufacturer Since 1996",
    description:
      "Established in 1996, Parag Industries has been a trusted name in industrial fencing. Located in RIICO Industrial Area, Jaipur, supplying Pan-India.",
    url: "https://paragindustries.in/about",
    images: [{ url: "/images/og-about.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Parag Industries | Industrial Fencing Manufacturer Since 1996",
    description:
      "30+ years of industrial fencing excellence. Located in RIICO Industrial Area, Jaipur.",
    images: ["/images/og-about.jpg"],
  },
};


export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] py-14 sm:py-16 md:py-18">
      {/* Background */}
      <div className="absolute inset-0">
       
        <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 sm:gap-14 md:gap-16 px-4 sm:px-6">

        {/* ══════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════ */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-yellow-300 backdrop-blur-xl">
              <Sparkles size={14} />
              About Parag Industries
            </div>

            <h1 className="mt-6 text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight">
              We build secure boundaries with
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                precision, reliability and long-term trust.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Parag Industries delivers industrial fencing systems designed for
              strength, consistency and peace of mind. Over the years, we have
              supported projects that demand dependable protection and equally
              dependable execution.
            </p>

            {/* Highlights — horizontal pill row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm leading-6 text-slate-200 backdrop-blur-xl sm:flex-1"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-yellow-300" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.22)] transition duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-yellow-300"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:-translate-y-1 hover:border-yellow-300/50 hover:bg-white/10"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>

          {/* Right — stats card */}
          <motion.div
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] shadow-[0_28px_80px_rgba(3,7,18,0.45)] backdrop-blur-2xl">
              {/* Card header */}
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-6 py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Manufacturing Strength</p>
                  <h2 className="mt-1 text-lg font-semibold text-white">Built for demanding project environments</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                  <Building2 size={24} />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
                {stats.map((item) => (
                  <div key={item.label} className="bg-slate-950/40 px-5 py-5">
                    <p className="text-3xl font-bold text-yellow-300">{item.value}</p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Quality promise */}
              <div className="px-6 py-5">
                <div className="flex items-start gap-3 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <BadgeCheck className="mt-0.5 shrink-0 text-yellow-300" size={20} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">Quality Promise</p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">
                      We combine durable materials, disciplined production and practical project understanding to create fencing solutions that hold up where it matters most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            SECTION 2 — PILLARS (numbered horizontal)
        ══════════════════════════════════ */}
        <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-yellow-300">What Drives Us</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Our Three Core Pillars</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400 sm:text-right">
              Principles that guide every product we build and every project we support.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-white/[0.07] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/10"
                >
                  {/* Large background number */}
                  <p className="absolute right-5 top-3 text-7xl font-black text-white/[0.04] select-none">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-slate-950 shadow-[0_14px_30px_rgba(250,204,21,0.22)]">
                      <Icon size={26} />
                    </div>
                    <div className="mt-2 h-px w-10 bg-yellow-300/30" />
                    <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ══════════════════════════════════
            SECTION 3 — STORY + TIMELINE
        ══════════════════════════════════ */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65 }}
            className="flex h-full flex-col rounded-[2rem] border border-white/[0.12] bg-white/[0.07] p-7 backdrop-blur-xl sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-300">Our Story</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              From dependable beginnings to a name clients can confidently build with.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Our journey has always been grounded in doing the basics exceptionally well: durable products, honest commitments, and steady execution. That mindset continues to guide how we work today.
            </p>

            <div className="mt-8 space-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-slate-950/25 px-4 py-4"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-yellow-300" />
                  <p className="text-sm leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="relative h-full"
          >
            <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-yellow-400/60 via-white/20 to-transparent" />
            <div className="flex h-full flex-col justify-between space-y-5">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative rounded-[1.75rem] border border-white/[0.12] bg-white/[0.07] p-6 pl-16 backdrop-blur-xl transition duration-300 hover:border-yellow-300/30 hover:bg-white/10"
                >
                  <div className="absolute left-[14px] top-7 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 shadow-[0_0_0_6px_rgba(250,204,21,0.14)]">
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">{item.year}</p>
                    <span className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-xs text-slate-300">
                      Milestone {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            SECTION 4 — PROCESS (horizontal steps)
        ══════════════════════════════════ */}
        <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-yellow-300">How We Work</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              A practical process shaped around quality and accountability.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.06] sm:grid-cols-3">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="relative bg-slate-950/40 p-7 transition duration-300 hover:bg-slate-950/60"
              >
                {/* Connector dot */}
                {i < process.length - 1 && (
                  <div className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full border-2 border-yellow-400/40 bg-yellow-400/20 sm:block" />
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-base font-bold text-slate-950">
                  {item.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══════════════════════════════════
            SECTION 5 — VISION
        ══════════════════════════════════ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.72, delay: 0.08 }}
          className="overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1fr_1px_1fr]">
            {/* Left — Vision text */}
            <div className="p-8 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-yellow-300">
                <Target size={30} />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-yellow-200">Our Vision</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                To be the preferred fencing partner for projects where strength, reliability and trust are non-negotiable.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-100">
                We are focused on creating long-term value through disciplined manufacturing, strong relationships and solutions that perform confidently in real-world conditions.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden bg-yellow-400/15 lg:block" />

            {/* Right — Why teams choose us */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-start gap-3 mb-6">
                <Award className="mt-1 shrink-0 text-yellow-300" size={22} />
                <h3 className="text-2xl font-semibold text-white">Why teams choose to stay with us</h3>
              </div>
              <p className="text-base leading-8 text-slate-100">
                Because we care about the full outcome, not just supply. We aim to make every project feel supported, timely and built to last.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 rounded-2xl border border-white/10 bg-slate-950/30 p-4"
                  >
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-yellow-300" />
                    <p className="text-xs leading-6 text-slate-200">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════
            SECTION 6 — CTA
        ══════════════════════════════════ */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-white/[0.12] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] px-6 py-6 sm:px-10 sm:py-8 md:py-10 backdrop-blur-2xl"
        >
          <div className="absolute -right-12 top-0 h-44 w-44 rounded-full bg-yellow-400/20 blur-[90px]" />
          <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-[80px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-300">Let&apos;s Build Together</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Looking for a fencing partner that understands both quality and project pressure?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-200">
                Connect with Parag Industries to discuss your next requirement. We will help you move from idea to execution with clarity, confidence and dependable support.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-yellow-300 transition hover:cursor-pointer hover:scale-105 shadow-lg"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
