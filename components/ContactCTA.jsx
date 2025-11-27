"use client";

import Button from './Button'

export default function ContactCTA({ className = '' }) {
  return (
    <div className={`card-forged bg-white/90 p-6 md:p-8 shadow-sm ${className}`}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 max-w-2xl">
          <p className="label-foundry">Talk with Mark &amp; Bri</p>
          <h3 className="heading-forge-md">
            Need to move fast? Call or email us directly.
          </h3>
          <p className="body-foundry">
            You’ll hear from us within one business day with a clear next step.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-auto md:flex-row">
          <Button href="tel:+18667103313" variant="forgeSecondary" className="w-full md:w-auto">
            Call (866) 710-3313
          </Button>
          <Button href="mailto:foundry@dominusfoundry.com" className="w-full md:w-auto">
            Email foundry@dominusfoundry.com
          </Button>
        </div>
      </div>
    </div>
  )
}
