"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { products } from "@/app/data/products";

const SHOW_COUNT = 6;

// Isolated component so each card has its own timer
function ProductCardImage({ images, title }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[220px] overflow-hidden shrink-0">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} ${i + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-300 ${
                i === idx ? "w-4 h-1.5 bg-yellow-400" : "w-1.5 h-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent" />
    </div>
  );
}

export default function HomeProductsSection() {
  const visible = products.slice(0, SHOW_COUNT);

  return (
    <section className="relative bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">

        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] mb-6 text-yellow-300 backdrop-blur-xl">
            Our Products
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Industrial Fencing <span className="text-yellow-400">Solutions</span>
          </h2>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible scrollbar-hide snap-x snap-mandatory md:snap-none pb-2 md:pb-0 items-stretch">
          {visible.map((item, index) => {
            const images = item.images?.length ? item.images : [item.image];

            return (
              <div key={item.id} className="shrink-0 w-[80vw] sm:w-[45vw] md:w-auto md:min-w-0 snap-start flex">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl overflow-hidden bg-[#0b2e4f]/40 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col flex-1"
                >
                  <ProductCardImage images={images} title={item.title} />

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-yellow-300 transition">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
                      {item.tags?.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs border border-white/20 bg-white/10 px-3 py-1 rounded-full text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">{item.desc}</p>
                    <Link
                      href={`/products/${item.slug}`}
                      className="w-full bg-yellow-400 text-black py-2.5 rounded-lg font-semibold text-sm hover:scale-[1.03] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      View Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-yellow-400/40 text-yellow-300 px-8 py-3.5 rounded-2xl font-semibold text-sm hover:bg-yellow-400/10 hover:border-yellow-300 transition-all duration-300"
          >
            View All Products →
          </Link>
        </div>

      </div>
    </section>
  );
}