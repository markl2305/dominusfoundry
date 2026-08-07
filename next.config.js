/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old index → new systems index
      { source: "/business-tools", destination: "/systems", permanent: true },

      // Front door products → Intake Engine
      { source: "/business-tools/voice-concierge", destination: "/systems/intake", permanent: true },
      { source: "/business-tools/lead-intake-booking", destination: "/systems/intake", permanent: true },

      // Revenue products → Revenue Engine
      { source: "/business-tools/client-onboarding-engine", destination: "/systems/revenue", permanent: true },
      { source: "/business-tools/lead-to-cash", destination: "/systems/revenue", permanent: true },

      // Ops products → Ops Engine
      { source: "/business-tools/support-triage-desk", destination: "/systems/ops", permanent: true },
      { source: "/business-tools/ops-reporting-intelligence", destination: "/systems/ops", permanent: true },
      { source: "/business-tools/document-compliance-automations", destination: "/systems/ops", permanent: true },
      { source: "/business-tools/recruiting-hiring-pipeline", destination: "/systems/ops", permanent: true },
      { source: "/business-tools/vendor-purchasing-workflow", destination: "/systems/ops", permanent: true },

      // Legacy footer shortcut
      { source: "/voice-concierge", destination: "/systems/intake", permanent: true },

      // Retired: Foundry Capital / ventures arm (removed 2026-08-07)
      { source: "/ventures", destination: "/", permanent: true },

      // NOTE: /pricing is NOT retired. It briefly was (the legacy build-fee/per-Engine
      // services sheet), but Mark superseded that on 2026-08-07 — "fix the dominus foundry
      // pricing to discuss forge and be a range (but an accurate one) - its job is not to
      // sell" — and 8cdf937 rewrote it as a canon-sourced Forge reference table. Do not add
      // a /pricing redirect back; it would kill a live, correct page.

      // Retired pre-Forge product pages. Route files DELETED 2026-08-07 (RULED by Mark:
      // "get rid of them - they are nothing more than artifacts and i dont want them
      // fucking with seo"). These 301s must stay even though the pages are gone — they
      // catch already-indexed URLs so search engines see a permanent move instead of a
      // 404, which is what actually protects the SEO. Mirrors f462e8e (2026-07-13).
      // Mentis intentionally NOT redirected — it remains a current public brand.
      { source: "/voice-concierge/campaign", destination: "/systems/intake", permanent: true },
      { source: "/invoiceflow", destination: "/systems/revenue", permanent: true },
      { source: "/orderline", destination: "/systems/ops", permanent: true },
      { source: "/voice-ordering", destination: "/systems/ops", permanent: true },
    ]
  },
}

module.exports = nextConfig
