'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/qb-migration', label: 'QB Migration' },
  { href: '/about', label: 'About' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black tracking-tight text-lg text-gray-900 hover:text-blue-900 transition-colors">
          Dominus<span className="text-blue-900">Foundry</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/qb-migration" className="inline-flex items-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700 transition-colors">
            Get a Quote
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {nav.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setOpen(false)} 
                className="py-2 text-sm font-medium text-gray-800 hover:text-blue-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/qb-migration" 
              onClick={() => setOpen(false)} 
              className="mt-1 inline-flex items-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow w-max hover:bg-orange-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
