"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Infrastructure Contractor",
        text: "Parag Industries delivered excellent quality fencing solutions. Highly reliable and professional.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Industrial Project Manager",
      text: "Their products are durable and installation support was outstanding. Highly recommended.",
     rating: 4,
  },
  {
    name: "Sandeep Singh",
    role: "Government Contractor",
      text: "Trusted supplier for our projects. Quality and consistency are top-notch.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-br from-[#154c79] via-[#1b5f8a] to-[#0d3b66] py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-gray-300 text-sm tracking-widest mb-2">
            TESTIMONIALS
          </p>

          <h2 className="text-white text-3xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                  <div className="flex gap-1 mb-4">
  {Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      className={`text-lg ${
        i < item.rating ? "text-yellow-400" : "text-gray-500"
      }`}
    >
      ★
    </span>
  ))}
</div>

              {/* quote */}
              <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                “{item.text}”
              </p>

              {/* user */}
              <div>
                <h4 className="text-white font-semibold">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-xs">
                  {item.role}
                </p>
              </div>

              {/* accent line */}
              <div className="mt-4 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-300"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}