'use client';

import useSiteConsent, { type SiteConsentWindow } from '../../components/useSiteConsent';

// The withdraw / change control for public/consent/consent.js (compliance P1-1c, Mark 2026-10-12). Under Global
// Privacy Control the signal wins and there is nothing to change here.
const SAYS = {
  gpc: 'Your browser is sending a Global Privacy Control signal, so analytics stay off on this site and you will not be asked.',
  accept: 'You allowed analytics on this browser.',
  reject: 'You chose no analytics on this browser.',
  none: 'You have not made a choice on this browser, so no analytics have been sent.',
  // Consent by region (Mark 2026-10-14, the line approved for hiresabina): only in the default-on region (outside the
  // EU/EEA, UK and Switzerland) before any choice, where analytics run unless turned off.
  default: 'Analytics are on for this browser because you have not turned them off. Choose No analytics to stop them.',
  nojs: 'With JavaScript off, this site sends no analytics.',
} as const;

const BUTTON = 'btn btn-ghost';

export default function ConsentChoice() {
  const raw = useSiteConsent();
  const state: keyof typeof SAYS = raw === 'loading' ? 'nojs' : (raw || 'none');
  const set = (choice: 'accept' | 'reject') => {
    const c = (window as unknown as SiteConsentWindow).SiteConsent;
    if (c) c.set(choice);
  };
  return (
    <div data-consent-choice={state} className="card flat lp-choice">
      <p role="status" className="lp-strong">{SAYS[state]}</p>
      {state !== 'gpc' && state !== 'nojs' && (
        <div className="actions">
          {state !== 'reject' && (
            <button type="button" className={BUTTON} data-consent-withdraw="" onClick={() => set('reject')}>
              {state === 'accept' ? 'Withdraw: no analytics' : 'No analytics'}
            </button>
          )}
          {state !== 'accept' && (
            <button type="button" className={BUTTON} data-consent-allow="" onClick={() => set('accept')}>
              Allow analytics
            </button>
          )}
        </div>
      )}
    </div>
  );
}
