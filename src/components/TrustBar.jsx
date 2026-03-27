"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "30+",
    label: "Years Experience",
  },
  {
    number: "1000+",
    label: "Projects Completed",
  },
  {
    number: "Govt & Infra",
    label: "Trusted Clients",
  },
  {
    number: "Pan India",
    label: "Service Reach",
  },
];

export default function TrustBar() {
  return (
    <section className="relative bg-gradient-to-br from-[#0d3b66] via-[#154c79] to-[#0a2540] py-14 sm:py-16">

      {/* subtle glow */}
      <div className="absolute w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full top-[-80px] left-[-80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-white">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-accent">
                {item.number}
              </h3>

              <p className="text-gray-300 text-sm mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}