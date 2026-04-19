"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#0d3b66] via-[#154c79] to-[#051923] py-24 overflow-hidden">

      {/* glow */}
      <div className="absolute w-[400px] h-[400px] bg-accent/20 blur-[120px] rounded-full top-[-100px] right-[-100px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-5xl font-bold leading-tight"
        >
          Get Complete Fencing Solutions <br />
          for Your Next Project
        </motion.h2>

        {/* subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mt-5 text-lg"
        >
          Download our catalogue or connect with our experts to get the best
          solution tailored for your industrial needs.
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >

          {/* Download */}
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg hover:cursor-pointer hover:bg-yellow-500">
            Download E-Catalogue
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919829080341"
            target="_blank"
            className="border border-white bg-white font-semibold text-black px-8 py-3 rounded-xl  hover:scale-105 transition shadow-lg"
          >
            Chat on WhatsApp
          </a>

        </motion.div>

      </div>
    </section>
  );
}