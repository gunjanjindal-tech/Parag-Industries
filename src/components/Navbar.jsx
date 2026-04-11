"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-2">
              <h1 className="text-white font-bold text-sm md:text-xl tracking-wide">
                PARAG <span className="font-bold">INDUSTRIES</span>
              </h1>

              <span className="text-[9px] md:text-[11px] px-3 py-[1px] rounded bg-blue-400/40 border border-white/20 text-white/80">
                सुरक्षा
              </span>
            </div>

            <span className="text-[8px] md:text-xs text-white/60 tracking-widest ">
              COMMITTED TO QUALITY SINCE 1996
            </span>
          </div>
       </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.path} className="relative group">
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CTA (hide on small screens) */}
          <a
            href="/catalogue.pdf"
            target="_blank"
            className="hidden sm:inline-block bg-yellow-400 text-black px-4 py-1.5 rounded-lg font-semibold hover:scale-105 transition"
          >
            E-Catalogue
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#0d3b66] px-6 py-4 space-y-4 text-white">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block border-b border-white/10 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <a
            href="/catalogue.pdf"
            target="_blank"
            className="block text-center bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold mt-3"
          >
            View E-Catalogue
          </a>

        </div>
      )}
    </header>
  );
}