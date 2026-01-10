import Button from "../../components/Button";
import ProductInquiryForm from "../../components/ProductInquiryForm";

export const metadata = {
  title: "Foundry Voice Concierge – Automated Phone Concierge | Dominus Foundry",
  description:
    "Foundry Voice Concierge is an automated phone concierge that answers, qualifies, books on your live calendar, and escalates high-value calls for appointment-driven teams.",
};

export default function VoiceConciergePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-teal-50 to-tan-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <p className="label-foundry">Foundry Voice Concierge</p>
              <h1 className="heading-forge-xl text-slate-900">
                Foundry Voice Concierge – Automated Phone Concierge
              </h1>
              <div className="divider-forged" />
              <p className="body-foundry text-slate-900">
                A managed phone concierge for appointment-driven teams and operators. Voice Concierge answers, qualifies, and books from your live calendar so you stop missing calls and start treating the phone like a real channel again.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#voice-concierge-form" className="justify-center">
                  Request a Live Demo
                </Button>
                <Button href="tel:+18667103313" variant="forgeSecondary">
                  Talk with us
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="card-forged rounded-xl bg-white p-4 shadow-sm">
                  <p className="label-foundry">24/7 coverage</p>
                  <p className="text-base font-semibold text-slate-900">No more missed booking calls</p>
                </div>
                <div className="card-forged rounded-xl bg-white p-4 shadow-sm">
                  <p className="label-foundry">Calendar aware</p>
                  <p className="text-base font-semibold text-slate-900">Offers times with buffers + rules</p>
                </div>
                <div className="card-forged rounded-xl bg-white p-4 shadow-sm">
                  <p className="label-foundry">Brand-safe scripts</p>
                  <p className="text-base font-semibold text-slate-900">Guardrails, confirmations, transcripts</p>
                </div>
              </div>
            </div>

            <div id="voice-concierge-form" className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 shadow-xl">
              <div className="space-y-2 mb-4">
                <p className="label-foundry">Tell us about your call volume</p>
                <h2 className="heading-forge-md text-slate-900">We&apos;ll map a pilot that fits</h2>
                <p className="text-sm text-slate-700">
                  Your script, escalation rules, and booking tools - built into one AI concierge.
                </p>
              </div>
              <ProductInquiryForm product="Foundry Voice Concierge" />
              <p className="mt-4 text-xs text-slate-700">
                Response within one business day. Transparent scope before you decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Who it’s for</h2>
            <p className="body-foundry text-slate-800">For teams who need calls handled like a reliable employee would.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Appointment-driven teams",
                body: "Operators who live and die by the phone and need every caller greeted and routed correctly.",
              },
              {
                title: "Owners without a full-time receptionist",
                body: "Leaders who can’t add headcount but can’t afford to let calls drop.",
              },
              {
                title: "Teams that want systems, not AI toys",
                body: "Operators who expect clear guardrails, logs, and reliable behavior every day.",
              },
            ].map((item) => (
              <div key={item.title} className="card-forged rounded-2xl bg-tan-50 p-6 shadow-sm space-y-2">
                <h3 className="heading-forge-md text-slate-900">{item.title}</h3>
                <p className="body-foundry text-slate-800">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">What it does</h2>
            <p className="body-foundry text-slate-800">Clear, auditable behaviors tuned to your business.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Answers every call",
                body: "Consistent, professional greeting every time—no voicemails or missed rings.",
              },
              {
                title: "Asks focused questions",
                body: "Understands why the caller is reaching out and keeps the conversation on track.",
              },
              {
                title: "Books on your live calendar",
                body: "Offers times, respects buffers and rules, and confirms details on the spot.",
              },
              {
                title: "Collects and escalates",
                body: "Captures name, phone, and email, flags high-value calls, and escalates instead of burying them.",
              },
              {
                title: "Shares context",
                body: "Transcripts and outcomes logged so follow-up is straightforward and training is easy.",
              },
            ].map((step, index) => (
              <div key={step.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <p className="label-foundry">Item {index + 1}</p>
                <h3 className="mt-2 heading-forge-md text-slate-900">{step.title}</h3>
                <p className="mt-2 body-foundry text-slate-800">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">How it works</h2>
            <p className="body-foundry text-slate-800">A straightforward rollout with human oversight.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Connect your calendar and number",
                body: "We connect Voice Concierge to your calendar and phone number.",
              },
              {
                title: "Define qualification and escalation",
                body: "We define your qualification rules and escalation paths.",
              },
              {
                title: "Route calls and log outcomes",
                body: "Calls start routing through the concierge, with transcripts and outcomes logged.",
              },
              {
                title: "Review, tune, and learn",
                body: "You review results and we tune messaging over time, with Mentis pulling patterns from what’s working.",
              },
            ].map((step, index) => (
              <div key={step.title} className="card-forged rounded-2xl bg-tan-50 p-6 shadow-sm">
                <p className="label-foundry">Step {index + 1}</p>
                <h3 className="mt-2 heading-forge-md text-slate-900">{step.title}</h3>
                <p className="mt-2 body-foundry text-slate-800">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Integration-ready and operator-controlled.</h2>
            <p className="body-foundry text-slate-800">Calendars, CRM logging, and routing options that keep the phone channel grounded.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Calendar connections with buffers and booking rules intact.",
              "CRM logging with call outcomes and transcripts for accountability.",
              "Routing options: forward your existing number or use IVR handoff.",
              "After-hours and overflow coverage without disrupting your front desk.",
              "Live transfer or callback escalation when stakes are high.",
              "Disposition tagging for QA, reporting, and coaching.",
            ].map((item) => (
              <div key={item} className="card-forged rounded-2xl bg-white p-6 shadow-sm flex gap-3">
                <span className="text-forge-700 font-bold mt-1">✓</span>
                <p className="text-sm text-slate-800 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">What operators are aiming for with Voice Concierge.</h2>
            <p className="body-foundry text-slate-800">Realistic, defensible outcomes—no hype.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { value: "Fewer missed calls during peak and after-hours windows.", note: "We start with coverage where you’re losing the most bookings." },
              { value: "More calendar slots filled without pulling staff off in-person work.", note: "Calendar-aware booking with your buffers and blackout dates." },
              { value: "Reduced front-desk call load.", note: "Concierge handles the routine, your team handles the high-value conversations." },
            ].map((metric) => (
              <div key={metric.value} className="card-forged rounded-2xl bg-tan-50 p-6 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">{metric.value}</p>
                <p className="mt-2 text-xs text-slate-700">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="heading-forge-lg">Fast to launch, simple to test.</h2>
            <p className="body-foundry text-slate-800">Short onboarding, pilot options, and clear pricing before you commit.</p>
          </div>
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 shadow-sm space-y-4">
            <ul className="space-y-3 text-slate-800">
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>1-2 week onboarding to design flows, connect tools, and test.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>Pilot or limited rollout so you see outcomes before wider use.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>Pricing as base fee + usage - no secrets, defined before launch.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button href="#voice-concierge-form" className="justify-center">Talk About a Pilot</Button>
              <Button href="tel:+18667103313" variant="forgeSecondary" className="justify-center">Call the team</Button>
            </div>
          </div>
          <div className="card-forged rounded-2xl bg-white p-6 md:p-8 shadow-sm space-y-4">
            <div className="space-y-2">
              <p className="label-foundry">Pilot design</p>
              <h3 className="heading-forge-md text-slate-900">Start small, prove outcomes.</h3>
            </div>
            <ul className="space-y-3 text-slate-800">
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>Start after-hours or limited hours to reduce risk.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>Define success metrics: missed call reduction, bookings captured, escalation rate.</span></li>
              <li className="flex gap-3"><span className="text-forge-700 font-bold">✓</span><span>Review transcripts and outcomes before expanding coverage.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Governance guardrails</h2>
            <p className="body-foundry text-slate-800">Clear disclosure, escalation, and auditability before you go live.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Disclosure policy",
                body: "You choose how and when callers are told they&apos;re speaking with an AI concierge.",
              },
              {
                title: "Escalation rules",
                body: "Edge cases route to humans immediately with clear handoff expectations.",
              },
              {
                title: "Audit trail",
                body: "Every call is logged with transcripts, outcomes, and disposition tags.",
              },
              {
                title: "Versioned scripts",
                body: "Every script update is tracked so you always know what&apos;s live.",
              },
            ].map((item) => (
              <div key={item.title} className="card-forged rounded-2xl bg-tan-50 p-6 shadow-sm space-y-2">
                <h3 className="heading-forge-md text-slate-900">{item.title}</h3>
                <p className="body-foundry text-slate-800">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg text-center">FAQs for cautious teams</h2>
          <div className="space-y-4">
            {[
              {
                q: "Will callers know they're talking to AI?",
                a: "We tune tone to your brand. You decide whether to disclose upfront or only when asked. We avoid over-promising and keep responses human and concise.",
              },
              {
                q: "Can I keep my existing phone number?",
                a: "Yes. We can forward your existing number to the concierge or provision a new line and forward back for certain scenarios.",
              },
              {
                q: "What if the AI doesn't know the answer to something?",
                a: "Unknowns trigger an escalation: offer to transfer to a human or capture details for a callback with a clear promise and timeline.",
              },
              {
                q: "Does this replace my staff?",
                a: "It handles the repetitive, interrupt-driven work so your team can focus on high-value service. Humans stay available for sensitive or complex cases.",
              },
              {
                q: "Can I listen to or read transcripts of calls?",
                a: "Yes. We provide call logs and transcripts for QA, training, and compliance.",
              },
              {
                q: "What industries do you support?",
                a: "Clubs, event spaces, salons, medspas, clinics, and other appointment-driven services. If you rely on calls for bookings or member care, we can tune to you.",
              },
            ].map((item) => (
              <details key={item.q} className="group rounded-xl border border-bronze-300 bg-tan-50 p-6 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900">
                  <span>{item.q}</span>
                  <span className="text-navy-400 transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-4 text-sm text-navy-700 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-forge-900 to-steel-700 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 text-center space-y-4">
          <h2 className="heading-forge-lg text-white">Your phones never have to go unanswered again.</h2>
          <p className="body-foundry text-forge-50/90">
            If missed calls are costing you bookings or member happiness, it&apos;s time to test an AI concierge built around your brand.
          </p>
          <Button href="#voice-concierge-form" className="justify-center">
            Request a Live Demo
          </Button>
        </div>
      </section>
    </>
  );
}
