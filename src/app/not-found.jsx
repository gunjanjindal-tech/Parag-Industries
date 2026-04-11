"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 
    bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_25%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)]">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-10"
      >
        <h1 className="text-7xl font-bold text-yellow-400">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
}