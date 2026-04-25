"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Solar Projects",
    sublabel: "Delivered across India",
  },
  {
    number: 10000,
    suffix: "+",
    label: "PEB & Industrial",
    sublabel: "Projects supported",
  },
  {
    number: 400,
    suffix: "+",
    label: "Government Sites",
    sublabel: "Executed successfully",
  },
  {
    number: 30,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Trusted since 1996",
  },
];

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatCard({ stat, started, index }) {
  const count = useCountUp(stat.number, 1800 + index * 150, started);
  const formatted = stat.number >= 1000 ? count.toLocaleString("en-IN") : count;

  return (
<div className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 text-center">

      {/* SVG top-left corner accent */}
      <svg className="absolute top-0 left-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity" viewBox="0 0 64 64" fill="none">
        <path d="M0 0 L64 0 L0 64 Z" fill="url(#cornerGrad)" />
        <defs>
          <linearGradient id="cornerGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* SVG bottom-right arc */}
      <svg className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity" viewBox="0 0 80 80" fill="none">
        <circle cx="80" cy="80" r="50" stroke="#facc15" strokeWidth="1" />
        <circle cx="80" cy="80" r="35" stroke="#facc15" strokeWidth="0.5" />
      </svg>

      {/* Number */}
      <div className="flex items-baseline gap-0.5 mt-2 justify-center">
        <span className="text-4xl sm:text-5xl font-black text-white tabular-nums leading-none">
          {formatted}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-yellow-400">{stat.suffix}</span>
      </div>

      {/* Divider */}
     <div className="mt-4 w-10 h-[2px] bg-yellow-400/60 rounded-full mx-auto" />

      {/* Labels */}
      <p className="mt-3 text-base font-semibold text-white">{stat.label}</p>
      <p className="mt-1 text-sm text-gray-400">{stat.sublabel}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
   <section ref={ref} className="bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] px-4 sm:px-6 md:px-8 py-14 md:py-20">

      {/* Heading */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] mb-6 text-yellow-300 backdrop-blur-xl">
          Projects & Execution Excellence
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Numbers That{" "}
          <span className="text-yellow-400">Speak for Themselves</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} started={started} index={i} />
        ))}
      </div>

    </section>
  );
}
