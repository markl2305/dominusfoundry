import Button from "../../components/Button";

export const metadata = {
  title: "Mentis - Human-Governed Intelligence | Dominus Foundry",
  description:
    "Mentis is the Human-Governed Intelligence upgrade that makes the Foundry tool suite operate as one governed system.",
};

export default function MentisPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 space-y-6">
          <p className="label-foundry text-forge-800">Mentis</p>
          <h1 className="heading-forge-lg text-slate-900">Mentis - Human-Governed Intelligence</h1>
          <p className="body-foundry text-slate-900 foundry-hero-lead">
            Mentis is the upgrade when multiple tool families must coordinate. It keeps delegation accountable with governance,
            audit trails, and clear ownership across every handoff.
          </p>
          <p className="body-foundry text-slate-800">
            It&apos;s not a chatbot. It&apos;s the operating layer that makes the Foundry tool suite behave like one governed system --
            with enforceable boundaries, escalation paths, and a unified ledger of decisions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="https://getmentis.ai" target="_blank" rel="noopener noreferrer" className="justify-center">
              Explore Mentis at scale
            </Button>
            <Button href="/business-tools" variant="forgeSecondary" className="justify-center">
              Back to Business Tools
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-10">
        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">What “Human-Governed Intelligence” means</h2>
          <p className="body-foundry">
            Mentis makes delegation safe at scale. Every action is governed, every decision is traceable, and ownership
            stays with the operators who run the business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Governed delegation",
              body: "Tools act only within the permissions and policies you approve.",
            },
            {
              title: "Audit trails by design",
              body: "Every action is logged with source, scope, and accountability.",
            },
            {
              title: "Enforceable boundaries",
              body: "Clear limits and guardrails prevent drift and overreach.",
            },
            {
              title: "Escalation & ownership",
              body: "When stakes rise, Mentis routes decisions back to human authority.",
            },
            {
              title: "Multi-tool coordination",
              body: "Calls, cash flow, onboarding, and reporting stay synchronized under one operating model.",
            },
          ].map((item) => (
            <div key={item.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm space-y-2">
              <h3 className="heading-forge-md text-slate-900">{item.title}</h3>
              <p className="body-foundry text-slate-800">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-6">
          <h2 className="heading-forge-lg text-slate-900">Mentis Standard (OS upgrade)</h2>
          <p className="body-foundry text-slate-800">
            Mentis Standard is the shared operating layer that makes multiple tools behave like one system: a unified event
            ledger, governed permissions, audit trail, memory for operational patterns, and clear authority boundaries so
            delegation stays accountable.
          </p>
          <p className="body-foundry text-slate-800">
            If you want two or more tool families working together, Mentis becomes the upgrade path.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-6">
        <h2 className="heading-forge-lg text-slate-900">When Mentis is the right move</h2>
        <ul className="space-y-3 body-foundry">
          {[
            "You need cross-tool visibility without living in dashboards.",
            "Governance, audit trails, and escalation are non-negotiable.",
            "Multiple tools must coordinate around shared ownership and boundaries.",
            "You want delegation without losing accountability.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-4">
          <h2 className="heading-forge-lg text-slate-900">Ready for governed scale?</h2>
          <p className="body-foundry text-slate-800">
            Mentis is the force-multiplier for teams who need multiple tools to operate as one governed system.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="https://getmentis.ai" target="_blank" rel="noopener noreferrer" className="justify-center">
              Visit getmentis.ai
            </Button>
            <Button href="/business-tools" variant="forgeSecondary" className="justify-center">
              See the tool catalog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
