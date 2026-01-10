export const metadata = {
  title: "Thanks — Dominus Foundry",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Thanks() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-navy-900">Thanks — we got it!</h1>
      <p className="mt-3 text-navy-700">We'll reply within one business day with scope and next steps.</p>
      <a href="/" className="mt-6 inline-flex rounded-xl bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-700">Back home</a>
    </section>
  );
}
