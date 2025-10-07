export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-neutral-600">Let’s get you where you need to go.</p>
      <a href="/" className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white">
        Back home
      </a>
    </div>
  );
}
