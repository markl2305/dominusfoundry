import Button from "../../components/Button";
import InvoiceFlowForm from "../../components/InvoiceFlowForm";

export const metadata = {
  title: "InvoiceFlow – Automated Invoicing Around QuickBooks | Dominus Foundry",
  description:
    "InvoiceFlow automates invoicing and follow-up around QuickBooks so cash flow doesn’t depend on manual chasing, with context shared through Mentis.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InvoiceFlowPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-tan-100 to-tan-200">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <p className="label-foundry">InvoiceFlow Implementation</p>
              <h1 className="heading-forge-xl text-slate-900">
                InvoiceFlow – Automated Invoicing Around QuickBooks
              </h1>
              <div className="divider-forged" />
              <p className="body-foundry text-slate-900">
                InvoiceFlow sits on top of your QuickBooks data and automates sending, reminders, and follow-up so cash flow doesn’t depend on you chasing every bill by hand. Because InvoiceFlow shares context with Voice Concierge and Orderline through Mentis, your invoicing can reflect what’s actually happening in your sales and operations, not just what’s inside QuickBooks.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#invoiceflow-form" className="justify-center">
                  Get My InvoiceFlow Plan
                </Button>
                <Button href="tel:+18667103313" variant="forgeSecondary">
                  Talk now
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="card-forged rounded-xl bg-white p-4 shadow-sm">
                  <p className="label-foundry">Designed around</p>
                  <p className="text-base font-semibold text-slate-900">QuickBooks-first workflows</p>
                </div>
                <div className="card-forged rounded-xl bg-white p-4 shadow-sm">
                  <p className="label-foundry">Faster AR</p>
                  <p className="text-base font-semibold text-slate-900">Automatic reminders &amp; follow-ups</p>
                </div>
                <div className="card-forged rounded-xl bg-white p-4 shadow-sm">
                  <p className="label-foundry">Owners in the loop</p>
                  <p className="text-base font-semibold text-slate-900">We configure, you approve</p>
                </div>
              </div>
            </div>

            <div id="invoiceflow-form" className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 shadow-xl">
              <div className="space-y-2 mb-4">
                <p className="label-foundry">Tell us about your setup</p>
                <h2 className="heading-forge-md text-slate-900">We&apos;ll map your InvoiceFlow plan</h2>
                <p className="text-sm text-slate-700">
                  Migration, clean-up, and automation tuned to your accounting stack.
                </p>
              </div>
              <InvoiceFlowForm />
              <p className="mt-4 text-xs text-slate-700">
                We respond within one business day. No pressure, no spam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="heading-forge-lg">Built for owners and operators who can&apos;t babysit their books.</h2>
            <p className="body-foundry text-slate-800">InvoiceFlow is for teams tired of slow AR, manual follow-ups, and messy files.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Spreadsheets instead of a pipeline",
                body: "We replace brittle spreadsheets and email threads with a clean, tracked invoice flow.",
                icon: "📑",
              },
              {
                title: "Slow AR and endless reminders",
                body: "Automated reminders, failed-payment handling, and nudges keep cash moving without nagging.",
                icon: "⏱️",
              },
              {
                title: "Messy QuickBooks balances",
                body: "We reconcile and map customers so every payment lands where it should - no more unallocated chaos.",
                icon: "🧭",
              },
            ].map((item) => (
              <div key={item.title} className="card-forged rounded-2xl bg-tan-50 p-6 shadow-sm">
                <div className="text-3xl" aria-hidden="true">{item.icon}</div>
                <h3 className="mt-3 heading-forge-md text-slate-900">{item.title}</h3>
                <p className="mt-2 body-foundry">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">How InvoiceFlow cleans up your invoicing in days, not months.</h2>
            <p className="body-foundry text-slate-800">A clear, owner-friendly implementation path with no mystery steps.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Assess & Map",
                body: "We review your invoicing stack, clean customer lists, and define how data should land in QuickBooks.",
              },
              {
                title: "Migrate & Configure",
                body: "We align products/services, payment methods, and customer mappings so automations run cleanly.",
              },
              {
                title: "Automate & Optimize",
                body: "Reminders, failed payment handling, and follow-up rules so invoices don&apos;t slip through.",
              },
              {
                title: "Monitor & Support",
                body: "We stay available to adjust workflows as your volume or team changes - no rework surprises.",
              },
            ].map((step, index) => (
              <div key={step.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <p className="label-foundry">Step {index + 1}</p>
                <h3 className="mt-2 heading-forge-md text-slate-900">{step.title}</h3>
                <p className="mt-2 body-foundry">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Why operators trust InvoiceFlow.</h2>
            <p className="body-foundry text-slate-800">Reduce risk, get reliable collections, and keep your QuickBooks file clean.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Payment collection speed", value: "Target outcome: 30-50% faster", note: "Based on automated reminders and clear ownership." },
              { label: "Manual touches removed", value: "Target outcome: 50-70% fewer", note: "Invoices flow without constant nudges from staff." },
              { label: "Lost invoice incidents", value: "Target outcome: near-zero once live", note: "Centralized logging and reconciled mappings." },
            ].map((metric) => (
              <div key={metric.label} className="card-forged rounded-2xl bg-tan-50 p-6 shadow-sm">
                <p className="label-foundry text-forge-700">{metric.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{metric.value}</p>
                <p className="mt-2 text-xs text-slate-700">{metric.note}</p>
              </div>
            ))}
          </div>
          <div className="card-forged-premium rounded-2xl bg-gradient-to-r from-forge-50 to-white p-6 md:p-8 shadow-sm">
            <p className="label-foundry">Operator feedback</p>
            <p className="mt-3 text-lg text-slate-900 leading-relaxed">
              “Collections sped up because nothing slips through cracks anymore. The reminders, failed payments, and reconciliations just happen.”
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-800">Ops Director, regional service business</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">InvoiceFlow plays nicely with your existing tools.</h2>
            <p className="body-foundry text-slate-800">Built for QuickBooks, adaptable to the payment and CRM stack you already run.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-forged rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="heading-forge-md text-slate-900">QuickBooks-first</h3>
              <p className="mt-2 body-foundry">Online or Desktop. We align customer lists, items, and payments to the right ledgers.</p>
            </div>
            <div className="card-forged rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="heading-forge-md text-slate-900">CRM &amp; payment friendly</h3>
              <p className="mt-2 body-foundry">Connect to typical CRMs or processors so quotes turn into invoices without duplicate entry.</p>
              <p className="mt-2 text-xs text-slate-700">Integrations chosen based on your existing stack—no forced rip-and-replace.</p>
            </div>
            <div className="card-forged rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="heading-forge-md text-slate-900">Documented guardrails</h3>
              <p className="mt-2 body-foundry">Clear SOPs and escalation paths so your team knows what&apos;s automated and what&apos;s manual.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="heading-forge-lg">Simple, project-based implementation with optional ongoing support.</h2>
            <p className="body-foundry text-slate-800">Done-with-you or done-for-you. Clear scope, fixed pricing for migration, optional monthly support after.</p>
          </div>
          <div className="card-forged rounded-2xl bg-tan-50 p-6 md:p-8 shadow-sm space-y-4">
            <ul className="space-y-3 text-slate-800">
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>One-time project: migration, clean-up, and automation configuration.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>Optional monthly support: monitoring, tweaks, and mini-iterations.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>Owner visibility: reconciled proof and permissions documented.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button href="#invoiceflow-form" className="justify-center">Plan My InvoiceFlow Build</Button>
              <Button href="tel:+18667103313" variant="forgeSecondary" className="justify-center">Call to discuss scope</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg text-center">Common questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What if my QuickBooks file is already a mess?",
                a: "We start by stabilizing what you have. That means cleaning customer lists, resolving unapplied payments, and documenting guardrails so automation runs on a clean foundation.",
              },
              {
                q: "How long does implementation take?",
                a: "Most teams go live in 1-2 weeks from kickoff. Faster if your customer lists are already accurate, longer if we pair it with a clean-up sprint.",
              },
              {
                q: "Will this lock me into one tool forever?",
                a: "No. We design InvoiceFlow around QuickBooks because that's your source of truth, but we keep integrations modular so you can swap CRMs or processors without starting over.",
              },
              {
                q: "Do you work with both QuickBooks Online and Desktop?",
                a: "Yes. We prefer QuickBooks Online for automation, but we support Desktop during transition and migrate you cleanly when ready.",
              },
              {
                q: "What kind of businesses is InvoiceFlow best for?",
                a: "Service and light product businesses issuing 50-1,000+ invoices per month that need predictable AR without adding headcount.",
              },
            ].map((item) => (
              <details key={item.q} className="group rounded-xl border border-bronze-300 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
                  <span>{item.q}</span>
                  <span className="text-navy-400 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-4 text-sm text-navy-700 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-forge-900 to-steel-700 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg text-white">Your invoices can run themselves. Your business can&apos;t.</h2>
          <p className="body-foundry text-forge-50/90">
            Let&apos;s map out a clean, automated InvoiceFlow setup that fits your reality.
          </p>
          <Button href="#invoiceflow-form" className="justify-center">
            Get My InvoiceFlow Plan
          </Button>
        </div>
      </section>
    </>
  );
}
