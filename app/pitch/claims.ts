/* ─────────────────────────────────────────────────────────────────────────────
   /pitch — THE CLAIM LAYER

   ⛔ NO COMPONENT ON THIS PAGE MAY HARDCODE A STATUS, A FIGURE, OR A DATE.
   Everything the pitch asserts lives here, typed, with an `asOf` and a source.
   That rule is inherited deliberately from the pitch this page supersedes
   (presentations/app/pitch/claims.ts): the failure it prevents is prose that
   repeats caveats because there is nowhere else to put them, until the caveats
   become the voice of the deck.

   PROVENANCE. Every economic figure below is carried forward verbatim from that
   existing, verified pitch — floor case, funded case, raise terms, use of funds
   — rather than re-derived here. The raise number was reconciled against it
   before publication and agrees with the execution plan: $650,000.

   ⛔ THREE THINGS THAT DELIBERATELY DO NOT TRAVEL FROM THE SOURCE PITCH:

   1. The bottom-up loaded-cost figure of $5,521/mo. Standing canon (ruled
      2026-09-03) sanctions the BLS ECEC method figure of $5,474/mo and keeps
      $5,521 and $5,633 banned from every public surface. The source pitch's
      note names $5,521; this page names only $5,500 (headline) and $5,474
      (BLS ECEC, the sanctioned supporting method).

   2. Any claim count or consolidation count on the patent filings. "19
      provisional applications" and the non-provisional serial number are
      sanctioned (ruled 2026-09-03: "leave them — the count is right"). A count
      of CLAIMS, or a "consolidating N provisionals" relationship figure, is
      not, and never appears here.

   3. Market-capitalisation context for Verisk and CoStar. The source page
      renders those only while fresh and suppresses them past seven days; the
      last dated read is 1 September 2026, so they would be suppressed today.
      Rather than ship a section that renders nothing, this page makes the
      structural comparison in words and carries no market-cap figure at all.

   ⛔ Status is never upgraded for drama. Where a thing is contracted but not
   started, the row says contracted and not started. */

import {
  TOTAL_SEATS, SIGNED_SEATS, SPOKEN_FOR_SEATS, OPEN_SEATS, openSeatsWord,
} from '@/content/founding-charter.mjs';

export type ClaimStatus =
  | 'live_customer'   // in customer production
  | 'live_internal'   // running on our own account, not a customer line
  | 'contracted'      // signed, work not yet begun
  | 'proven_path'     // end-to-end path exists, not scaled
  | 'in_acceptance'   // under acceptance testing
  | 'filed'           // described in a pending application
  | 'roadmap'         // not built
  | 'modeled';        // a financial assumption, not an observation

export const STATUS_LABEL: Record<ClaimStatus, string> = {
  live_customer: 'Live · customer production',
  live_internal: 'Live · our own account',
  contracted:    'Contracted · not begun',
  proven_path:   'Proven path',
  in_acceptance: 'In acceptance',
  filed:         'Filed',
  roadmap:       'Roadmap',
  modeled:       'Modeled',
};

export interface PitchClaim {
  id: string;
  publicCopy: string;
  detailCopy: string;
  status: ClaimStatus;
  asOf: string;
  sourceLabel: string;
}

/* ── THE PROOF LEDGER (§9.7 "what is already real") ───────────────────────────
   The one place on this page where status is exhaustively qualified. Every
   other section reads from it. ⛔ Do not restate these caveats in prose
   elsewhere, and ⛔ do not state a stronger version of any of them. */
export const PROOF: PitchClaim[] = [
  {
    id: 'forge-production',
    publicCopy: 'Forge — two production deployments, one independent and one related-party',
    detailCopy:
      'Pipeline, proposals, scheduling, dispatch, invoicing, field operations and a customer portal, with live background jobs.',
    status: 'live_customer',
    asOf: '2026-09-01',
    sourceLabel: 'Production fetch of buildwithforge.app, 1 September 2026',
  },
  {
    id: 'awr-forge',
    publicCopy: 'All Weather Roofing — on Forge since March 2026, invoiced and paid',
    detailCopy:
      'Commercial roofing, Albuquerque, at design-partner pricing. They had never run the business on a digital system before. Independent: no ownership overlap.',
    status: 'live_customer',
    asOf: '2026-09-01',
    sourceLabel: 'Issued invoices · production tenant records',
  },
  {
    id: 'callord',
    publicCopy: 'CalLord — production deployment, revenue excluded from every claim on this page',
    detailCopy:
      'An active audio-visual and security integrator the founder co-owns, and which owns half that vertical. A working tenant, not a demo. Related-party, disclosed as such.',
    status: 'live_customer',
    asOf: '2026-09-01',
    sourceLabel: 'Tenant records · founder ownership disclosure',
  },
  {
    id: 'sabina-runtime',
    publicCopy: 'Sabina — inbound and outbound, live on the Forge account',
    detailCopy:
      'Her governed runtime is live: capability registry, single-use permits, standing rules set in plain English, durable memory with provenance. Our own line, not a customer line.',
    status: 'live_internal',
    asOf: '2026-09-01',
    sourceLabel: 'Live line · production runtime',
  },
  {
    /* ⛔ THE ROW MOST AT RISK OF BEING OVERSTATED. A Founding Seat is signed.
       Onboarding has not begun. Both halves are stated, and neither is to be
       upgraded to "deploying", "underway", or "live" without a new ruling. */
    id: 'awr-sabina',
    publicCopy: 'All Weather Roofing — Founding Seat signed for Sabina; onboarding has not begun',
    detailCopy:
      'The seat is contracted. No Sabina work has started at this customer, no customer outcome data exists, and none is claimed. Outcome instrumentation begins at onboarding.',
    status: 'contracted',
    asOf: '2026-09-16',
    sourceLabel: 'Founding Charter seat record',
  },
  {
    id: 'evaluations',
    publicCopy: 'Two businesses in active evaluation',
    detailCopy:
      'Both have given a verbal commitment and are testing. No contract signed and no revenue claimed. Names under NDA, available on request.',
    status: 'in_acceptance',
    asOf: '2026-09-01',
    sourceLabel: 'Pipeline records',
  },
  {
    id: 'policy-path',
    publicCopy: 'Plain-English policy path — owner instruction to enforced, revocable rule',
    detailCopy:
      'One owner has taken the path end to end: instruction, scope restatement, authenticated confirmation, typed revocable rule. One owner, one tenant — not scaled adoption.',
    status: 'proven_path',
    asOf: '2026-09-01',
    sourceLabel: 'Standing-rules table · production',
  },
  {
    id: 'proof-carrying-runtime',
    publicCopy: 'Proof-carrying execution — sealed decision, single-use permit, receipt',
    detailCopy:
      'The deterministic execution path described under Governance is in acceptance testing on the Forge production runtime.',
    status: 'in_acceptance',
    asOf: '2026-09-01',
    sourceLabel: 'Engineering acceptance testing records',
  },
  {
    id: 'nonprovisional',
    publicCopy: 'U.S. non-provisional application 19/791,511',
    detailCopy:
      'Filed with the USPTO on 30 August 2026, naming Mark F. Lord as inventor. Patent pending: filed, not issued.',
    status: 'filed',
    asOf: '2026-08-30',
    sourceLabel: 'USPTO Electronic Acknowledgement Receipt',
  },
  {
    id: 'provisionals',
    publicCopy: '19 provisional applications filed with the USPTO',
    detailCopy:
      'Filed March–August 2026, covering the governed execution, authority and intelligence architecture. Patent pending: filed, not issued.',
    status: 'filed',
    asOf: '2026-08-30',
    sourceLabel: 'USPTO filing records',
  },
  {
    id: 'company-intelligence',
    publicCopy: 'Company-specific decision insight and foresight',
    detailCopy:
      'The next layer turns eligible operating evidence into insight for the business that created it. Recommendations remain advisory until authorized. Not built.',
    status: 'roadmap',
    asOf: '2026-09-01',
    sourceLabel: 'Roadmap sequence',
  },
  {
    id: 'network',
    publicCopy: 'Governed cross-company intelligence network',
    detailCopy:
      'Described in the pending application. Not operating today. This is what the round builds over a substrate already in production.',
    status: 'roadmap',
    asOf: '2026-09-01',
    sourceLabel: 'Application 19/791,511',
  },
];

export const claim = (id: string): PitchClaim => {
  const hit = PROOF.filter((c) => c.id === id);
  /* Loud at import time rather than a silently wrong render — the source pitch
     lost a figure once to positional destructuring, and this is the guard. */
  if (hit.length !== 1) throw new Error(`/pitch: proof claim "${id}" resolved ${hit.length} rows`);
  return hit[0];
};

/* ── ECONOMICS ────────────────────────────────────────────────────────────────
   Floor = Dominus_Foundry_ProForma.xlsx, base scenario, 30 August 2026.
   Funded = modeled 8 September 2026, NOT in that workbook.
   ⛔ Every figure below is MODELED except the observed baseline, which is
   labelled as observed and is one paid Forge ACCOUNT, not a Sabina seat. */
export const OBSERVED_BASELINE = {
  value: '$6K',
  label: 'Observed recurring revenue — one paid Forge account',
  asOf: '2026-08-30',
  sourceLabel: 'Production tenant records · issued invoices',
};

export const FLOOR = {
  asOf: '2026-08-30',
  sourceLabel: 'Dominus_Foundry_ProForma.xlsx · base scenario',
  seats: '35',
  arr: '$1.296M',
  rows: [
    ['Starting cash', '$35,000'],
    ['Monthly operating cost', '$10,200'],
    ['Cash-flow positive from', 'month 6'],
    ['Cash trough', '$13,250 at month 5 — 1.3 months of operating cost'],
    ['Cash balance, month 36', '$1,239,600'],
    ['Modeled churn', '0% — the base case assumes none'],
  ] as [string, string][],
};

export const FUNDED = {
  asOf: '2026-09-08',
  sourceLabel: 'Funded scenario modeled 8 September 2026; not yet in the 30 August workbook',
  seats: '94',
  arr: '$3.49M',
  rows: [
    ['Hires land', 'month 3 — one account executive, one deployment lead'],
    ['Revenue per seat', 'held constant at the floor case rate — the scenario changes throughput, not price'],
    ['Steady-state AE throughput', 'two companies a month'],
    ['Modeled churn', '2% monthly logo churn — roughly 22% a year, where the floor case assumes none'],
    ['Owned-inference milestone', 'crossed in month 13'],
  ] as [string, string][],
};

/* The cost of a HUMAN front-office hire. ⛔ This is not, and must never be
   rendered as, a Sabina price — Sabina carries no published price on any
   surface. $5,500 is the headline; $5,474 (BLS ECEC) is the sanctioned
   supporting method. ⛔ $5,521 and $5,633 are banned and are not here. */
export const HUMAN_COST = {
  monthly: '$5,500',
  hourly: '$32.50',
  method: '$5,474',
  methodLabel: 'BLS Employer Costs for Employee Compensation',
  asOf: '2026-08-26',
  sourceLabel: 'CSR_LOADED_COST_RESEARCH_2026-08-26.md · BLS ECEC',
};

export const RAISE = {
  instrument: 'Post-money SAFE with MFN',
  amount: '$650,000',
  cap: '$8,000,000 post-money',
  dilution: 'approximately 8.1% at the full raise',
  minimum: '$25,000',
  asOf: '2026-08-30',
  sourceLabel: 'Terms ruled 30 August 2026',
};

export const USE_OF_FUNDS: { use: string; amount: string; share: number; note: string }[] = [
  { use: 'Sales and deployment', amount: '$260K', share: 40.0, note: 'One account executive, one deployment lead. This is the fix for founder-only deployment.' },
  { use: 'Engineering', amount: '$180K', share: 27.7, note: 'Governance-layer hardening, and governed execution extended beyond the first vertical.' },
  { use: 'Inference and infrastructure', amount: '$70K', share: 10.8, note: 'Owned-weight serving capacity for 25 or more companies.' },
  { use: 'Founder compensation', amount: '$100K', share: 15.4, note: 'Fully loaded, for two founders.' },
  { use: 'Working capital and reserve', amount: '$40K', share: 6.2, note: 'Buffer above the modeled cash trough.' },
];

export const MILESTONES = [
  'Sabina live on the first customer’s line and approved receivables workflows.',
  'Ten Founding Seats contracted, or an approved replacement milestone.',
  'A measured customer outcome baseline and measured per-seat cost of service.',
  'Repeatable onboarding owned by a deployment lead rather than by a founder.',
  'A first account executive running a documented sales motion.',
  'Proof-carrying execution acceptance evidence current across published claims.',
  'Owned-weight inference capacity for at least 25 companies.',
  'First company-specific management intelligence built over the governed record.',
];

/* Founding Charter seat state. ⛔ "Founding Employer" and "Founding Seat" only.
   ⛔ Never "Founding Partner" — that names a legal relationship that does not
   exist (plan §10, §16).

   ⛔ The four numbers are IMPORTED, never restated. content/founding-charter.mjs
   is the single source of truth and scripts/check-founding-charter.mjs fails the
   build if public/llms.txt drifts from it. A hardcoded "7" here would be a
   second seat counter that the gate cannot see — exactly the forked-state defect
   the plan's acceptance tests look for (§19.3). */
export const SEATS = {
  total: TOTAL_SEATS,
  signed: SIGNED_SEATS,
  spokenFor: SPOKEN_FOR_SEATS,
  open: OPEN_SEATS,
  openWord: openSeatsWord,
  asOf: '2026-09-16',
  sourceLabel: 'content/founding-charter.mjs · Founding Charter seat record',
};

export const CONTACT_EMAIL = 'mark@dominusfoundry.com';
