cat > src/components/ProductsViewMore.jsx << 'EOF'
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ProductCard } from "./ProductsGrid";

export default function ProductsViewMore({ remaining }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {showAll && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {remaining.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
              <ProductCard item={item} />
            </motion.div>
          ))}
        </div>
      )}
      {!showAll && (
        <div className="flex justify-center mt-12">
          <button onClick={() => setShowAll(true)} className="inline-flex items-center gap-2.5 border border-yellow-400/40 text-yellow-300 px-8 py-3.5 rounded-2xl font-semibold text-sm hover:bg-yellow-400/10 hover:border-yellow-300 transition-all duration-300">
            View {remaining.length} More Products <ChevronDown size={17} />
          </button>
        </div>
      )}
    </>
  );
}
EOF