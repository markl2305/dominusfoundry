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
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black tracking-tight text-lg">
          Dominus<span className="text-indigo-600">Foundry</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium hover:text-neutral-900 ${
                  active ? 'text-neutral-900' : 'text-neutral-600'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/qb-migration" className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow">
            Get a quote
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center rounded-lg border px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-neutral-800">
                {item.label}
              </Link>
            ))}
            <Link href="/qb-migration" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow w-max">
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
