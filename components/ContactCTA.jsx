"use client";

import Button from './Button'

export default function ContactCTA({ className = '' }) {
  return (
    <div className={`rounded-2xl border border-bronze-300 bg-white/80 p-6 md:p-8 shadow-sm ${className}`}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-orange-700">
            Talk with Mark &amp; Bri
          </p>
          <h3 className="text-2xl font-bold text-navy-900">
            Need to move fast? Call or email us directly.
          </h3>
          <p className="text-navy-700">
            You’ll hear from us within one business day with a clear next step.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-auto md:flex-row">
          <Button href="tel:+15052261457" variant="secondary" className="w-full md:w-auto">
            Call (505) 226-1457
          </Button>
          <Button href="mailto:hello@dominusfoundry.com" className="w-full md:w-auto">
            Email hello@dominusfoundry.com
          </Button>
        </div>
      </div>
    </div>
  )
}
