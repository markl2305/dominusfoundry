import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-black tracking-tight text-lg">
            Dominus<span className="text-indigo-600">Foundry</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600">
            Operational systems & audit-ready QuickBooks migrations—done right.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="font-semibold text-neutral-800">Company</div>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/qb-migration" className="hover:underline">QB Migration</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-neutral-800">Get in touch</div>
            <ul className="space-y-1">
              <li><a href="mailto:hello@dominusfoundry.com" className="hover:underline">hello@dominusfoundry.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-500">
          © {new Date().getFullYear()} Dominus Foundry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
