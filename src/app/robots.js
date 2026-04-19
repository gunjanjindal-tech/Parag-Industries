export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: "https://paragindustries.in/sitemap.xml",
    host: "https://paragindustries.in",
  };
}