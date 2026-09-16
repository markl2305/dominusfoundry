#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────────
   FLOOR CASE, RE-MODELLED WITH 2% MONTHLY LOGO CHURN
   Written 2026-09-16 for P4 round 5. RULED by Mark, verbatim: "Pitch has 2%"
   (CONFLICTS.md R10) — the pitch's churn assumption is 2% monthly logo churn,
   and the FLOOR case must use it too. There is no zero-churn floor any more.

   ⛔ WHY THIS FILE EXISTS. The published floor figures came from
   Dominus_Foundry_ProForma.xlsx, base scenario, 30 August 2026 — a workbook,
   not code. Re-deriving them by hand would be unreviewable, so the workbook's
   own "Monthly Model" sheet is transcribed here as INPUTS, and the arithmetic
   is reproduced in code that anyone can re-run.

   ⛔ THE CONTROL IS THE WHOLE POINT. Run with churn = 0 this script must
   reproduce the workbook's published outputs EXACTLY — cumulative seats, MRR,
   total revenue, variable cost, net cash flow, cash balance and ARR, for all
   36 months. If it does not, the model here is not the workbook's model and no
   2% number it produces is worth anything. The control runs first and the
   script exits non-zero if a single month disagrees. A 2% output printed after
   a failed control would be a fabricated figure.

   INPUTS ARE TRANSCRIBED, NOT INVENTED. Every array below is read off the
   workbook's Monthly Model sheet (xl/worksheets/sheet4.xml). Row numbers are
   cited so the transcription can be checked against the source.
   ──────────────────────────────────────────────────────────────────────── */

const MONTHS = 36;

/* Row 7 — "New seats added". The founders' acquisition throughput: one company
   a month, with month 3 missed. ⛔ Churn does NOT change this row — it is what
   two founders can land, not what they retain. */
const NEW_SEATS = [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

/* Rows 9/10 — the Founding charter is TEN SEATS EVER AWARDED (canon), filled
   first; everything after is Standard. ⛔ A churned founding seat is NOT
   refilled at the founding rate: the charter is ten seats ever, not ten seats
   concurrently. This is the one place churn interacts with the price mix, and
   it makes the re-modelled case slightly more conservative than a naive
   "churn the blended base" would. */
const FOUNDING_CAP = 10;
const FOUNDING_PRICE = 2000;   // row 9 header, "of which Founding ($2,000)"
const STANDARD_PRICE = 3500;   // row 10 header, "of which Standard ($3,500)"

/* Row 15 — All Weather Roofing, design partner, flat $500/mo. ⛔ NOT part of
   the Sabina seat count: row 11 ("Instrumented nodes (incl. AWR)") is always
   cumulative seats + 1, which is how the workbook itself separates them. So
   churn applies to the acquired Sabina book and AWR's contracted line is held.
   Effect at month 36 is $500 of $108,000 — stated because it is a judgment
   call, not because it is large. */
const AWR_MRR = 500;

/* Row 17 — setup fees, one-time, charged on NEW seats. $1,000 in months 1–2,
   $2,500 from month 4. ⛔ Unchanged by churn: acquisition is unchanged. */
const setupFeePerNewSeat = (m) => (m <= 2 ? 1000 : 2500);

/* Row 21 — variable cost of delivery, $250 per instrumented node (month 1:
   2 nodes x $250 = $500). Nodes = Sabina seats + 1 for AWR. Falls with churn. */
const VARIABLE_COST_PER_NODE = 250;

/* Row 27 — total operating cost. $10,200 through month 12, then $15,000 from
   month 13 when the workbook's base scenario adds a hire (row 26, $4,800/mo).
   ⚠️ NOTE FOR THE RECORD: the workbook's base scenario DOES carry a hire from
   month 13. The pitch prose describes the floor as "no raise, no hires" —
   that is a pre-existing discrepancy between copy and workbook, flagged in
   P4-CANDIDATE.md, NOT silently changed here. The opex schedule used is the
   workbook's. */
const opex = (m) => (m <= 12 ? 10200 : 15000);

const STARTING_CASH = 35000;

/* ── The workbook's published outputs, for the control ─────────────────────
   Transcribed from rows 8, 16, 18, 21, 30, 31, 32. */
const WB = {
  seats: [1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
  mrr: [2500,4500,4500,6500,8500,10500,12500,14500,16500,18500,20500,24000,27500,31000,34500,38000,41500,45000,48500,52000,55500,59000,62500,66000,69500,73000,76500,80000,83500,87000,90500,94000,97500,101000,104500,108000],
  totalRev: [3500,5500,4500,9000,11000,13000,15000,17000,19000,21000,23000,26500,30000,33500,37000,40500,44000,47500,51000,54500,58000,61500,65000,68500,72000,75500,79000,82500,86000,89500,93000,96500,100000,103500,107000,110500],
  varCost: [500,750,750,1000,1250,1500,1750,2000,2250,2500,2750,3000,3250,3500,3750,4000,4250,4500,4750,5000,5250,5500,5750,6000,6250,6500,6750,7000,7250,7500,7750,8000,8250,8500,8750,9000],
  netCF: [-7200,-5450,-6450,-2200,-450,1300,3050,4800,6550,8300,10050,13300,11750,15000,18250,21500,24750,28000,31250,34500,37750,41000,44250,47500,50750,54000,57250,60500,63750,67000,70250,73500,76750,80000,83250,86500],
  cash: [27800,22350,15900,13700,13250,14550,17600,22400,28950,37250,47300,60600,72350,87350,105600,127100,151850,179850,211100,245600,283350,324350,368600,416100,466850,520850,578100,638600,702350,769350,839600,913100,989850,1069850,1153100,1239600],
  arr: [30000,54000,54000,78000,102000,126000,150000,174000,198000,222000,246000,288000,330000,372000,414000,456000,498000,540000,582000,624000,666000,708000,750000,792000,834000,876000,918000,960000,1002000,1044000,1086000,1128000,1170000,1212000,1254000,1296000],
};

/**
 * Run the model.
 * @param {number} churn monthly logo churn, e.g. 0.02
 *
 * Churn is applied to the OPENING base each month, before that month's new
 * seats are added — so a seat does not churn in the month it is signed.
 * Cohorts are tracked fractionally; rounding only happens at display. Rounding
 * inside the loop would introduce step artifacts at these small seat counts.
 */
function run(churn) {
  let founding = 0, standard = 0, awardedFounding = 0, cash = STARTING_CASH;
  const out = [];
  for (let i = 0; i < MONTHS; i++) {
    const m = i + 1;
    // 1. churn the opening base
    founding *= (1 - churn);
    standard *= (1 - churn);
    // 2. add this month's new seats; founding only while the charter has seats left
    let toAdd = NEW_SEATS[i];
    while (toAdd > 0) {
      if (awardedFounding < FOUNDING_CAP) { founding += 1; awardedFounding += 1; }
      else { standard += 1; }
      toAdd -= 1;
    }
    const seats = founding + standard;
    const seatMrr = founding * FOUNDING_PRICE + standard * STANDARD_PRICE;
    const mrr = seatMrr + AWR_MRR;
    const setup = NEW_SEATS[i] * setupFeePerNewSeat(m);
    const totalRev = mrr + setup;
    const nodes = seats + 1;                       // +1 = AWR
    const varCost = nodes * VARIABLE_COST_PER_NODE;
    const grossProfit = totalRev - varCost;
    const netCF = grossProfit - opex(m);
    cash += netCF;
    out.push({ m, founding, standard, seats, mrr, setup, totalRev, varCost, grossProfit, netCF, cash, arr: mrr * 12 });
  }
  return out;
}

/* ── CONTROL: churn = 0 must reproduce the workbook exactly ─────────────── */
const control = run(0);
const checks = [
  ['cumulative seats', 'seats', WB.seats],
  ['total MRR',        'mrr',   WB.mrr],
  ['total revenue',    'totalRev', WB.totalRev],
  ['variable cost',    'varCost',  WB.varCost],
  ['net cash flow',    'netCF',    WB.netCF],
  ['cash balance',     'cash',     WB.cash],
  ['ARR',              'arr',      WB.arr],
];
let failed = 0;
for (const [label, key, expected] of checks) {
  for (let i = 0; i < MONTHS; i++) {
    const got = Math.round(control[i][key]);
    if (got !== expected[i]) {
      console.error(`CONTROL FAIL — ${label}, month ${i + 1}: model ${got} vs workbook ${expected[i]}`);
      failed += 1;
    }
  }
}
if (failed) {
  console.error(`\n⛔ CONTROL FAILED on ${failed} cell(s). The transcribed model is NOT the workbook's model.`);
  console.error('⛔ No 2% figure derived from it is trustworthy. Fix the inputs before reading any output below.');
  process.exit(1);
}
console.log(`CONTROL PASS — churn=0 reproduces the workbook on all ${checks.length} series x ${MONTHS} months (${checks.length * MONTHS} cells).\n`);

/* ── THE RULED CASE: 2% monthly logo churn ──────────────────────────────── */
const CHURN = 0.02;
const r = run(CHURN);
const at = (m) => r[m - 1];
const usd = (n) => '$' + Math.round(n).toLocaleString('en-US');

let trough = r[0], troughM = 1;
for (const row of r) if (row.cash < trough.cash) { trough = row; troughM = row.m; }
const firstPositive = r.find((x) => x.netCF > 0);
const negative = r.filter((x) => x.cash < 0);
const annual = (1 - Math.pow(1 - CHURN, 12)) * 100;

console.log(`FLOOR CASE @ ${(CHURN * 100).toFixed(0)}% monthly logo churn (${annual.toFixed(1)}% annual attrition)\n`);
console.log('  month 36 seats         ', at(36).seats.toFixed(2), `(display: ${Math.round(at(36).seats)})`);
console.log('  month 36 MRR           ', usd(at(36).mrr));
console.log('  month 36 ARR           ', usd(at(36).arr));
console.log('  cash trough            ', usd(trough.cash), 'at month', troughM);
console.log('  trough / months of opex', (trough.cash / opex(troughM)).toFixed(1));
console.log('  cash-flow positive from', firstPositive ? `month ${firstPositive.m}` : 'never');
console.log('  cash balance, month 36 ', usd(at(36).cash));
console.log('  setup fees, 36 months  ', usd(r.reduce((s, x) => s + x.setup, 0)));
console.log('  ⛔ months cash-negative ', negative.length === 0 ? 'NONE' : negative.map((x) => `${x.m} (${usd(x.cash)})`).join(', '));
console.log('\n  vs published zero-churn floor:');
console.log('   seats m36   35        ->', Math.round(at(36).seats));
console.log('   ARR m36     $1,296,000 ->', usd(at(36).arr));
console.log('   trough      $13,250 @5 ->', usd(trough.cash), '@', troughM);
console.log('   cash m36    $1,239,600 ->', usd(at(36).cash));

if (process.argv.includes('--table')) {
  console.log('\n m | seats | MRR | net CF | cash');
  for (const x of r) console.log(` ${String(x.m).padStart(2)} | ${x.seats.toFixed(2).padStart(6)} | ${usd(x.mrr).padStart(9)} | ${usd(x.netCF).padStart(9)} | ${usd(x.cash).padStart(11)}`);
}
