import ContactCTA from "../../../components/ContactCTA";
import ContactForm from "../../../components/ContactForm";

export const metadata = {
  title: 'About — Dominus Foundry',
  description: 'A business tool foundry built by the Lord family. Based in Albuquerque, built for the long haul.'
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="heading-forge-lg text-slate-900">
            We Build Bridges Through Technological Change
          </h1>
          <p className="mt-6 body-foundry">
            Most operators didn&apos;t sign up for constant tech disruption. They signed up to run their operation.
            We help them cross the changes they didn&apos;t ask for—with governed tools that preserve human sovereignty and operational clarity.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 bg-foundry-texture rounded-3xl border-2 border-forge-500 border-b-4">
        <h2 className="heading-forge-lg text-slate-900">Why We Started Dominus Foundry</h2>
        <div className="mt-6 space-y-4 body-foundry">
          <p className="body-foundry">
            Technology changes faster than most teams can adapt. AI, cloud platforms, forced migrations—it&apos;s relentless.
            And the people selling these shifts rarely understand what it takes to run a real operation under pressure.
          </p>
          <p className="body-foundry">
            QuickBooks Desktop going away was one early shock that pushed us to build Dominus Foundry. It wasn&apos;t about
            one piece of software—it was the pattern: tools changing underneath operators and &quot;AI&quot; features being bolted
            on without governance or ownership.
          </p>
          <p className="body-foundry">
            We built Dominus Foundry to close that gap. Operators who built durable businesses deserve tools that are
            governed, auditable, and built to last—not hype projects that drift when stakes rise.
          </p>
          <p className="body-foundry">
            There will be more shifts ahead. We&apos;re here to help teams navigate them without losing their financial
            history, their clarity, or their control.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="heading-forge-lg mb-6">Who We Are</h2>
          
          <div className="space-y-6 body-foundry">
            <p className="body-foundry">
              Dominus Foundry is Mark and Bri Lord—a family business based in Albuquerque. 
              We&apos;re building this for the long haul, eventually bringing in our daughter Belle as she 
              builds her own ventures.
            </p>
            <p className="body-foundry">
              Mark brings decades of software expertise and three years of accounting and bookkeeping experience. 
              He's built and run businesses, so he understands what it's like when technology forces change on you.
            </p>
            <p className="body-foundry">
              When you work with us, you're working directly with us—not offshore staff, not junior consultants. 
              We handle every project personally because we understand that handing over your financial data requires trust.
            </p>
          </div>

          <div className="mt-8 card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6">
            <p className="heading-forge-md text-slate-900">Founder panel</p>
            <p className="text-sm text-slate-700">Portrait coming soon.</p>
            <p className="mt-4 body-foundry">
              Based in Albuquerque, building for teams nationwide
            </p>
            <p className="mt-2 body-foundry">
              We work with operators who need governed tools that can stand up to real usage and real accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="heading-forge-lg mb-8">How We Work</h2>
        
        <div className="space-y-8">
          <div className="card-forged-premium bg-white rounded-2xl p-6 md:p-8">
            <h3 className="heading-forge-md text-slate-900">We have patience for people who don't love change</h3>
            <p className="mt-3 body-foundry">
              You didn't ask for your core tools to be retired. You didn't ask for AI to disrupt your workflows. 
              We understand that frustration. We take the time to explain what's happening, why it matters, and 
              what your options are—without talking down to you.
            </p>
          </div>

          <div className="card-forged bg-white rounded-2xl p-6 md:p-8">
            <h3 className="heading-forge-md text-slate-900">We partner with you, not at you</h3>
            <p className="mt-3 body-foundry">
              Most tech vendors are impersonal and rushed. We're not. You get direct access to us throughout 
              the project. We answer questions, walk you through decisions, and make sure you understand what's 
              happening to your business-critical systems.
            </p>
          </div>

          <div className="card-forged bg-white rounded-2xl p-6 md:p-8">
            <h3 className="heading-forge-md text-slate-900">We don't rush the work</h3>
            <p className="mt-3 body-foundry">
              Quality over speed. We reconcile everything, document our work, and hand off systems that the 
              next person can understand. Your CPA shouldn't have to decode mysteries when they open your books.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-navy-500 text-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="heading-forge-lg text-white mb-6">Who We Work With</h2>
          <div className="text-lg text-bronze-200 space-y-4">
            <p className="body-foundry text-bronze-100">
              We work with owner-operators and ops leads who&apos;ve built something lasting. You&apos;re profitable,
              you run real teams, and you&apos;re tired of tools that create chaos instead of clarity.
            </p>
            <p className="font-semibold text-white text-xl mt-6">You're a good fit if:</p>
            <ul className="space-y-3 ml-6 mt-4">
              <li className="flex gap-3">
                <span className="text-forge-100 font-bold text-xl">✓</span>
                <span>You want governed tools, not hype or experiments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-100 font-bold text-xl">✓</span>
                <span>You value audit trails, clear ownership, and reliable handoffs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-100 font-bold text-xl">✓</span>
                <span>You value quality work and long-term stewardship</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-100 font-bold text-xl">✓</span>
                <span>You&apos;ve built something you&apos;re proud of and want to protect it</span>
              </li>
            </ul>
            <p className="mt-6 text-bronze-200">
              If you&apos;re extremely price-sensitive or want to outsource responsibility entirely, we&apos;re probably not the right fit.
              But if you want a partner who understands operational reality and will forge tools with governance, let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="heading-forge-lg mb-6">About the Name</h2>
        <div className="body-foundry space-y-4">
          <p className="body-foundry">
            "Dominus" is Latin for "Lord"—our family name. A foundry is where raw materials are forged into 
            durable, functional tools that last for generations.
          </p>
          <p className="body-foundry">
            We chose the name because we're building this for legacy. The Foundry is where the Lord family's 
            ideas take form and come to life. We're not looking for quick exits or venture capital. We're building 
            businesses that will serve people for decades, potentially with our daughter Belle joining as she 
            builds her own ventures.
          </p>
          <p className="font-semibold text-slate-900">
            Technology changes rapidly, but good businesses are built to last. That's what we're forging here.
          </p>
        </div>
      </section>

      {/* Our Services Path */}
      <section className="bg-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="heading-forge-lg mb-6">Our Service Philosophy</h2>
          <div className="body-foundry space-y-4">
            <p className="body-foundry">
              We forge one tool at a time, focused on the bottleneck that matters most right now.
            </p>
            <p className="body-foundry">
              When multiple tools must coordinate, we upgrade the operating model with Mentis so governance, memory, and
              accountability stay intact across the suite.
            </p>
            <p className="font-semibold text-slate-900">
              Each build is durable, documented, and built to last.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="heading-forge-lg mb-6">Why we built Mentis</h2>
        <div className="body-foundry space-y-4">
          <p className="body-foundry">
            We kept seeing the same two problems: tools that didn’t talk to each other, and automation that forgot everything
            you’d already done. Teams were told to add more apps, but nobody owned how it all worked together.
          </p>
          <p className="body-foundry">
            Mentis is our answer — the Human-Governed Intelligence layer that keeps multiple tools coherent behind the scenes,
            so calls, cash flow, onboarding, and reporting behave like one governed system.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="heading-forge-lg">Let's work together</h2>
          <p className="mt-4 body-foundry">
            Have questions about your technology needs? Ready to talk about where to modernize next? We're here to help.
          </p>
        </div>

        <ContactCTA className="mb-8" />

        <div className="rounded-2xl border-2 border-navy-500 bg-white p-6 md:p-10 shadow-xl">
          <ContactForm />
        </div>

        <p className="text-sm text-slate-700 text-center mt-3">We respond within one business day.</p>
        <div className="mt-6 text-center text-sm text-navy-600">
          Based in Albuquerque, New Mexico
        </div>
      </section>
    </>
  );
}
