import Button from "../../components/Button";
import InvoiceFlowForm from "../../components/InvoiceFlowForm";

export const metadata = {
  title: "InvoiceFlow - Automated Invoicing Built on QuickBooks | Dominus Foundry",
  description:
    "Stop chasing invoices. InvoiceFlow migrates and automates your invoicing around QuickBooks so payments land on time without babysitting.",
};

export default function InvoiceFlowPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-tan-100 to-tan-200">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-700">
                InvoiceFlow Implementation
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-navy-900">
                Stop Chasing Invoices. Let InvoiceFlow Clean Up Your Cash Flow.
              </h1>
              <p className="text-lg md:text-xl text-navy-700 leading-relaxed">
                We migrate your invoicing into a clean, automated system built around QuickBooks - so every invoice, payment, and reminder happens on time without you babysitting it.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#invoiceflow-form" className="justify-center">
                  Get My InvoiceFlow Plan
                </Button>
                <Button href="tel:+15052261457" variant="secondary">
                  Talk now
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-bronze-300 bg-white p-4 shadow-sm">
                  <p className="text-sm text-navy-600">Designed around</p>
                  <p className="text-base font-semibold text-navy-900">QuickBooks-first workflows</p>
                </div>
                <div className="rounded-xl border border-bronze-300 bg-white p-4 shadow-sm">
                  <p className="text-sm text-navy-600">Faster AR</p>
                  <p className="text-base font-semibold text-navy-900">Automatic reminders &amp; follow-ups</p>
                </div>
                <div className="rounded-xl border border-bronze-300 bg-white p-4 shadow-sm">
                  <p className="text-sm text-navy-600">Owners in the loop</p>
                  <p className="text-base font-semibold text-navy-900">We configure, you approve</p>
                </div>
              </div>
            </div>

            <div id="invoiceflow-form" className="rounded-2xl border-2 border-navy-500 bg-white p-6 shadow-xl">
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-navy-600">Tell us about your setup</p>
                <h2 className="text-2xl font-bold text-navy-900">We&apos;ll map your InvoiceFlow plan</h2>
                <p className="text-sm text-navy-700">
                  Migration, clean-up, and automation tuned to your accounting stack.
                </p>
              </div>
              <InvoiceFlowForm />
              <p className="mt-4 text-xs text-navy-600">
                We respond within one business day. No pressure, no spam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Built for owners and operators who can&apos;t babysit their books.</h2>
            <p className="text-lg text-navy-700">InvoiceFlow is for teams tired of slow AR, manual follow-ups, and messy files.</p>
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
              <div key={item.title} className="rounded-2xl border border-bronze-300 bg-tan-50 p-6 shadow-sm">
                <div className="text-3xl" aria-hidden="true">{item.icon}</div>
                <h3 className="mt-3 text-xl font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">How InvoiceFlow cleans up your invoicing in days, not months.</h2>
            <p className="text-lg text-navy-700">A clear, owner-friendly implementation path with no mystery steps.</p>
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
              <div key={step.title} className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-orange-700">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm text-navy-700 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Why operators trust InvoiceFlow.</h2>
            <p className="text-lg text-navy-700">Reduce risk, get reliable collections, and keep your QuickBooks file clean.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Payment collection speed", value: "Up to 30-50% faster", note: "Placeholder metric - replace with validated data." },
              { label: "Manual touches removed", value: "50-70% fewer", note: "Placeholder metric - replace with validated data." },
              { label: "Lost invoice incidents", value: "Near-zero once live", note: "Placeholder metric - replace with validated data." },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-bronze-300 bg-tan-50 p-6 shadow-sm">
                <p className="text-sm font-semibold text-navy-700">{metric.label}</p>
                <p className="mt-2 text-2xl font-bold text-navy-900">{metric.value}</p>
                <p className="mt-2 text-xs text-navy-600">{metric.note}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-navy-200 bg-gradient-to-r from-white to-tan-100 p-6 md:p-8 shadow-sm">
            <p className="text-sm uppercase font-semibold tracking-[0.08em] text-orange-700">Testimonial - placeholder</p>
            <p className="mt-3 text-lg text-navy-800 leading-relaxed">
              “TODO: Replace with real customer quote about faster payments, cleaner books, and less chasing.”
            </p>
            <p className="mt-2 text-sm font-semibold text-navy-700">Ops Director, regional service business</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">InvoiceFlow plays nicely with your existing tools.</h2>
            <p className="text-lg text-navy-700">Built for QuickBooks, adaptable to the payment and CRM stack you already run.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy-900">QuickBooks-first</h3>
              <p className="mt-2 text-sm text-navy-700">Online or Desktop. We align customer lists, items, and payments to the right ledgers.</p>
            </div>
            <div className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy-900">CRM &amp; payment friendly</h3>
              <p className="mt-2 text-sm text-navy-700">Connect to typical CRMs or processors so quotes turn into invoices without duplicate entry.</p>
              <p className="mt-2 text-xs text-navy-600">Logo placeholders - swap in approved marks later.</p>
            </div>
            <div className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy-900">Documented guardrails</h3>
              <p className="mt-2 text-sm text-navy-700">Clear SOPs and escalation paths so your team knows what&apos;s automated and what&apos;s manual.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Simple, project-based implementation with optional ongoing support.</h2>
            <p className="text-lg text-navy-700">Done-with-you or done-for-you. Clear scope, fixed pricing for migration, optional monthly support after.</p>
          </div>
          <div className="rounded-2xl border border-bronze-300 bg-tan-50 p-6 md:p-8 shadow-sm space-y-4">
            <ul className="space-y-3 text-navy-800">
              <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span><span>One-time project: migration, clean-up, and automation configuration.</span></li>
              <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span><span>Optional monthly support: monitoring, tweaks, and mini-iterations.</span></li>
              <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span><span>Owner visibility: reconciled proof and permissions documented.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button href="#invoiceflow-form" className="justify-center">Plan My InvoiceFlow Build</Button>
              <Button href="tel:+15052261457" variant="secondary" className="justify-center">Call to discuss scope</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center">Common questions</h2>
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

      <section className="bg-navy-500 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Your invoices can run themselves. Your business can&apos;t.</h2>
          <p className="text-lg text-bronze-200">
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
