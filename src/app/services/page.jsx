
import ServicesPage from "@/components/ServicePage";

export const metadata = {
  title: "Industrial Fencing Services | Supply, Installation & Custom Solutions — Parag Industries",
  description:
    "Parag Industries offers end-to-end industrial fencing services — supply, installation, and custom fabrication for defence, railways, highways, and commercial projects across India.",
  alternates: { canonical: "https://paragindustries.in/services" },
  openGraph: {
    title: "Fencing Services | Parag Industries Jaipur",
    description:
      "Supply, installation, and custom fencing solutions for government, defence, railways, and NHAI projects. 30+ years of expertise.",
    url: "https://paragindustries.in/services",
    images: [{ url: "/images/og-services.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fencing Services | Parag Industries Jaipur",
    description:
      "Supply, installation, and custom fencing solutions for government, defence, railways, and NHAI projects.",
    images: ["/images/og-services.jpg"],
  },
};
export default function Page() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}