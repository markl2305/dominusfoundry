import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-black tracking-tight text-lg text-gray-900">
            Dominus<span className="text-blue-900">Foundry</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Business systems and QuickBooks migrations—built for operators who value clarity and reliability.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <div className="font-semibold text-gray-900">Services</div>
            <ul className="space-y-2">
              <li>
                <Link href="/qb-migration" className="text-gray-700 hover:text-blue-900 transition-colors">
                  QuickBooks Migration
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <div className="font-semibold text-gray-900">Company</div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="mailto:hello@dominusfoundry.com" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Dominus Foundry. All rights reserved.</p>
          <p>
            <a href="mailto:hello@dominusfoundry.com" className="hover:text-blue-900 transition-colors">
              hello@dominusfoundry.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
