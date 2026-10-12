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
    // ⛔ /pitch is DELIBERATELY NOT HERE (RULED 2026-09-16, round 2, R5).
    // dominusfoundry.com/pitch is the canonical investor pitch and it carries
    // `robots: {index:false, follow:false}` — it is NOT INDEXED BY SEARCH
    // ENGINES, and that is the entire claim.
    // ⛔ It is NOT private and NOT shared-on-request: it is linked from the
    // homepage hero, the footer and the mobile nav on every route, so it is
    // openly reachable and discoverable through those links. Earlier wording
    // here called it "shared directly" while the site linked it from its own
    // chrome; that was the site contradicting itself and it is struck
    // (kimi #5, round 3). ⛔ Do not reintroduce privacy language.
    // markflord.com/pitch still 301s to it once P4 is live-verified (plan §18
    // Phase 5) — a redirect target does not require sitemap presence.
    // sites-analytics-20261012: /contact is ALSO a redirect (app/(site)/contact/page.js ->
    // /start, confirmed live: curl returns 307 to /start) and was listed here as its own
    // entry -- the exact "page with redirect" Search Console defect the /mentis/qb-migration
    // comment below already names. /start is already in this list two lines up; removed
    // the redundant redirect entry rather than adding a second canonical-destination line.
    { path: "/careers", priority: 0.6, freq: "monthly" as const },
    { path: "/press", priority: 0.6, freq: "monthly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },

    // Holding-company pillars (heraldic refresh)
    { path: "/company", priority: 0.8, freq: "monthly" as const },
    { path: "/sabina", priority: 0.9, freq: "monthly" as const },
    { path: "/governance", priority: 0.9, freq: "monthly" as const },
    { path: "/technology", priority: 0.8, freq: "monthly" as const },

    // Products. Retired pre-Forge pages were dropped from the sitemap 2026-07-13 and their
    // route files DELETED 2026-08-07 (RULED by Mark): /voice-concierge,
    // /voice-concierge/campaign, /invoiceflow, /orderline, /voice-ordering — all now 301.
    // Mentis stays — current public brand.
    // /dominus-os was DELETED 2026-09-16: the name is prohibited on public
    // Dominus marketing (plan §17). It keeps a 301 to /governance in
    // next.config.js, so it must NOT be advertised here — a sitemap entry that
    // permanently redirects is the "page with redirect" defect Search Console
    // flags, the same reason /mentis's stale redirect was removed in f462e8e.
    { path: "/mentis", priority: 0.8, freq: "monthly" as const },
    // sites-analytics-20261012: /qb-migration was listed here, but app/qb-migration/page.js
    // carries `robots: {index:false, follow:false}` -- a RETIRED-offering notice, not a
    // redirect, so it slipped past the comment above (which only covers redirect targets).
    // A noindex page listed in the sitemap is the same class of contradictory signal Search
    // Console flags on a redirect. Removed; the noindex meta tag is unchanged and still wins
    // either way, but a sitemap should not be the thing disagreeing with it.

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

    // Learn (GEO reference content — Clio)
    { path: "/learn", priority: 0.7, freq: "weekly" as const },
    {
      path: "/learn/platform/ai-software-company-for-construction-and-trades",
      priority: 0.8,
      freq: "monthly" as const,
    },
    {
      path: "/learn/platform/ai-software-for-construction-and-trades",
      priority: 0.8,
      freq: "monthly" as const,
    },
    {
      path: "/learn/platform/ai-vertical-saas-for-the-trades-what-it-is-and-real-examples",
      priority: 0.8,
      freq: "monthly" as const,
    },
    {
      path: "/learn/platform/forge-the-ai-operating-system-for-commercial-contractors",
      priority: 0.8,
      freq: "monthly" as const,
    },
    {
      path: "/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry",
      priority: 0.8,
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
