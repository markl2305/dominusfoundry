import type { MetadataRoute } from "next";

const BASE = "https://dominusfoundry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    // Core
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    // /pricing stays indexed: 8cdf937 rewrote it as a canon-sourced Forge reference table
    // (RULED 2026-08-07 by Mark), superseding the earlier retire-and-301 call.
    { path: "/pricing", priority: 0.8, freq: "monthly" as const },
    { path: "/start", priority: 0.8, freq: "monthly" as const },
    { path: "/contact", priority: 0.7, freq: "monthly" as const },
    { path: "/careers", priority: 0.6, freq: "monthly" as const },
    { path: "/press", priority: 0.6, freq: "monthly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },

    // Holding-company pillars (heraldic refresh)
    { path: "/company", priority: 0.8, freq: "monthly" as const },
    { path: "/iris", priority: 0.9, freq: "monthly" as const },
    { path: "/governance", priority: 0.9, freq: "monthly" as const },
    { path: "/technology", priority: 0.8, freq: "monthly" as const },

    // Products (retired pre-Forge product pages deleted + 301'd 2026-08-07, RULED by Mark;
    // /voice-concierge, /voice-concierge/campaign, /invoiceflow, /orderline, /voice-ordering.
    // Mentis stays — current public brand.)
    { path: "/dominus-os", priority: 0.9, freq: "monthly" as const },
    { path: "/mentis", priority: 0.8, freq: "monthly" as const },
    { path: "/qb-migration", priority: 0.7, freq: "monthly" as const },

    // Systems (thought leadership on AI-native operations)
    { path: "/systems", priority: 0.8, freq: "monthly" as const },
    { path: "/systems/intake", priority: 0.7, freq: "monthly" as const },
    { path: "/systems/ops", priority: 0.7, freq: "monthly" as const },
    { path: "/systems/revenue", priority: 0.7, freq: "monthly" as const },

    // Blog
    { path: "/blog", priority: 0.8, freq: "weekly" as const },
    {
      path: "/blog/operations-intelligence-for-small-teams",
      priority: 0.7,
      freq: "monthly" as const,
    },
    {
      path: "/blog/synthetic-intelligence-mentis",
      priority: 0.7,
      freq: "monthly" as const,
    },
    {
      path: "/blog/between-human-and-ai",
      priority: 0.7,
      freq: "monthly" as const,
    },
    {
      path: "/blog/the-case-for-constitutional-synthetic-intelligence",
      priority: 0.7,
      freq: "monthly" as const,
    },
  ];

  return pages.map(({ path, priority, freq }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
