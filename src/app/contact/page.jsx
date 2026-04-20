import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Parag Industries | Get a Quote for Fencing Solutions",
  description:
    "Get in touch with Parag Industries for product inquiries, project quotations, and custom fencing solutions. Located in RIICO Industrial Area, Jaipur. Call +91-9829080341.",
  alternates: { canonical: "https://paragindustries.in/contact" },
  openGraph: {
    title: "Contact Parag Industries | Fencing Solutions Jaipur",
    description:
      "Request a quote for industrial fencing. Chain Link, Welded Mesh, Barbed Wire, Concertina Coil and more. Call or email today.",
    url: "https://paragindustries.in/contact",
    images: [{ url: "/images/og-contact.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Parag Industries | Fencing Solutions Jaipur",
    description:
      "Request a quote for industrial fencing. Call +91-9829080341 or email paragindustries140@gmail.com.",
    images: ["/images/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}