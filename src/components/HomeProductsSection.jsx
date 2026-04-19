"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/app/data/products";

const SHOW_COUNT = 6;

export default function HomeProductsSection() {
  const visible = products.slice(0, SHOW_COUNT);

  return (
    <section className="relative bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm tracking-widest mb-2 uppercase">
            Our Products
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Industrial Fencing Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
         {visible.map((item, index) => {
  const firstImage = item.images?.[0] || item.image;
  const secondImage = item.images?.[1];

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-2xl overflow-hidden bg-[#0b2e4f]/40 border border-white/10 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden">

        {/* First Image */}
        <img
          src={firstImage}
          alt={item.title}
          className={`absolute w-full h-full object-cover transition-all duration-500 ${
            secondImage ? "group-hover:opacity-0" : ""
          }`}
        />

        {/* Second Image */}
        {secondImage && (
          <img
            src={secondImage}
            alt={item.title}
            className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent" />

        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
          Premium
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-yellow-300 transition">
          {item.title}
        </h3>

        <div className="flex gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
        </div>

        <p className="text-gray-300 text-sm mb-4 min-h-14 line-clamp-3">
          {item.desc}
        </p>

        <Link href={`/products/${item.slug}`}>
          <button className="w-full bg-yellow-400 text-black py-2.5 rounded-lg font-semibold text-sm hover:scale-[1.03] hover:shadow-lg transition-all duration-300 cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
})}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <button className="inline-flex items-center gap-2 border border-yellow-400/40 text-yellow-300 px-8 py-3.5 rounded-2xl font-semibold text-sm hover:bg-yellow-400/10 hover:border-yellow-300 transition-all duration-300">
              View All Products →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}