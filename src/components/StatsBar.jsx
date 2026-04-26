"use client";

import { useEffect, useRef, useState } from "react";
import MotionCard from "@/components/MotionCard";

const stats = [
  { target: 500,   suffix: "+", label: "Solar Projects" },
  { target: 10000, suffix: "+", label: "PEB & Industrial" },
  { target: 400,   suffix: "+", label: "Govt & Security" },
  { target: 30,    suffix: "+", label: "Years Experience" },
];

function CounterNumber({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out effect
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  // Format number — 10000 → 10,000
  const formatted = count >= 1000
    ? count.toLocaleString("en-IN")
    : count;

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 tabular-nums">
      {formatted}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="pb-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <MotionCard key={i} delay={i * 0.1}>
            <div className="p-5 sm:p-8 text-center">
              <CounterNumber
                target={stat.target}
                suffix={stat.suffix}
                duration={2000}
              />
              <p className="mt-2 text-slate-300 text-sm sm:text-base font-medium">
                {stat.label}
              </p>
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}