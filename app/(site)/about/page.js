import Link from "next/link";
import Button from "../../../components/Button";
import ContactCTA from "../../../components/ContactCTA";

export const metadata = {
  title: 'About — Dominus Foundry',
  description: 'Operator-grade AI infrastructure built by the Lord family. Based in Albuquerque, building for the long haul.'
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
            We help them cross the changes they didn&apos;t ask for—with custom AI systems that preserve human sovereignty and operational clarity.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 bg-foundry-texture rounded-3xl border-2 border-forge-500 border-b-4">
        <h2 className="heading-forge-lg text-slate-900">Why We Started Dominus Foundry</h2>
        <div className="mt-6 space-y-4 body-foundry">
          <p className="body-foundry">
            Technology changes faster than most teams can adapt. AI, cloud platforms, new integrations—it&apos;s relentless.
            And the people selling these shifts rarely understand what it takes to run a real operation under pressure.
          </p>
          <p className="body-foundry">
            We kept seeing the same pattern: tools that don&apos;t talk to each other, &quot;AI&quot; features bolted on without governance,
            and operators stuck babysitting dashboards instead of running their business.
          </p>
          <p className="body-foundry">
            Dominus Foundry builds operator-grade AI infrastructure—custom systems that plug into how your business actually runs.
            Your POS, your calendar, your workflows. Governed, auditable, and built to last.
          </p>
          <p className="body-foundry">
            There will be more shifts ahead. We&apos;re here to help teams navigate them without losing their clarity or their control.
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
              We&apos;re operators, not a startup selling dashboards. Mark brings decades of software expertise and
              has built and run businesses. Bri keeps operations grounded. Together we understand what it&apos;s like
              when technology forces change on you—and what it takes to build systems that actually help.
            </p>
            <p className="body-foundry">
              When you work with us, you&apos;re working directly with us—not offshore staff, not junior consultants.
              We handle every project personally because building custom infrastructure for your business requires trust.
            </p>
          </div>

          <div className="mt-8 card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6">
            <p className="heading-forge-md text-slate-900">Founder panel</p>
            <p className="text-sm text-slate-700">Portrait coming soon.</p>
            <p className="mt-4 body-foundry">
              Based in Albuquerque, building for teams nationwide
            </p>
            <p className="mt-2 body-foundry">
              We work with operators who need governed systems that can stand up to real usage and real accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Mentis — Our Architecture */}
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="heading-forge-lg text-white mb-6">Mentis — The Architecture Behind Everything</h2>
          <div className="space-y-4 body-foundry text-white/90">
            <p>
              Every system we build follows the same architectural discipline. We call it Mentis.
            </p>
            <p>
              Mentis isn&apos;t a product you buy separately — it&apos;s the design philosophy that makes every tool work the way it does. Human authority preserved. Complete audit trails. No drift over time. Unified intelligence when systems connect.
            </p>
            <p>
              Start with one tool and it works beautifully on its own. Add another and they integrate naturally. Eventually, you realize your entire operation runs on one coherent platform — that&apos;s when everything clicks.
            </p>
          </div>
          <div className="mt-6">
            <Link href="/mentis" className="text-forge-300 font-semibold underline hover:text-white">
              Learn more about Mentis →
            </Link>
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="bg-[var(--foundry-bg-alt)] py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="heading-forge-lg mb-8">How We Build</h2>

          <div className="space-y-6 body-foundry">
            <p className="body-foundry">
              Every system we ship follows the same architectural discipline — regardless of scope.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-forged bg-white rounded-2xl p-6">
              <h3 className="heading-forge-md text-slate-900">Workflow orchestration</h3>
              <p className="mt-3 body-foundry">
                Built on n8n — explicit, inspectable, and adaptable. No black boxes.
              </p>
            </div>

            <div className="card-forged bg-white rounded-2xl p-6">
              <h3 className="heading-forge-md text-slate-900">Governed AI</h3>
              <p className="mt-3 body-foundry">
                LLM calls are constrained, logged, and recoverable. No hallucination, no drift.
              </p>
            </div>

            <div className="card-forged bg-white rounded-2xl p-6">
              <h3 className="heading-forge-md text-slate-900">Integration-first</h3>
              <p className="mt-3 body-foundry">
                We connect to Square, Google, QuickBooks, calendars, and internal tools — not replace them.
              </p>
            </div>

            <div className="card-forged bg-white rounded-2xl p-6">
              <h3 className="heading-forge-md text-slate-900">Audit-ready</h3>
              <p className="mt-3 body-foundry">
                Every action logged. Every decision traceable.
              </p>
            </div>
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
            <p className="font-semibold text-slate-900">
              Each build is durable, documented, and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="heading-forge-lg">Let&apos;s work together</h2>
          <p className="mt-4 body-foundry">
            Have questions about your systems? Ready to talk about what needs to work better? We&apos;re here to help.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button href="/start" className="justify-center">
            Tell us what&apos;s broken
          </Button>
          <ContactCTA />
        </div>

        <p className="text-sm text-slate-700 text-center mt-6">We respond within one business day.</p>
        <div className="mt-3 text-center text-sm text-navy-600">
          Based in Albuquerque, New Mexico
        </div>
      </section>
    </>
  );
}
