export const metadata = {
  title: 'About — Dominus Foundry',
  description: 'We build reliable operating systems for small teams and deliver audit-ready QuickBooks migrations.'
};

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">About Dominus Foundry</h1>
      <p className="mt-6 text-neutral-700 max-w-3xl">
        We help operators move fast without breaking finance. Our work blends clean data,
        simple processes, and clear accountability—so you can scale without chaos.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ['Principle #1', 'Make the next person’s job easy.'],
          ['Principle #2', 'Favor clarity over cleverness.'],
          ['Principle #3', 'Leave systems cleaner than you found them.']
        ].map(([title, body]) => (
          <div key={title} className="rounded-2xl border border-neutral-200 p-6">
            <div className="font-semibold">{title}</div>
            <p className="mt-2 text-neutral-700">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a href="/qb-migration" className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow">
          See our QB migration work
        </a>
      </div>
    </section>
  );
}
