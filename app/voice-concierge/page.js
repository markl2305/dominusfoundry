import Button from "../../components/Button";
import VoiceConciergeForm from "../../components/VoiceConciergeForm";

export const metadata = {
  title: "Foundry Voice Concierge - AI Phone Agent | Dominus Foundry",
  description:
    "Never miss a call again. Foundry Voice Concierge answers, books, and qualifies callers in your brand voice with human-safe guardrails.",
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
                Never Miss a Call Again - Without Hiring Another Receptionist.
              </h1>
              <div className="divider-forged" />
              <p className="body-foundry">
                Foundry Voice Concierge is an AI phone agent that answers, books, and qualifies in your brand&apos;s voice - so every call is handled, even when your team is busy or offline.
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
                  <p className="text-base font-semibold text-slate-900">No more missed calls</p>
                </div>
                <div className="card-forged rounded-xl bg-white p-4 shadow-sm">
                  <p className="label-foundry">Brand-safe scripts</p>
                  <p className="text-base font-semibold text-slate-900">Guardrails + human override</p>
                </div>
                <div className="card-forged rounded-xl bg-white p-4 shadow-sm">
                  <p className="label-foundry">Actionable outcomes</p>
                  <p className="text-base font-semibold text-slate-900">Bookings and notes captured</p>
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
              <VoiceConciergeForm />
              <p className="mt-4 text-xs text-slate-700">
                Response within one business day. Transparent scope before you decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Every missed call is a missed booking.</h2>
            <p className="body-foundry text-slate-800">Voice Concierge keeps callers on track while your team stays on task.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Missed calls during peak hours",
                body: "Calls answered instantly with the right script - even when your front desk is slammed.",
                icon: "📞",
              },
              {
                title: "Staff pulled off higher-value tasks",
                body: "Routine questions handled by the concierge so humans focus on revenue-driving work.",
                icon: "🎯",
              },
              {
                title: "No record of what callers asked",
                body: "Call outcomes and details logged so follow-up never falls through the cracks.",
                icon: "📝",
              },
            ].map((item) => (
              <div key={item.title} className="card-forged rounded-2xl bg-tan-50 p-6 shadow-sm">
                <div className="text-3xl" aria-hidden="true">{item.icon}</div>
                <h3 className="mt-3 heading-forge-md text-slate-900">{item.title}</h3>
                <p className="mt-2 body-foundry">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tan-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Your script. Your rules. Our AI handles the rest.</h2>
            <p className="body-foundry text-slate-800">A transparent flow with human override options baked in.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "We design your call flows",
                body: "Greetings, FAQs, booking rules, and escalation paths designed with you.",
              },
              {
                title: "We plug into your systems",
                body: "Connect to your booking tool or intake workflow so the agent can take action, not just talk.",
              },
              {
                title: "We launch a branded concierge",
                body: "Your number routes to the Voice Concierge, which handles calls 24/7 within your guardrails.",
              },
              {
                title: "You monitor, we refine",
                body: "We review call logs, tune responses, and update flows as your business evolves.",
              },
            ].map((step, index) => (
              <div key={step.title} className="card-forged rounded-2xl bg-white p-6 shadow-sm">
                <p className="label-foundry">Step {index + 1}</p>
                <h3 className="mt-2 heading-forge-md text-slate-900">{step.title}</h3>
                <p className="mt-2 body-foundry">{step.body}</p>
                <p className="mt-3 text-xs text-slate-700">Human override available at every step.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">What your AI concierge can do on day one.</h2>
            <p className="body-foundry text-slate-800">A few written back-and-forths to show tone and control.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Answer FAQs about hours, pricing, and directions.",
                script: [
                  { speaker: "Caller", line: "Are you open past 6pm on Thursdays?" },
                  { speaker: "Voice Concierge", line: "We're open until 7pm on Thursdays and can book you then. Would you like that time?" },
                ],
              },
              {
                title: "Book and reschedule appointments.",
                script: [
                  { speaker: "Caller", line: "I need to move my appointment to next week." },
                  { speaker: "Voice Concierge", line: "I can help with that. Is Tuesday or Wednesday better? I'll confirm via text once it's set." },
                ],
              },
              {
                title: "Capture lead details for private events.",
                script: [
                  { speaker: "Caller", line: "Do you host private events for 50 people?" },
                  { speaker: "Voice Concierge", line: "Yes. I'll gather your date, headcount, and budget, then send it to the events lead for a quick follow-up." },
                ],
              },
              {
                title: "Pre-qualify callers before a human jumps in.",
                script: [
                  { speaker: "Caller", line: "I'm interested in your membership options." },
                  { speaker: "Voice Concierge", line: "Great. Are you looking for weekday access or full access? I can also connect you to a person right now if you prefer." },
                ],
              },
            ].map((useCase) => (
              <div key={useCase.title} className="card-forged rounded-2xl bg-tan-50 p-6 shadow-sm space-y-3">
                <h3 className="heading-forge-md text-slate-900">{useCase.title}</h3>
                <div className="space-y-2 text-sm text-slate-800">
                  {useCase.script.map((line, idx) => (
                    <p key={idx}>
                      <span className="font-semibold text-slate-900">{line.speaker}:</span> {line.line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">Safe, on-brand, and always under your control.</h2>
            <p className="body-foundry text-slate-800">Guardrails for skeptical operators who can&apos;t risk brand damage.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Agent uses only scripts and policies you approve.",
              "Sensitive questions or edge cases escalate to humans immediately.",
              "Human override option for callers who want a person right away.",
              "Call logs and transcripts available for review and training.",
              "Versioned scripts so you always know what's live.",
              "We co-manage updates as your offers, hours, or policies change.",
            ].map((item) => (
              <div key={item} className="card-forged rounded-2xl bg-white p-6 shadow-sm flex gap-3">
                <span className="text-forge-700 font-bold mt-1">✓</span>
                <p className="text-sm text-slate-800 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="heading-forge-lg">What operators are aiming for with Voice Concierge.</h2>
            <p className="body-foundry text-slate-800">Realistic targets, not hype. Replace with validated results as pilots grow.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { value: "Reduce missed calls by 60-90%.", note: "Targets depend on call routing and hours; we right-size expectations together." },
              { value: "Increase booking rate from inbound calls by 15-30%.", note: "Pilot results will confirm and refine this range." },
              { value: "Free 10-20 hours of staff time per month.", note: "Varies with call volume and scheduling complexity." },
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
        </div>
      </section>

      <section className="bg-white">
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
