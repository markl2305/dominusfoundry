'use client';

import { useEffect, useState } from 'react';

export type ConsentState = 'gpc' | 'accept' | 'reject' | 'default' | null;
export type SiteConsentWindow = {
  SiteConsent?: {
    state: () => ConsentState;
    allowed: () => boolean;
    set: (choice: 'accept' | 'reject') => void;
    mountBar: () => void;
    openChoices?: (from?: Element | null) => boolean;
    region?: () => 'ask' | 'default';
  };
  __consentPageViewPath?: string | null;
};

// The visitor's analytics CHOICE from public/consent/consent.js: 'gpc' | 'accept' | 'reject' | 'default' | null, or
// 'loading' until the (async) gate has run. 'default' (gate rule 12): the default-on region, no choice made, no GPC.
// Re-renders on every change. For display only: whether anything may run is useAnalyticsAllowed() below, never `state === 'accept'` (gate v2 rule 7).
export default function useSiteConsent(): ConsentState | 'loading' {
  const [state, setState] = useState<ConsentState | 'loading'>('loading');
  useEffect(() => {
    const read = () => {
      const c = (window as unknown as SiteConsentWindow).SiteConsent;
      if (c) setState(c.state());
    };
    read();
    window.addEventListener('siteconsent', read);
    return () => window.removeEventListener('siteconsent', read);
  }, []);
  return state;
}

// consent.js's one answer (gate v2 rule 7): may any analytics run on this page now. False until the gate has run,
// under GPC, on a private path, after a withdrawal, and whenever the gate could not make running safe (for example
// the browser refused to narrow document.referrer). Re-read on every 'siteconsent' event and on every `key` change
// (pass the pathname). Same contract as hiresabina's app/components/useSiteConsent.js.
export function useAnalyticsAllowed(key: string): boolean {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const read = () => setAllowed(!!(window as unknown as SiteConsentWindow).SiteConsent?.allowed());
    read();
    window.addEventListener('siteconsent', read);
    return () => window.removeEventListener('siteconsent', read);
  }, [key]);
  return allowed;
}
