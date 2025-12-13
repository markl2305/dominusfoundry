export const metadata = {
  title: 'Mentis — Operations Intelligence for Modern Teams',
  description:
    'Mentis is the operations intelligence layer beneath Dominus Foundry—linking context across your tools so your systems stay coherent as you scale.',
}

export default function MentisPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 space-y-6">
          <p className="label-foundry text-forge-800">Operations intelligence</p>
          <h1 className="heading-forge-lg text-slate-900">Mentis — Operations Intelligence for Modern Teams</h1>
          <p className="body-foundry text-slate-800">
            Mentis is the operations intelligence layer underneath Dominus Foundry. It learns from how your business
            actually runs—projects, bookings, invoicing, support, and follow-ups—so your systems stay aligned without
            you living inside every process. It’s built to serve founder-led teams today and scale cleanly into
            multi-department operations tomorrow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-10">
        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">What Mentis is</h2>
          <p className="body-foundry">
            Mentis connects the dots between your tools and your real-world operations. It preserves context, understands
            what “done” looks like in your environment, and helps keep automation, communication, and back-office
            workflows coherent over time—especially as people, priorities, and systems change.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">What Mentis is not</h2>
          <ul className="space-y-3 body-foundry">
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Not a generic chatbot you talk to for fun.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Not a single app you have to babysit all day.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Not a replacement for your team’s judgment or relationships.</span>
            </li>
          </ul>
          <p className="body-foundry">
            Mentis is there to reduce operational drag in the background so your people can stay focused on the work
            only they can do.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">Where Mentis shows up today (v2.33.x foundation)</h2>
          <p className="body-foundry">
            Mentis is already operating as a practical backbone inside Dominus Foundry’s client systems. The current
            v2.33.x build focuses on the fundamentals that make intelligence reliable in production: time-aware
            execution, tool orchestration, memory with guardrails, and auditability.
          </p>
          <ul className="space-y-3 body-foundry">
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>
                QuickBooks-aware cleanup and operational context that keeps books aligned with real workflows.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>
                InvoiceFlow logic where reminders, follow-up, and escalation can adapt to how customers actually pay.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>
                Voice Concierge patterns where caller intent and booking behavior inform routing and responses.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>
                A growing “operations context layer” (time, customers, projects, preferences) that prevents stateless
                automation.
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">Where Mentis is headed</h2>
          <p className="body-foundry">
            Mentis is being built to become a virtual operations brain—not by making bigger promises, but by expanding
            what it can reliably coordinate across systems with clear permissions, audit trails, and human control. As
            capability expands, Mentis will support two higher levels of “synthetic intelligence” in operations:
          </p>
          <div className="space-y-2">
            <h3 className="heading-forge-md text-slate-900">Level 3 — Coordinated execution (human-approved autonomy)</h3>
            <ul className="space-y-3 body-foundry">
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>
                  Goal-driven task graphs (plan → execute → verify) across tools like email, calendar, CRM, billing, and
                  docs.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>
                  Proactive exception handling (missed payments, scheduling conflicts, stalled projects) with suggested
                  resolutions before things break.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>
                  Delegation-ready workflows: assign tasks to roles (owner, ops, finance) with accountability and status
                  tracking.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="heading-forge-md text-slate-900">
              Level 4 — Policy-governed self-improvement (guardrails + auditability)
            </h3>
            <ul className="space-y-3 body-foundry">
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>
                  Self-healing automation: detect recurring failures and propose safe fixes (with approvals) instead of
                  silently degrading.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>
                  Continuous operations learning: patterns from outcomes (payments, cancellations, support issues) refine
                  future actions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-700 font-bold">•</span>
                <span>
                  Multi-agent “virtual employee” lanes (ops coordinator, finance assistant, scheduler) operating under
                  the same policies, memory boundaries, and audit trail.
                </span>
              </li>
            </ul>
          </div>

          <p className="body-foundry">
            Today, you access Mentis by becoming a Dominus Foundry client. As it matures, we’ll open more direct ways to
            work with it—while keeping the focus on durable outcomes: fewer dropped balls, less manual follow-up, and
            systems that get better instead of noisier as you scale.
          </p>
        </div>
      </section>
    </>
  )
}
