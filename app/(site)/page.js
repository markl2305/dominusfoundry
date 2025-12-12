import Link from "next/link";
import Button from "../../components/Button";
import FoundryLeadForm from "../../components/FoundryLeadForm";
import ContactCTA from "../../components/ContactCTA";

export const metadata = {
  title: "Dominus Foundry | Systems that outwork you",
  description:
    "Dominus Foundry builds AI-backed systems for small businesses: Foundry Voice Concierge, InvoiceFlow automated invoicing, and Orderline voice ordering capture.",
};

const pillars = [
  {
    label: "Pillar 1",
    title: "Foundry Voice Concierge – Automated Phone Concierge",
    body: "Voice Concierge is an automated phone concierge that answers calls, qualifies callers, and books directly from your live calendar like a reliable employee, instead of another chatbot.",
    bullets: ["24/7 call handling", "Booking and lead capture", "Configured to your scripts and rules"],
    cta: "Explore Voice Concierge",
    href: "/voice-concierge",
  },
  {
    label: "Pillar 2",
    title: "InvoiceFlow – Automated Invoicing Around QuickBooks",
    body: "InvoiceFlow automates invoicing and follow-up so cash flow doesn’t depend on you chasing every bill, and stays aligned with the way your QuickBooks data is actually structured.",
    bullets: ["Migration from spreadsheets and legacy tools", "Automated reminders and follow-up", "Clean AR inside QuickBooks"],
    cta: "Explore InvoiceFlow",
    href: "/invoiceflow",
  },
  {
    label: "Pillar 3",
    title: "Orderline – Voice Ordering Capture",
    body: "Orderline lets you talk through what needs to be ordered, turns that into structured line items, and aligns it with your inventory lists or CSVs so re-ordering runs from your own words instead of another spreadsheet.",
    bullets: ["Voice-to-line-item capture", "Matches your inventory lists", "Exports clean structured data"],
    cta: "Explore Orderline",
    href: "/orderline",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-foundry-texture" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="label-foundry text-orange-200">The Foundry</p>
              <h1 className="heading-forge-xl text-white leading-tight">
                AI-backed systems that let your business outwork you — not the other way around.
              </h1>
              <div className="divider-forged" />
              <p className="body-foundry font-semibold md:text-xl text-white">
                Dominus Foundry builds and runs AI-backed systems for small teams: automated invoicing around your books, an automated phone concierge that behaves like a reliable employee, and a voice-driven ordering system for inventory and supplies. Under the surface, everything is coordinated by our operations intelligence layer, Mentis.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#talk" className="justify-center">
                  Talk to the Foundry
                </Button>
                <Button
                  href="#solutions"
                  variant="forgeSecondary"
                  className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
                >
                  Explore our solutions
                </Button>
              </div>
            </div>

            <div className="card-forged-premium rounded-2xl p-6 shadow-xl bg-gradient-to-br from-forge-50/70 to-white text-slate-900 space-y-4">
              <h2 className="heading-forge-md">Three pillars. One systems foundry.</h2>
              <p className="text-sm text-slate-900">
                Foundry Voice Concierge, InvoiceFlow, and Orderline – each built and run with the same operator mindset and tied together by Mentis.
              </p>
              <div className="space-y-3">
                {pillars.map((pillar, index) => (
                  <Link key={pillar.title} href={pillar.href} className="block group">
                    <div className="card-forged bg-white p-4 transition-transform transition-colors cursor-pointer group-hover:-translate-y-0.5 group-hover:border-forge-200 group-hover:bg-white/90">
                      <div className="flex items-center justify-between">
                        <p className="label-foundry">{pillar.label}</p>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forge-600 text-xs font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-base font-semibold text-slate-900">{pillar.title}</p>
                      <p className="text-sm text-slate-900 mt-1">{pillar.body}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Choose the system that fits.</h2>
            <p className="body-foundry text-slate-900 max-w-3xl mx-auto">Each system we offer runs on the same underlying operations intelligence, so your books, billing, and phones stay in sync instead of fighting each other.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <Link key={pillar.title} href={pillar.href} className="block group">
                <div className="card-forged-premium rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors cursor-pointer group-hover:bg-white/70 group-hover:border-forge-200">
                  <div className="flex items-center justify-between">
                    <p className="label-foundry">{pillar.label}</p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forge-700 text-white font-semibold">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="heading-forge-md text-slate-900">{pillar.title}</h3>
                    <p className="mt-2 body-foundry text-slate-900">{pillar.body}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-900">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-forge-700 font-bold">•</span>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="heading-forge-lg text-slate-900">Mentis — the operations intelligence under your systems</h2>
            <p className="body-foundry text-slate-900 max-w-4xl mx-auto">
              Most tools and “AI features” treat every interaction like the first time. Mentis is different. It remembers how your team actually runs: which calls mattered, how invoices got paid, which orders repeat. That context quietly shapes how our systems behave.
            </p>
            <p className="body-foundry text-slate-900 max-w-4xl mx-auto">
              You don’t log in to Mentis all day. You feel it when your phone concierge, invoicing, and ordering start to act like parts of a single brain instead of separate projects you have to manage by hand.
            </p>
            <p className="text-sm text-slate-800 max-w-3xl mx-auto">
              Mentis is available today through Foundry Voice Concierge, InvoiceFlow, and Orderline, and will grow into a fuller virtual operations brain for small teams over time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Why a foundry?</h2>
            <p className="body-foundry max-w-3xl mx-auto">
              We don't ship random tools. We forge systems that clean up your numbers, capture more revenue, and free you from living inside every process.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="card-forged rounded-2xl p-6 shadow-sm">
                <h3 className="heading-forge-md text-slate-900">{principle.title}</h3>
                <p className="mt-2 body-foundry">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">How we work across any build.</h2>
            <p className="body-foundry text-slate-800">Same operator-grade approach for every pillar.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="label-foundry">Step {index + 1}</p>
                  <span className="text-sm font-semibold text-forge-700">Operator path</span>
                </div>
                <h3 className="mt-3 heading-forge-md text-slate-900">{step.title}</h3>
                <p className="mt-2 body-foundry">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div className="md:col-span-1 space-y-3">
              <h2 className="heading-forge-lg">Operators behind the systems.</h2>
              <p className="body-foundry">
                Built and run by Mark &amp; Bri Lord - operators who balance code, finance, and day-to-day small business realities.
              </p>
              <p className="text-sm text-slate-700">
                Client stories are being gathered now. In the meantime, here are the outcomes teams ask us to replicate.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-4">
              <div className="card-forged-premium rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-slate-800 leading-relaxed">
                  “The Foundry team stabilized our books before automating a thing. Invoices go out, reminders happen, and cash shows up without a chase.”
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">Owner, regional service business</p>
              </div>
              <div className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-800 leading-relaxed">
                  “Calls are answered, bookings are logged, and we see exactly what was said without adding headcount. The guardrails keep us comfortable.”
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">General manager, membership club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Who we serve.</h2>
            <p className="body-foundry max-w-3xl mx-auto">If you're an owner or operator carrying the weight of systems, we're built for you.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="heading-forge-md text-slate-900">{useCase.title}</h3>
                <p className="mt-2 body-foundry">{useCase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talk" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6">
          <span id="contact" className="block h-0 w-0" aria-hidden />
          <div className="space-y-3 text-center">
            <h2 className="heading-forge-lg">Tell us where your systems are breaking.</h2>
            <p className="body-foundry max-w-3xl mx-auto">
              Share a bit about your business and where things feel heavy. We'll point you to the right Foundry build - InvoiceFlow, Voice Concierge, Orderline, or a combination.
            </p>
          </div>
          <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 md:p-10 shadow-xl">
            <FoundryLeadForm />
          </div>
          <p className="text-sm text-slate-700 text-center">
            Prefer a direct call? <a className="underline font-semibold" href="tel:+18667103313">(866) 710-3313</a>. We respond within one business day.
          </p>
          <div className="flex justify-center">
            <ContactCTA />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-forge-900 to-steel-700 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-18 text-center space-y-4">
          <h2 className="heading-forge-lg text-white">Your business deserves systems that outwork you.</h2>
          <p className="body-foundry text-forge-50/90">
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
