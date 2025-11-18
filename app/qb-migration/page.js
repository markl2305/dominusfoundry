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
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-700">QuickBooks Desktop Migration</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-navy-900">
              Move QuickBooks Desktop to Online without losing your history or your mind.
            </h1>
            <p className="text-lg md:text-xl text-navy-700 leading-relaxed">
              5-7 day turnaround. Desktop file stays intact. Reconciled reports, CPA-friendly handoff, and personal guidance the whole way.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#get-quote">Review My QuickBooks File</Button>
              <Button href="tel:+15052261457" variant="secondary">Call Mark now</Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-xl border border-bronze-200 bg-white/70 p-3 shadow-sm">
                <span className="mt-0.5 text-green-600 font-bold">✓</span>
                <p className="text-sm text-navy-800">Your Desktop file remains untouched — we work from secure copies.</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-bronze-200 bg-white/70 p-3 shadow-sm">
                <span className="mt-0.5 text-green-600 font-bold">✓</span>
                <p className="text-sm text-navy-800">Fixed price quoted upfront so you know the exact cost.</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-bronze-200 bg-white/70 p-3 shadow-sm">
                <span className="mt-0.5 text-green-600 font-bold">✓</span>
                <p className="text-sm text-navy-800">Direct access to Mark &amp; Bri. No anonymous call center.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🛡️</div>
              <div>
                <p className="text-sm text-navy-600">Owner-led migration</p>
                <p className="text-lg font-semibold text-navy-900">You work directly with Mark &amp; Bri.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-tan-100 p-4">
                <div className="text-3xl font-bold text-navy-900">5-7</div>
                <p className="text-sm text-navy-700">Business days from kickoff to go-live.</p>
              </div>
              <div className="rounded-xl bg-tan-100 p-4">
                <div className="text-3xl font-bold text-navy-900">0</div>
                <p className="text-sm text-navy-700">Production risk to your Desktop file.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-navy-600">What you leave with</p>
              <ul className="space-y-2 text-sm text-navy-800">
                <li>• Clean QuickBooks Online company file.</li>
                <li>• Reconciliation reports your CPA can rely on.</li>
                <li>• Written checklist for your team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="space-y-6 rounded-2xl border border-bronze-300 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Why QuickBooks Desktop is ending</h2>
          <p className="text-lg text-navy-700 leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">How the migration works</h2>
            <p className="text-lg text-navy-700">Clear steps, fixed price, and your Desktop file stays intact until you approve the switch.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 border border-bronze-200 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-500 text-white font-bold">1</div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">Review &amp; quote</h3>
              <p className="mt-2 text-sm text-navy-700">You send a Desktop backup copy. We assess complexity and give a fixed price with target dates.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-bronze-200 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-500 text-white font-bold">2</div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">Build a clean copy</h3>
              <p className="mt-2 text-sm text-navy-700">We work from copies—export, transform, and import into QuickBooks Online without touching production.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-bronze-200 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-500 text-white font-bold">3</div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">Reconcile &amp; prove</h3>
              <p className="mt-2 text-sm text-navy-700">We reconcile balances, generate side-by-side reports, and prepare a CPA packet.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-bronze-200 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-500 text-white font-bold">4</div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">Approve &amp; go live</h3>
              <p className="mt-2 text-sm text-navy-700">You review the proof, we train your team, and you switch when you're ready—no surprises.</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-navy-900">Your original Desktop file stays accessible forever.</p>
            <p className="text-navy-700">We work from backups and never overwrite your production data.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-500 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-navy-900">You're in the right place if…</h3>
            <ul className="mt-5 space-y-3 text-navy-700">
              <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span><span>You're on QuickBooks Desktop with 5-50 employees.</span></li>
              <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span><span>You rely on historical data for taxes, audits, or lender reporting.</span></li>
              <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span><span>You want owners involved—not a nameless support queue.</span></li>
              <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span><span>You prefer a fixed price and clear dates.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-bronze-300 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-navy-900">This may not be for you if…</h3>
            <ul className="mt-5 space-y-3 text-navy-700">
              <li className="flex gap-3"><span className="text-orange-600 font-bold">!</span><span>You opened Desktop in the last few months and only need lists.</span></li>
              <li className="flex gap-3"><span className="text-orange-600 font-bold">!</span><span>You want the cheapest option regardless of data quality.</span></li>
              <li className="flex gap-3"><span className="text-orange-600 font-bold">!</span><span>You won't be available to review or approve reports.</span></li>
            </ul>
            <p className="mt-4 text-sm text-navy-700">If you still need advice, reach out—we'll point you in the right direction even if we're not the fit.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Choose your migration tier</h2>
            <p className="text-lg text-navy-700">All tiers include zero data loss, reconciliation, and CPA-ready handoff. Pick the level of support you need.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-bronze-300 bg-white p-6 md:p-8 shadow-sm">
              <div className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Essential</div>
              <div className="mt-2 text-3xl font-bold text-navy-900">$500-750</div>
              <p className="mt-2 text-sm italic text-navy-700">Choose Essential if your books are simple and you only need a current-year move.</p>
              <ul className="mt-6 space-y-3 text-sm text-navy-800">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Lists migration and current-year transactions</span></li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Email support</span></li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Basic reconciliation report</span></li>
              </ul>
              <Button href="#get-quote" variant="secondary" className="mt-8 w-full justify-center">Review My QuickBooks File</Button>
            </div>

            <div className="relative rounded-2xl border-2 border-navy-500 bg-white p-6 md:p-8 shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-600 px-4 py-1 text-sm font-semibold text-white shadow">Most Popular</div>
              <div className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Professional</div>
              <div className="mt-2 text-3xl font-bold text-navy-900">$1,200-1,800</div>
              <p className="mt-2 text-sm italic text-navy-700">Choose Professional if you're a typical established business that needs history and hands-on support.</p>
              <ul className="mt-6 space-y-3 text-sm text-navy-800">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Everything in Essential</span></li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Up to 3 years of historical data</span></li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>CPA handoff packet and phone support</span></li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>30-day post-migration support</span></li>
              </ul>
              <Button href="#get-quote" className="mt-8 w-full justify-center">Review My QuickBooks File</Button>
            </div>

            <div className="rounded-2xl border border-bronze-300 bg-white p-6 md:p-8 shadow-sm">
              <div className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Enterprise</div>
              <div className="mt-2 text-3xl font-bold text-navy-900">$2,500-4,000</div>
              <p className="mt-2 text-sm italic text-navy-700">Choose Enterprise if you have multi-entity, inventory, or complex clean up needs.</p>
              <ul className="mt-6 space-y-3 text-sm text-navy-800">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Everything in Professional</span></li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>5+ years of historical data</span></li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Custom chart mapping and priority support</span></li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Direct CPA coordination and training</span></li>
              </ul>
              <Button href="#get-quote" variant="secondary" className="mt-8 w-full justify-center">Review My QuickBooks File</Button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-navy-600">
            Final pricing depends on transaction volume, data complexity, and timeline. All quotes are fixed-price with no surprises.
          </p>
        </div>
      </section>

      <section className="bg-navy-500 text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What you receive in every migration</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-2xl">✓</p>
              <p className="font-semibold">Complete data export &amp; import</p>
              <p className="text-sm text-bronze-300">Transactions, lists, balances, and mappings moved with care.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl">✓</p>
              <p className="font-semibold">Chart of accounts mapping</p>
              <p className="text-sm text-bronze-300">We preserve what works and document any improvements.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl">✓</p>
              <p className="font-semibold">Historical reconciliation</p>
              <p className="text-sm text-bronze-300">Side-by-side proof that balances match.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl">✓</p>
              <p className="font-semibold">Payroll and sales tax considerations</p>
              <p className="text-sm text-bronze-300">Guidance so filings stay accurate post-migration.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl">✓</p>
              <p className="font-semibold">Training &amp; walkthrough</p>
              <p className="text-sm text-bronze-300">Live review so your team knows exactly how to proceed.</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl">✓</p>
              <p className="font-semibold">30-day support window</p>
              <p className="text-sm text-bronze-300">Questions answered quickly while you settle into QBO.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="get-quote" className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="rounded-2xl border-2 border-navy-500 bg-white p-6 md:p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Review My QuickBooks File</h2>
          <p className="mt-3 text-lg text-navy-700">
            After you submit, you'll get:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-navy-700">
            <li>Fixed price quote based on file complexity and your timeline.</li>
            <li>Project dates for kickoff and completion.</li>
            <li>Calendar link to schedule a kickoff call if you're ready.</li>
          </ol>

          <div className="mt-8">
            <LeadForm />
          </div>

          <p className="mt-6 text-sm text-navy-600">
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Ready to migrate with confidence?</h2>
          <p className="text-lg text-navy-700">
            We limit migrations so we can stay personally involved in every project. Month-end and tax season fill fastest.
          </p>
          <Button href="#get-quote" className="justify-center">Review My QuickBooks File</Button>
          <p className="text-sm text-navy-700">
            Prefer email? <a href="mailto:hello@dominusfoundry.com" className="underline font-semibold">hello@dominusfoundry.com</a>
          </p>
        </div>
      </section>

      <StickyQuoteButton />
    </>
  );
}
