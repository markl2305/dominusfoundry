"use client";

import Button from './Button'

/* 2026-10-14: restyled in the site-wide redesign; copy unchanged. */
export default function ContactCTA({ className = '' }) {
  return (
    <div className={`callout reveal ${className}`.trim()}>
      <p className="eyebrow">Talk with Mark &amp; Bri</p>
      <h3 className="h3">
        Need to move fast? Call or email us directly.
      </h3>
      <p>
        You’ll hear from us within one business day with a clear next step.
      </p>
      <div className="actions">
        <Button href="tel:+15055201433" variant="forgeSecondary">
          Call (505) 520-1433
        </Button>
        <Button href="mailto:foundry@dominusfoundry.com" style={{ overflowWrap: 'anywhere' }}>
          Email foundry@dominusfoundry.com
        </Button>
      </div>
    </div>
  )
}
