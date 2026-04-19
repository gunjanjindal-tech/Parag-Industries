"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const metadata = {
  title: "Contact Parag Industries | Get a Quote for Fencing Solutions",
  description:
    "Get in touch with Parag Industries for product inquiries, project quotations, and custom fencing solutions. Located in RIICO Industrial Area, Jaipur. Call +91-9829080341.",
  alternates: { canonical: "https://paragindustries.in/contact" },
  openGraph: {
    title: "Contact Parag Industries | Fencing Solutions Jaipur",
    description:
      "Request a quote for industrial fencing. Chain Link, Welded Mesh, Barbed Wire, Concertina Coil and more. Call or email today.",
    url: "https://paragindustries.in/contact",
    images: [{ url: "/images/og-contact.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Parag Industries | Fencing Solutions Jaipur",
    description:
      "Request a quote for industrial fencing. Call +91-9829080341 or email paragindustries140@gmail.com.",
    images: ["/images/og-contact.jpg"],
  },
};

export default function ContactPage() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_iol0dd6",
        "template_zz580zq",
        formRef.current,
        "r9on9WiBaJbRQxq93"
      )
      .then(
  () => {
    setStatus("✅ Inquiry sent successfully!");
    setLoading(false);
    formRef.current.reset();

    // ⬇️ ADD THIS (auto hide after 3 sec)
    setTimeout(() => {
      setStatus("");
    }, 3000);
  },
  () => {
    setStatus("❌ Failed to send. Please try again.");
    setLoading(false);

    setTimeout(() => {
      setStatus("");
    }, 3000);
  }
);
  };



  return (
    <section className="relative overflow-hidden 
    bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923]
    pt-12 pb-12 sm:pt-14 sm:pb-14 md:pt-16 md:pb-16">

      {/* GLOW */}
    
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm tracking-widest text-gray-300 font-medium mb-4">
              CONTACT US
            </p>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight">
              <span className="block sm:inline">Let’s Build Your</span>{" "}
              <span className="text-yellow-400 block sm:inline">
                Next Project
              </span>
            </h1>

            <p className="mt-5 text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
              Talk to our experts for industrial fencing solutions tailored to
              your needs.
            </p>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="  p-5 sm:p-6 md:p-7 shadow-xl flex flex-col h-full"
          >
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">
              Contact Information
            </h2>

            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Reach out to us for product inquiries, quotations, or project discussions.
            </p>

            <div className="space-y-4">

              <a href="tel:+919829080341" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5">
                <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center text-black">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">+91-9829080341</p>
                </div>
              </a>

              <a href="mailto:paragindustries140@gmail.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5">
                <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center text-black">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300 text-sm">paragindustries140@gmail.com</p>
                </div>
              </a>

             <a
  href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396db25a456c8bf7:0x43f9532f48346f30?entry=s&sa=X&ved=2ahUKEwil6oOp0LWTAxWt96ACHbprEWUQ4kB6BAgEEAA&hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5"
>
  <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center text-black">
    <MapPin size={18} />
  </div>

  <div>
    <p className="text-white font-medium">Address</p>
    <p className="text-gray-300 text-sm">
      G-1-30, Road No. 2A, RIICO Industrial Area, Jaipur
    </p>
  </div>
</a>

            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col h-full"
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-5">
              Send Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 flex flex-col">

              <input type="text" name="name" placeholder="Full Name" required className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white" />

              <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white" />

              <input type="text" name="phone" placeholder="Phone Number" className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white" />

              <textarea name="message" rows="4" placeholder="Tell us about your project..." required className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white" />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-yellow-400  text-black py-2.5 rounded-xl font-semibold hover:scale-105 transition shadow-lg cursor-pointer hover:bg-yellow-300"
              >
                Send Message
              </button>

              {/* MESSAGE BELOW BUTTON */}
              {status && (
                <p className={`text-sm mt-2 ${status.includes("✅") ? "text-green-400" : "text-red-400"}`}>
                  {status}
                </p>
              )}

            </form>
          </motion.div>

        </div>

      </div>
      {/* EMBEDDED MAP */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-10">
  <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.478922822337!2d75.65285027577298!3d26.920027659775574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db25a456c8bf7%3A0x43f9532f48346f30!2sParag%20Industries!5e0!3m2!1sen!2sin!4v1776570120455!5m2!1sen!2sin"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Parag Industries Location"
      className="w-full h-[250px] sm:h-[300px] md:h-[400px]"
    />
  </div>
</div>
    </section>
  );
}