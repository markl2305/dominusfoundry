import Button from "../../components/Button";
import ContactCTA from "../../components/ContactCTA";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: 'Dominus Foundry — Helping Traditional Businesses Survive Technological Change',
  description: 'We help established businesses navigate unavoidable tech transitions—starting with QuickBooks Desktop migrations.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-700">Owner-led tech transitions</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-navy-900">
              Traditional businesses shouldn't have to navigate forced tech change alone.
            </h1>
            <p className="text-lg md:text-xl text-navy-700 leading-relaxed">
              We move you off QuickBooks Desktop in 5-7 days and guide future transitions with the patience and personal care you expect from owners.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/qb-migration#get-quote">Review My QuickBooks File</Button>
              <Button href="/qb-migration#how-it-works" variant="secondary">See how it works</Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-navy-700">
              <div><span className="font-semibold text-navy-900">5-7 days</span> from kickoff to go-live</div>
              <div><span className="font-semibold text-navy-900">Fixed price</span> before work starts</div>
              <div><span className="font-semibold text-navy-900">Direct access</span> to Mark &amp; Bri Lord</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Progression */}
      <section className="bg-tan-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">QuickBooks Desktop migration is the priority</h2>
            <p className="mt-4 text-lg text-navy-700">
              We start where the risk is highest. Once you're stable in QuickBooks Online, we can plan the rest of your roadmap together.
            </p>
          </div>

          <div className="rounded-3xl border border-navy-500 bg-gradient-to-br from-navy-600 to-navy-500 text-white p-8 md:p-12 shadow-xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold shadow">
                  Available now
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">QuickBooks Desktop Migration</h3>
                <p className="text-lg text-bronze-200 leading-relaxed">
                  Move to QuickBooks Online in 5-7 days without risking your history. We work from copies, reconcile every balance,
                  and hand everything to your CPA with clear documentation.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/10 p-4 shadow-inner">
                    <div className="text-3xl font-bold">5-7 days</div>
                    <p className="text-sm text-bronze-200 mt-1">From kickoff to go-live</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 shadow-inner">
                    <div className="text-3xl font-bold">Direct</div>
                    <p className="text-sm text-bronze-200 mt-1">You work with Mark &amp; Bri</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 shadow-inner">
                    <div className="text-3xl font-bold">Fixed price</div>
                    <p className="text-sm text-bronze-200 mt-1">No hourly surprises</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/qb-migration#get-quote" className="justify-center">Review My QuickBooks File</Button>
                  <Button href="/qb-migration#how-it-works" variant="secondary" className="justify-center">See how it works</Button>
                </div>
              </div>
              <div className="w-full lg:w-80 rounded-2xl bg-white/10 border border-bronze-200/50 p-6 shadow-inner space-y-3">
                <h4 className="text-xl font-semibold">What you get</h4>
                <ul className="space-y-2 text-sm text-bronze-100">
                  <li className="flex gap-3"><span className="text-orange-200 font-bold">✓</span><span>Desktop file stays intact</span></li>
                  <li className="flex gap-3"><span className="text-orange-200 font-bold">✓</span><span>Reconciled reports &amp; CPA packet</span></li>
                  <li className="flex gap-3"><span className="text-orange-200 font-bold">✓</span><span>Training + 30-day guidance</span></li>
                  <li className="flex gap-3"><span className="text-orange-200 font-bold">✓</span><span>Owner-led communication</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-bronze-300 pt-8">
            <h3 className="text-2xl font-bold text-navy-900 text-center">What's coming next</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
                <div className="inline-block rounded-full bg-bronze-200 text-navy-700 px-3 py-1 text-xs font-semibold mb-3">
                  Coming 2026
                </div>
                <h4 className="text-xl font-bold text-navy-900">AI automation, built for skeptical teams</h4>
                <p className="mt-3 text-navy-700 text-sm leading-relaxed">
                  No black boxes. We deploy automation that matches the people you have and document every step.
                </p>
              </div>
              <div className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
                <div className="inline-block rounded-full bg-bronze-200 text-navy-700 px-3 py-1 text-xs font-semibold mb-3">
                  Coming 2025
                </div>
                <h4 className="text-xl font-bold text-navy-900">Technology roadmapping</h4>
                <p className="mt-3 text-navy-700 text-sm leading-relaxed">
                  See what's changing before it hits. Plan budgets, risks, and options with someone who speaks finance and code.
                </p>
              </div>
              <div className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
                <div className="inline-block rounded-full bg-bronze-200 text-navy-700 px-3 py-1 text-xs font-semibold mb-3">
                  Future
                </div>
                <h4 className="text-xl font-bold text-navy-900">Exit planning support</h4>
                <p className="mt-3 text-navy-700 text-sm leading-relaxed">
                  Operational cleanup for sale, succession, or wind-down so you can hand over clean systems with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">The technology gap is growing</h2>
          <p className="text-lg text-navy-700 leading-relaxed">
            If you've been running your business for 15-25 years, you've seen the pace of change accelerate. Software that worked for a decade suddenly goes away. Vendors push migrations you didn't ask for. AI threatens to disrupt everything.
          </p>
          <p className="text-lg text-navy-700 leading-relaxed">
            You didn't sign up to be a technology expert—you signed up to serve customers and build something lasting. We bridge the gap so you don't have to choose between compliance and sanity.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Why work with us</h2>
          <p className="mt-4 text-lg text-navy-700">
            Most tech vendors are impersonal and rushed. We're the opposite.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-2xl border border-navy-500 p-6 shadow-sm">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-navy-900">You work directly with us</h3>
            <p className="mt-3 text-navy-700">
              Mark and Bri handle every project personally. When you hand over your financial data, you get responsive owners—not a ticket queue.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-navy-500 p-6 shadow-sm">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold text-navy-900">Patience for change-resistant teams</h3>
            <p className="mt-3 text-navy-700">
              You didn't ask for QuickBooks to force a migration. We explain what's happening and why without jargon or pressure.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-navy-500 p-6 shadow-sm">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-navy-900">Local to New Mexico</h3>
            <p className="mt-3 text-navy-700">
              Based in Albuquerque, serving New Mexico businesses first. We're your neighbors, not a faceless national firm.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-navy-500 text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Who we work with</h2>
            <p className="text-lg text-bronze-200">Established owners who value stability and clear answers.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-navy-600 rounded-2xl p-6">
              <h3 className="font-bold text-white text-xl mb-4">You're a good fit if:</h3>
              <ul className="space-y-3 text-bronze-200">
                <li className="flex gap-2"><span className="text-orange-300">✓</span><span>You employ 5-50 people and rely on accurate books.</span></li>
                <li className="flex gap-2"><span className="text-orange-300">✓</span><span>You use tech because you have to, not because you love it.</span></li>
                <li className="flex gap-2"><span className="text-orange-300">✓</span><span>You're frustrated by forced changes but willing to adapt with a plan.</span></li>
                <li className="flex gap-2"><span className="text-orange-300">✓</span><span>You prefer doing it right once over doing it cheap twice.</span></li>
              </ul>
            </div>
            <div className="bg-white/10 border border-bronze-400/50 rounded-2xl p-6">
              <h3 className="font-bold text-white text-xl mb-4">Maybe not the right fit if:</h3>
              <ul className="space-y-3 text-bronze-200">
                <li className="flex gap-2"><span className="text-orange-200">!</span><span>You just opened a Desktop file and only need lists.</span></li>
                <li className="flex gap-2"><span className="text-orange-200">!</span><span>You want the cheapest option with no time for review.</span></li>
                <li className="flex gap-2"><span className="text-orange-200">!</span><span>You won't engage in approvals or training.</span></li>
              </ul>
              <p className="mt-4 text-sm text-bronze-200">If that's you, reach out anyway and we'll point you to resources that fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-tan-100 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Ready for patient, owner-led help?</h2>
            <p className="mt-4 text-lg text-navy-700">
              Tell us what you're facing. We'll respond within one business day with next steps or a clear referral.
            </p>
          </div>

          <ContactCTA />

          <div className="rounded-2xl border-2 border-navy-500 bg-white p-6 md:p-10 shadow-xl">
            <ContactForm />
          </div>

          <div className="text-center text-sm text-navy-600">
            Based in Albuquerque, New Mexico • Serving NM businesses first
          </div>
        </div>
      </section>
    </>
  );
}
