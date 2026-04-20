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
  Zap,
  Layers,
  Settings,
  Award,
  ChevronRight,
  Phone,
} from "lucide-react";

// Icons for the stats bar — always 4, mapped by position
const statIcons = [ShieldCheck, Award, CircleGauge, Zap];

// Icons for the overview cards — always 4, mapped by position
const overviewIcons = [Layers, ShieldCheck, Settings, Award];

// ── DYNAMIC METADATA ─────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Fencing Product | Parag Industries",
      description:
        "View this industrial fencing product from Parag Industries — manufacturer in Jaipur, India.",
    };
  }

  const title = `${product.title} Manufacturer in India | Parag Industries`;
  const description =
    product.desc ||
    `Buy high-quality ${product.title} from Parag Industries, Jaipur. Available in GI, SS, MS, and PVC. Ideal for industrial, defence, and infrastructure projects. Pan-India supply.`;
  const image = product.images?.[0] || product.image || "/images/og-default.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: `https://paragindustries.in/products/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://paragindustries.in/products/${slug}`,
      images: [{ url: image, width: 1200, height: 630, alt: product.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  // Build statItems from per-product data
  const statItems = (product.stats || []).map((stat, i) => ({
    ...stat,
    icon: statIcons[i] ?? ShieldCheck,
  }));

  // Build overviewCards from per-product data
  const overviewCards = (product.overviewCards || []).map((card, i) => ({
    ...card,
    icon: overviewIcons[i] ?? Layers,
  }));

  // ── Product JSON-LD ─────────────────────────────────────────────────────────
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.desc,
    image: product.images?.[0] || product.image,
    url: `https://paragindustries.in/products/${slug}`,
    brand: {
      "@type": "Brand",
      name: "Parag Industries",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Parag Industries",
      url: "https://paragindustries.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "G-1-30, Road No. 2A, RIICO Industrial Area",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: "IN",
      seller: {
        "@type": "Organization",
        name: "Parag Industries",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] text-white">

      {/* ── Product JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* ── Global ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-9%] top-10 h-72 w-72 rounded-full " />
        <div className="absolute right-[-12%] top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-[125px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute inset-0  bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] opacity-[0.35]" />
      </div>

      {/* ════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════ */}
      <section className="relative z-10 px-4 sm:px-6 pt-10 sm:pt-14 md:pt-16 pb-0">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <Link
              href="/products"
              className="flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-1.5 transition hover:border-yellow-300/40 hover:text-white"
            >
              Products
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="rounded-full border border-yellow-300/30 bg-yellow-300/[0.10] px-4 py-1.5 text-yellow-200">
              {product.title}
            </span>
          </div>

          {/* Hero grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left — copy */}
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
                <Sparkles size={13} />
                Product Detail
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.12] sm:text-5xl md:text-6xl">
                {product.title}
              </h1>

              <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                {product.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5">
                {(product.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.13] bg-white/[0.06] px-4 py-1.5 text-sm text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_16px_40px_rgba(250,204,21,0.26)] transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
                >
                  Get a Quote
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="https://wa.me/919829080341?text=Hi%20I%20am%20interested%20in%20your%20fencing%20products."
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-yellow-300/40 hover:bg-white/10"
                >
                  <Phone size={16} />
                  Talk to Expert
                </Link>
              </div>
            </div>

            {/* Right — image card */}
            <div className="relative">
              {/* MAIN IMAGE */}
              <div className="overflow-hidden rounded-[2.2rem] border border-white/[0.13] bg-white/[0.06] p-3 shadow-[0_40px_100px_rgba(3,7,18,0.55)] backdrop-blur-xl">
                <a
                  href={product.images?.[0] || product.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-[1.7rem]">
                    <Image
                      src={product.images?.[0] || product.image}
                      alt={product.title}
                      fill
                      className="object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                </a>
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {(product.images || [product.image]).map((img, i) => (
                  <a
                    key={i}
                    href={img}
                    target="_blank"
                    className="relative w-20 h-20 rounded-xl overflow-hidden border border-white/20 hover:border-yellow-400 transition"
                  >
                    <Image
                      src={img}
                      alt={`${product.title} image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — STATS BAR
      ════════════════════════════════════════ */}
      <section className="relative z-10 mt-10 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.06] backdrop-blur-xl lg:grid-cols-4">
            {statItems.map(({ label, value, icon: Icon }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-2 px-3 py-6 text-center sm:gap-3 sm:px-6 sm:py-8 ${
                  i % 2 === 0 ? "border-r border-white/[0.08]" : ""
                } lg:border-r lg:last:border-r-0`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-300/25 bg-yellow-300/[0.10] sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon size={18} className="text-yellow-300 sm:size-[22px]" />
                </div>
                <p className="text-lg font-bold text-white sm:text-2xl">{value}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — OVERVIEW CARDS
      ════════════════════════════════════════ */}
      <section className="relative z-10 mt-24 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
                Product Overview
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Engineered for <br className="hidden sm:block" />
                <span className="text-yellow-300">Lasting Performance</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-slate-300 lg:text-right">
              {product.title} is built with precision manufacturing and
              industrial-grade materials to deliver reliable results across
              demanding environments.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {overviewCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.10] bg-white/[0.05] p-6 transition duration-300 hover:border-yellow-300/25 hover:bg-white/[0.08]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.12] bg-slate-950/50">
                  <Icon size={22} className="text-yellow-300" />
                </div>
                <h3 className="mb-2.5 text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-7 text-slate-400">{desc}</p>
                <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-yellow-300/[0.06] blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — FEATURES
      ════════════════════════════════════════ */}
      <section className="relative z-10 mt-24 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
                What's Inside
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Key Features</h2>
              <p className="mt-4 text-base leading-8 text-slate-400">
                Every feature is carefully engineered to meet demanding industrial and commercial requirements.
              </p>
              <div className="mt-8 h-px w-16 bg-yellow-300/40" />
            </div>

            <div className="space-y-3">
              {(product.features || []).map((item, i) => (
                <div
                  key={item}
                  className="group flex items-start gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 py-5 transition duration-200 hover:border-yellow-300/20 hover:bg-white/[0.07]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/[0.10] text-xs font-bold text-yellow-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                  <CheckCircle2
                    size={16}
                    className="ml-auto mt-1 shrink-0 text-yellow-300/50 opacity-0 transition group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — BENEFITS + APPLICATIONS
      ════════════════════════════════════════ */}
      <section className="relative z-10 mt-24 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">

            {/* Benefits */}
            <div className="rounded-[2rem] border border-white/[0.10] bg-white/[0.04] p-8 backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    Why Choose This
                  </p>
                  <h2 className="text-2xl font-bold sm:text-3xl">Project Benefits</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.10]">
                  <Award size={22} className="text-emerald-300" />
                </div>
              </div>
              <div className="space-y-3">
                {(product.benefits || []).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-slate-950/30 px-5 py-4"
                  >
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="rounded-[2rem] border border-white/[0.10] bg-white/[0.04] p-8 backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Where It Fits
                  </p>
                  <h2 className="text-2xl font-bold sm:text-3xl">Best-Fit Applications</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.10]">
                  <Layers size={22} className="text-cyan-300" />
                </div>
              </div>
              <div className="space-y-3">
                {(product.applications || []).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-slate-950/30 px-5 py-4"
                  >
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — CTA BANNER
      ════════════════════════════════════════ */}
      <section className="relative z-10 mt-20 px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-300/20 bg-[linear-gradient(135deg,rgba(250,204,21,0.14),rgba(13,59,102,0.60))] p-10 backdrop-blur-xl sm:p-14">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-yellow-300/[0.10] blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-yellow-300">
                  Need Site-Specific Recommendation?
                </p>
                <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
                  Share your project requirement and get the right fencing solution with clear specs and fast support.
                </h3>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="https://wa.me/919829080341?text=Hi%20I%20am%20interested%20in%20your%20fencing%20products.%20Please%20share%20more%20details."
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_16px_40px_rgba(250,204,21,0.26)] transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 whitespace-nowrap"
                >
                  Talk To Expert
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.08] px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-yellow-300/40 hover:bg-white/10 whitespace-nowrap"
                >
                  Explore More Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
