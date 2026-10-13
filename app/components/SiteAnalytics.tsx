'use client';

import { Analytics } from '@vercel/analytics/next';
import type { BeforeSendEvent } from '@vercel/analytics';
import { usePathname } from 'next/navigation';
import { useAnalyticsAllowed } from './useSiteConsent';

const PRIVATE = /^\/(api|chat|login|graph|command|transcribe)(\/|$)/;

function beforeSend(event: BeforeSendEvent) {
  const url = new URL(event.url);
  if (PRIVATE.test(url.pathname)) return null;
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
}

// Vercel Web Analytics renders only while consent.js's one answer, SiteConsent.allowed(), is true (gate v2 rule 7):
// after the visitor allows analytics, never under Global Privacy Control, never when the gate could not make running
// safe. A later "No analytics" reloads the page, which unmounts it. It is not mounted on a private route either;
// consent.js also refuses its requests there.
export default function SiteAnalytics() {
  const pathname = usePathname() || '';
  const allowed = useAnalyticsAllowed(pathname);
  return allowed && !PRIVATE.test(pathname) ? <Analytics beforeSend={beforeSend} /> : null;
}
