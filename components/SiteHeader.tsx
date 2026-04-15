'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const mainNav = Object.freeze([
  { label: 'Forge', href: 'https://buildwithforge.app', external: true },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Press', href: '/press' },
  { label: 'Blog', href: '/blog' },
  { label: 'Get Started', href: '/start', highlight: true },
])

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobile = () => setIsMobileOpen((prev) => !prev)
  const closeMobile = () => setIsMobileOpen(false)

  return (
    <header className="relative z-50 border-b border-bronze-400 foundry-nav backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2 lg:px-6">
        <Link
          href="/"
          className="flex-shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600"
          aria-label="Dominus Foundry™ home"
        >
          <Image
            src="/logo-full.svg"
            alt="Dominus Foundry™ - Fide et Familia"
            width={520}
            height={140}
            className="h-24 w-auto sm:h-[108px] md:h-[120px] lg:h-[120px] object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {mainNav.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-1.5 py-0.5 text-sm font-semibold text-navy-800 transition-colors hover:text-forge-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-forge-600 focus-visible:ring-offset-2"
              >
                {item.label} ↗
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-1.5 py-0.5 text-sm font-semibold text-navy-800 transition-colors hover:text-forge-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-forge-600 focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-navy-800 transition-colors hover:bg-forge-100 hover:text-forge-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          onClick={toggleMobile}
        >
          {isMobileOpen ? <XMarkIcon className="h-7 w-7" aria-hidden="true" /> : <Bars3Icon className="h-7 w-7" aria-hidden="true" />}
        </button>
      </div>

      {isMobileOpen && (
        <nav className="border-t border-bronze-300 foundry-nav lg:hidden" aria-label="Mobile">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-1">
            {mainNav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-forge-100"
                  onClick={closeMobile}
                >
                  {item.label} ↗
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-forge-100"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
