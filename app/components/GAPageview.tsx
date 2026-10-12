'use client';

// Fires a GA4 page_view on every client-side route change -- Next's App Router
// does not reload the page on navigation, so the one-shot gtag('config', ...)
// in app/layout.tsx only ever saw the first URL. usePathname() deliberately
// excludes the query string and hash (it is not useSearchParams()), so this
// is the one place that decides what reaches Google: a bare path, never
// anything a visitor typed into a form or a search box echoed into the URL.
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

// Same treatment as page_location: strip to origin+pathname, never the query
// string or fragment the referring page happened to carry. Returns undefined
// (gtag then omits the field) for no-referrer, not an empty string.
function sanitizedReferrer(): string | undefined {
  if (!document.referrer) return undefined;
  try {
    const r = new URL(document.referrer);
    return r.origin + r.pathname;
  } catch {
    return undefined;
  }
}

export default function GAPageview() {
  const pathname = usePathname();
  // document.referrer is the browser's real navigation referrer and does not
  // change on client-side route changes -- compute it once, on the actual
  // first load, not on every path change. Read inside the effect, never
  // during render: `document` does not exist during this page's
  // server/static render.
  const referrerRef = useRef<string | undefined | null>(null);

  useEffect(() => {
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    if (referrerRef.current === null) referrerRef.current = sanitizedReferrer();
    window.gtag('event', 'page_view', {
      page_location: window.location.origin + pathname,
      page_path: pathname,
      page_title: document.title,
      page_referrer: referrerRef.current,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [pathname]);

  return null;
}
