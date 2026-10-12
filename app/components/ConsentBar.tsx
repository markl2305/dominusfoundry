'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useSiteConsent, { type SiteConsentWindow } from './useSiteConsent';

// /pitch is rendered exactly as it is (Mark 2026-10-12: another session owns it), so the bar is not mounted
// there. The gate still applies on /pitch: with no choice made, nothing is sent.
const NO_BAR = /^\/pitch(\/|$)/;

// Mounts public/consent/consent.js's bar after hydration (inserted before it, React's re-render would drop it).
export default function ConsentBar() {
  const state = useSiteConsent();
  const pathname = usePathname();
  useEffect(() => {
    const c = (window as unknown as SiteConsentWindow).SiteConsent;
    if (state === null && c && !NO_BAR.test(pathname || '')) c.mountBar();
  }, [state, pathname]);
  return null;
}
