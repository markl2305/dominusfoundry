'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useSiteConsent, { type SiteConsentWindow } from './useSiteConsent';

// /pitch is rendered exactly as it is (Mark 2026-10-12: another session owns it), so the bar is not mounted
// there. The gate still applies on /pitch: with no choice made, nothing is sent.
const NO_BAR = /^\/pitch(\/|$)/;

// Mounts public/consent/consent.js's bar after hydration (inserted before it, React's re-render would drop it), and
// publishes the bar's visible bottom edge as --consent-bar-visible, which app/globals.css uses to start the fixed
// Foundry nav below the bar while it is shown. The bar's wording comes from CONSENT_CONFIG (gate v2 config fields).
export default function ConsentBar() {
  const state = useSiteConsent();
  const pathname = usePathname();
  useEffect(() => {
    const c = (window as unknown as SiteConsentWindow).SiteConsent;
    if (state !== null || !c || NO_BAR.test(pathname || '')) return;
    c.mountBar();
    const bar = document.querySelector<HTMLElement>('[data-consent-bar]');
    if (!bar) return;
    const root = document.documentElement;
    let frame = 0;
    const publish = () => {
      frame = 0;
      root.style.setProperty('--consent-bar-visible', `${Math.max(0, Math.ceil(bar.getBoundingClientRect().bottom))}px`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(publish); };
    publish();
    const ro = new ResizeObserver(schedule);
    ro.observe(bar);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [state, pathname]);
  return null;
}
