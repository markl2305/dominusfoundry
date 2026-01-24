import Button from "../../../components/Button";

export const metadata = {
  title: "Recruiting & Hiring Pipeline | Dominus Foundry",
  description:
    "Recruiting & Hiring Pipeline moves candidates from application to decision with structure, consistency, and accountability.",
};

export default function RecruitingHiringPipelinePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <h1 className="heading-forge-xl text-white">Recruiting &amp; Hiring Pipeline</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Move candidates from application to decision with structure, consistency, and accountability.
          </p>
          <Button href="#hiring-flow" className="justify-center">
            See the Hiring Flow
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Hiring Breaks Without Process</h2>
          <p className="body-foundry text-slate-800">
            Unstructured hiring leads to delays, inconsistent evaluation, and costly mis-hires. Resumes get lost, interviews drift, and decisions rely more on memory than evidence.
          </p>
          <p className="body-foundry text-slate-800">
            Recruiting &amp; Hiring Pipeline replaces guesswork with a disciplined hiring system.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Captures applications from multiple sources",
              "Standardizes candidate intake",
              "Coordinates interview scheduling",
              "Applies structured evaluation criteria",
              "Tracks hiring stages and decisions",
              "Maintains a complete hiring audit trail",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="hiring-flow" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Built as a Decision Pipeline</h2>
          <p className="body-foundry text-slate-800">
            Recruiting &amp; Hiring Pipeline is designed as a repeatable evaluation system — not an inbox of resumes.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Candidate data is structured at intake",
              "Interview stages follow defined sequences",
              "Evaluation criteria are enforced consistently",
              "Decisions are logged with supporting context",
              "Exceptions and delays are surfaced early",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Workflow orchestration is handled via n8n, allowing hiring processes to adapt to different roles without losing discipline.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why It Matters</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Faster hiring cycles",
              "More consistent evaluations",
              "Reduced bias from ad-hoc decision-making",
              "Clear documentation for every hire",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Who It’s For</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Growing businesses",
              "Operations and leadership teams",
              "Organizations hiring across multiple roles",
              "Teams that need repeatable hiring discipline",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Integrations</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Application forms",
              "Calendars",
              "Communication tools",
              "Internal evaluation systems",
              "Document storage",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Hire with Confidence</h2>
          <Button href="/contact?interest=Recruiting%20%26%20Hiring%20Pipeline#contact" className="justify-center">
            Talk to Us About Recruiting &amp; Hiring Pipeline
          </Button>
          <p className="text-xs text-slate-700">Built to Dominus Foundry architectural standards.</p>
        </div>
      </section>
    </>
  );
}
