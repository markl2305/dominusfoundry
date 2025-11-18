import Button from "../../components/Button";
import FoundryLeadForm from "../../components/FoundryLeadForm";
import ContactCTA from "../../components/ContactCTA";

export const metadata = {
  title: "Dominus Foundry | Systems that outwork you",
  description:
    "Dominus Foundry builds operator-grade systems for small businesses: QuickBooks migrations, InvoiceFlow invoicing automation, and Foundry Voice Concierge AI phone agents.",
};

const pillars = [
  {
    label: "Pillar 1",
    title: "QuickBooks Migration & Cleanup",
    body: "For when your QuickBooks file needs a clean slate or a new structure - without risking history or operations.",
    bullets: ["Entity and file migrations", "Chart-of-accounts redesign", "Historical cleanup and mapping"],
    cta: "Explore QuickBooks Migration",
    href: "/qb-migration",
  },
  {
    label: "Pillar 2",
    title: "InvoiceFlow - Automated Invoicing Around QuickBooks",
    body: "We build a clean, automated invoicing system around QuickBooks so invoices go out, reminders happen, and payments land without constant chasing.",
    bullets: ["Migration from spreadsheets and legacy tools", "Automated reminders and follow-up", "Clean AR inside QuickBooks"],
    cta: "Explore InvoiceFlow",
    href: "/invoiceflow",
  },
  {
    label: "Pillar 3",
    title: "Foundry Voice Concierge - AI Phone Agent",
    body: "An AI phone agent that answers, books, and qualifies in your brand's voice - so missed calls stop costing you bookings.",
    bullets: ["24/7 call handling", "Booking and lead capture", "Configured to your scripts and rules"],
    cta: "Explore Voice Concierge",
    href: "/voice-concierge",
  },
];

const principles = [
  {
    title: "System-first, not feature-first",
    body: "Every build starts from your real workflows and constraints, then we choose tools and integrations to match.",
  },
  {
    title: "Operator-speed",
    body: "You shouldn't need a full-time admin to keep a system alive. Our builds are designed to run light and stay understandable.",
  },
  {
    title: "Done-with-you, then done-for-you",
    body: "We design with you, launch with you, and keep systems tuned as your business evolves.",
  },
];

const steps = [
  {
    title: "Assess",
    body: "We map your current reality - numbers, calls, tools, and bottlenecks.",
  },
  {
    title: "Architect",
    body: "We design a simple, durable system that fits your team and tech stack.",
  },
  {
    title: "Build & Launch",
    body: "We implement, migrate, and test until it's safe to hand off.",
  },
  {
    title: "Support & Iterate",
    body: "We stay available for tuning, adjustments, and future builds.",
  },
];

const useCases = [
  {
    title: "Service owner with messy QuickBooks",
    body: "Needs clean books and reconciled history without downtime.",
  },
  {
    title: "Ops lead at a membership club",
    body: "Missing calls during peak hours and losing bookings.",
  },
  {
    title: "GM juggling invoicing and AR",
    body: "Wants invoices, reminders, and payments to run without chasing.",
  },
  {
    title: "Small team living in spreadsheets",
    body: "Ready to replace ad hoc workflows with durable systems.",
  },
  {
    title: "Owner tired of interruptions",
    body: "Needs calls handled and questions answered without pulling staff.",
  },
  {
    title: "Operator planning the next change",
    body: "Wants a partner who can build, run, and adjust as the business shifts.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-800 via-navy-700 to-navy-600 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_25%_20%,#f97316,transparent_25%),radial-gradient(circle_at_80%_30%,#f97316,transparent_22%)]" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-200">The Foundry</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Systems that let your business outwork you - not the other way around.
              </h1>
              <p className="text-lg md:text-xl text-bronze-100 leading-relaxed">
                Dominus Foundry builds and runs operator-grade systems for small businesses - from clean QuickBooks migrations
                to automated invoicing and AI phone agents that never miss a call.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#talk" className="justify-center">
                  Talk to the Foundry
                </Button>
                <Button href="#solutions" variant="secondary" className="justify-center border-white/50 text-white hover:border-white">
                  Explore our solutions
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 text-sm text-bronze-100">
                <div className="rounded-xl border border-white/20 bg-white/5 p-3">Owner-led builds</div>
                <div className="rounded-xl border border-white/20 bg-white/5 p-3">Done-with-you then done-for-you</div>
                <div className="rounded-xl border border-white/20 bg-white/5 p-3">Clean numbers, captured revenue</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-xl space-y-4">
              <h2 className="text-2xl font-bold text-white">Three pillars. One systems foundry.</h2>
              <p className="text-sm text-bronze-100">
                QuickBooks migrations, InvoiceFlow, and Foundry Voice Concierge - built and run with the same operator mindset.
              </p>
              <div className="space-y-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-xl border border-white/20 bg-white/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-orange-200">{pillar.label}</p>
                    <p className="mt-1 text-base font-semibold text-white">{pillar.title}</p>
                    <p className="text-xs text-bronze-100 mt-1">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Choose the system that fits.</h2>
            <p className="text-lg text-navy-700">Every pillar is built to relieve a core operational drag and keep revenue predictable.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm flex flex-col gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-orange-700">{pillar.label}</p>
                  <h3 className="mt-2 text-xl font-bold text-navy-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-navy-700 leading-relaxed">{pillar.body}</p>
                </div>
                <ul className="space-y-2 text-sm text-navy-800">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button href={pillar.href} className="w-full justify-center">
                    {pillar.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Why a foundry?</h2>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              We don't ship random tools. We forge systems that clean up your numbers, capture more revenue, and free you from living inside every process.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-bronze-300 bg-tan-50 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-navy-900">{principle.title}</h3>
                <p className="mt-2 text-sm text-navy-700 leading-relaxed">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">How we work across any build.</h2>
            <p className="text-lg text-navy-700">Same operator-grade approach for every pillar.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
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
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div className="md:col-span-1 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Operators behind the systems.</h2>
              <p className="text-lg text-navy-700">
                Built and run by Mark &amp; Bri Lord - operators who balance code, finance, and day-to-day small business realities.
              </p>
              <p className="text-sm text-navy-600">
                TODO: Replace sample quotes below with real testimonials once available.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-4">
              <div className="rounded-2xl border border-bronze-300 bg-tan-50 p-6 shadow-sm">
                <p className="text-sm text-navy-700 leading-relaxed">
                  "Sample placeholder: The Foundry team actually cleans up the mess before automating anything. The system just works, and I'm not chasing invoices anymore."
                </p>
                <p className="mt-3 text-sm font-semibold text-navy-900">Owner, service business - TODO replace with real client</p>
              </div>
              <div className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
                <p className="text-sm text-navy-700 leading-relaxed">
                  "Sample placeholder: Calls are answered, bookings are logged, and I can see exactly what was said without managing another employee."
                </p>
                <p className="mt-3 text-sm font-semibold text-navy-900">GM, membership club - TODO replace with real client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Who we serve.</h2>
            <p className="text-lg text-navy-700">If you're an owner or operator carrying the weight of systems, we're built for you.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-2xl border border-bronze-300 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy-900">{useCase.title}</h3>
                <p className="mt-2 text-sm text-navy-700 leading-relaxed">{useCase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talk" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6">
          <span id="contact" className="block h-0 w-0" aria-hidden />
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Tell us where your systems are breaking.</h2>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              Share a bit about your business and where things feel heavy. We'll point you to the right Foundry build - QuickBooks migration, InvoiceFlow, Voice Concierge, or a combination.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-navy-500 bg-tan-50 p-6 md:p-10 shadow-xl">
            <FoundryLeadForm />
          </div>
          <p className="text-sm text-navy-600 text-center">
            Prefer a direct call? <a className="underline font-semibold" href="tel:+15052261457">(505) 226-1457</a>. We respond within one business day.
          </p>
          <div className="flex justify-center">
            <ContactCTA />
          </div>
        </div>
      </section>

      <section className="bg-navy-500 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-18 text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Your business deserves systems that outwork you.</h2>
          <p className="text-lg text-bronze-200">
            If your books, invoicing, or phones are costing you time and sleep, it's time to build something better in the Foundry.
          </p>
          <Button href="#talk" className="justify-center">
            Talk to the Foundry
          </Button>
        </div>
      </section>
    </>
  );
}
