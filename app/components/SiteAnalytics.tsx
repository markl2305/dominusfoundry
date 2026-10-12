'use client';

import { Analytics } from '@vercel/analytics/next';
import type { BeforeSendEvent } from '@vercel/analytics';

function beforeSend(event: BeforeSendEvent) {
  const url = new URL(event.url);
  if (/^\/(api|chat|login|graph|command|transcribe)(\/|$)/.test(url.pathname)) return null;
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
}

export default function SiteAnalytics() {
  return <Analytics beforeSend={beforeSend} />;
}
