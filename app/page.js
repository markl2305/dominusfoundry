export const metadata = {
  title: 'Dominus Foundry — Helping Traditional Businesses Survive Technological Change',
  description: 'We help established businesses navigate unavoidable tech transitions—starting with QuickBooks Desktop migrations.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-tan-200 to-tan-100 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-navy-900">
              Traditional Businesses Shouldn't Have to Navigate Tech Change Alone
            </h1>
            <p className="mt-6 text-xl text-navy-700">
              You built a successful business doing things the right way. Now technology keeps forcing changes you didn't ask for. 
              We help you survive those transitions without losing your data, your sanity, or your business.
            </p>
            <div className="mt-8">
              <a 
                href="/qb-migration" 
                className="inline-flex items-center rounded-xl bg-orange-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
              >
                Start With QB Desktop Migration
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">The Technology Gap Is Growing</h2>
          <div className="mt-6 space-y-4 text-lg text-navy-700">
            <p>
              If you've been running your business for 15-25 years, you've seen the pace of change accelerate. 
              Software that worked for a decade suddenly goes away. Vendors push migrations you don't understand. 
              AI threatens to disrupt everything. And nobody seems to have time to explain what's actually happening.
            </p>
            <p>
              You didn't sign up for this. You signed up to run your business, serve your customers, and build something lasting. 
              But now you're forced to become a technology expert just to keep your books accessible.
            </p>
            <p className="font-semibold text-navy-900">
              We built Dominus Foundry to bridge that gap—starting with the QuickBooks Desktop crisis.
            </p>
          </div>
        </div>
      </section>

      {/* Services Progression */}
      <section className="bg-tan-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Services</h2>
            <p className="mt-4 text-lg text-navy-700">
              We're building services that help traditional businesses survive technological change—one crisis at a time.
            </p>
          </div>

          {/* QB Migration - Live Now - Featured */}
          <div className="mb-12">
            <div className="rounded-2xl border-2 border-navy-500 bg-gradient-to-br from-navy-500 to-navy-600 text-white p-8 md:p-12 shadow-xl">
              <div className="flex items-start justify-between flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="inline-block rounded-lg bg-orange-600 px-3 py-1 text-sm font-semibold mb-4">
                    Available Now
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">QuickBooks Desktop Migration</h3>
                  <p className="mt-4 text-xl text-bronze-300">
                    Intuit stopped selling Desktop licenses. Support is ending on a rolling schedule. We migrate your books 
                    to QuickBooks Online in 5-7 days with zero data loss, full reconciliation, and patient guidance.
                  </p>
                  
                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div>
                      <div className="text-3xl font-bold">5-7 Days</div>
                      <div className="text-sm text-bronze-400 mt-1">Complete migration timeline</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Direct Access</div>
                      <div className="text-sm text-bronze-400 mt-1">You work with us personally</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Fixed Price</div>
                      <div className="text-sm text-bronze-400 mt-1">No hourly billing surprises</div>
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
                      className="inline-flex items-center rounded-xl border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-navy-500 transition-colors"
                    >
                      See How It Works
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Services */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border-2 border-bronze-300 bg-white p-6">
              <div className="inline-block rounded-lg bg-bronze-300 text-navy-700 px-3 py-1 text-sm font-semibold mb-3">
                Coming 2026
              </div>
              <h4 className="text-xl font-bold text-navy-900">AI Automation for Small Business</h4>
              <p className="mt-3 text-navy-700">
                AI is changing everything. We'll help traditional businesses automate day-to-day tasks without losing 
                the personal touch that made you successful.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-bronze-300 bg-white p-6">
              <div className="inline-block rounded-lg bg-bronze-300 text-navy-700 px-3 py-1 text-sm font-semibold mb-3">
                Coming 2026
              </div>
              <h4 className="text-xl font-bold text-navy-900">Technology Roadmapping</h4>
              <p className="mt-3 text-navy-700">
                Strategic planning for unavoidable tech changes. See what's coming, understand your options, 
                and prepare before the crisis hits.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-bronze-300 bg-white p-6">
              <div className="inline-block rounded-lg bg-bronze-300 text-navy-700 px-3 py-1 text-sm font-semibold mb-3">
                Future Service
              </div>
              <h4 className="text-xl font-bold text-navy-900">Exit Planning Support</h4>
              <p className="mt-3 text-navy-700">
                Financial and operational preparation for business transitions. Whether you're selling, passing it on, 
                or winding down, we help you leave it cleaner than you found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Why Work With Us</h2>
          <p className="mt-4 text-lg text-navy-700">
            Most tech vendors are impersonal and rushed. We're the opposite.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-2xl border-2 border-navy-500 p-6">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-navy-900">You Work Directly With Us</h3>
            <p className="mt-3 text-navy-700">
              Mark and Bri Lord handle every project personally. No offshore staff, no junior consultants. 
              When you hand over your financial data, you're trusting real people who answer their emails.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-navy-500 p-6">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold text-navy-900">We Have Patience for Change-Resistant People</h3>
            <p className="mt-3 text-navy-700">
              You didn't ask for QuickBooks to force a migration. We understand that frustration. We take the time 
              to explain what's happening and why, without talking down to you.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-navy-500 p-6">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-navy-900">Local to New Mexico</h3>
            <p className="mt-3 text-navy-700">
              Based in Albuquerque, serving New Mexico businesses first. We're your neighbors, not a faceless 
              national firm. When you need us, we're here.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-navy-500 text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Who We Work With</h2>
          <div className="text-lg text-bronze-300 space-y-4">
            <p className="text-center text-xl">
              Established business owners (15-25 years) who've built something lasting—but the rapid pace 
              of technological change is exhausting.
            </p>
            
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-navy-600 rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-3">You're a Good Fit If:</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>You employ 5-50 people</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>You use tech because you have to</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Change frustrates you but you adapt</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>You value quality over cheap</span>
                  </li>
                </ul>
              </div>

              <div className="bg-navy-600 rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-3">Not a Good Fit If:</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-red-400">✗</span>
                    <span>You're extremely price-sensitive</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400">✗</span>
                    <span>You refuse all necessary changes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400">✗</span>
                    <span>You want the absolute cheapest option</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="rounded-2xl border border-bronze-300 bg-gradient-to-br from-tan-100 to-white p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Built for Legacy</h2>
            <p className="mt-4 text-lg text-navy-700">
              Dominus Foundry is Mark and Bri Lord—a family business based in Albuquerque. We're building this 
              for the long haul, not a quick exit. Technology changes rapidly, but good businesses are built to last.
            </p>
            <p className="mt-4 text-lg text-navy-700">
              We chose the name "Foundry" because it's where lasting, generational things are forged. The Lord 
              family's ideas take form here and come to life—starting with helping traditional businesses survive 
              unavoidable tech transitions.
            </p>
            <div className="mt-6">
              <a href="/about" className="text-lg font-semibold text-navy-500 hover:text-navy-600 underline">
                Read our full story →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-500 text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Facing the QuickBooks Desktop Crisis?</h2>
          <p className="mt-4 text-xl text-bronze-300">
            Desktop support is ending. Don't wait until the last minute to migrate.
          </p>
          <a 
            href="/qb-migration" 
            className="mt-8 inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
          >
            Get Your Free Migration Quote
          </a>
          <p className="mt-6 text-sm text-bronze-400">
            Based in Albuquerque • Serving New Mexico businesses first
          </p>
          <p className="mt-2 text-sm text-bronze-400">
            Questions? <a href="mailto:hello@dominusfoundry.com" className="underline font-semibold">hello@dominusfoundry.com</a>
          </p>
        </div>
      </section>
    </>
  );
}