"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero.jpg"
        alt="solar"
        fill
        className="object-cover opacity-30"
      />

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-gray-300 mb-3">
            COMMITTED TO QUALITY SINCE 1996
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Premium Wire Mesh & <br />
            Fencing Solutions for <br />
            Industrial Projects
          </h1>

          <p className="mt-4 text-gray-300 max-w-lg">
            Delivering high-quality fencing solutions including chain link,
            welded mesh, barbed wire, and more for industrial and infrastructure projects.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">

            <button className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Download E-Catalogue
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Explore Products
            </button>

          </div>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-2xl w-[320px]">

            <h3 className="font-semibold mb-3 text-white">
              Parag Industries
            </h3>

            <div className="relative h-48 w-full rounded-xl overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="project"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm text-gray-300 mt-3">
              30+ years of trusted industrial solutions
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}