"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 items-start">

          {/* COMPANY */}
         <div className="flex flex-col h-full">
           <div className="flex flex-col leading-tight mb-4">

  {/* TOP ROW */}
  <div className="flex items-center gap-2">
    <h3 className="text-white font-bold text-lg tracking-wide">
      PARAG <span className="font-bold">INDUSTRIES</span>
    </h3>

    <span className="text-[10px] px-2 py-[2px] rounded bg-blue-400/30 border border-white/20 text-white/80">
      सुरक्षा
    </span>
  </div>

  {/* TAGLINE */}
  <span className="text-[10px] text-white/60 tracking-widest mt-1">
    COMMITTED TO QUALITY SINCE 1996
  </span>

</div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering premium fencing solutions for industrial,
              infrastructure, and high-security projects across India.
            </p>

            <p className="text-accent mt-4 text-sm font-medium">
              Committed to Quality Since 1996
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col h-full md:ml-10 lg:ml-20">
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
             <li>
  <Link href="/" className="hover:text-accent transition">
    Home
  </Link>
</li>

<li>
  <Link href="/products" className="hover:text-accent transition">
    Products
  </Link>
</li>

<li>
  <Link href="/services" className="hover:text-accent transition">
    Services
  </Link>
</li>

<li>
  <Link href="/about" className="hover:text-accent transition">
    About
  </Link>
</li>

<li>
  <Link href="/contact" className="hover:text-accent transition">
    Contact
  </Link>
</li>
            </ul>
          </div>

          {/* LEGAL */}
      <div className="flex flex-col h-full">
            <h4 className="text-white font-semibold mb-4">
              Legal
            </h4>

            <ul className="space-y-2 text-sm">
             <li>
  <Link href="/privacy-policy" className="hover:text-accent transition">
    Privacy Policy
  </Link>
</li>

<li>
  <Link href="/terms-and-conditions" className="hover:text-accent transition">
    Terms & Conditions
  </Link>
</li>

            </ul>
          </div>

    
          {/* CONTACT */}
<div className="flex flex-col h-full">
  <h4 className="text-white font-semibold mb-4">
    Contact Us
  </h4>

  <ul className="space-y-3 text-sm">

    {/* PHONE */}
    <li>
      <a
        href="tel:+919829080341"
        className="flex items-center gap-2 hover:text-yellow-300 transition"
      >
        <Phone size={16} className="text-accent" />
        +91 9829080341
      </a>
    </li>

    {/* EMAIL */}
   <li>
  <a
    href="mailto:paragindustries140@gmail.com"
    className="flex items-start gap-2 hover:text-yellow-300 transition"
  >
    <Mail size={16} className="text-accent mt-1 shrink-0" />

    <span className="break-all">
      paragindustries140@gmail.com
    </span>
  </a>
</li>

    {/* LOCATION (OPTIONAL GOOGLE MAP LINK) */}
    <li>
      <a
        href="https://maps.app.goo.gl/AiureCU257AeFKAe9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-yellow-300 transition"
                >
        <MapPin className="size-4 md:size-8 text-accent" />
       G-1-30 road no 2A RIICO Industrial Area bindayaka jaipur -302012
      </a>
    </li>

  </ul>
</div>
        </div>

        {/* EMBEDDED MAP */}
        <div className="w-full mb-10 rounded-xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.478922822337!2d75.65285027577298!3d26.920027659775574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db25a456c8bf7%3A0x43f9532f48346f30!2sParag%20Industries!5e0!3m2!1sen!2sin!4v1776570120455!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Parag Industries Location"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px]"
          />
        </div>


        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Parag Industries. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0 text-yellow-400">
           <a href="https://pashgen.com/"
  target="_blank"
  className="mt-3 md:mt-0 text-yellow-400 hover:underline"
> Website by <span className="text-accent font-medium">PashGen</span></a>
          </p>
        </div>

      </div>
    </footer>
  );
}