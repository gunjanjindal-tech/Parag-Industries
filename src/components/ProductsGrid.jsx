import Link from "next/link";
import { products } from "@/app/data/products";
import { ArrowRight } from "lucide-react";
import ProductsViewMore from "./ProductsViewMore";

const INITIAL_COUNT = 9;

export function ProductCard({ item }) {
  const firstImage = item.images?.[0] || item.image;
  const secondImage = item.images?.[1];

  return (
    <div className="group rounded-2xl overflow-hidden bg-[#0b2e4f]/40 border border-white/10 hover:shadow-xl transition-all duration-300">
      
      <div className="relative h-[220px] overflow-hidden">
        
        {/* First Image */}
        <img
  src={firstImage}
  alt={item.title}
  className={`absolute w-full h-full object-cover transition-all duration-500 ${
    secondImage ? "group-hover:opacity-0" : ""
  }`}
/>

        {/* Second Image (on hover) */}
       {secondImage && (
  <img
    src={secondImage}
    alt={item.title}
    className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500"
  />
)}

        <div className="absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent" />

      </div>

      <div className="p-5">
        <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-yellow-300 transition">
          {item.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3 min-h-[28px]">
          {item.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs border border-white/20 bg-white/10 px-3 py-1 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-sm mb-4 min-h-14 line-clamp-3">
          {item.desc}
        </p>

        <Link href={`/products/${item.slug}`}>
          <button className="w-full bg-yellow-400 text-black py-2.5 rounded-lg font-semibold text-sm hover:scale-[1.03] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
            View Details <ArrowRight size={15} />
          </button>
        </Link>
      </div>
    </div>
  );
}
export default function ProductsGrid() {
  const initial = products.slice(0, INITIAL_COUNT);
  const remaining = products.slice(INITIAL_COUNT);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {initial.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
      {remaining.length > 0 && <ProductsViewMore remaining={remaining} />}
    </section>
  );
}