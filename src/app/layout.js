import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";   // ✅ ADD
import Footer from "@/components/Footer";   // ✅ ADD

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Parag Industries",
  description: "Premium Fencing Solutions for Industrial Projects",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#031625] text-white">

        {/* HEADER */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* FLOATING BUTTON */}
        <WhatsAppButton />

      </body>
    </html>
  );
}