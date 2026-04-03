"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md  bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_22%),linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] border-b border-white/10">
      
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
  {navLinks.map((item) => (
    <Link key={item.name} href={item.path} className="relative group">
      {item.name}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
    </Link>
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