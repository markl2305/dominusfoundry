import Link from "next/link";
import Button from "../../components/Button";
import ContactCTA from "../../components/ContactCTA";

export const metadata = {
  title: "Dominus Foundry | The Company Behind Forge",
  description:
    "We built Forge — the operating system for the trades. 9 pending patents. From scan to invoice, one platform. Replacing D-Tools, ServiceTitan, and everything in between.",
};

const pipeline = [
  {
    step: "Scan",
    label: "Walk the building",
    body: "iPhone LiDAR captures a complete 3D spatial model — walls, doors, windows, dimensions. 10 minutes.",
  },
  {
    step: "Design",
    label: "Get the design",
    body: "AI generates a complete system design, bill of materials, and rack elevations from the scan data.",
  },
  {
    step: "Propose",
    label: "Send the proposal",
    body: "Professional proposal with pricing, scope, and e-signature — auto-generated and client-ready.",
  },
  {
    step: "Manage",
    label: "Run the project",
    body: "Scheduling, dispatch, tasks, job costing, invoicing, service contracts — full lifecycle in one platform.",
  },
];

const stats = [
  { value: "9", label: "Pending Patents" },
  { value: "50", label: "States Compliance" },
  { value: "10 min", label: "Scan to Proposal" },
  { value: "$599", label: "Starting Monthly" },
];

const replaces = [
  "D-Tools",
  "ServiceTitan",
  "ProjX360",
  "ConnectWise",
  "Spreadsheets",
  "Manual Takeoffs",
];

export default function Home() {
  return (
    <>
      {/* Careers Banner */}
      <section className="bg-forge-900 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-forge-300/20 border border-forge-300/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forge-300">
                Hiring
              </span>
              <p className="text-white font-semibold text-sm">
                Founding Sales Reps · 100% first-month commission · 15% residual forever · 9 pending patents
              </p>
            </div>
            <Button href="/careers" className="shrink-0 justify-center text-xs py-2 px-4">
              View Roles
            </Button>
          </div>
        </div>
      </section>

      {/* Hero — Forge First */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl space-y-6">
            <p className="label-foundry text-orange-200">Dominus Foundry presents</p>
            <h1 className="heading-forge-xl text-white leading-tight">
              Forge — the operating system for the trades.
            </h1>
            <p className="body-foundry text-white/90 md:text-xl">
              One platform replaces D-Tools, ServiceTitan, ProjX360, and the 3-4 other tools your team is paying for. From LiDAR scan to invoice — 9 pending patents, zero comparable competition.
            </p>
            <p className="body-foundry text-white/70 md:text-lg">
              Walk the building with your iPhone. Get a complete system design, bill of materials, and client-ready proposal in 10 minutes. Then manage the entire project lifecycle without switching tools.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-4">
              <Button
                href="https://buildwithforge.app"
                className="justify-center"
              >
                See Forge →
              </Button>
              <Button
                href="/about"
                variant="forgeSecondary"
                className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
              >
                About the company
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Forge Replaces */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="text-center space-y-4 mb-10">
            <p className="label-foundry">One platform. Not six.</p>
            <h2 className="heading-forge-lg">What Forge replaces</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {replaces.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full border-2 border-forge-300/40 px-5 py-2.5 text-sm font-semibold text-slate-800 line-through decoration-forge-600 decoration-2"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="text-center body-foundry text-slate-700 mt-6 max-w-2xl mx-auto">
            Flat-rate pricing. Unlimited users. Zero setup fees. Every competitor charges per-user — their pricing works against the customer as they grow. Ours doesn&apos;t.
          </p>
        </div>
      </section>

      {/* The Pipeline */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-12">
          <div className="text-center space-y-4">
            <p className="label-foundry">The Pipeline</p>
            <h2 className="heading-forge-lg">Scan. Design. Propose. Manage.</h2>
            <p className="body-foundry text-slate-700 max-w-2xl mx-auto">
              Forge compresses the entire project lifecycle — from walking into a building to collecting the final invoice — into a single, governed workflow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((item, i) => (
              <div key={item.step} className="card-forged rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-forge-700 text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <h3 className="font-crimson text-xl font-bold text-slate-900">{item.step}</h3>
                </div>
                <p className="text-forge-700 font-semibold text-sm">{item.label}</p>
                <p className="text-sm text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hyperion — The Differentiator */}
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="label-foundry text-forge-300">Patent-Pending Technology</p>
            <h2 className="heading-forge-lg text-white">
              Hyperion Spatial Intelligence
            </h2>
            <p className="body-foundry text-white/80 md:text-lg">
              A technician scans a building with their iPhone. Hyperion generates a complete system design, bill of materials, and client-ready proposal — automatically. No manual takeoff. No spreadsheets. No waiting.
            </p>
            <p className="body-foundry text-white/80 md:text-lg">
              No competitor has filed anything comparable. No competitor can replicate it without rebuilding their architecture from scratch. Every scan feeds a compounding intelligence model that gets smarter with scale.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Hyperion Scan", desc: "iPhone LiDAR → 3D model → auto-BOM → auto-proposal" },
              { name: "Hyperion Vision", desc: "Photo-based dimension estimation and equipment identification" },
              { name: "Hyperion Blueprint", desc: "Extract spatial models from architectural plans and as-builts" },
              { name: "Hyperion SiteIQ", desc: "Structured site assessment: ceilings, cables, mounting, environment" },
            ].map((module) => (
              <div key={module.name} className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
                <h3 className="font-semibold text-white">{module.name}</h3>
                <p className="text-sm text-white/60">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <p className="font-crimson text-5xl md:text-6xl font-bold text-slate-900">{stat.value}</p>
                <p className="label-foundry">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="label-foundry">The Company</p>
              <h2 className="heading-forge-lg">Dominus Foundry</h2>
              <p className="body-foundry text-slate-800">
                Built and run by Mark &amp; Bri Lord — operators who balance code, finance, and day-to-day operations. We built Forge because we saw an industry running on disconnected tools, manual processes, and per-user pricing models designed to extract maximum revenue from the customer.
              </p>
              <p className="body-foundry text-slate-800">
                We believe the trades deserve the same caliber of technology that enterprise companies have — without enterprise pricing or enterprise complexity.
              </p>
              <Link href="/about" className="inline-flex text-forge-700 font-semibold underline hover:text-forge-900">
                More about us →
              </Link>
            </div>
            <div className="space-y-4">
              <div className="card-forged-premium rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-slate-800 leading-relaxed italic">
                  &quot;Fide et Familia&quot; — Faith and Family. That&apos;s what the crest says, and that&apos;s how we build. Every system we ship carries the Lord name. If it doesn&apos;t work, it&apos;s our reputation on the line.
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">Mark Lord, Founder</p>
              </div>
              <div className="card-forged rounded-2xl p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-crimson text-2xl font-bold text-slate-900">9</p>
                    <p className="text-xs text-slate-600">Patents Pending</p>
                  </div>
                  <div>
                    <p className="font-crimson text-2xl font-bold text-slate-900">270+</p>
                    <p className="text-xs text-slate-600">Regulatory Records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forge-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-18 text-center space-y-4">
          <h2 className="heading-forge-lg text-white">Stop estimating. Start scanning.</h2>
          <p className="body-foundry text-forge-100/80">
            See what Forge can do for your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              href="https://buildwithforge.app"
              className="justify-center"
            >
              Visit buildwithforge.app →
            </Button>
            <Button
              href="/careers"
              variant="forgeSecondary"
              className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
            >
              Join the team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Questions?</h2>
            <p className="body-foundry text-slate-800">
              Reach out directly. We respond within one business day.
            </p>
          </div>
          <div className="flex justify-center">
            <ContactCTA />
          </div>
        </div>
      </section>
    </>
  );
}
