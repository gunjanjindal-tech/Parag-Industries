"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProductCard } from "./ProductsGrid";

export default function ProductsViewMore({ remaining }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 w-full">

      {/* EXPANDED PRODUCTS — same grid spec as ProductsGrid's initial grid */}
      {showAll && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {remaining.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* BUTTON */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="inline-flex items-center gap-2.5 border border-yellow-400/40 text-yellow-300 px-8 py-3.5 rounded-2xl font-semibold text-sm hover:bg-yellow-400/10 hover:border-yellow-300 transition-all duration-300"
      >
        {showAll ? "Show Less Products" : `View ${remaining.length} More Products`}
        {showAll ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
      </button>

    </div>
  );
}
