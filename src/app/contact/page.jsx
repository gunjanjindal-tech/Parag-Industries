"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden 
    bg-gradient-to-br from-primary via-[#0d3b66] to-[#051923]
    pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">

      {/* GLOW EFFECTS */}
      <div className="absolute w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-gray-100 font-medium mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Let’s Build Something <br />
            <span className="text-accent">Strong Together</span>
          </h1>

          <p className="mt-5 text-gray-300 max-w-lg text-lg">
            Have a project in mind or need fencing solutions? Reach out to us —
            our team is ready to assist you with the best industry expertise.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Mail className="text-accent" size={20} />
              </div>
              <p className="text-gray-300">info@paragindustries.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Phone className="text-accent" size={20} />
              </div>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <MapPin className="text-accent" size={20} />
              </div>
              <p className="text-gray-300">
                Rajasthan, India
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">

            <h3 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />

              {/* MESSAGE */}
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-accent text-black py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
              >
                Send Message
              </button>

            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
}