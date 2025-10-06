'use client';

export default function Thanks() {
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold">Thanks — we got it!</h1>
        <p className="mt-3 text-neutral-700">
          We’ll follow up shortly with scope and next steps.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-soft"
        >
          Back to home
        </a>
      </div>
    </section>
  );
}
