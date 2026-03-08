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
    ]
  },
}

module.exports = nextConfig
