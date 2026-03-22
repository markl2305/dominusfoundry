import { Suspense } from "react";
import Link from "next/link";
import Button from "../../components/Button";
import FoundryLeadForm from "../../components/FoundryLeadForm";
import ContactCTA from "../../components/ContactCTA";

export const metadata = {
  title: "Dominus Foundry | Operator-grade AI systems powered by DominusOS",
  description:
    "We believe operators deserve systems that don't drift. Voice agents, booking systems, invoicing, and workflows — each one complete, all designed to connect.",
};

const featuredProducts = [
  {
    title: "Intake Engine",
    tagline: "Every lead. Every channel. One engine.",
    body: "Phone, web, chat, email, social — captured, qualified, and booked before leads go cold. Powered by DominusOS.",
    href: "/systems/intake",
  },
  {
    title: "Revenue Engine",
    tagline: "From signed deal to collected cash.",
    body: "Onboarding, invoicing, and collections running without you chasing. Powered by DominusOS.",
    href: "/systems/revenue",
  },
  {
    title: "Ops Engine",
    tagline: "Your operation — visible and governed.",
    body: "Support, reporting, compliance, hiring, vendors — running without you as the bottleneck. Powered by DominusOS.",
    href: "/systems/ops",
  },
];

const useCases = [
  {
    title: "Service founder with messy finances",
    body: "Revenue Engine brings order to invoicing and AR.",
  },
  {
    title: "Ops lead at a membership club",
    body: "Intake Engine handles calls and books parties.",
  },
  {
    title: "GM juggling invoicing and AR",
    body: "Revenue Engine runs the cadence without chasing.",
  },
  {
    title: "Lean team living in spreadsheets",
    body: "Any of our engines replaces ad-hoc with durable.",
  },
  {
    title: "Owner tired of interruptions",
    body: "Intake Engine answers and routes without pulling staff.",
  },
  {
    title: "Operator planning the next change",
    body: "Start with one engine. Add more. Everything connects.",
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
              Most operations leak in three places.<br />
              We built three engines to seal them.
            </h1>
            <p className="body-foundry text-white/90 md:text-xl">
              We believe operators deserve systems that don&apos;t drift — where humans stay in control and every decision is traceable.
            </p>
            <p className="body-foundry text-white md:text-lg">
              Start with Intake Engine to handle your front door. Add Revenue Engine when invoicing needs structure. Watch them work together without friction — because they were designed with the same philosophy from day one.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-4">
              <Button href="/systems" className="justify-center">
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
                  <span className="text-sm text-slate-600">Powered by DominusOS</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/systems" className="text-forge-700 font-semibold underline hover:text-forge-900">
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
            <h2 className="heading-forge-lg text-slate-900">A private club runs on three engines</h2>
          </div>
          <div className="card-forged-premium rounded-2xl bg-white p-8 md:p-10 shadow-lg space-y-6">
            <p className="body-foundry text-slate-800 text-lg">
              Intake Engine handles calls by voice and books private parties automatically. Revenue Engine manages member invoicing and follows up on outstanding balances. Ops Engine keeps the day-to-day running without the owner in the loop.
            </p>
            <p className="body-foundry text-slate-800">
              No dashboard to babysit. No manual handoffs. Three engines, one operation, zero friction.
            </p>
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Intake Engine</span>
              <span>•</span>
              <span>Revenue Engine</span>
              <span>•</span>
              <span>Ops Engine</span>
              <span>•</span>
              <span>All powered by DominusOS</span>
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
              This is <Link href="/dominus-os" className="text-forge-300 underline hover:text-white">DominusOS</Link> — a human-governed operating system for AI workforces. It&apos;s not a product you buy — it&apos;s the reason our products work the way they do. And when you&apos;re ready for the full experience, it&apos;s there.
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
            <Link href="/dominus-os" className="text-forge-300 font-semibold underline hover:text-white">
              Learn about DominusOS →
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

      {/* Careers Callout */}
      <section className="bg-gradient-to-b from-forge-900 to-forge-800">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <p className="label-foundry text-forge-300">We&apos;re Hiring</p>
              <h2 className="font-crimson text-3xl md:text-4xl font-bold text-white">
                Join the founding sales team
              </h2>
              <p className="body-foundry text-white/70 max-w-xl">
                9 pending patents. Fully built product. Zero sales team. 100% first-month commission + 15% residual forever. Ground floor of a fast-growing SaaS company.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/careers" className="justify-center whitespace-nowrap">
                View Open Roles
              </Button>
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
            <Button href="/systems" className="justify-center">
              Explore the systems
            </Button>
            <Button
              href="/dominus-os"
              variant="forgeSecondary"
              className="justify-center bg-white/10 text-white border-white/70 hover:bg-white/20 hover:border-white"
            >
              Learn about DominusOS
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
