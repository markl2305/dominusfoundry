import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-navy-900">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-xl bg-forge-700 px-5 py-2.5 font-semibold text-white hover:bg-forge-800 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
