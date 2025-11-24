import Button from "../../components/Button";
import ContactCTA from "../../components/ContactCTA";
import LeadForm from "../../components/LeadForm";
import StickyQuoteButton from "../../components/StickyQuoteButton";

export const metadata = {
  title: 'QuickBooks Desktop Migration — Dominus Foundry',
  description: 'Move from QuickBooks Desktop to Online in 5-7 days with zero data loss, reconciled reports, and owner-led guidance.',
};

export default function QBMigration() {
  return (
    <>
      <div className="bg-orange-600 text-white py-3">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm md:text-base font-semibold">
          QuickBooks Desktop 2022 support has ended. Desktop 2024 ends in 2027. Protect your history before bank feeds and payroll shut off.
        </div>
      </div>

      <section className="bg-gradient-to-b from-tan-200 to-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="label-foundry">QuickBooks Desktop Migration</p>
            <h1 className="heading-forge-xl text-slate-900">
              Move QuickBooks Desktop to Online without losing your history or your mind.
            </h1>
            <div className="divider-forged" />
            <p className="body-foundry">
              5-7 day turnaround. Desktop file stays intact. Reconciled reports, CPA-friendly handoff, and personal guidance the whole way.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#get-quote" className="justify-center">Review My QuickBooks File</Button>
              <Button href="tel:+15052261457" variant="forgeSecondary" className="justify-center">Call Mark now</Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="card-forged bg-white p-3 shadow-sm">
                <span className="label-foundry text-forge-700">Risk control</span>
                <p className="text-sm text-slate-800">Your Desktop file remains untouched — we work from secure copies.</p>
              </div>
              <div className="card-forged bg-white p-3 shadow-sm">
                <span className="label-foundry text-forge-700">Fixed price</span>
                <p className="text-sm text-slate-800">Quotes before kickoff so you know the exact cost.</p>
              </div>
              <div className="card-forged bg-white p-3 shadow-sm">
                <span className="label-foundry text-forge-700">Owner access</span>
                <p className="text-sm text-slate-800">Direct access to Mark &amp; Bri. No anonymous call center.</p>
              </div>
            </div>
          </div>

          <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-forge-700 text-white flex items-center justify-center font-semibold">DF</div>
              <div>
                <p className="text-sm text-slate-700">Owner-led migration</p>
                <p className="text-lg font-semibold text-slate-900">You work directly with Mark &amp; Bri.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-forged bg-white p-4 text-center">
                <div className="text-3xl font-bold text-slate-900">5-7</div>
                <p className="text-sm text-slate-800">Business days from kickoff to go-live.</p>
              </div>
              <div className="card-forged bg-white p-4 text-center">
                <div className="text-3xl font-bold text-slate-900">0</div>
                <p className="text-sm text-slate-800">Production risk to your Desktop file.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="label-foundry">What you leave with</p>
              <ul className="space-y-2 text-sm text-slate-800">
                <li>• Clean QuickBooks Online company file.</li>
                <li>• Reconciliation reports your CPA can rely on.</li>
                <li>• Written checklist for your team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="space-y-6 card-forged rounded-2xl bg-white p-6 md:p-8 shadow-sm">
          <h2 className="heading-forge-lg text-slate-900">Why QuickBooks Desktop is ending</h2>
          <p className="body-foundry">
            Intuit stopped selling new Desktop licenses in 2024 and is retiring support on a rolling schedule. When support ends for your version, bank feeds, payroll, and payment integrations shut off, leaving you with manual entry and security risks.
          </p>
          <details className="group rounded-xl border border-bronze-200 bg-tan-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-navy-900">
              <span>Show the technical details</span>
              <span className="text-navy-500 transition-transform group-open:rotate-180">▼</span>
            </summary>
            <ul className="mt-3 space-y-2 text-sm text-navy-700 leading-relaxed">
              <li>• Desktop 2022 support ended May 31, 2025; Desktop 2024 ends in 2027.</li>
              <li>• Bank feeds, payroll tax tables, and payments stop working once support ends.</li>
              <li>• No future security patches, increasing audit and ransomware risk.</li>
              <li>• Converting under deadline increases the chance of errors and downtime.</li>
            </ul>
          </details>
        </div>
      </section>

      <section id="how-it-works" className="bg-tan-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="heading-forge-lg">How the migration works</h2>
            <p className="body-foundry text-slate-800">Clear steps, fixed price, and your Desktop file stays intact until you approve the switch.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 border border-bronze-200 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forge-700 text-white font-bold">1</div>
              <h3 className="mt-4 heading-forge-md text-slate-900">Review &amp; quote</h3>
              <p className="mt-2 body-foundry text-base">You send a Desktop backup copy. We assess complexity and give a fixed price with target dates.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-bronze-200 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forge-700 text-white font-bold">2</div>
              <h3 className="mt-4 heading-forge-md text-slate-900">Build a clean copy</h3>
              <p className="mt-2 body-foundry text-base">We work from copies—export, transform, and import into QuickBooks Online without touching production.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-bronze-200 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forge-700 text-white font-bold">3</div>
              <h3 className="mt-4 heading-forge-md text-slate-900">Reconcile &amp; prove</h3>
              <p className="mt-2 body-foundry text-base">We reconcile balances, generate side-by-side reports, and prepare a CPA packet.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-bronze-200 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forge-700 text-white font-bold">4</div>
              <h3 className="mt-4 heading-forge-md text-slate-900">Approve &amp; go live</h3>
              <p className="mt-2 body-foundry text-base">You review the proof, we train your team, and you switch when you're ready—no surprises.</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-slate-900">Your original Desktop file stays accessible forever.</p>
            <p className="text-slate-700">We work from backups and never overwrite your production data.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="heading-forge-md text-slate-900">You're in the right place if…</h3>
            <ul className="mt-5 space-y-3 text-slate-800">
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>You're on QuickBooks Desktop with 5-50 employees.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>You rely on historical data for taxes, audits, or lender reporting.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>You want owners involved—not a nameless support queue.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>You prefer a fixed price and clear dates.</span></li>
            </ul>
          </div>
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="heading-forge-md text-slate-900">This may not be for you if…</h3>
            <ul className="mt-5 space-y-3 text-slate-800">
              <li className="flex gap-3"><span className="text-forge-700 font-bold">!</span><span>You opened Desktop in the last few months and only need lists.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">!</span><span>You want the cheapest option regardless of data quality.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">!</span><span>You won't be available to review or approve reports.</span></li>
            </ul>
            <p className="mt-4 text-sm text-slate-800">If you still need advice, reach out—we'll point you in the right direction even if we're not the fit.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="heading-forge-lg">Choose your migration tier</h2>
            <p className="body-foundry text-slate-800">All tiers include zero data loss, reconciliation, and CPA-ready handoff. Pick the level of support you need.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Essential",
                price: "$500-750",
                note: "Choose Essential if your books are simple and you only need a current-year move.",
                bullets: [
                  "Lists migration and current-year transactions",
                  "Email support",
                  "Basic reconciliation report",
                ],
                accent: false,
              },
              {
                name: "Professional",
                price: "$1,200-1,800",
                note: "Choose Professional if you're a typical established business that needs history and hands-on support.",
                bullets: [
                  "Everything in Essential",
                  "Up to 3 years of historical data",
                  "CPA handoff packet and phone support",
                  "30-day post-migration support",
                ],
                accent: true,
              },
              {
                name: "Enterprise",
                price: "$2,500-4,000",
                note: "Choose Enterprise if you have multi-entity, inventory, or complex clean up needs.",
                bullets: [
                  "Everything in Professional",
                  "5+ years of historical data",
                  "Custom chart mapping and priority support",
                  "Direct CPA coordination and training",
                ],
                accent: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`${tier.accent ? "card-forged-premium" : "card-forged"} rounded-2xl bg-white p-6 md:p-8 shadow-sm flex flex-col`}
              >
                {tier.accent ? (
                  <div className="mb-2 inline-flex w-fit items-center rounded-full bg-forge-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Most chosen
                  </div>
                ) : (
                  <p className="label-foundry">{tier.name}</p>
                )}
                {!tier.accent && <p className="mt-1 text-xs text-slate-700">Fixed-scope build</p>}
                {tier.accent && <p className="label-foundry">Professional</p>}
                <div className="mt-2 text-3xl font-bold text-slate-900">{tier.price}</div>
                <p className="mt-2 text-sm italic text-slate-800">{tier.note}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-800 flex-1">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-forge-700 font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button href="#get-quote" className="mt-8 w-full justify-center">
                  Review My QuickBooks File
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-navy-600">
            Final pricing depends on transaction volume, data complexity, and timeline. All quotes are fixed-price with no surprises.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-forge-900 to-steel-700 text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="heading-forge-lg text-center mb-10 text-white">What you receive in every migration</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-2xl text-forge-100">✓</p>
              <p className="font-semibold">Complete data export &amp; import</p>
              <p className="text-sm text-bronze-300">Transactions, lists, balances, and mappings moved with care.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl text-forge-100">✓</p>
              <p className="font-semibold">Chart of accounts mapping</p>
              <p className="text-sm text-bronze-300">We preserve what works and document any improvements.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl text-forge-100">✓</p>
              <p className="font-semibold">Historical reconciliation</p>
              <p className="text-sm text-bronze-300">Side-by-side proof that balances match.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl text-forge-100">✓</p>
              <p className="font-semibold">Payroll and sales tax considerations</p>
              <p className="text-sm text-bronze-300">Guidance so filings stay accurate post-migration.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl text-forge-100">✓</p>
              <p className="font-semibold">Training &amp; walkthrough</p>
              <p className="text-sm text-bronze-300">Live review so your team knows exactly how to proceed.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl text-forge-100">✓</p>
              <p className="font-semibold">30-day support window</p>
              <p className="text-sm text-bronze-300">Questions answered quickly while you settle into QBO.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="get-quote" className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 md:p-10 shadow-xl">
          <h2 className="heading-forge-lg text-slate-900">Review My QuickBooks File</h2>
          <p className="mt-3 body-foundry text-slate-800">
            After you submit, you'll get:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-800">
            <li>Fixed price quote based on file complexity and your timeline.</li>
            <li>Project dates for kickoff and completion.</li>
            <li>Calendar link to schedule a kickoff call if you're ready.</li>
          </ol>

          <div className="mt-8">
            <LeadForm />
          </div>

          <p className="mt-6 text-sm text-slate-700">
            We never share your information. You'll get a straightforward quote with no pressure to buy.
          </p>
        </div>

        <div className="mt-6">
          <ContactCTA />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">Common questions</h2>
        <div className="space-y-4">
          <details className="group rounded-xl border border-bronze-300 bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>What happens if I just keep using Desktop?</span>
              <span className="text-navy-400 transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              When your Desktop version loses support, bank feeds, payroll, and payment integrations stop. You'll be stuck with manual entry and no security patches. It's better to migrate during a calm period than under pressure.
            </div>
          </details>
          <details className="group rounded-xl border border-bronze-300 bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>Will my CPA be able to access everything?</span>
              <span className="text-navy-400 transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              Yes. We provide reconciliation reports, chart mapping documentation, and instructions for your CPA to access QuickBooks Online securely.
            </div>
          </details>
          <details className="group rounded-xl border border-bronze-300 bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>How long does migration actually take?</span>
              <span className="text-navy-400 transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              5-7 business days from receiving your Desktop file to running live in QuickBooks Online, including reconciliation and your final approval. Rush service is available if needed.
            </div>
          </details>
          <details className="group rounded-xl border border-bronze-300 bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>Do you migrate payroll data?</span>
              <span className="text-navy-400 transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              We migrate historical payroll transactions for reporting. Active payroll setup in QuickBooks Online requires its own subscription and configuration—we guide you or coordinate with your payroll provider.
            </div>
          </details>
          <details className="group rounded-xl border border-bronze-300 bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>What if my file is really old or messy?</span>
              <span className="text-navy-400 transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              That's why we offer three tiers. Enterprise is designed for multi-entity, inventory, and complex cleanups. We'll assess your file during quoting and recommend the right level—even if that means clean-up before migrating.
            </div>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-tan-100 py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-4">
          <h2 className="heading-forge-lg">Ready to migrate with confidence?</h2>
          <p className="body-foundry text-slate-800">
            We limit migrations so we can stay personally involved in every project. Month-end and tax season fill fastest.
          </p>
          <Button href="#get-quote" className="justify-center">Review My QuickBooks File</Button>
          <p className="text-sm text-slate-700">
            Prefer email? <a href="mailto:hello@dominusfoundry.com" className="underline font-semibold">hello@dominusfoundry.com</a>
          </p>
        </div>
      </section>

      <StickyQuoteButton />
    </>
  );
}
