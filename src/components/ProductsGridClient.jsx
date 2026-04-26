// components/ProductsGridClient.jsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductsGridClient({ initial, remaining }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 w-full">

      {/*
        ONE grid for ALL products.
        Remaining cards are in the DOM from the start (good for SEO / crawlers)
        but visually hidden with `hidden` (display:none) until toggled.
        No second grid — so iPad columns always align perfectly.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {initial.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
        {remaining.map((item) => (
          <div key={item.id} className={showAll ? "contents" : "hidden"}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>

      {remaining.length > 0 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          aria-expanded={showAll}
          aria-label={showAll ? "Show fewer products" : `Show ${remaining.length} more products`}
          className="inline-flex items-center gap-2.5 border border-yellow-400/40 text-yellow-300 px-8 py-3.5 rounded-2xl font-semibold text-sm hover:bg-yellow-400/10 hover:border-yellow-300 transition-all duration-300"
        >
          {showAll
            ? "Show Less Products"
            : `View ${remaining.length} More Products`}
          {showAll ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
        </button>
      )}

    </div>
  );
}