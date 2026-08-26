import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yunoclaw.tech";

  return [
    { url: base,                      lastModified: "2025-08-20", changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/how-it-works`,    lastModified: "2025-08-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/demo`,            lastModified: "2025-08-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/merchants`,       lastModified: "2025-08-10", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`,           lastModified: "2025-08-01", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/waitlist`,        lastModified: "2025-08-20", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`,         lastModified: "2025-07-01", changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,           lastModified: "2025-07-01", changeFrequency: "yearly",  priority: 0.3 },
  ];
}
