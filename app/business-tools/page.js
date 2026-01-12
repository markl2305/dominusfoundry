import Link from "next/link";
import Button from "../../components/Button";

export const metadata = {
  title: "Business Tools | Dominus Foundry",
  description:
    "A catalog of tool families forged for operators -- governed, auditable, and built to last.",
};

const toolFamilies = [
  {
    id: "voice-concierge",
    title: "Voice Concierge",
    what: "Phone answering, qualification, booking, routing, transcripts, and escalation with governed scripts.",
    bestFit: "Appointment-driven operators; membership clubs; clinics; service teams.",
  },
  {
    id: "lead-intake",
    title: "Lead Intake → Booking",
    what: "Capture inbound leads, qualify, route, and book with guardrails that protect your reputation.",
    bestFit: "Founders and ops leads who lose leads to slow follow-up.",
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding Engine",
    what: "From signed deal to fully onboarded: tasks, docs, billing, project setup, and kickoff scheduling.",
    bestFit: "Agencies, professional services, and B2B teams.",
  },
  {
    id: "lead-to-cash",
    title: "Lead-to-Cash (Invoicing + AR)",
    what: "Quote, invoice, reminders, and payments aligned to accounting source-of-truth with fewer touches.",
    bestFit: "Service + light product teams with recurring invoices.",
  },
  {
    id: "support-triage",
    title: "Support Triage Desk",
    what: "Intake, classification, retrieval, escalation, and SLA tracking across email, chat, and voice.",
    bestFit: "Teams drowning in repetitive support and internal requests.",
  },
  {
    id: "ops-reporting",
    title: "Ops Reporting & Intelligence",
    what: "Unified scoreboards across sales, delivery, finance; anomaly detection; weekly operator briefings.",
    bestFit: "Owners wanting clarity without living in dashboards.",
  },
  {
    id: "doc-compliance",
    title: "Document & Compliance Automations",
    what: "Generate, route, sign, archive, and audit documents with version control and policy rules.",
    bestFit: "Regulated-ish ops and teams that live in PDFs and approvals.",
  },
  {
    id: "recruiting",
    title: "Recruiting & Hiring Pipeline",
    what: "Applicant intake to screening, scheduling, scorecards, and offer workflows under governance.",
    bestFit: "Companies hiring without HR overhead.",
  },
  {
    id: "vendor-purchasing",
    title: "Vendor & Purchasing Workflow",
    what: "Request -> approve -> order -> reconcile -> restock triggers with structured purchasing.",
    bestFit: "Ops-heavy teams; hospitality; multi-location.",
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
            We forge operator-grade tools that reduce operational drag while staying governed and auditable.
          </p>
          <p className="body-foundry font-semibold md:text-xl text-white">
            Voice Concierge is the flagship live tool. The rest are forged on demand.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Choose a tool family to forge.</h2>
            <p className="body-foundry text-slate-800 max-w-3xl mx-auto">
              Each tool family ships as a durable system with clear inputs, outputs, documentation, and ownership boundaries.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {toolFamilies.map((tool) => {
              const interest = encodeURIComponent(tool.title);
              const isVoiceConcierge = tool.id === "voice-concierge";
              const isLeadIntake = tool.id === "lead-intake";
              return (
                <div key={tool.title} id={tool.id}>
                  {isVoiceConcierge ? (
                    <Link href="/business-tools/voice-concierge" className="block card-forged rounded-2xl bg-white p-6 shadow-sm space-y-3">
                      <h3 className="heading-forge-md text-slate-900">{tool.title}</h3>
                      <p className="body-foundry text-slate-800">{tool.what}</p>
                      <p className="text-sm text-slate-700">
                        <span className="label-foundry text-slate-700">Best fit:</span> {tool.bestFit}
                      </p>
                    </Link>
                  ) : isLeadIntake ? (
                    <Link href="/business-tools/lead-intake-booking" className="block card-forged rounded-2xl bg-white p-6 shadow-sm space-y-3">
                      <h3 className="heading-forge-md text-slate-900">{tool.title}</h3>
                      <p className="body-foundry text-slate-800">{tool.what}</p>
                      <p className="text-sm text-slate-700">
                        <span className="label-foundry text-slate-700">Best fit:</span> {tool.bestFit}
                      </p>
                    </Link>
                  ) : (
                    <div className="card-forged rounded-2xl bg-white p-6 shadow-sm space-y-3">
                      <h3 className="heading-forge-md text-slate-900">{tool.title}</h3>
                      <p className="body-foundry text-slate-800">{tool.what}</p>
                      <p className="text-sm text-slate-700">
                        <span className="label-foundry text-slate-700">Best fit:</span> {tool.bestFit}
                      </p>
                      <Button href={`/contact?interest=${interest}#contact`} className="w-full justify-center">
                        Forge this tool
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center space-y-4">
            <p className="body-foundry text-slate-900">
              If you want 2+ tool families, you&apos;re a Mentis candidate (OS upgrade).
            </p>
            <Button href="/mentis" variant="forgeSecondary" className="justify-center">
              Learn about Mentis
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
