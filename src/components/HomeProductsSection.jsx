"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Chain Link Mesh",
    desc: "Durable fencing solution available in GI, SS & PVC coatings.",
    img: "https://www.alexandrasecurity.com/wp-content/uploads/solar-farm-category-1.jpg",
  },
  {
    title: "Welded Mesh",
    desc: "Strong and versatile mesh for industrial and construction use.",
    img: "https://kisaansolutions.in/wp-content/uploads/2025/02/Y-Shape-3D-Welded-Mesh.jpg",
  },
  {
    title: "Barbed Wire",
    desc: "High-security fencing for boundaries and restricted areas.",
    img: "https://www.22fencecompany.com/wp-content/uploads/2025/07/solar-fence-scaled.jpeg",
  },
  {
    title: "Concertina Coil",
    desc: "Razor sharp security solution for high-risk zones, built for strength, and maximum perimeter protection.",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/2/EQ/EO/NA/144005482/farming-solar-fencing-service-500x500.jpg",
  },
  {
    title: "Anti Climb Fence",
    desc: "Designed to prevent intrusion with tight mesh structure.",
    img: "https://www.alexandrasecurity.com/wp-content/uploads/solar-farm-perimeter-security-fencing.jpg",
  },
  {
    title: "3D Fence",
    desc: "Modern fencing with high strength and aesthetic design.",
    img: "https://www.a-1fenceproducts.com/solar-fence/assets/img/form%20solar.webp",
  },
];

export default function Services() {
  return (
    <section className="relative bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">

        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm tracking-widest mb-2">
            OUR PRODUCTS
          </p>

          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Industrial Fencing Solutions
          </h2>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((item, index) => (
           <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  viewport={{ once: true }}
  className="group rounded-2xl overflow-hidden bg-[#0b2e4f]/40 border border-white/10 hover:shadow-xl transition-all duration-300"
>

  {/* IMAGE */}
  <div className="relative h-[220px] overflow-hidden">
    <img
      src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
      alt={item.title}
      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent"></div>

    {/* OPTIONAL TAG */}
    <span className="absolute top-3 left-3 bg-accent bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
      Premium
    </span>
  </div>

  {/* CONTENT */}
  <div className="p-5">

    {/* TITLE */}
    <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-accent transition">
      {item.title}
    </h3>

    {/* ⭐ STARS */}
    <div className="flex gap-1 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>

    {/* DESCRIPTION */}
    <p className="text-gray-300 text-sm mb-4 min-h-14">
      {item.desc}
    </p>

    {/* FOOTER */}
  <div className="mt-4">
  <button className="w-full bg-accent text-black py-2.5 bg-yellow-400 rounded-lg font-semibold text-sm hover:scale-[1.03] hover:shadow-lg transition-all duration-300 hover:cursor-pointer">
    View Details
  </button>
</div>
  </div>

</motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}