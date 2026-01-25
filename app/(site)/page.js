import { Suspense } from "react";
import Link from "next/link";
import Button from "../../components/Button";
import FoundryLeadForm from "../../components/FoundryLeadForm";
import ContactCTA from "../../components/ContactCTA";

export const metadata = {
  title: "Dominus Foundry | Operator-grade AI systems designed with Mentis",
  description:
    "We believe operators deserve systems that don't drift. Voice agents, booking systems, invoicing, and workflows — each one complete, all designed to connect.",
};

const featuredProducts = [
  {
    title: "Voice Concierge",
    tagline: "Your front desk, governed.",
    body: "Answers calls. Qualifies leads. Books appointments. Routes to humans when it matters. Every interaction logged, every decision traceable.",
    href: "/business-tools/voice-concierge",
  },
  {
    title: "Lead-to-Cash",
    tagline: "From closed deal to collected revenue.",
    body: "Invoices go out on time. Reminders follow a cadence. Payments get tracked. Exceptions surface before they become problems.",
    href: "/business-tools/lead-to-cash",
  },
  {
    title: "Client Onboarding Engine",
    tagline: "Signed to operational. No chaos.",
    body: "Documents collected. Kickoffs scheduled. Tasks assigned. Every client follows the same disciplined path — unless you explicitly route them otherwise.",
    href: "/business-tools/client-onboarding-engine",
  },
];

const moreProducts = [
  {
    title: "Lead Intake → Booking",
    body: "Capture, qualify, route, and book — before leads cool off.",
    href: "/business-tools/lead-intake-booking",
  },
  {
    title: "Support Triage Desk",
    body: "Intake, classify, route, and resolve — without the chaos.",
    href: "/business-tools/support-triage-desk",
  },
  {
    title: "Ops Reporting & Intelligence",
    body: "See what matters across sales, delivery, and finance.",
    href: "/business-tools/ops-reporting-intelligence",
  },
];

const useCases = [
  {
    title: "Service founder with messy finances",
    body: "Lead-to-Cash brings order to invoicing and AR.",
  },
  {
    title: "Ops lead at a membership club",
    body: "Voice Concierge handles calls and books parties.",
  },
  {
    title: "GM juggling invoicing and AR",
    body: "Lead-to-Cash runs the cadence without chasing.",
  },
  {
    title: "Lean team living in spreadsheets",
    body: "Any of our systems replaces ad-hoc with durable.",
  },
  {
    title: "Owner tired of interruptions",
    body: "Voice Concierge answers and routes without pulling staff.",
  },
  {
    title: "Operator planning the next change",
    body: "Start with one system. Add more. Everything connects.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-steel-700 via-forge-800 to-forge-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-foundry-texture foundry-hero-overlay" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl space-y-6">
            <h1 className="heading-forge-xl text-white leading-tight">
              Operator-grade AI systems.<br />
              Each one complete.<br />
              All designed to connect.
            </h1>
            <p className="body-foundry text-white/90 md:text-xl">
              We believe operators deserve systems that don&apos;t drift — where humans stay in control and every decision is traceable.
            </p>
            <p className="body-foundry text-white md:text-lg">
              Start with Voice Concierge to handle your calls. Add Lead-to-Cash when invoicing needs structure. Watch them work together without friction — because they were designed with the same philosophy from day one.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-4">
              <Button href="/business-tools" className="justify-center">
                Explore the systems
              </Button>
              <Button
                href="/start"
                variant="forgeSecondary"
                className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
              >
                Tell us what&apos;s broken
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Each a Star */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-forge-lg">Complete systems. Ready to work.</h2>
            <p className="body-foundry text-slate-700 max-w-2xl mx-auto">
              Each system solves a real operational problem — beautifully, reliably, and with full governance. Use one. Use several. They&apos;re designed to work alone or together.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group card-forged-premium rounded-2xl p-8 bg-gradient-to-br from-white to-forge-50 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="flex-1 space-y-4">
                  <h3 className="heading-forge-lg text-slate-900 group-hover:text-forge-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-forge-700 font-semibold">{product.tagline}</p>
                  <p className="body-foundry text-slate-700">{product.body}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-forge-200">
                  <span className="text-sm text-slate-600">Designed with Mentis</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {moreProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group card-forged rounded-xl p-6 bg-white hover:bg-forge-50 transition-colors"
              >
                <h3 className="heading-forge-md text-slate-900 group-hover:text-forge-700 transition-colors">
                  {product.title}
                </h3>
                <p className="mt-2 body-foundry text-slate-700">{product.body}</p>
                <p className="mt-3 text-sm text-slate-500">Designed with Mentis</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/business-tools" className="text-forge-700 font-semibold underline hover:text-forge-900">
              See all systems →
            </Link>
          </div>
        </div>
      </section>

      {/* Real Example */}
      <section className="bg-tan-100">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-8">
          <div className="text-center space-y-3">
            <p className="label-foundry text-forge-700">In practice</p>
            <h2 className="heading-forge-lg text-slate-900">A private club runs on three systems</h2>
          </div>
          <div className="card-forged-premium rounded-2xl bg-white p-8 md:p-10 shadow-lg space-y-6">
            <p className="body-foundry text-slate-800 text-lg">
              Voice Concierge takes beer orders by voice and sends them straight to Square. It books private parties and notifies the owner automatically. Lead-to-Cash handles member invoicing and follows up on outstanding balances.
            </p>
            <p className="body-foundry text-slate-800">
              No dashboard to babysit. No manual handoffs. Three systems, one operation, zero friction.
            </p>
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Voice Concierge</span>
              <span>•</span>
              <span>Lead-to-Cash</span>
              <span>•</span>
              <span>Square integration</span>
              <span>•</span>
              <span>All designed with Mentis</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Connection */}
      <section className="bg-gradient-to-b from-forge-900 to-steel-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-forge-lg text-white">
              Start with one. Everything connects.
            </h2>
            <p className="body-foundry text-white/80 md:text-lg">
              Each system is complete on its own — a star in its own right. But they share the same DNA. The same governance. The same commitment to human authority.
            </p>
            <p className="body-foundry text-white/80 md:text-lg">
              When you add a second system, something changes. Handoffs disappear. Data flows. Your operation starts to feel like one thing instead of twenty.
            </p>
            <p className="body-foundry text-white/80 md:text-lg">
              We call this design philosophy <Link href="/mentis" className="text-forge-300 underline hover:text-white">Mentis</Link>. It&apos;s not a product you buy — it&apos;s the reason our products work the way they do. And when you&apos;re ready for the full experience, it&apos;s there.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-semibold text-white">Human authority, preserved</h3>
              <p className="text-sm text-white/70">AI assists. Humans decide. Escalation paths are explicit.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-white">Every action, logged</h3>
              <p className="text-sm text-white/70">Full audit trails. Traceable decisions. Answers when questions arise.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-white">No drift</h3>
              <p className="text-sm text-white/70">Systems designed to hold their shape over time.</p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/mentis" className="text-forge-300 font-semibold underline hover:text-white">
              Learn about Mentis →
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Built for operators</h2>
            <p className="body-foundry text-slate-700 max-w-2xl mx-auto">
              If you run a real operation — with real staff, real customers, and real pressure — these systems are for you.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="heading-forge-md text-slate-900">{useCase.title}</h3>
                <p className="mt-2 body-foundry text-slate-700">{useCase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operators */}
      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 space-y-8">
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div className="md:col-span-1 space-y-3">
              <h2 className="heading-forge-lg">Operators behind the systems.</h2>
              <p className="body-foundry">
                Built and run by Mark &amp; Bri Lord — operators who balance code, finance, and day-to-day operations.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-4">
              <div className="card-forged-premium rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-slate-800 leading-relaxed">
                  &quot;The Foundry team stabilized our books before automating a thing. Invoices go out, reminders happen, and cash shows up without a chase.&quot;
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">Owner, regional service business</p>
              </div>
              <div className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-800 leading-relaxed">
                  &quot;Calls are answered, bookings are logged, and we see exactly what was said without adding headcount. The guardrails keep us comfortable.&quot;
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">General manager, membership club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="talk" className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6">
          <span id="contact" className="block h-0 w-0" aria-hidden />
          <div className="space-y-3 text-center">
            <h2 className="heading-forge-lg">Ready to see what connects?</h2>
            <p className="body-foundry max-w-2xl mx-auto">
              Tell us what&apos;s broken in your operation. We&apos;ll show you which systems can help — and how they work together.
            </p>
          </div>
          <div className="card-forged-premium rounded-2xl bg-white p-6 md:p-10 shadow-xl">
            <Suspense fallback={null}>
              <FoundryLeadForm />
            </Suspense>
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-slate-700">
              Prefer a direct call? <a className="underline font-semibold" href="tel:+18667103313">(866) 710-3313</a>
            </p>
            <ContactCTA />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-forge-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-18 text-center space-y-4">
          <h2 className="heading-forge-lg text-white">Your operation deserves systems that don&apos;t drift.</h2>
          <p className="body-foundry text-forge-100/80">
            Start with one. Add more when you&apos;re ready. Watch everything connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href="/business-tools" className="justify-center">
              Explore the systems
            </Button>
            <Button
              href="/mentis"
              variant="forgeSecondary"
              className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
            >
              Learn about Mentis
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
