const BASE_URL = "https://paragindustries.in";

const PRODUCT_SLUGS = [
  "chain-link-fencing",
  "barbed-wire",
  "welded-wire-mesh",
  "concertina-coil",
  "anti-climb-fence",
  "3d-fence",
  "knotted-wire-fence",
  "gabion-box",
  "gi-ms-angles",
  "gi-wire",
];

export default async function sitemap() {
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${BASE_URL}/`,                     priority: 1.0,  changeFrequency: "monthly"  },
    { url: `${BASE_URL}/products`,             priority: 0.9,  changeFrequency: "monthly"  },
    { url: `${BASE_URL}/services`,             priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/projects`,             priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`,                priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`,              priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/privacy-policy`,       priority: 0.2,  changeFrequency: "yearly"  },
    { url: `${BASE_URL}/terms-and-conditions`, priority: 0.2,  changeFrequency: "yearly"  },
  ].map((page) => ({ ...page, lastModified: now }));

  const productPages = PRODUCT_SLUGS.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...productPages];
}