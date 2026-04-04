"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden 
bg-gradient-to-br from-primary via-[#0d3b66] to-[#051923]
 sm:pt-12 sm:pb-12 md:pt-12 md:pb-12">

      {/* GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-gray-100 font-medium mb-4">
            COMMITTED TO QUALITY SINCE 1996
          </p>

<h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.2] tracking-tight">
  Delivering Premium <br />
  Fencing Solutions <br />
  
  <span className="text-accent">Backed by 30+ Years</span>  
  <br />
  of Expertise
</h1>

          <p className="mt-5 text-gray-300 max-w-lg text-lg">
            Delivering high-quality fencing solutions including chain link,
            welded mesh, barbed wire, and more — trusted by industries,
            infrastructure, and government projects.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-accent text-black bg-yellow-400  px-7 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg hover:cursor-pointer">
              Download E-Catalogue
            </button>

            <button className="border border-white font-semibold text-black bg-white px-7 py-3 rounded-xl hover:bg-white hover:text-black transition hover:cursor-pointer">
              Explore Products
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE VISUAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="hidden md:flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl w-[340px]">

            <h3 className="text-lg font-semibold mb-3">
              Parag Industries
            </h3>

            {/* MOCK CARD CONTENT */}
            <div className="space-y-3">
              <div className="h-3 bg-white/20 rounded"></div>
              <div className="h-3 bg-white/20 rounded w-5/6"></div>
              <div className="h-3 bg-white/20 rounded w-2/3"></div>
            </div>

            <div className="mt-6 bg-accent text-black text-center py-2 rounded-lg font-semibold">
              30+ Years Experience
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}