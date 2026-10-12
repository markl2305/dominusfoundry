'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import type { SiteConsentWindow } from './useSiteConsent';

// Client-side route changes only. GA4 itself, and the first page_view after a visitor allows analytics, are
// loaded by public/consent/consent.js (compliance P1-1c, Mark 2026-10-12); until then window.gtag does not
// exist and this sends nothing.
export default function GAPageview() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
    const w = window as unknown as SiteConsentWindow & Record<string, unknown>;
    if (!w.SiteConsent || !w.SiteConsent.allowed()) return;
    const privatePage = /^\/(api|chat|login|graph|command|transcribe)(\/|$)/.test(pathname);
    w['ga-disable-' + GA_MEASUREMENT_ID] = privatePage;
    if (privatePage) { lastPath.current = null; return; }
    if (typeof window.gtag !== 'function' || lastPath.current === pathname) return;
    lastPath.current = pathname;
    // consent.js already sent the page_view for the page it loaded on.
    if (w.__consentPageViewPath === pathname) { w.__consentPageViewPath = null; return; }
    let referrer = '';
    try { const url = new URL(document.referrer); referrer = url.origin + url.pathname; } catch {}
    const location = window.location.origin + pathname;
    // Defaults also cover automatic engagement events between route changes.
    window.gtag('set', { page_location: location, page_referrer: referrer });
    window.gtag('event', 'page_view', {
      page_location: location,
      page_path: pathname,
      page_title: document.title,
      page_referrer: referrer,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [pathname]);

  return null;
}
