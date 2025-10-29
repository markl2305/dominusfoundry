export default function Home() {
  return (
    <>
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 to-white" />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
              Build calm operations. <span className="text-indigo-600">Move QuickBooks the right way.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-700">
              We migrate, reconcile, and train—so your books are clean, audit-ready, and the business keeps moving.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/qb-migration" className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow">Get a migration quote</a>
              <a href="/about" className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ['Audit-ready migrations', 'Historical cleanup, reconciliation, and documentation included.'],
            ['Operational handoff', 'We train your team and set simple processes to keep things clean.'],
            ['Low-drama delivery', 'Clear scope, status updates, and no surprises.']
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <div className="text-lg font-bold">{title}</div>
              <p className="mt-2 text-neutral-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl bg-neutral-950 text-white p-8 md:p-10">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-bold">Ready to migrate with confidence?</div>
              <p className="mt-2 text-neutral-300">Tell us your setup and timeline—get scope and next steps within one business day.</p>
            </div>
            <a href="/qb-migration" className="mt-6 md:mt-0 inline-flex items-center rounded-xl bg-white px-5 py-3 font-semibold text-neutral-900">
              Start your migration
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
