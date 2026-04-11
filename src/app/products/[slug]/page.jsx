import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import {
  ArrowRight,
  CheckCircle2,
  CircleGauge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const cardBase =
  "rounded-[1.6rem] border border-white/[0.12] bg-white/[0.07] p-6 backdrop-blur-xl";

const sectionMap = [
  {
    title: "Key Features",
    key: "features",
    iconClass: "text-yellow-300",
  },
  {
    title: "Project Benefits",
    key: "benefits",
    iconClass: "text-emerald-300",
  },
  {
    title: "Best-Fit Applications",
    key: "applications",
    iconClass: "text-cyan-300",
  },
];

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.18),_transparent_26%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] px-4  text-white sm:px-6 pt-12 sm:pt-14 md:pt-16 pb-14 sm:pb-16 md:pb-18">
      <div className="absolute inset-0">
        <div className="absolute left-[-9%] top-10 h-72 w-72 rounded-full bg-yellow-400/20 blur-[110px]" />
        <div className="absolute right-[-12%] top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-[125px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-[0.12]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
          <Link
            href="/products"
            className="rounded-full border border-white/[0.15] bg-white/5 px-4 py-1.5 transition hover:border-yellow-300/40 hover:text-white"
          >
            Products
          </Link>
          <span className="text-white/40">—</span>
          <span className="rounded-full border border-yellow-300/35 bg-yellow-300/[0.12] px-4 py-1.5 text-yellow-200">
            {product.title}
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
              <Sparkles size={14} />
              Product Detail
            </div>

            <div>
              <h1 className=" leading-tight text-3xl sm:text-4xl md:text-5xl font-bold">
                {product.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
                {product.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {(product.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.15] bg-white/[0.06] px-4 py-2 text-sm text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_16px_36px_rgba(250,204,21,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
              >
                Get Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:border-yellow-300/40 hover:bg-white/10"
              >
                Explore More Products
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/[0.15] bg-white/[0.08] p-5 shadow-[0_28px_80px_rgba(3,7,18,0.5)] backdrop-blur-2xl">
            <div className="relative h-[270px] overflow-hidden rounded-[1.45rem] border border-white/[0.12] sm:h-[340px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                  Security Grade
                </p>
                <div className="mt-3 flex items-center gap-2 text-yellow-300">
                  <ShieldCheck size={18} />
                  <p className="text-sm font-semibold">Industrial Ready</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                  Performance
                </p>
                <div className="mt-3 flex items-center gap-2 text-yellow-300">
                  <CircleGauge size={18} />
                  <p className="text-sm font-semibold">Long Service Life</p>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* 🔥 PREMIUM NEW SECTION */}
        <div className="rounded-[2rem] border border-white/[0.12] bg-white/[0.05] p-8 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2 gap-10">

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Detailed Product Overview
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-200">
                {product.title} is engineered for durability, strength, and long-term performance across industrial and commercial environments.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-200">
                Designed with high-quality materials and advanced manufacturing techniques, it ensures reliable performance, corrosion resistance, and low maintenance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {["Durability","Strength","Low Maintenance","Versatility"].map((title) => (
                <div key={title} className="bg-slate-950/40 p-5 rounded-2xl border border-white/10">
                  <h4 className="text-yellow-300 font-semibold mb-2">{title}</h4>
                  <p className="text-sm text-slate-300">
                    High-performance design ensures reliability and long service life.
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {sectionMap.map((section) => (
            <div key={section.key} className={cardBase}>
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <div className="mt-5 space-y-4">
                {(product[section.key] || []).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/[0.28] px-4 py-3"
                  >
                    <CheckCircle2
                      size={18}
className="mt-1 shrink-0 text-yellow-300"                    />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


        <div className="rounded-[2rem] border border-yellow-300/20 bg-[linear-gradient(140deg,rgba(250,204,21,0.18),rgba(255,255,255,0.04))] p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-200">
                Need Site-Specific Recommendation?
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Share your project requirement and get the right fencing
                solution with clear specs and fast support.
              </h3>
            </div>
            <Link
  href="https://wa.me/919829080341?text=Hi%20I%20am%20interested%20in%20your%20fencing%20products.%20Please%20share%20more%20details."
  target="_blank"
  className="inline-flex w-fit items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
>
  Talk To Expert
  <ArrowRight size={18} />
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}