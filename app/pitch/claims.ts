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
   ⭐ 2026-10-19: the raise is now $1,000,000 on a $10,000,000 post-money cap
   (Mark, 19 October), and the costed plan in financial-plan.json carries the
   sales and technical delivery hires it pays for. finance.ts still refuses to
   render unless RAISE equals that budget's target. The 30 August terms are kept
   below as RAISE_AUGUST_2026 for the historical section, beside the August
   use-of-funds split they belong to.

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

export type ClaimStatus =
  | 'live_customer'   // in customer production
  | 'live_internal'   // running on our own account, not a customer line
  | 'contracted'      // signed, work not yet begun
  | 'proven_path'     // end-to-end path exists, not scaled
  | 'in_acceptance'   // under acceptance testing
  | 'filed'           // described in a pending application
  | 'roadmap'         // not built
  | 'not_yet'         // a distinct milestone that has not occurred
  | 'modeled';        // a financial assumption, not an observation

export const STATUS_LABEL: Record<ClaimStatus, string> = {
  live_customer: 'Live · customer production',
  live_internal: 'Live · our own account',
  contracted:    'Contracted · not begun',
  proven_path:   'Proven path',
  in_acceptance: 'In acceptance',
  filed:         'Filed',
  roadmap:       'Roadmap',
  not_yet:       'Not yet',
  modeled:       'Modeled',
};

export interface PitchClaim {
  id: string;
  publicCopy: string;
  detailCopy: string;
  status: ClaimStatus;
  asOf: string;
  sourceLabel: string;
  /* Measured figures the page renders from this row, so no component retypes them. */
  figures?: Record<string, string>;
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
      'An active audio-visual and security integrator the founder co-owns. A working tenant, not a demo. Related-party, disclosed as such.',
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
  /* 2026-10-19 (ship candidate): agents, model path and the mailbox counts, from the
     reviewed /pitch rework. ⛔ The mail rows say "possible commitments", never "open
     promises": there is no check for commitments later kept (qwen recount review). */
  {
    id: 'sabina-agents',
    publicCopy: 'Agents built from Sabina — answering calls and email, follow-up, booking and promise tracking',
    detailCopy:
      'Her phone and email work is live on our own account and on Foundry’s own lines. No customer line is live yet.',
    status: 'live_internal',
    asOf: '2026-10-19',
    sourceLabel: 'Mark Lord, 2026-10-19',
  },
  {
    id: 'model-path',
    publicCopy: 'Sabina runs on Foundry’s own platform and model path; customer data is not sent to an outside AI model company',
    detailCopy: 'Owner attestation, not an independent audit.',
    status: 'live_internal',
    asOf: '2026-10-19',
    sourceLabel: 'Mark Lord, 2026-10-19, owner attestation',
  },
  {
    id: 'mail-overnight',
    publicCopy: 'Overnight run on Foundry’s own mailbox — 196 commitments with no record of being closed',
    detailCopy:
      '10,909 emails; 196 commitments across 73 conversations with 63 people. Overnight run, 13 October 04:00–09:00 UTC.',
    status: 'live_internal',
    asOf: '2026-10-14',
    sourceLabel: 'Foundry commitments table · measured 2026-10-14',
    figures: { emails: '10,909', commitments: '196', conversations: '73', people: '63' },
  },
  {
    id: 'mail-history-foundry',
    publicCopy: 'Foundry full mailbox history — about 4,000 possible commitments',
    detailCopy: '4,000 possible commitments across 1,466 threads with 650 people.',
    status: 'live_internal',
    asOf: '2026-10-17',
    sourceLabel: '.sabina-master/callord-demo-1014/foundry-count-1017/RESULT-1017.md · qwen recount SHIP',
    figures: { about: '4,000', commitments: '4,000', threads: '1,466', people: '650' },
  },
  {
    id: 'mail-history-callord',
    publicCopy: 'Related company (CalLord) full mailbox history — about 7,600 possible commitments',
    detailCopy: '7,575 possible commitments across 2,096 threads with 922 people. Related-party, disclosed as such.',
    status: 'live_internal',
    asOf: '2026-10-16',
    sourceLabel: '.sabina-master/callord-demo-1014/count-1015/RESULT-1016.md · qwen recount confirmed',
    figures: { about: '7,600', commitments: '7,575', threads: '2,096', people: '922' },
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
    sourceLabel: 'Founding Seat record',
  },
  /* RETOOL 2026-10-07 (HANDOFF §6, Pitch 6): signature, activation and
     outcome evidence are separate facts, so each gets its own row. Both rows
     below restate what the signed-seat row already records — they add no new
     claim. Corroborated on hiresabina.ai origin/main e137bf9, app/lib/site.js
     SEAT_STATUS: "Sabina’s onboarding has not yet begun there." */
  {
    id: 'sabina-activation',
    publicCopy: 'Activated Sabina customer deployment',
    detailCopy:
      'None yet. Signature and activation are different milestones; the first signed engagement has not begun onboarding.',
    status: 'not_yet',
    asOf: '2026-09-16',
    sourceLabel: 'Founding Seat record · hiresabina.ai current status line',
  },
  {
    id: 'sabina-outcomes',
    publicCopy: 'Sabina customer outcome evidence',
    detailCopy:
      'None yet, and none is claimed. Outcome instrumentation begins at onboarding.',
    status: 'not_yet',
    asOf: '2026-09-16',
    sourceLabel: 'Founding Seat record',
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
    id: 'nonprovisional-2',
    publicCopy: 'U.S. non-provisional application 19/817,646',
    detailCopy:
      'Filed with the USPTO on 23 September 2026 as a continuation-in-part of 19/791,511, naming Mark F. Lord as inventor. Patent pending: filed, not issued.',
    status: 'filed',
    asOf: '2026-09-23',
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
/* ⛔ THE PERIOD IS IN THE VALUE ON PURPOSE (kimi #1, round 3). This rendered a
   bare "$6K" beside the two month-36 ANNUAL recurring-revenue figures — so
   whether the baseline was monthly or annual was left to the reader to guess,
   in the one figure on the page that is observed rather than modelled. It is
   annual: $6,000 ARR, the same basis the two scenario figures use.
   ⛔ Do not strip the period back out. */
export const OBSERVED_BASELINE = {
  value: '$6K/yr',
  label: 'Observed recurring revenue — one paid Forge account',
  asOf: '2026-08-30',
  sourceLabel: 'Production tenant records · issued invoices · annual recurring revenue',
};

/* ⛔⛔ THE FLOOR CASE CARRIES 2% MONTHLY LOGO CHURN. RULED by Mark 2026-09-16,
   verbatim: "Pitch has 2%" (CONFLICTS.md R10). ⛔ THERE IS NO ZERO-CHURN FLOOR
   ANY MORE, and the figures below are NOT the 30 August workbook's published
   base-scenario outputs — they are that workbook's model re-run with churn in
   it. Round 3 disclosed the zero-churn assumption in prose and left the numbers
   alone; this ruling replaces that with re-modelled numbers, which is the
   stronger version of the same argument.

   HOW THEY WERE DERIVED, and it is reproducible rather than asserted:
   scripts/floor-churn-model.mjs transcribes the workbook's own "Monthly Model"
   sheet (acquisition schedule, founding/standard price split and cap, AWR line,
   setup-fee schedule, per-node variable cost, opex schedule, starting cash) and
   reproduces its arithmetic in code. ⛔ Run with churn = 0 that script must
   reproduce the workbook EXACTLY across 7 series x 36 months — 252 cells — and
   it exits non-zero if one cell disagrees. It passes. Only then is the 2% run
   meaningful. Re-run it before changing any figure here:
       node scripts/floor-churn-model.mjs

   ⭐ THE ARGUMENT SURVIVES THE CHANGE, which is why it was worth making: the
   floor still never goes cash-negative in any of the 36 months, the trough is
   still in month 5, and it is still cash-flow positive from month 6. What falls
   is the ceiling — month-36 seats 35 -> 25, ARR $1.296M -> $971K, month-36 cash
   $1,239,600 -> $954,634.

   ⚠️ FLAGGED, NOT SILENTLY FIXED: the workbook's base scenario DOES carry a
   hire from month 13 (opex steps $10,200 -> $15,000), while the pitch prose has
   described the floor as "no raise, no hires". That discrepancy predates this
   round and is recorded in P4-CANDIDATE.md. The model above uses the WORKBOOK's
   opex schedule, not the prose. */
export const FLOOR = {
  asOf: '2026-09-16',
  sourceLabel:
    'Dominus_Foundry_ProForma.xlsx base scenario, re-modelled at 2% monthly logo churn per Mark 2026-09-16 · derivation: scripts/floor-churn-model.mjs (zero-churn control reproduces the workbook, 252/252 cells)',
  seats: '25',
  arr: '$971K',
  rows: [
    ['Starting cash', '$35,000'],
    ['Monthly operating cost', '$10,200 through month 12, $15,000 from month 13 (first hire)'],
    ['Cash-flow positive from', 'month 6'],
    ['Cash trough', '$12,665 at month 5 — 1.2 months of operating cost'],
    ['Cash balance, month 36', '$954,634'],
    ['Modeled churn', '2% monthly logo churn — roughly a fifth of the book a year (about 22%), the same assumption the funded case carries'],
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
    // ⛔ The tail "…where the floor case assumes none" is struck (2026-09-16,
    // R10): the floor carries the same 2% now, so there is no contrast left to
    // draw and the old clause is simply false.
    ['Modeled churn', '2% monthly logo churn — roughly a fifth of the book a year (about 22%), the same assumption the floor case carries'],
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
  amount: '$1,000,000',
  cap: '$10,000,000 post-money',
  dilution: '10.0% at the full raise',
  minimum: '$25,000',
  asOf: '2026-10-19',
  sourceLabel: 'Terms ruled 19 October 2026',
};
// $1,000,000 ÷ $10,000,000 post-money: the dilution string must be that ratio, to one decimal.
if (RAISE.dilution !== `${(100 * Number(RAISE.amount.replace(/[^0-9.]/g, '')) / Number(RAISE.cap.replace(/[^0-9.]/g, ''))).toFixed(1)}% at the full raise`)
  throw new Error('/pitch: RAISE dilution does not equal amount over post-money cap')

/* The 30 August 2026 terms, superseded 19 October. Kept only for the historical
   section, where they sit beside the August use-of-funds split below. */
export const RAISE_AUGUST_2026 = {
  instrument: 'Post-money SAFE with MFN',
  amount: '$650,000',
  cap: '$8,000,000 post-money',
  dilution: 'approximately 8.1% at the full raise',
  minimum: '$25,000',
  asOf: '2026-08-30',
  sourceLabel: 'Terms ruled 30 August 2026, superseded 19 October 2026',
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
  'All founding seats contracted, or an approved replacement milestone.',
  'A measured customer outcome baseline and measured per-seat cost of service.',
  'Repeatable onboarding owned by a deployment lead rather than by a founder.',
  'A first account executive running a documented sales motion.',
  'Proof-carrying execution acceptance evidence current across published claims.',
  'Owned-weight inference capacity for at least 25 companies.',
  'First company-specific management intelligence built over the governed record.',
];

export const CONTACT_EMAIL = 'mark@dominusfoundry.com';

/* ── AT A GLANCE (2026-10-14, the redesigned /pitch) ─────────────────────────
   The summary strip under the hero restates two counts that the ledger above
   already asserts. They are derived from those rows here, not typed into a
   component, and they throw at import time if the rows stop saying the same
   thing. ⛔ No new claim is made by this block. */
const forgeProduction = claim('forge-production')
if (!/\btwo production deployments\b/.test(forgeProduction.publicCopy))
  throw new Error('/pitch: the at-a-glance Forge count no longer matches the forge-production claim')
const provisionalCount = Number.parseInt(claim('provisionals').publicCopy, 10)
if (!Number.isInteger(provisionalCount))
  throw new Error('/pitch: the provisionals claim no longer starts with its count')
const nonprovisionalCount = PROOF.filter((c) => /^nonprovisional(-\d+)?$/.test(c.id)).length

/* The strip's label carries the row's own independent/related-party wording,
   lifted from the claim rather than retyped. */
const forgeQualifier = forgeProduction.publicCopy.match(/^Forge — two (production deployments, one independent and one related-party)$/)
if (!forgeQualifier)
  throw new Error('/pitch: the at-a-glance Forge label no longer matches the forge-production claim')
/* The filing caption is built from the filing rows themselves: every one must be
   status "filed" and carry the same "Patent pending: filed, not issued." line,
   or the page refuses to render rather than state a status the rows do not. */
const filingRows = PROOF.filter((c) => c.id === 'provisionals' || /^nonprovisional(-\d+)?$/.test(c.id))
const PENDING = /Patent pending: filed, not issued\.$/
if (filingRows.length !== 1 + nonprovisionalCount || !filingRows.every((c) => c.status === 'filed' && PENDING.test(c.detailCopy)))
  throw new Error('/pitch: the at-a-glance filing caption no longer matches every filing row')
const filingCaption = PENDING.exec(filingRows[0].detailCopy)![0].replace(/\.$/, '').replace(': ', ' · ').replace(/^P/, 'p')

export const AT_A_GLANCE = {
  forgeDeployments: { value: '2', label: `Forge ${forgeQualifier[1]}`, claimId: forgeProduction.id, asOf: forgeProduction.asOf, status: forgeProduction.status },
  filings: { value: `${provisionalCount} + ${nonprovisionalCount}`, caption: filingCaption, asOf: claim('nonprovisional-2').asOf },
}
