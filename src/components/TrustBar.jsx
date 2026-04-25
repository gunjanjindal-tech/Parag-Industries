"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Building2, MapPin, BadgeCheck, Settings, Factory } from "lucide-react";

const stats = [
  { number: "30+", label: "Years Experience", icon: ShieldCheck },
  { number: "1000+", label: "Projects Completed", icon: Factory },
  { number: "Govt & Infra", label: "Trusted Clients", icon: Building2 },
  { number: "Pan India", label: "Service Reach", icon: MapPin },
  { number: "ISO Certified", label: "Quality Standards", icon: BadgeCheck },
  { number: "Custom Built", label: "Project Solutions", icon: Settings },
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d3b66] via-[#154c79] to-[#0a2540] px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">

      {/* glow */}
      <div className="absolute w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full top-[-80px] left-[-80px]"></div>

      <div className="relative z-10">

        {/* SLIDER */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* DUPLICATE ARRAY FOR LOOP */}
         {[...stats, ...stats].map((item, index) => (
  <div
    key={index}
    className="group relative min-w-[180px] md:min-w-[260px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-4 md:px-16 py-3 md:py-4 text-center text-white transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:bg-white/10 hover:border-blue-400/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
  >
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10"></div>

    {/* ICON */}
    <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-5 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md shadow-yellow-500/20">
      <item.icon className="text-black" size={20} />
    </div>

    {/* NUMBER */}
    <h3 className="text-lg md:text-3xl font-semibold text-accent tracking-tight">
      {item.number}
    </h3>

    {/* LABEL */}
    <p className="text-gray-300 text-xs md:text-sm mt-1 md:mt-2 tracking-wide leading-snug">
      {item.label}
    </p>
  </div>
))}
        </motion.div>

      </div>
    </section>
  );
}