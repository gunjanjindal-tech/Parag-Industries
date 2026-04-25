"use client";
import { motion } from "framer-motion";

export default function MotionCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:scale-[1.02] transition"
    >
      {children}
    </motion.div>
  );
}