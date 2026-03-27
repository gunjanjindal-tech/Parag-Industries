"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#051923] via-[#0d3b66] to-[#051923] text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* COMPANY */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Parag Industries
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering premium fencing solutions for industrial,
              infrastructure, and high-security projects across India.
            </p>

            <p className="text-accent mt-4 text-sm font-medium">
              Committed to Quality Since 1996
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent transition cursor-pointer">Home</li>
                          <li className="hover:text-accent transition cursor-pointer">Products</li>
              <li className="hover:text-accent transition cursor-pointer">Services</li>
                          
              <li className="hover:text-accent transition cursor-pointer">Projects</li>
              <li className="hover:text-accent transition cursor-pointer">About</li>
              <li className="hover:text-accent transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Legal
            </h4>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-accent transition cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-accent transition cursor-pointer">Warranty Policy</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact Us
            </h4>

            <ul className="space-y-3 text-sm">

              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                +91 9829080341
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                paragindustries140@gmail.com
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                Rajasthan, India
              </li>

            </ul>

          
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Parag Industries. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Website by{" "}
            <a
              href="https://pashgen.com/"
              target="_blank"
              className="text-accent font-medium hover:underline"
            >
              PashGen
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}