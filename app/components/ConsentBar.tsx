'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useSiteConsent, { type SiteConsentWindow } from './useSiteConsent';

// /pitch is rendered exactly as it is (Mark 2026-10-12: another session owns it), so the bar is not mounted
// there. The gate still applies on /pitch: with no choice made, nothing is sent.
const NO_BAR = /^\/pitch(\/|$)/;

type BarConfig = { CONSENT_CONFIG?: { barText?: string } };

// Mounts public/consent/consent.js's bar after hydration (inserted before it, React's re-render would drop it),
// then applies this site's bar copy from CONSENT_CONFIG.barText and publishes the bar's height as
// --consent-bar-h, which app/globals.css reserves at the bottom of the page while the bar is shown.
export default function ConsentBar() {
  const state = useSiteConsent();
  const pathname = usePathname();
  useEffect(() => {
    const w = window as unknown as SiteConsentWindow & BarConfig;
    const c = w.SiteConsent;
    if (state !== null || !c || NO_BAR.test(pathname || '')) return;
    c.mountBar();
    const bar = document.querySelector<HTMLElement>('[data-consent-bar]');
    if (!bar) return;
    const text = w.CONSENT_CONFIG?.barText;
    const first = bar.querySelector('p')?.firstChild;
    if (text && first && first.nodeType === Node.TEXT_NODE) first.textContent = text;
    const root = document.documentElement;
    const publish = () => root.style.setProperty('--consent-bar-h', `${Math.ceil(bar.getBoundingClientRect().height)}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(bar);
    return () => { ro.disconnect(); };
  }, [state, pathname]);
  return null;
}
