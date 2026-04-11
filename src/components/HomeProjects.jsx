"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Industrial Perimeter Fencing",
    location: "Jaipur, Rajasthan",
    img: "https://www.alexandrasecurity.com/wp-content/uploads/solar-farm-category-1.jpg",
  },
  {
    title: "High Security Barbed Wire Setup",
    location: "Defence Area",
    img: "https://kisaansolutions.in/wp-content/uploads/2025/02/Y-Shape-3D-Welded-Mesh.jpg",
  },
  {
    title: "Solar Plant Fencing",
    location: "Infrastructure Project",
    img: "https://www.22fencecompany.com/wp-content/uploads/2025/07/solar-fence-scaled.jpeg",
  },
  {
    title: "Warehouse Boundary Installation",
    location: "Industrial Zone",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/2/EQ/EO/NA/144005482/farming-solar-fencing-service-500x500.jpg",
  },
];

export default function Projects() {
  return (
    <section className="relative bg-gradient-to-br from-[#154c79] via-[#1b5f8a] to-[#0d3b66] px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">

      <div className="max-w-7xl mx-auto ">

        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-gray-400 text-sm tracking-widest mb-2">
            OUR PROJECTS
          </p>

          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Recent Work & Installations
          </h2>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={`${item.img}?auto=format&fit=crop&w=1200&q=80`}
                alt={item.title}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  {item.location}
                </p>

                {/* accent line */}
                <div className="mt-3 h-[2px] w-0 bg-accent group-hover:w-20 transition-all duration-300"></div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}