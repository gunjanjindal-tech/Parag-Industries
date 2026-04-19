// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ── GLOBAL METADATA ───────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://paragindustries.in"),

  title: {
    default: "Parag Industries | Industrial Fencing Manufacturer — Jaipur, India",
    template: "%s | Parag Industries",
  },

  description:
    "Parag Industries is a leading manufacturer and supplier of industrial fencing solutions in Jaipur, India. 30+ years of experience supplying Chain Link, Welded Mesh, Barbed Wire, Concertina Coil, Anti Climb Fence, and Gabion Box to defence, railways, NHAI, and infrastructure projects across India.",

  keywords: [
    "industrial fencing Jaipur",
    "chain link fence manufacturer India",
    "welded mesh fencing India",
    "barbed wire manufacturer Jaipur",
    "concertina coil manufacturer India",
    "anti climb fence India",
    "gabion box manufacturer India",
    "fencing solutions Rajasthan",
    "defence fencing India",
    "railway fencing contractor India",
    "NHAI fencing supplier",
    "wire mesh manufacturer Jaipur",
    "industrial fence manufacturer Rajasthan",
    "GI fencing India",
    "Parag Industries Jaipur",
    "RIICO industrial area Jaipur fencing",
    "security fencing manufacturer India",
  ],

  authors: [{ name: "Parag Industries", url: "https://paragindustries.in/about" }],
  creator: "Parag Industries",
  publisher: "Parag Industries",

  alternates: {
    canonical: "https://paragindustries.in",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://paragindustries.in",
    siteName: "Parag Industries",
    title: "Parag Industries | Industrial Fencing Manufacturer — Jaipur",
    description:
      "Leading manufacturer of Chain Link, Welded Mesh, Barbed Wire, Concertina Coil, Anti Climb Fence, and Gabion Box. Supplying government, defence, railways, and NHAI projects across India since 1996.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Parag Industries — Industrial Fencing Solutions, Jaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Parag Industries | Industrial Fencing Manufacturer — Jaipur",
    description:
      "30+ years of fencing excellence. Chain Link, Welded Mesh, Barbed Wire, Concertina Coil & more. Pan-India supply.",
    images: ["/images/og-default.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // Add after Google Search Console verification
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// ── JSON-LD — Local Business + Manufacturer ───────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": "https://paragindustries.in/#business",
      name: "Parag Industries",
      url: "https://paragindustries.in",
      logo: {
        "@type": "ImageObject",
        url: "https://paragindustries.in/images/logo.png",
      },
      image: "https://paragindustries.in/images/og-default.jpg",
      description:
        "Parag Industries is a Jaipur-based manufacturer and supplier of premium industrial fencing solutions including Chain Link Fence, Welded Mesh, Barbed Wire, Concertina Coil, Anti Climb Fence, and Gabion Box. Supplying government, defence, railways, and NHAI projects across India since 1996.",
      foundingDate: "1996",
      telephone: "+91-9829080341",
      email: "paragindustries140@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "G-1-30, Road No. 2A, RIICO Industrial Area",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302013",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.920027,
        longitude: 75.652850,
      },
      hasMap: "https://maps.google.com/maps/place/Parag+Industries",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "Chain Link Fencing",
        "Welded Mesh Fencing",
        "Barbed Wire",
        "Concertina Coil",
        "Anti Climb Fence",
        "Gabion Box",
        "Industrial Fencing",
        "Defence Fencing",
        "Railway Fencing",
        "Infrastructure Fencing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Industrial Fencing Products",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Chain Link Fence" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Welded Mesh Fence" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Barbed Wire" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Concertina Coil" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Anti Climb Fence" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Gabion Box" } },
        ],
      },
      sameAs: [
        // Add social profile URLs once confirmed
        // "https://www.linkedin.com/company/parag-industries",
        // "https://www.facebook.com/paragindustries",
        // "https://www.indiamart.com/parag-industries",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://paragindustries.in/#website",
      url: "https://paragindustries.in",
      name: "Parag Industries",
      description:
        "Industrial Fencing Manufacturer & Supplier — Jaipur, Rajasthan, India",
      publisher: { "@id": "https://paragindustries.in/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://paragindustries.in/products?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#031625] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}