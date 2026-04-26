// components/ProductsGrid.jsx
import { products } from "@/app/data/products";
import ProductsGridClient from "./ProductsGridClient";

const INITIAL_COUNT = 9;

// JSON-LD structured data for Google Product rich results
function ProductsStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Fencing Products — Parag Industries",
    "description": "Industrial fencing products including Chain Link Fence, Welded Mesh, Barbed Wire, Concertina Coil, Anti Climb Fence and Gabion Box.",
    "url": "https://paragindustries.in/products",
    "numberOfItems": products.length,
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.title,
        "description": p.desc,
        "image": p.images?.[0] || p.image,
        "url": `https://paragindustries.in/products/${p.slug}`,
        "brand": {
          "@type": "Brand",
          "name": "Parag Industries",
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "seller": {
            "@type": "Organization",
            "name": "Parag Industries",
          },
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function ProductsGrid() {
  const initial   = products.slice(0, INITIAL_COUNT);
  const remaining = products.slice(INITIAL_COUNT);

  return (
    <section
      aria-label="Fencing products catalogue"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12"
    >
      <ProductsStructuredData />

      <h2 className="text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
        Our  <span className=" text-yellow-400  text-transparent">Products</span>
      </h2>

      <ProductsGridClient initial={initial} remaining={remaining} />
    </section>
  );
}