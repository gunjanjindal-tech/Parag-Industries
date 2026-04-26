// Add "use client" since we now use useState/useEffect
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

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

export default function ProductCard({ item }) {
  const images = item.images?.length ? item.images : [item.image];

  return (
    <article className="group rounded-2xl overflow-hidden bg-[#0b2e4f]/40 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col">
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
    </article>
  );
}