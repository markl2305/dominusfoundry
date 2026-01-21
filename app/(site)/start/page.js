import IntakeForm from "../../../components/IntakeForm";
import ContactCTA from "../../../components/ContactCTA";

export const metadata = {
  title: "Get Started — Dominus Foundry",
  description:
    "Tell us what's broken — get a system design in 7 days. Custom AI systems that plug into how your business actually runs.",
};

const exampleOutcomes = [
  "Voice orders going straight into Square",
  "Private event bookings with automatic owner notification",
  "Calls answered, qualified, and booked without staff",
  "Invoices sent and followed up automatically",
  "Workflows that notify the right person at the right time",
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
              Tell us what&apos;s broken — get a system design in 7 days
            </h1>
            <div className="divider-forged mx-auto max-w-xs" />
            <p className="body-foundry text-white md:text-lg">
              You don&apos;t need another dashboard. You need a system that plugs into the tools you already use and handles the work you&apos;re tired of doing manually. Tell us what&apos;s not working — we&apos;ll design the fix.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="heading-forge-md text-slate-900">Example outcomes we build:</h2>
                <ul className="space-y-3">
                  {exampleOutcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="text-forge-700 font-bold mt-0.5">✓</span>
                      <span className="body-foundry text-slate-800">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video placeholder */}
              <div className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <div className="aspect-video bg-forge-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-forge-200 flex items-center justify-center">
                      <svg className="w-8 h-8 text-forge-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-600">Bri&apos;s intro video (coming soon)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 md:p-10 shadow-xl">
              <div className="space-y-2 mb-6">
                <p className="label-foundry">Tell us what&apos;s broken</p>
                <h2 className="heading-forge-md text-slate-900">We&apos;ll design the fix</h2>
              </div>
              <IntakeForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Prefer to talk first?</h2>
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
