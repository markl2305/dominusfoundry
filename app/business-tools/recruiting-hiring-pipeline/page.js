import Link from "next/link";
import Button from "../../../components/Button";

export const metadata = {
  title: "Recruiting & Hiring Pipeline | Dominus Foundry",
  description:
    "Applicant intake to offer — with governance at every step.",
};

export default function RecruitingHiringPipelinePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6 relative">
          <p className="text-sm font-medium text-forge-300">
            <Link href="/mentis" className="hover:text-white transition-colors">
              Designed with Mentis
            </Link>
          </p>
          <h1 className="heading-forge-xl text-white">Recruiting &amp; Hiring Pipeline</h1>
          <p className="body-foundry text-white md:text-lg foundry-hero-lead">
            Applicant intake to offer — with governance at every step.
          </p>
          <Button href="#hiring-cta" className="justify-center">
            See the Hiring Flow
          </Button>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">Why This Exists</h2>
          <p className="body-foundry text-slate-800">
            Hiring without structure creates liability and inconsistency.
          </p>
          <p className="body-foundry text-slate-800">
            Resumes lost in inboxes. Interview scheduling chaos. Scorecards missing or inconsistent. Offers delayed.
          </p>
          <p className="body-foundry text-slate-800">
            Recruiting &amp; Hiring Pipeline enforces discipline from application to signed offer.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg">What This System Does</h2>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Captures applicants from job boards and referrals",
              "Screens against defined criteria",
              "Schedules interviews automatically",
              "Collects scorecards and feedback",
              "Routes approvals for offers",
              "Maintains hiring audit trail",
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
          <h2 className="heading-forge-lg">How It&apos;s Built</h2>
          <p className="body-foundry text-slate-800">
            Every candidate moves through the same governed process.
          </p>
          <p className="body-foundry text-slate-800">Behind the scenes:</p>
          <ul className="space-y-3 body-foundry text-slate-800">
            {[
              "Intake sources feed structured applicant data",
              "Screening criteria applied consistently",
              "Interview scheduling coordinated automatically",
              "Scorecards collected and aggregated",
              "Offer approvals routed with accountability",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="body-foundry text-slate-800">
            Orchestration via n8n — hiring stays compliant without HR overhead.
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
          <h2 className="heading-forge-lg">Who It&apos;s For</h2>
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

      <section className="bg-[var(--foundry-bg-alt)]">
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

      <section className="bg-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 space-y-4">
            <h3 className="heading-forge-md text-slate-900">Part of something larger</h3>
            <p className="body-foundry text-slate-700">
              Recruiting &amp; Hiring Pipeline is designed with Mentis — the same architecture that powers all our systems. Use it standalone, or connect it with Client Onboarding, Ops Reporting, and more. When you&apos;re ready to run your entire operation on one unified platform, everything clicks.
            </p>
            <Link href="/mentis" className="text-forge-700 font-semibold underline hover:text-forge-900">
              Learn about Mentis →
            </Link>
          </div>
        </div>
      </section>

      <section id="hiring-cta" className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg">Hire with discipline.</h2>
          <Button href="/contact?interest=Recruiting%20%26%20Hiring%20Pipeline#contact" className="justify-center">
            Talk to Us About Recruiting &amp; Hiring Pipeline
          </Button>
          <p className="text-sm text-slate-600">Designed with Mentis. Governed, auditable, and integration-ready.</p>
        </div>
      </section>
    </>
  );
}
