'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const mainNav = Object.freeze([
  { label: 'Mentis', href: '/mentis' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Get Started', href: '/start', highlight: true },
])

const toolNav = Object.freeze([
  { label: 'Voice Concierge', href: '/business-tools/voice-concierge' },
  { label: 'Lead Intake → Booking', href: '/business-tools/lead-intake-booking' },
  { label: 'Client Onboarding Engine', href: '/business-tools/client-onboarding-engine' },
  { label: 'Lead-to-Cash', href: '/business-tools/lead-to-cash' },
  { label: 'Support Triage Desk', href: '/business-tools/support-triage-desk' },
  { label: 'Ops Reporting & Intelligence', href: '/business-tools/ops-reporting-intelligence' },
  { label: 'Document & Compliance Automations', href: '/business-tools/document-compliance-automations' },
  { label: 'Recruiting & Hiring Pipeline', href: '/business-tools/recruiting-hiring-pipeline' },
  { label: 'Vendor & Purchasing Workflow', href: '/business-tools/vendor-purchasing-workflow' },
])

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobile = () => setIsMobileOpen((prev) => !prev)
  const closeMobile = () => setIsMobileOpen(false)

  return (
    <header className="relative z-50 border-b border-bronze-400 foundry-nav backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-1 lg:px-6">
        <Link
          href="/"
          className="flex-shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600"
          aria-label="Dominus Foundry home"
        >
          <Image
            src="/logo-full.svg"
            alt="Dominus Foundry - Fide et Familia"
            width={1560}
            height={420}
            className="h-48 w-auto sm:h-52 md:h-60 lg:h-60 object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <div className="relative group">
            <Link
              href="/business-tools"
              className="rounded-md px-1.5 py-0.5 text-sm font-semibold text-navy-800 transition-colors hover:text-forge-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-forge-600 focus-visible:ring-offset-2"
              aria-haspopup="true"
            >
              What We Build
            </Link>
                <div className="absolute left-0 top-full z-40 mt-0 hidden min-w-[20rem] rounded-lg border foundry-nav-panel p-2 shadow-xl backdrop-blur group-hover:block group-focus-within:block">
              <ul className="py-1" id="business-tools-menu">
                {toolNav.map((tool) => (
                  <li key={tool.href}>
                    <Link
                      href={tool.href}
                      className="block w-full whitespace-normal break-words leading-snug rounded-md px-3 py-2 text-sm font-semibold text-navy-800 transition-colors hover:bg-forge-100 hover:text-forge-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-forge-600 focus-visible:ring-offset-2"
                    >
                      {tool.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-1.5 py-0.5 text-sm font-semibold text-navy-800 transition-colors hover:text-forge-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-forge-600 focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
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
            <div className="space-y-1">
              <p className="px-2 py-2 text-xs font-semibold uppercase tracking-wide text-forge-700">What We Build</p>
              {toolNav.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-forge-100"
                  onClick={closeMobile}
                >
                  {tool.label}
                </Link>
              ))}
            </div>
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-forge-100"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
