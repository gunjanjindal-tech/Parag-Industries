"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MainProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}

      
      viewport={{ once: true }}
      className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-yellow-300/30 hover:bg-white/10"
    >
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
          {product.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs border border-white/20 bg-white/10 px-3 py-1 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-white leading-snug">
          {product.title}
        </h3>

        {/* PRICE */}
        <p className="text-yellow-300 font-bold mt-2">
          {product.price}
        </p>

        {/* CTA */}
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-yellow-300 hover:text-yellow-200"
        >
          View Details
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}