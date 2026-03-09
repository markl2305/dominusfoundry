import IntakeForm from "../../../components/IntakeForm";
import ContactCTA from "../../../components/ContactCTA";
import Button from "../../../components/Button";

export const metadata = {
  title: "Get Started — Dominus Foundry",
  description:
    "Run the free operations assessment to see what your business is leaving on the table — or tell us what's broken and we'll design the fix.",
};

const exampleOutcomes = [
  "Calls answered, qualified, and booked without pulling staff",
  "Invoices sent and followed up automatically",
  "Leads responded to in minutes instead of hours",
  "Onboarding that runs itself from signed deal to kickoff",
  "One place to see what matters across the operation",
];

export default function StartPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p className="label-foundry text-orange-200">Get Started</p>
            <h1 className="heading-forge-xl text-white leading-tight">
              See what your operation is leaving on the table.
            </h1>
            <div className="divider-forged mx-auto max-w-xs" />
            <p className="body-foundry text-white md:text-lg">
              Most growing businesses lose $100K to $250K per year in operational waste — missed leads, late invoices, manual admin that doesn&apos;t need to exist. The free assessment calculates your exact number.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment First */}
      <section className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              {/* Assessment CTA */}
              <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 md:p-10 shadow-xl space-y-6">
                <div className="space-y-2">
                  <p className="label-foundry text-forge-700">Recommended</p>
                  <h2 className="heading-forge-md text-slate-900">Run the Free Operations Assessment</h2>
                </div>
                <p className="body-foundry text-slate-700">
                  A 3-minute tool that calculates your operational cost using industry benchmarks. You&apos;ll get:
                </p>
                <ul className="space-y-2">
                  {[
                    "Dollar estimate of missed revenue",
                    "Collection and invoice leakage analysis",
                    "Manual overhead cost estimate",
                    "Operational visibility exposure score",
                    "Benchmark comparison to your industry",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-forge-700 font-bold mt-0.5">✓</span>
                      <span className="body-foundry text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href="https://evaluation.dominusfoundry.com" className="w-full justify-center">
                  Run the Assessment — It&apos;s Free
                </Button>
                <p className="text-sm text-slate-500 text-center">Takes 3 minutes. No commitment.</p>
              </div>

              <div className="space-y-4">
                <h2 className="heading-forge-md text-slate-900">What we build for operators:</h2>
                <ul className="space-y-3">
                  {exampleOutcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="text-forge-700 font-bold mt-0.5">✓</span>
                      <span className="body-foundry text-slate-800">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="card-forged rounded-2xl bg-white p-6 md:p-10 shadow-lg">
                <div className="space-y-2 mb-6">
                  <p className="label-foundry">Prefer to talk first?</p>
                  <h2 className="heading-forge-md text-slate-900">Tell us what&apos;s broken</h2>
                  <p className="text-sm text-slate-600">We&apos;ll design the fix.</p>
                </div>
                <IntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Prefer a direct conversation?</h2>
            <p className="body-foundry text-slate-800">
              Call or email us directly. We respond within one business day.
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
