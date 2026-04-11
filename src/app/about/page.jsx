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

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] py-14 sm:py-16 md:py-18">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-8 h-72 w-72 rounded-full bg-yellow-400/20 blur-[110px]" />
        <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.14]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 sm:gap-14 md:gap-16  px-4 sm:px-6">
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

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-slate-200 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>

           <div className="mt-8 flex flex-wrap gap-4">
  <Link
    href="/contact"
    className="
      inline-flex items-center gap-2 
      rounded-2xl 
      bg-yellow-400 
      px-6 py-3 
      font-semibold text-slate-950 
      shadow-[0_18px_40px_rgba(250,204,21,0.22)]
      transition duration-300
      hover:scale-105 hover:-translate-y-1 hover:bg-yellow-300
    "
  >
    Start Your Project
    <ArrowRight size={18} />
  </Link>

  <Link
    href="/products"
    className="
      inline-flex items-center gap-2 
      rounded-2xl 
      border border-white/20 
      bg-white/5 
      px-6 py-3 
      font-semibold text-white 
      shadow-lg
      transition duration-300
      hover:scale-105 hover:-translate-y-1 
      hover:border-yellow-300/50 
      hover:bg-white/10
    "
  >
    Explore Products
  </Link>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 p-6 shadow-[0_28px_80px_rgba(3,7,18,0.45)] backdrop-blur-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                      Manufacturing Strength
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Built for demanding project environments
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                    <Building2 size={28} />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-slate-950/30 p-5"
                    >
                      <p className="text-3xl font-bold text-yellow-300">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5 sm:p-6 md:p-7">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 text-yellow-300" size={20} />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">
                        Quality Promise
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-100">
                        We combine durable materials, disciplined production and
                        practical project understanding to create fencing
                        solutions that hold up where it matters most.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.65 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[1.75rem] border border-white/12 bg-white/7 p-7 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-slate-950 shadow-[0_14px_30px_rgba(250,204,21,0.22)]">
                  <Icon size={26} />
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>

        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65 }}
            className="flex h-full flex-col rounded-[2rem] border border-white/12 bg-white/7 p-7 backdrop-blur-xlp-5 sm:p-6 md:p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-300">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              From dependable beginnings to a name clients can confidently build
              with.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Our journey has always been grounded in doing the basics
              exceptionally well: durable products, honest commitments, and
              steady execution. That mindset continues to guide how we work
              today.
            </p>

            <div className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/25 px-4 py-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-yellow-300"
                  />
                  <p className="text-sm leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

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
                  className="relative rounded-[1.75rem] border border-white/12 bg-white/7 p-6 pl-16 backdrop-blur-xl transition duration-300 hover:border-yellow-300/30 hover:bg-white/10"
                >
                  <div className="absolute left-[14px] top-7 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 shadow-[0_0_0_6px_rgba(250,204,21,0.14)]">
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">
                      {item.year}
                    </p>
                    <span className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-xs text-slate-300">
                      Milestone {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

<div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1fr_1fr]">
            <motion.div
            {...fadeUp}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-8 backdrop-blur-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-300">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              A practical process shaped around quality and accountability.
            </h2>

            <div className="mt-8 space-y-5">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 font-bold text-slate-950">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="flex flex-col rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-8 backdrop-blur-xl"
          >
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-yellow-300">
                <Target size={30} />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.32em] text-yellow-200">
                Our Vision
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                To be the preferred fencing partner for projects where strength,
                reliability and trust are non-negotiable.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-100">
                We are focused on creating long-term value through disciplined
                manufacturing, strong relationships and solutions that perform
                confidently in real-world conditions.
              </p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-6">
              <div className="flex items-start gap-3">
                <Award className="mt-1 text-yellow-300" size={22} />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Why teams choose to stay with us
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Because we care about the full outcome, not just supply. We
                    aim to make every project feel supported, timely and built
                    to last.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] px-6 py-6 sm:py-8 md:py-10 backdrop-blur-2xl sm:px-10"
        >
          <div className="absolute -right-12 top-0 h-44 w-44 rounded-full bg-yellow-400/20 blur-[90px]" />
          <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-[80px]" />

          <div className="relative flex flex-col  lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-300">
                Let&apos;s Build Together
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Looking for a fencing partner that understands both quality and
                project pressure?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-200">
                Connect with Parag Industries to discuss your next requirement.
                We will help you move from idea to execution with clarity,
                confidence and dependable support.
              </p>
            </div>

         <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
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