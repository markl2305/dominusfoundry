import Link from "next/link";

export const metadata = {
  title: "Business Tools | Dominus Foundry",
  description:
    "Operator-grade systems that reduce drag while staying governed and auditable.",
};

const toolFamilies = [
  {
    id: "voice-concierge",
    title: "Voice Concierge",
    what: "Answers, qualifies, books, and routes calls.",
    bestFit: "Appointment-driven operators; membership clubs; clinics; service teams.",
    href: "/business-tools/voice-concierge",
  },
  {
    id: "lead-intake",
    title: "Lead Intake → Booking",
    what: "Captures leads, qualifies, routes, and books.",
    bestFit: "Founders and ops leads who lose leads to slow follow-up.",
    href: "/business-tools/lead-intake-booking",
  },
  {
    id: "lead-to-cash",
    title: "Lead-to-Cash (Invoicing + AR)",
    what: "Automates the path from closed deal to collected revenue.",
    bestFit: "Service + light product teams with recurring invoices.",
    href: "/business-tools/lead-to-cash",
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding Engine",
    what: "Moves from signed deal to operational client.",
    bestFit: "Agencies, professional services, and B2B teams.",
    href: "/business-tools/client-onboarding-engine",
  },
  {
    id: "support-triage",
    title: "Support Triage Desk",
    what: "Intakes, classifies, routes, and resolves support requests.",
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
    what: "Generates, routes, signs, archives, and audits documents.",
    bestFit: "Regulated-ish ops and teams that live in PDFs and approvals.",
    href: "/business-tools/document-compliance-automations",
  },
  {
    id: "recruiting",
    title: "Recruiting & Hiring Pipeline",
    what: "Applicant intake to offer with governance at every step.",
    bestFit: "Companies hiring without HR overhead.",
    href: "/business-tools/recruiting-hiring-pipeline",
  },
  {
    id: "vendor-purchasing",
    title: "Vendor & Purchasing Workflow",
    what: "Request, approve, order, reconcile, and restock.",
    bestFit: "Ops-heavy teams; hospitality; multi-location.",
    href: "/business-tools/vendor-purchasing-workflow",
  },
];

export default function BusinessToolsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <p className="label-foundry text-orange-200">Business Tools Catalog</p>
          <h1 className="heading-forge-xl text-white">Tool families forged for operators.</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Operator-grade systems that reduce drag while staying governed and auditable. Each ships as a durable system with clear inputs, outputs, and ownership boundaries.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {toolFamilies.map((tool) => (
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
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-700 text-center">Built to Dominus Foundry architectural standards.</p>
        </div>
      </section>
    </>
  );
}
