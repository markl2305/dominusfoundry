export const metadata = {
  title: 'About — Dominus Foundry',
  description: 'Family-owned. Systems-focused. Built for businesses that value clean operations and long-term thinking.'
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            We Build Systems That Last
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            Dominus Foundry exists because too many businesses lose critical knowledge when people leave, 
            systems break, or technology changes. We fix that.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why We Started</h2>
        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            I spent years watching businesses struggle with the same problems: messy handoffs, 
            undocumented processes, and financial systems held together by one person's tribal knowledge. 
            When that person left or when technology forced a change, everything fell apart.
          </p>
          <p>
            The breaking point was seeing multiple small businesses lose years of financial history during 
            botched QuickBooks migrations. Their bookkeepers didn't know what they were doing. Their software 
            vendors just wanted to sell subscriptions. And the business owners were left with corrupted data 
            and no way to verify if anything matched.
          </p>
          <p>
            So we started with QuickBooks Desktop migrations—doing them right, with full reconciliation, 
            documentation, and CPA handoff. One service. Done correctly. Built to last.
          </p>
        </div>
      </section>

      {/* Our Principles */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Principles</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-blue-900">Make the next person's job easy</h3>
              <p className="mt-3 text-lg text-gray-700">
                Your CPA should be able to open your books and understand them in 10 minutes. 
                Your successor shouldn't need a decoder ring. Your auditor shouldn't have to dig for documentation. 
                If we touch your systems, the next person who touches them will thank you.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-blue-900">Favor clarity over cleverness</h3>
              <p className="mt-3 text-lg text-gray-700">
                Complex systems fail when the one person who understands them leaves. Simple, well-documented 
                systems survive transitions. We build for the operator who inherits your work, not for the 
                consultant who wants recurring revenue from your confusion.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-blue-900">Leave systems cleaner than you found them</h3>
              <p className="mt-3 text-lg text-gray-700">
                Every engagement is an opportunity to fix what's broken and document what works. 
                We don't just migrate your data—we reconcile it, verify it, and hand it off with clear 
                documentation. You should be in better shape after we leave than when we arrived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Work With</h2>
        <div className="mt-6 text-lg text-gray-700 space-y-4">
          <p>
            We work with small business owners who value clean operations and long-term thinking. 
            Typically, you're:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="flex gap-3">
              <span className="text-blue-900 font-bold">•</span>
              <span>Running a profitable business (you're not scrambling, you're building)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-900 font-bold">•</span>
              <span>Frustrated with sloppy handoffs and undocumented processes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-900 font-bold">•</span>
              <span>Tired of consultants who create dependency instead of clarity</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-900 font-bold">•</span>
              <span>Willing to pay for quality work that lasts</span>
            </li>
          </ul>
          <p className="mt-6">
            If you're looking for the cheapest option or someone who will make you dependent on them 
            for ongoing support, we're not the right fit. If you want systems that work without you 
            having to babysit them, let's talk.
          </p>
        </div>
      </section>

      {/* The Name */}
      <section className="bg-blue-900 text-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Name</h2>
          <p className="text-xl text-blue-100">
            "Dominus" is Latin for "Lord"—it's the family name. A foundry is where raw materials 
            are forged into durable, functional tools. We take messy business operations and forge 
            them into reliable systems that last. It's a family business built for legacy, not quick exits.
          </p>
        </div>
      </section>

      {/* How We're Different */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We're Different</h2>
        
        <div className="mt-8 space-y-6">
          <div className="border-l-4 border-blue-900 pl-6">
            <h3 className="text-xl font-bold text-gray-900">We don't create dependency</h3>
            <p className="mt-2 text-gray-700">
              Most consultants build systems that require them. We build systems that work without us. 
              You get documentation, training, and a clear handoff. If you never need us again, we did our job right.
            </p>
          </div>

          <div className="border-l-4 border-blue-900 pl-6">
            <h3 className="text-xl font-bold text-gray-900">We don't sell subscriptions</h3>
            <p className="mt-2 text-gray-700">
              Fixed-price projects. You know what you're paying upfront. No recurring fees, no vendor lock-in, 
              no surprise invoices. We deliver, you pay, you're done.
            </p>
          </div>

          <div className="border-l-4 border-blue-900 pl-6">
            <h3 className="text-xl font-bold text-gray-900">We don't rush to scale</h3>
            <p className="mt-2 text-gray-700">
              We're adding services slowly and deliberately. QuickBooks migrations first because they're 
              critical and often done poorly. More services will come, but only when we can deliver them 
              at the same standard.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="rounded-2xl border-2 border-blue-900 bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Work Together?</h2>
          <p className="mt-4 text-lg text-gray-700">
            If you need a QuickBooks Desktop migration done right, start here.
          </p>
          <a 
            href="/qb-migration" 
            className="mt-6 inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
          >
            Get Your Migration Quote
          </a>
          <p className="mt-6 text-sm text-gray-600">
            Questions about other services? Email <a href="mailto:hello@dominusfoundry.com" className="underline font-semibold">hello@dominusfoundry.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
