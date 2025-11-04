import LeadForm from '@/components/LeadForm';
import StickyQuoteButton from '@/components/StickyQuoteButton';

export const metadata = {
  title: 'QuickBooks Desktop Migration — Dominus Foundry',
  description: 'Migrate from QuickBooks Desktop to Online in 5-7 days. Zero data loss. Audit-ready. Your CPA will thank you.'
};

export default function QBMigration() {
  return (
    <>
      {/* Urgency Bar */}
      <div className="bg-orange-600 text-white py-3">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm md:text-base font-semibold">
            ⚠️ QuickBooks Desktop 2022 support ended May 31, 2025. Desktop 2024 ends in 2027. Migrate before year-end close.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-tan-200 to-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-navy-900">
              QuickBooks Desktop Is Going Away. <span className="text-navy-500">Your Financial History Doesn't Have To.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-navy-700">
              Migrate to QuickBooks Online in 5-7 days with zero data loss, full reconciliation, and audit-ready handoff to your CPA.
            </p>
            <div className="mt-8">
              <a 
                href="#get-quote" 
                className="inline-flex items-center rounded-xl bg-orange-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
              >
                Get Your Free Migration Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Happening - Education Block */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
            Why QuickBooks Desktop Is Going Away
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <div className="flex-shrink-0 text-orange-600 text-2xl">✗</div>
              <div>
                <div className="font-semibold text-navy-900">New licenses stopped</div>
                <p className="mt-1 text-navy-700">Intuit stopped selling Desktop licenses September 2024. You can't buy it anymore.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 text-orange-600 text-2xl">✗</div>
              <div>
                <div className="font-semibold text-navy-900">Support ending on rolling schedule</div>
                <p className="mt-1 text-navy-700">Desktop 2022 ended May 2025. Desktop 2024 ends 2027. Your version's clock is ticking.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 text-orange-600 text-2xl">✗</div>
              <div>
                <div className="font-semibold text-navy-900">Critical features shut down</div>
                <p className="mt-1 text-navy-700">No more bank feeds, payroll processing, or payment integrations. Manual entry only.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 text-orange-600 text-2xl">✗</div>
              <div>
                <div className="font-semibold text-navy-900">Security vulnerabilities</div>
                <p className="mt-1 text-navy-700">No security patches after support ends. Your financial data becomes a target.</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-navy-600">
            The longer you wait, the more painful the migration becomes. Don't migrate during tax season or year-end close.
          </p>
        </div>
      </section>

      {/* How It Works - Risk Mitigation */}
      <section className="bg-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">How It Works</h2>
            <p className="mt-4 text-lg text-navy-700">
              Simple process. Clear timeline. Your old system stays intact until you approve the switch.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-bronze-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-500 text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-navy-900">We Export Your Data</h3>
              <p className="mt-3 text-navy-700">
                Secure extraction of your complete financial history—transactions, customers, vendors, chart of accounts.
              </p>
              <p className="mt-2 text-sm font-semibold text-navy-500">Days 1-2</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-bronze-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-500 text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-navy-900">We Reconcile & Test</h3>
              <p className="mt-3 text-navy-700">
                Map your chart of accounts, verify balances, run reconciliation reports. Everything must match perfectly.
              </p>
              <p className="mt-2 text-sm font-semibold text-navy-500">Days 3-5</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-bronze-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-500 text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-navy-900">You Approve & Go Live</h3>
              <p className="mt-3 text-navy-700">
                Review everything, ask questions, then flip the switch. We stay with you for 30 days of post-migration support.
              </p>
              <p className="mt-2 text-sm font-semibold text-navy-500">Days 6-7</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-navy-900">
              Your old QuickBooks Desktop file stays intact and accessible—forever.
            </p>
            <p className="mt-2 text-navy-600">
              We don't delete anything. You keep your backup. Zero risk of data loss.
            </p>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Choose Your Migration Tier</h2>
          <p className="mt-4 text-lg text-navy-700">
            All tiers include zero data loss, reconciliation, and CPA-ready handoff. Pick the level of support you need.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Essential */}
          <div className="rounded-2xl border-2 border-bronze-300 bg-white p-6 md:p-8">
            <div className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Essential</div>
            <div className="mt-2 text-3xl font-bold text-navy-900">$500-750</div>
            <p className="mt-2 text-navy-600">For simple books and DIY owners</p>
            
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Lists migration (customers, vendors, items)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Current year transactions only</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Email support</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Basic reconciliation report</span>
              </li>
            </ul>

            <a 
              href="#get-quote" 
              className="mt-8 block text-center rounded-xl border-2 border-bronze-300 px-5 py-3 font-semibold text-navy-900 hover:bg-tan-100 transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Professional - Recommended */}
          <div className="rounded-2xl border-2 border-navy-500 bg-white p-6 md:p-8 relative shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="text-sm font-semibold text-navy-500 uppercase tracking-wide">Professional</div>
            <div className="mt-2 text-3xl font-bold text-navy-900">$1,200-1,800</div>
            <p className="mt-2 text-navy-600">For most businesses</p>
            
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Everything in Essential, plus:</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700"><strong>3 years</strong> of historical data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Full reconciliation report</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Phone support</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">CPA handoff packet</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">30-day post-migration support</span>
              </li>
            </ul>

            <a 
              href="#get-quote" 
              className="mt-8 block text-center rounded-xl bg-navy-500 px-5 py-3 font-semibold text-white hover:bg-navy-600 transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border-2 border-bronze-300 bg-white p-6 md:p-8">
            <div className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Enterprise</div>
            <div className="mt-2 text-3xl font-bold text-navy-900">$2,500-4,000</div>
            <p className="mt-2 text-navy-600">For complex books</p>
            
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Everything in Professional, plus:</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700"><strong>5+ years</strong> of historical data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Custom chart of accounts mapping</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Direct CPA coordination call</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">2-hour training session</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-navy-700">Priority support</span>
              </li>
            </ul>

            <a 
              href="#get-quote" 
              className="mt-8 block text-center rounded-xl border-2 border-bronze-300 px-5 py-3 font-semibold text-navy-900 hover:bg-tan-100 transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-navy-600">
          Final pricing depends on transaction volume, data complexity, and timeline. All quotes are fixed-price with no surprises.
        </p>
      </section>

      {/* What's Included - Clarity */}
      <section className="bg-navy-500 text-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's Included in Every Migration</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <div className="font-semibold">Complete data export & import</div>
                <p className="mt-1 text-bronze-300 text-sm">All transactions, lists, balances</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <div className="font-semibold">Chart of accounts mapping</div>
                <p className="mt-1 text-bronze-300 text-sm">Logical structure preserved</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <div className="font-semibold">Historical reconciliation</div>
                <p className="mt-1 text-bronze-300 text-sm">Every penny accounted for</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <div className="font-semibold">Verification report</div>
                <p className="mt-1 text-bronze-300 text-sm">Proof everything matches</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <div className="font-semibold">Post-migration support</div>
                <p className="mt-1 text-bronze-300 text-sm">30 days included</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <div className="font-semibold">Your old files stay intact</div>
                <p className="mt-1 text-bronze-300 text-sm">Zero risk of data loss</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-navy-600 pt-8">
            <h3 className="text-xl font-bold mb-4">What's NOT Included</h3>
            <p className="text-bronze-300">
              Custom report recreation, third-party app integrations, or ongoing bookkeeping services. 
              We focus on one thing: getting your data moved correctly. If you need ongoing support, we can refer trusted partners.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-2xl border border-bronze-300 bg-tan-100 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8 text-center">Our Process Guarantees</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">🔒</div>
              <div>
                <div className="font-bold text-navy-900 text-lg">Zero Data Loss</div>
                <p className="mt-2 text-navy-700">
                  Your original Desktop file stays untouched. We work from copies. If anything goes wrong, you lose nothing.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">📊</div>
              <div>
                <div className="font-bold text-navy-900 text-lg">CPA-Ready Reports</div>
                <p className="mt-2 text-navy-700">
                  We provide reconciliation documentation your accountant can verify. No surprises at tax time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">💰</div>
              <div>
                <div className="font-bold text-navy-900 text-lg">Fixed Price, No Surprises</div>
                <p className="mt-2 text-navy-700">
                  We quote the project upfront. That's what you pay. No hourly billing, no scope creep.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">⏱️</div>
              <div>
                <div className="font-bold text-navy-900 text-lg">Clear Timeline</div>
                <p className="mt-2 text-navy-700">
                  5-7 business days from kickoff to go-live. We give you status updates every 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="get-quote" className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="rounded-2xl border-2 border-navy-500 bg-white p-6 md:p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Get Your Migration Quote</h2>
          <p className="mt-3 text-lg text-navy-700">
            Tell us about your QuickBooks setup. We'll reply within one business day with a fixed price and next steps.
          </p>

          <div className="mt-8">
            <LeadForm />
          </div>

          <p className="mt-6 text-sm text-navy-600">
            We will never share your information. You'll get a straightforward quote with no pressure to buy.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">Common Questions</h2>
        
        <div className="space-y-4">
          <details className="group rounded-xl border border-bronze-300 bg-white p-6">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>What if I don't migrate and just keep using Desktop?</span>
              <span className="text-navy-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              When your Desktop version loses support, you'll lose bank feeds, payroll processing, and security updates. 
              Your software will still open, but you'll be manually entering everything and vulnerable to security breaches. 
              The IRS and your CPA won't be happy with outdated, insecure books.
            </div>
          </details>

          <details className="group rounded-xl border border-bronze-300 bg-white p-6">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>Will my CPA be able to access everything they need?</span>
              <span className="text-navy-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              Yes. We provide a CPA handoff packet with reconciliation reports, chart mapping documentation, and access instructions. 
              QuickBooks Online has built-in accountant access that's often easier than Desktop file sharing.
            </div>
          </details>

          <details className="group rounded-xl border border-bronze-300 bg-white p-6">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>How long does migration actually take?</span>
              <span className="text-navy-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              5-7 business days from the moment we get your Desktop file to the moment you're running live in QuickBooks Online. 
              This includes data export, reconciliation, testing, and your final approval. Rush service available if needed.
            </div>
          </details>

          <details className="group rounded-xl border border-bronze-300 bg-white p-6">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>What if I need help after the migration is complete?</span>
              <span className="text-navy-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              All tiers include 30 days of post-migration support via email or phone (depending on your tier). 
              After that, we can provide ongoing support on a retainer basis, or refer you to trusted QBO bookkeepers.
            </div>
          </details>

          <details className="group rounded-xl border border-bronze-300 bg-white p-6">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>Do you migrate payroll data?</span>
              <span className="text-navy-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              We migrate historical payroll transactions for reporting purposes. Active payroll setup in QuickBooks Online 
              requires its own subscription and configuration. We can guide you through that process or coordinate with your payroll provider.
            </div>
          </details>

          <details className="group rounded-xl border border-bronze-300 bg-white p-6">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
              <span>What if my file is really old or really messy?</span>
              <span className="text-navy-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-navy-700">
              That's why we offer three tiers. Enterprise tier is built for complex, multi-year, messy books. 
              We'll assess your file during the quote process and recommend the right level of service. 
              Sometimes messy books need cleanup before migration—we'll tell you upfront if that's the case.
            </div>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-white to-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Ready to Migrate With Confidence?</h2>
          <p className="mt-4 text-lg text-navy-700">
            Don't wait until tax season or year-end close. Get your quote today and schedule your migration during a calm period.
          </p>
          <a 
            href="#get-quote" 
            className="mt-8 inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
          >
            Get Your Free Quote Now
          </a>
          <p className="mt-4 text-sm text-navy-600">
            Or email us directly: <a href="mailto:hello@dominusfoundry.com" className="underline font-semibold">hello@dominusfoundry.com</a>
          </p>
        </div>
      </section>

      {/* Sticky floating CTA */}
      <StickyQuoteButton />
    </>
  );
}
