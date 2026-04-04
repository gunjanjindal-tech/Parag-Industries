"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Settings,
  Building2,
  Globe,
  CheckCircle,
} from "lucide-react";

const points = [
  {
    title: "30+ Years Experience",
    desc: "Decades of expertise delivering reliable fencing solutions.",
    icon: Award,
  },
  {
    title: "Premium Quality",
    desc: "High-grade materials ensuring durability and strength.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Solutions",
    desc: "Tailored fencing systems based on project requirements.",
    icon: Settings,
  },
  {
    title: "Govt & Infra Trusted",
    desc: "Serving large-scale infrastructure and government projects.",
    icon: Building2,
  },
  {
    title: "Pan India Reach",
    desc: "Supplying across India with consistent quality.",
    icon: Globe,
  },
  {
    title: "Reliable & Durable",
    desc: "Products designed for long-term performance.",
    icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-gray-200 text-sm tracking-widest mb-2">
            WHY CHOOSE US
          </p>

          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Trusted Industrial Fencing Experts
          </h2>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

         {points.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
    >
      
      {/* ICON */}
      <div className="flex justify-center mb-5">
      <div className="w-16 h-16 rounded-full 
bg-gradient-to-br from-yellow-400 to-yellow-600 
flex items-center justify-center 
shadow-lg shadow-yellow-500/20">

  <Icon size={30} className="text-black" />
</div>
      </div>

      {/* TITLE */}
      <h3 className="text-white text-lg font-semibold mb-2">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="text-gray-200 text-sm">
        {item.desc}
      </p>

    </motion.div>
  );
})}

        </div>

      </div>
    </section>
  );
}