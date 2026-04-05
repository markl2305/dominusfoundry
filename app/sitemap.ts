import type { MetadataRoute } from "next";

const BASE = "https://dominusfoundry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/blog", priority: 0.8, freq: "weekly" as const },
    { path: "/careers", priority: 0.6, freq: "monthly" as const },
    { path: "/start", priority: 0.8, freq: "monthly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/pricing", priority: 0.7, freq: "monthly" as const },
    { path: "/voice-concierge", priority: 0.7, freq: "monthly" as const },
    { path: "/invoiceflow", priority: 0.7, freq: "monthly" as const },
    { path: "/contact", priority: 0.6, freq: "monthly" as const },
    // Blog posts
    { path: "/blog/operations-intelligence-for-small-teams", priority: 0.6, freq: "monthly" as const },
    { path: "/blog/synthetic-intelligence-mentis", priority: 0.6, freq: "monthly" as const },
  ];

  return pages.map(({ path, priority, freq }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
