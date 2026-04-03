import { products } from "@/app/data/products";
import { notFound } from "next/navigation";

export default function ProductDetail({ params }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <section className="min-h-screen bg-[#051923] text-white px-4 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Image */}
        <div className="w-full h-[300px] overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="mt-4 text-slate-300">
            {product.desc}
          </p>
        </div>

      </div>
    </section>
  );
}