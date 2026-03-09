import Link from "next/link";
import Button from "../../components/Button";

export const metadata = {
  title: "Operational Control Systems | Dominus Foundry",
  description:
    "Complete systems that enforce revenue capture, follow-up, and operational discipline — each one ready to work on its own, all designed to connect.",
};

const pilotSystems = [
  {
    id: "voice-concierge",
    title: "Voice Concierge",
    what: "Answers, qualifies, books, and routes calls — so no lead goes unanswered.",
    bestFit: "Service businesses with inbound call volume. Membership clubs. Clinics. Appointment-driven teams.",
    href: "/business-tools/voice-concierge",
  },
  {
    id: "lead-intake",
    title: "Lead Intake → Booking",
    what: "Captures leads, qualifies, routes, and books — before they cool off.",
    bestFit: "Founders and ops leads who lose revenue to slow follow-up.",
    href: "/business-tools/lead-intake-booking",
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding Engine",
    what: "Moves from signed deal to operational client — no missed steps.",
    bestFit: "Agencies, professional services, and B2B teams scaling beyond founder-led onboarding.",
    href: "/business-tools/client-onboarding-engine",
  },
  {
    id: "lead-to-cash",
    title: "Lead-to-Cash (Invoicing + AR)",
    what: "Enforces the path from closed deal to collected revenue.",
    bestFit: "Service and project-based teams with recurring invoicing.",
    href: "/business-tools/lead-to-cash",
  },
];

const expansionSystems = [
  {
    id: "support-triage",
    title: "Support Triage Desk",
    what: "Intakes, classifies, routes, and resolves support requests with structure.",
    bestFit: "Teams drowning in repetitive support and internal requests.",
    href: "/business-tools/support-triage-desk",
  },
  {
    id: "ops-reporting",
    title: "Ops Reporting & Intelligence",
    what: "Unified visibility across sales, delivery, finance, and operations.",
    bestFit: "Owners wanting clarity without living in dashboards.",
    href: "/business-tools/ops-reporting-intelligence",
  },
  {
    id: "doc-compliance",
    title: "Document & Compliance Automations",
    what: "Generates, routes, signs, archives, and audits documents with policy enforcement.",
    bestFit: "Regulated industries and teams that live in PDFs and approvals.",
    href: "/business-tools/document-compliance-automations",
  },
  {
    id: "recruiting",
    title: "Recruiting & Hiring Pipeline",
    what: "Applicant intake to offer with accountability at every step.",
    bestFit: "Companies hiring across multiple roles without HR overhead.",
    href: "/business-tools/recruiting-hiring-pipeline",
  },
  {
    id: "vendor-purchasing",
    title: "Vendor & Purchasing Workflow",
    what: "Request, approve, order, reconcile, and restock — with cost discipline.",
    bestFit: "Ops-heavy teams. Hospitality. Multi-location businesses.",
    href: "/business-tools/vendor-purchasing-workflow",
  },
];

export default function BusinessToolsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <p className="label-foundry text-orange-200">Operational Control Systems</p>
          <h1 className="heading-forge-xl text-white">The systems inside every engagement.</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Each system solves a specific operational problem. Your engagement combines the right systems for your business — starting with the one that matters most.
          </p>
          <Button href="https://evaluation.dominusfoundry.com" className="justify-center">
            Find your biggest leak — Free Assessment
          </Button>
        </div>
      </section>

      {/* Pilot Systems — Start Here */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="space-y-2">
            <p className="label-foundry text-forge-700">Start here</p>
            <h2 className="heading-forge-lg text-slate-900">Pilot systems</h2>
            <p className="body-foundry text-slate-700 max-w-2xl">
              Most engagements begin with one of these four systems. Each one solves a high-impact problem on its own — and connects to everything else when you&apos;re ready.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pilotSystems.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="group block card-forged-premium rounded-2xl bg-gradient-to-br from-white to-forge-50 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow space-y-3"
              >
                <h3 className="heading-forge-lg text-slate-900 group-hover:text-forge-700 transition-colors">{tool.title}</h3>
                <p className="body-foundry text-slate-800">{tool.what}</p>
                <p className="text-sm text-slate-700">
                  <span className="label-foundry text-slate-700">Best fit:</span> {tool.bestFit}
                </p>
                <p className="text-sm font-medium text-forge-700">Operational control system</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button href="https://evaluation.dominusfoundry.com" variant="forgeSecondary" className="justify-center">
              Not sure which one matters most? Run the Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Expansion Systems — Full Library */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="space-y-2">
            <p className="label-foundry text-forge-700">The full library</p>
            <h2 className="heading-forge-lg text-slate-900">Expansion systems</h2>
            <p className="body-foundry text-slate-700 max-w-2xl">
              As your engagement grows, these systems integrate naturally. Same architecture. Same accountability. Ready when you are.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expansionSystems.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="block card-forged rounded-2xl bg-white p-6 shadow-sm space-y-3 foundry-tile-link"
              >
                <h3 className="heading-forge-md text-slate-900">{tool.title}</h3>
                <p className="body-foundry text-slate-800">{tool.what}</p>
                <p className="text-sm text-slate-700">
                  <span className="label-foundry text-slate-700">Best fit:</span> {tool.bestFit}
                </p>
                <p className="text-sm font-medium text-forge-700">Operational control system</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dominus OS Escalation */}
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg text-white">When your operation outgrows individual systems.</h2>
          <p className="body-foundry text-white/80 md:text-lg">
            When you need full architectural control across your entire operation — unified visibility, coordinated execution, and nothing slipping through the cracks — that&apos;s Dominus OS.
          </p>
          <div className="pt-2">
            <Button href="/dominus-os" variant="forgeSecondary" className="justify-center">
              Learn about Dominus OS
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
