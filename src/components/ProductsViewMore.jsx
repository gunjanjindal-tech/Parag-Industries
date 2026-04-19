"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProductCard } from "./ProductsGrid";

export default function ProductsViewMore({ remaining }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {showAll && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {remaining.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
      {!showAll && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2.5 border border-yellow-400/40 text-yellow-300 px-8 py-3.5 rounded-2xl font-semibold text-sm hover:bg-yellow-400/10 hover:border-yellow-300 transition-all duration-300"
          >
            View {remaining.length} More Products <ChevronDown size={17} />
          </button>
        </div>
      )}
    </>
  );
}