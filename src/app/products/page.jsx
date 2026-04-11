import MainProductCard from "@/components/MainProductCard";
import { products } from "../data/products";

export const metadata = {
  title: "Solar Products | Your Brand",
  description:
    "Explore high-quality solar panels, inverters, and battery solutions for homes and businesses.",
};

export default function ProductsPage() {
  return (
    <main className="backdrop-blur-md  bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] ">
      
      {/* HERO SECTION */}
     <section className="text-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
    Solar Products & Solutions
    <span className="block bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
      Built for Performance & Savings
    </span>
  </h1>

  <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
    Clean energy solutions designed for homes, businesses, and large-scale solar projects.
  </p>
      </section>

      {/* WHY GO SOLAR */}
      <section className="max-w-7xl mx-auto px-4 py-8 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
    Why Go Solar with Us?
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
    {[
      "Lower Electricity Bills",
      "Clean Renewable Energy",
      "Government Subsidies",
      "Energy Independence",
    ].map((item) => (
      <div
        key={item}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-yellow-300/30 transition"
      >
        <p className="font-semibold text-lg text-white">{item}</p>
        <p className="text-sm text-gray-300 mt-2">
          Save more and switch to sustainable solar power.
        </p>
      </div>
    ))}
  </div>
</section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 ">
        <h2 className="text-3xl md:text-4xl  font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          Our Products
        </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {products.map((product, index) => (
            <MainProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </section>

{/* HOW IT WORKS */}
   <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
  
  <div className="text-center mb-8 sm:mb-10 md:mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      How Solar Works
    </h2>
    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
      A seamless process designed to help you switch to solar with ease and confidence.
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 relative">
    
    {[
      {
        title: "Free Consultation",
        desc: "We analyze your energy needs and provide expert guidance.",
      },
      {
        title: "Custom Design",
        desc: "Tailored solar solutions designed for maximum efficiency.",
      },
      {
        title: "Professional Installation",
        desc: "Our team installs your system with precision and care.",
      },
      {
        title: "Start Saving",
        desc: "Generate your own energy and reduce electricity bills.",
      },
    ].map((step, i) => (
      
      <div
        key={i}
        className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-yellow-300/30"
      >
        
        {/* STEP NUMBER */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black font-bold shadow-lg">
          {i + 1}
        </div>

        {/* TITLE */}
        <h3 className="mt-6 text-lg font-semibold text-white">
          {step.title}
        </h3>

        {/* DESC */}
        <p className="mt-3 text-sm text-gray-300 leading-6">
          {step.desc}
        </p>

        {/* ARROW (except last) */}
        {i !== 3 && (
          <div className="hidden md:block absolute top-1/2 right-[-20px] transform -translate-y-1/2 text-yellow-400 text-xl">
            →
          </div>
        )}
      </div>
    ))}
  </div>
</section>
      
{/* SOLAR SOLUTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12
gap-5 sm:gap-6 md:gap-8">
    Our Solar Solutions
  </h2>

  <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
    {[
      {
        title: "Residential Solar",
        img: "/products/Residential.png",
      },
      {
        title: "Commercial Solar",
        img: "/products/Commercial.png",
      },
      {
        title: "Industrial Solar",
        img: "/products/Industrial.png",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <img
          src={item.img}
          className="h-48 w-full object-cover"
        />

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CTA SECTION */}
      <section className="backdrop-blur-md  bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)]  text-white text-center py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold">
          Want to install solar?
        </h2>
        <p className="mt-3">
          Get a free consultation and start saving today.
        </p>

      <a
  href="https://wa.me/919829080341?text=Hi%20I%20am%20interested%20in%20your%20solar%20solutions"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
>
  Get Free Quote
</a>
      </section>

    </main>
  );
}