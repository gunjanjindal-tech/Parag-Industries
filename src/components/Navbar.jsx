"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-primary/80 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT LOGO */}
        <Image
          src="/images/parag-logo.png"
          alt="Parag Industries"
          width={160}
          height={40}
        />

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Home", "Products", "Services", "Projects", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SURAKSHA LOGO */}
          <Image
            src="/images/suraksha-logo.png"
            alt="Suraksha"
            width={110}
            height={40}
            className="hidden md:block"
          />

          {/* CTA */}
          <button className="bg-accent text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
            Get Quote
          </button>
        </div>

      </div>
    </header>
  );
}