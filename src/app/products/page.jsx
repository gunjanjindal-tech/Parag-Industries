import { Shield, Train, Landmark, Building2, Construction, Sun, Factory, Home } from "lucide-react";
import ProductsGrid from "@/components/ProductsGrid";

export const metadata = {
  title: "Industrial Fencing Products | Chain Link, Welded Mesh, Barbed Wire — Parag Industries",
  description:
    "Explore Parag Industries' full range of fencing products — Chain Link Fence, Welded Mesh, Barbed Wire, Concertina Coil, Anti Climb Fence, and Gabion Box. Available in GI, SS, MS, and PVC. Customisable for all project types.",
  alternates: { canonical: "https://paragindustries.in/products" },
  openGraph: {
    title: "Fencing Products — Chain Link, Welded Mesh, Barbed Wire | Parag Industries",
    description:
      "High-quality wire mesh and fencing products for industrial, defence, railway, and infrastructure projects. Trusted by government agencies and contractors across India.",
    url: "https://paragindustries.in/products",
    images: [{ url: "/images/og-products.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fencing Products | Parag Industries Jaipur",
    description:
      "Chain Link, Welded Mesh, Barbed Wire, Concertina Coil, Anti Climb Fence, Gabion Box. Pan-India supply since 1996.",
    images: ["/images/og-products.jpg"],
  },
};

export default function ProductsPage() {
  return (
    <main className="backdrop-blur-md  bg-[radial-gradient(_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] ">
      
      {/* HERO SECTION */}
      <section className="text-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold mb-6 uppercase tracking-[0.32em] text-yellow-300 backdrop-blur-xl">
          Our Products
        </span>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Premium Fencing Products
          <span className="block text-yellow-400 bg-clip-text text-transparent">
            Built for Strength & Security
          </span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
          High-quality wire mesh and fencing solutions for residential, commercial, industrial, defence, and infrastructure projects across India.
        </p>
      </section>

{/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
  Why Choose{" "}
  <span className="text-yellow-400">Parag Industries?</span>
</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              title: "30+ Years of Experience",
              desc: "Trusted manufacturer and supplier of fencing products since 1996.",
            },
            {
              title: "Customisable Products",
              desc: "All products available in GI, SS, MS, PVC as per your requirement.",
            },
            {
              title: "Pan-India Supply",
              desc: "Supplying to government, defence, railways, NHAI and more.",
            },
            {
              title: "Premium Quality",
              desc: "Consistent craftsmanship with a focus on durability and performance.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-yellow-300/30 transition"
            >
              <p className="font-semibold text-lg text-white">{item.title}</p>
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductsGrid />

 {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How It <span className=" text-yellow-400  text-transparent">Works</span> 
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A simple and transparent process to get you the right fencing solution, delivered on time.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 relative">
          {[
            {
              title: "Share Your Requirement",
              desc: "Tell us your product type, dimensions, material, and quantity.",
            },
            {
              title: "Get a Custom Quote",
              desc: "We provide a competitive price tailored to your exact specification.",
            },
            {
              title: "Order Confirmation",
              desc: "Confirm the order and we begin manufacturing or dispatch immediately.",
            },
            {
              title: "Delivery & Support",
              desc: "On-time delivery with after-sales support across India.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-yellow-300/30"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black font-bold shadow-lg">
                {i + 1}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-gray-300 leading-6">{step.desc}</p>
              {i !== 3 && (
                <div className="hidden md:block absolute top-1/2 right-[-20px] transform -translate-y-1/2 text-yellow-400 text-xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
{/* SECTORS WE SERVE */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
    Sectors We <span className=" text-yellow-400  text-transparent">Serve</span>
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
    {[
      { title: "Defence & MES",              icon: Shield },
      { title: "Railways",                   icon: Train },
      { title: "NHAI & Highways",            icon: Landmark },
      { title: "Government Projects",        icon: Building2 },
      { title: "Infrastructure",             icon: Construction },
      { title: "Solar Projects",             icon: Sun },
      { title: "PEB Structures",             icon: Factory },
      { title: "Residential & Commercial",   icon: Home },
    ].map(({ title, icon: Icon }) => (
      <div
        key={title}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center hover:border-yellow-300/30 transition"
      >
        <Icon size={28} className="mx-auto mb-3 text-accent" />
        <p className="text-sm font-semibold text-white">{title}</p>
      </div>
    ))}
  </div>
</section>

      {/* CTA SECTION */}
      <section className=" text-white text-center py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold">
          Need a <span className=" text-yellow-400  text-transparent">fencing solution?</span>
        </h2>
        <p className="mt-3 text-gray-300">
          Get a free quote and let our experts recommend the right product for your project.
        </p>
         <a
          href="https://wa.me/919829080341?text=Hi%2C%20I%20am%20interested%20in%20your%20fencing%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition hover:cursor-pointer hover:scale-105 shadow-lg"
         >
          Get Free Quote
        </a>
      </section>


    </main>
  );
}