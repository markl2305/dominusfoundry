'use client';

import { Analytics } from '@vercel/analytics/next';
import type { BeforeSendEvent } from '@vercel/analytics';
import useSiteConsent from './useSiteConsent';

function beforeSend(event: BeforeSendEvent) {
  const url = new URL(event.url);
  if (/^\/(api|chat|login|graph|command|transcribe)(\/|$)/.test(url.pathname)) return null;
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
}

// Vercel Web Analytics renders only after the visitor allows analytics (public/consent/consent.js), and
// never under Global Privacy Control. A later "No analytics" reloads the page, which unmounts it.
export default function SiteAnalytics() {
  return useSiteConsent() === 'accept' ? <Analytics beforeSend={beforeSend} /> : null;
}
