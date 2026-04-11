"use client";

import { motion } from "framer-motion";
import { Search, Layout, Settings, Truck } from "lucide-react";

const steps = [
  {
    title: "Requirement Analysis",
    desc: "Understanding project scope, site conditions, and security requirements.",
    icon: Search,
  },
  {
    title: "Solution Design",
    desc: "Designing a tailored fencing solution based on technical and operational needs.",
    icon: Layout,
  },
  {
    title: "Manufacturing",
    desc: "Producing high-quality materials with strict quality control and durability standards.",
    icon: Settings,
  },
  {
    title: "Delivery & Support",
    desc: "Ensuring timely delivery along with on-ground support and execution guidance.",
    icon: Truck,
  },
];

export default function ProcessSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 max-w-7xl mx-auto ">

      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Our <span className="text-yellow-400">Process</span>
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          A structured, reliable approach that ensures every project meets the
          highest standards of quality, precision, and performance.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400/40 via-white/10 to-transparent"></div>

<div className="space-y-5 sm:space-y-6 md:space-y-10">
            {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 transition hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10">

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-lg">
                        <Icon size={26} />
                      </div>

                      <span className="text-yellow-400 font-semibold text-sm">
                        Step {i + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-slate-400 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 shadow-[0_0_0_6px_rgba(250,204,21,0.15)]">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}