export const metadata = {
  title: 'QuickBooks Migration — Dominus Foundry',
  description: 'Zero-drama, audit-ready QuickBooks migrations with reconciliation, documentation, and training.'
};

export default function QB() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Zero-drama, audit-ready QuickBooks migration
        </h1>
        <p className="mt-4 text-neutral-700">
          Clean cutover. Historical tie-outs. Team training. So the numbers match and the business keeps moving.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {[
          ['Historical reconciliation', 'We tie out balances and provide a simple reconciliation report.'],
          ['Documentation included', 'Chart, mapping decisions, and a one-page runbook for your team.'],
          ['Training & handoff', 'Live walk-through and Q&A so you’re confident on day one.']
        ].map(([title, body]) => (
          <div key={title} className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
            <div className="text-lg font-bold">{title}</div>
            <p className="mt-2 text-neutral-700">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-2xl font-bold">Get a migration quote</h2>
        <p className="mt-2 text-neutral-700">Tell us your current system and target timeline. We’ll reply within one business day.</p>

        {/* Temporary lightweight form — sends an email draft. We’ll replace with API/Resend later. */}
        <form action="mailto:hello@dominusfoundry.com" method="post" encType="text/plain" className="mt-6 grid gap-4 md:grid-cols-2">
          <input required name="Name" placeholder="Your name" className="rounded-xl border px-4 py-3 md:col-span-1" />
          <input required type="email" name="Email" placeholder="Work email" className="rounded-xl border px-4 py-3 md:col-span-1" />
          <input name="Company" placeholder="Company (optional)" className="rounded-xl border px-4 py-3 md:col-span-1" />
          <input name="Phone" placeholder="Phone (optional)" className="rounded-xl border px-4 py-3 md:col-span-1" />
          <textarea name="Context" placeholder="Current system, data volume, target date…" className="rounded-xl border px-4 py-3 md:col-span-2 min-h-32" />
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow">Request quote</button>
            <a href="mailto:hello@dominusfoundry.com" className="underline">Or email us directly</a>
          </div>
        </form>

        <p className="mt-3 text-xs text-neutral-500">We’ll never share your info. You’ll get a simple scope & next steps.</p>
      </div>

      <div className="mt-12">
        <a href="/" className="underline">Back to home</a>
      </div>
    </section>
  );
}
