cat > src/components/ProductsGrid.jsx << 'EOF'
import Link from "next/link";
import { products } from "@/app/data/products";
import { ArrowRight } from "lucide-react";
import ProductsViewMore from "./ProductsViewMore";

const INITIAL_COUNT = 9;

export default function ProductsGrid() {
  const initial = products.slice(0, INITIAL_COUNT);
  const remaining = products.slice(INITIAL_COUNT);

  return (
    <section className="relative bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm tracking-widest mb-2 uppercase">Our Products</p>
          <h2 className="text-white text-3xl md:text-5xl font-bold">Industrial Fencing Solutions</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {initial.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        {remaining.length > 0 && <ProductsViewMore remaining={remaining} />}
      </div>
    </section>
  );
}

export function ProductCard({ item }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-[#0b2e4f]/40 border border-white/10 hover:shadow-xl transition-all duration-300">
      <div className="relative h-[220px] overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">Premium</span>
      </div>
      <div className="p-5">
        <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-yellow-300 transition">{item.title}</h3>
        <div className="flex gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (<span key={i} className="text-yellow-400 text-sm">★</span>))}
        </div>
        <p className="text-gray-300 text-sm mb-4 min-h-14 line-clamp-3">{item.desc}</p>
        <Link href={`/products/${item.slug}`}>
          <button className="w-full bg-yellow-400 text-black py-2.5 rounded-lg font-semibold text-sm hover:scale-[1.03] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
            View Details <ArrowRight size={15} />
          </button>
        </Link>
      </div>
    </div>
  );
}
EOF