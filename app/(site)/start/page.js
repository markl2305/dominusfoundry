import IntakeForm from "../../../components/IntakeForm";
import ContactCTA from "../../../components/ContactCTA";

// RETOOL 2026-10-07 (HANDOFF §5.7): the retired seven-day system-design
// promise, the coming-soon video placeholder and the bespoke-automation example
// offer are removed. The IntakeForm (fields, /api/lead destination, consent and
// sourceSystem "Intake Form") is unchanged; only its visible wording moved.
export const metadata = {
  title: "Start with Sabina — Dominus Foundry",
  description:
    "Tell us where calls, follow-up, or recurring work are getting stuck. We'll use that context to discuss where Sabina, your company's own AI, could begin.",
};

const stuckPoints = [
  "Calls that go unanswered",
  "Follow-ups that get buried",
  "Questions your team keeps answering twice",
  "Work that keeps returning to the owner",
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
              Start with the work your team needs help carrying.
            </h1>
            <div className="divider-forged mx-auto max-w-xs" />
            <p className="body-foundry text-white md:text-lg">
              Tell us where calls, follow-up, or recurring work are getting stuck. We&apos;ll use that context to discuss where Sabina could begin in your company.
            </p>
            <a className="inline-block font-semibold text-orange-200 underline underline-offset-4" href="https://hiresabina.ai/evaluate">
              See Sabina work →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="heading-forge-md text-slate-900">Where teams tell us work gets stuck:</h2>
                <ul className="space-y-3">
                  {stuckPoints.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="text-forge-700 font-bold mt-0.5">✓</span>
                      <span className="body-foundry text-slate-800">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 md:p-10 shadow-xl">
              <div className="space-y-2 mb-6">
                <p className="label-foundry">Tell us where work is stuck</p>
                <h2 className="heading-forge-md text-slate-900">We&apos;ll discuss where Sabina could begin</h2>
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
