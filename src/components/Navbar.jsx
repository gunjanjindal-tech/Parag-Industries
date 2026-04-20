"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "../app/data/products";

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
  const [openProduct, setOpenProduct] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[linear-gradient(135deg,#051923_0%,#0d3b66_52%,#051923_100%)] border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-2">
              <h1 className="text-white font-bold text-sm md:text-xl tracking-wide">
                PARAG <span className="font-bold">INDUSTRIES</span>
              </h1>
              <span className="text-[9px] md:text-[11px] px-3 py-[1px] rounded bg-blue-400/40 border border-white/20 text-white/80">
                सुरक्षा
              </span>
            </div>
            <span className="text-[8px] md:text-xs text-white/60 tracking-widest">
              COMMITTED TO QUALITY SINCE 1996
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV (≥950px) */}
        <nav className="hidden [@media(min-width:950px)]:flex items-center gap-6 text-sm font-medium text-white">

          {navLinks.map((item) => {

            if (item.name === "Products") {
              return (
                <div key={item.name} className="relative group">
                  <Link href="/products" className="flex items-center gap-1 cursor-pointer">
  {item.name}
  <span className="text-xs">▾</span>
</Link>

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>

                  <div className="absolute left-0 top-10 w-64 bg-[#0d3b66] border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 ">
                    <div className="py-2 text-start">
                      {products.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/products/${prod.slug}`}
                          className="block px-4 py-2 hover:bg-white/10"
                        >
                          {prod.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.name} href={item.path} className="relative group">
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* ✅ E-Catalogue (Tablet only: <950px && >=640px) */}
          <a
            href="/catalogue.pdf"
            target="_blank"
            className="hidden sm:inline-block [@media(min-width:950px)]:inline-block [@media(max-width:640px)]:hidden whitespace-nowrap bg-yellow-400 text-black px-4 py-1.5 rounded-lg font-semibold"
          >
            E-Catalogue
          </a>

          {/* ✅ Hamburger (below 950px) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="[@media(min-width:950px)]:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="[@media(min-width:950px)]:hidden bg-[#0d3b66] px-6 py-4 space-y-4 text-white max-h-[80vh] overflow-y-auto">

          {navLinks.map((item) => {

            if (item.name === "Products") {
              return (
                <div key={item.name}>
                 <div className="w-full flex justify-between border-b pb-2 border-white/10">
  <Link
    href="/products"
    onClick={() => setIsOpen(false)}
    className="flex-1"
  >
    {item.name}
  </Link>
  <button onClick={() => setOpenProduct(!openProduct)}>
    <span>{openProduct ? "▲" : "▼"}</span>
  </button>
</div>

                  {openProduct && (
<div className="pl-4 mt-2 space-y-2 flex flex-col">
                        {products.map((prod) => (
                        <Link
  key={prod.id}
  href={`/products/${prod.slug}`}
  className="block text-sm text-white/80 break-words leading-relaxed"
  onClick={() => {
    setIsOpen(false);
    setOpenProduct(false);
  }}
>
  {prod.title}
</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block border-b pb-2 border-white/10"
              >
                {item.name}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <a
            href="/catalogue.pdf"
            target="_blank"
            className="block text-center cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold mt-3"
          >
            View E-Catalogue
          </a>

        </div>
      )}
    </header>
  );
}