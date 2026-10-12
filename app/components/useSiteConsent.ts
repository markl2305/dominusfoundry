'use client';

import { useEffect, useState } from 'react';

export type ConsentState = 'gpc' | 'accept' | 'reject' | null;
export type SiteConsentWindow = {
  SiteConsent?: {
    state: () => ConsentState;
    allowed: () => boolean;
    set: (choice: 'accept' | 'reject') => void;
    mountBar: () => void;
  };
  __consentPageViewPath?: string | null;
};

// The visitor's analytics choice from public/consent/consent.js: 'gpc' | 'accept' | 'reject' | null, or
// 'loading' until the (async) gate has run. Re-renders on every change.
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
