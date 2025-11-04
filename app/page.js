export const metadata = {
  title: 'Dominus Foundry — Business Systems & QuickBooks Migration',
  description: 'We build reliable operating systems for small businesses. Starting with zero-drama QuickBooks Desktop migrations.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              We Build Operating Systems for Small Businesses
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              Clean data. Clear processes. Zero drama. We help operators move fast without breaking finance.
            </p>
          </div>
        </div>
      </section>

      {/* Active Service - QB Migration (Featured) */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-3 text-lg text-gray-700">Starting with what matters most: getting your books ready for the future.</p>
        </div>

        {/* QB Migration - Large Featured Card */}
        <div className="rounded-2xl border-2 border-blue-900 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 md:p-12 shadow-xl">
          <div className="flex items-start justify-between flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="inline-block rounded-lg bg-orange-600 px-3 py-1 text-sm font-semibold mb-4">
                Now Available
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">QuickBooks Desktop Migration</h3>
              <p className="mt-4 text-xl text-blue-100">
                QuickBooks Desktop is going away. We migrate your books to QuickBooks Online in 5-7 days—with zero data loss and full CPA handoff.
              </p>
              
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div>
                  <div className="text-2xl font-bold">5-7 Days</div>
                  <div className="text-sm text-blue-200">Start to finish</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Zero Loss</div>
                  <div className="text-sm text-blue-200">Complete data integrity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Fixed Price</div>
                  <div className="text-sm text-blue-200">No surprises</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="/qb-migration" 
                  className="inline-flex items-center rounded-xl bg-orange-600 px-6 py-3 text-lg font-semibold text-white hover:bg-orange-700 transition-colors"
                >
                  Get Your Migration Quote
                </a>
                <a 
                  href="/qb-migration#how-it-works" 
                  className="inline-flex items-center rounded-xl border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-blue-900 transition-colors"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Future Services - Coming Soon Placeholders */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-300 bg-gray-50 p-6">
            <div className="inline-block rounded-lg bg-gray-300 text-gray-600 px-3 py-1 text-sm font-semibold mb-3">
              Coming Soon
            </div>
            <h4 className="text-xl font-bold text-gray-900">Financial Systems Consulting</h4>
            <p className="mt-2 text-gray-600">
              Process design, workflow automation, and financial operations that scale without chaos.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-gray-50 p-6">
            <div className="inline-block rounded-lg bg-gray-300 text-gray-600 px-3 py-1 text-sm font-semibold mb-3">
              Coming Soon
            </div>
            <h4 className="text-xl font-bold text-gray-900">Fractional CFO Services</h4>
            <p className="mt-2 text-gray-600">
              Strategic financial leadership for growing businesses that aren't ready for a full-time CFO.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We Work</h2>
            <p className="mt-4 text-lg text-gray-700">
              Three principles guide everything we build.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-4xl font-bold text-blue-900 mb-3">01</div>
              <h3 className="text-xl font-bold text-gray-900">Make the next person's job easy</h3>
              <p className="mt-3 text-gray-700">
                Your CPA, your successor, your auditor—whoever touches your books next shouldn't have to decode mysteries.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-4xl font-bold text-blue-900 mb-3">02</div>
              <h3 className="text-xl font-bold text-gray-900">Favor clarity over cleverness</h3>
              <p className="mt-3 text-gray-700">
                Simple systems survive. Complex ones break when the one person who understands them leaves.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-4xl font-bold text-blue-900 mb-3">03</div>
              <h3 className="text-xl font-bold text-gray-900">Leave systems cleaner than you found them</h3>
              <p className="mt-3 text-gray-700">
                Every engagement is an opportunity to fix what's broken and document what works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Brief Trust Signal */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built for Legacy</h2>
            <p className="mt-4 text-lg text-gray-700">
              Dominus Foundry is a family business focused on building reliable systems that last. 
              We started with QuickBooks migrations because we saw too many businesses lose critical financial data 
              during botched transitions. Every service we add will follow the same principle: do one thing, do it right, 
              and make sure it works for the long haul.
            </p>
            <div className="mt-6">
              <a href="/about" className="text-lg font-semibold text-blue-900 hover:text-blue-800 underline">
                Learn more about our approach →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Migrate Your QuickBooks?</h2>
          <p className="mt-4 text-xl text-blue-100">
            Desktop support is ending. Don't wait until the last minute.
          </p>
          <a 
            href="/qb-migration" 
            className="mt-8 inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
          >
            Get Your Free Migration Quote
          </a>
          <p className="mt-6 text-sm text-blue-200">
            Questions? Email us at <a href="mailto:hello@dominusfoundry.com" className="underline font-semibold">hello@dominusfoundry.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
