"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "What types of fencing solutions do you provide?",
      answer:
        "We provide a wide range of industrial fencing solutions including chain link mesh, welded mesh, barbed wire, concertina coil, anti-climb fencing, and 3D fencing systems tailored for various applications.",
    },
    {
      question: "Do you offer customized solutions for projects?",
      answer:
        "Yes, we specialize in custom-built fencing solutions based on project requirements, site conditions, and security needs to ensure maximum efficiency and durability.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We cater to industries such as infrastructure, solar farms, warehouses, manufacturing units, government projects, and high-security zones across India.",
    },
    {
      question: "What is the durability of your fencing products?",
      answer:
        "Our fencing systems are built using high-quality materials like GI, PVC-coated, and stainless steel, ensuring long-lasting performance even in harsh environmental conditions.",
    },
    {
      question: "Do you provide installation support?",
      answer:
        "Yes, we provide complete guidance and support for installation to ensure proper setup and long-term performance of the fencing systems.",
    },
    {
      question: "How can I get pricing or a quotation?",
      answer:
        "You can easily request a quote by contacting us via WhatsApp or downloading our E-Catalogue. Our team will assist you with detailed pricing based on your requirements.",
    },
  ];

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] py-24">

      {/* glow */}
      <div className="absolute w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full top-[-80px] left-[-80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm tracking-widest mb-2">
            FAQs
          </p>

          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Everything You Need to Know
          </h2>

          <p className="text-gray-300 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and project execution process.
          </p>
        </div>

        {/* faq list */}
        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >

              {/* question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white font-medium text-sm md:text-base">
                  {item.question}
                </span>

                <span className="text-white  text-2xl font-light transition">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {/* answer */}
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-5 text-gray-300 text-sm leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}