'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

export default function GAPageview() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
    const privatePage = /^\/(api|chat|login|graph|command|transcribe)(\/|$)/.test(pathname);
    (window as Window & Record<string, unknown>)['ga-disable-' + GA_MEASUREMENT_ID] = privatePage;
    if (privatePage) { lastPath.current = null; return; }
    if (typeof window.gtag !== 'function' || lastPath.current === pathname) return;
    lastPath.current = pathname;
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
