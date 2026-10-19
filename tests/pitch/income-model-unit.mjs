#!/usr/bin/env node
// Unit test for the two-tier Sabina pricing in app/pitch/income-model.ts.
import assert from 'node:assert/strict'
import { loadIncomeModel } from './load-income-model.mjs'

const A = 'income-assumptions.json'
const close = (x, y, msg) => assert.ok(Math.abs(x - y) < 1e-6, `${msg}: ${x} !== ${y}`)
// Every check runs even after one fails, so a red check cannot hide the ones after it; any failure exits 1.
let checks = 0, failed = 0
const check = (name, fn) => {
  checks++
  try { fn(); console.log(`ok ${checks} - ${name}`) }
  catch (e) { failed++; console.log(`not ok ${checks} - ${name}\n  ${String(e.message).split('\n')[0]}`) }
}

// The pre-tier model, kept here only as a reference: one price for every company.
function singlePrice(m, activations, price) {
  const a = m.incomeAssumptions
  let active = 0
  return activations.map((n) => {
    const retained = active * (1 - a.monthlyChurn)
    const billable = retained + n * a.newCustomerFirstMonthFraction
    active = retained + n
    return { revenue: billable * price, mrr: active * price }
  })
}

check('equal tier prices reproduce the single-price model (control)', () => {
  const m = loadIncomeModel({ [A]: { foundingMonthlyRevenue: 3100, standardMonthlyRevenue: 3100 } })
  for (const s of m.incomeScenarios) {
    const ref = singlePrice(m, s.activations, 3100)
    s.months.forEach((x, i) => { close(x.revenue, ref[i].revenue, `${s.id} m${x.month} revenue`); close(x.mrr, ref[i].mrr, `${s.id} m${x.month} mrr`) })
  }
})

const m = loadIncomeModel()
const a = m.incomeAssumptions

check('planning prices are $750 founding / $1,500 standard; ten seats, three already taken', () => {
  assert.equal(a.foundingMonthlyRevenue, 750); assert.equal(a.standardMonthlyRevenue, 1500)
  assert.equal(a.foundingSeats, 10); assert.equal(a.foundingSeatsAlreadyTaken, 3); assert.equal(m.openFoundingSeats(), 7)
})

check('base: the first seven activations are founding, every later one standard', () => {
  const base = m.incomeScenarios.find((s) => s.id === 'base').months
  close(base[1].revenue, 375, 'month 2 half-month founding revenue'); close(base[1].mrr, 750, 'month 2 mrr')
  assert.equal(base[4].standardCompanies, 0, 'six founding activations and no standard through month 5')
  close(base[5].standardCompanies, 1, 'month 6 splits: the seventh seat and one standard company')
  for (const s of m.incomeScenarios) {
    const x = m.calculateIncome(s.activations.map(() => 0).map((_, i) => (i === 0 ? s.activations.reduce((t, n) => t + n, 0) : 0)))
    close(x[0].foundingCompanies, 7, `${s.id}: all its activations at once take exactly seven founding seats`)
  }
})

check('an activation month that crosses the seat limit splits between tiers', () => {
  const acts = [6, 2, ...Array(16).fill(0)]
  const x = m.calculateIncome(acts)
  close(x[1].foundingCompanies, 6 * (1 - a.monthlyChurn) + 1, 'founding after month 2')
  close(x[1].standardCompanies, 1, 'standard after month 2')
  close(x[1].revenue, 6 * (1 - a.monthlyChurn) * 750 + 0.5 * 750 + 0.5 * 1500, 'month 2 revenue')
})

check('churned founding seats do not reopen', () => {
  const x = m.calculateIncome([7, ...Array(16).fill(0), 1])
  close(x[17].standardCompanies, 1, 'month 18 activation is standard')
})

check('every month: active = founding + standard, mrr = tiered sum, arr = 12 x mrr', () => {
  for (const s of m.incomeScenarios) for (const x of s.months) {
    close(x.activeCompanies, x.foundingCompanies + x.standardCompanies, `${s.id} m${x.month} active`)
    close(x.mrr, x.foundingCompanies * 750 + x.standardCompanies * 1500, `${s.id} m${x.month} mrr`)
    close(x.arr, x.mrr * 12, `${s.id} m${x.month} arr`)
  }
})

check('zero founding seats prices everyone at the standard rate', () => {
  const z = loadIncomeModel({ [A]: { foundingSeats: 0, foundingSeatsAlreadyTaken: 0 } })
  for (const s of z.incomeScenarios) {
    const ref = singlePrice(z, s.activations, 1500)
    s.months.forEach((x, i) => close(x.revenue, ref[i].revenue, `${s.id} m${x.month}`))
  }
})

check('more seats taken than exist throws', () => {
  assert.throws(() => loadIncomeModel({ [A]: { foundingSeatsAlreadyTaken: 11 } }), /founding seat/)
})

check('setup income: half the fee per activation, outside recurring revenue, inside operating result and cash', () => {
  assert.equal(a.setupFee, 500); assert.equal(a.setupFeeWaivedShare, 0.5); assert.equal(m.setupIncomePerActivation(), 250)
  for (const s of m.incomeScenarios) {
    let cum = 0
    s.months.forEach((x, i) => {
      close(x.setupIncome, s.activations[i] * 250, `${s.id} m${x.month} setup`)
      cum += x.setupIncome; close(x.cumulativeSetupIncome, cum, `${s.id} m${x.month} cumulative setup`)
      close(x.operatingResult, x.revenue + x.setupIncome - x.baseOperatingCosts - x.incrementalCosts, `${s.id} m${x.month} operating result`)
      close(x.collections, (i ? s.months[i - 1].revenue : 0) + x.setupIncome, `${s.id} m${x.month} collections`)
    })
  }
  const none = loadIncomeModel({ [A]: { setupFeeWaivedShare: 1 } })
  for (const s of m.incomeScenarios) {
    const n = none.calculateIncome(s.activations)
    s.months.forEach((x, i) => { close(n[i].revenue, x.revenue, 'revenue unchanged'); close(n[i].mrr, x.mrr, 'mrr unchanged') })
  }
})

check('delivery capacity: two activations a month on budget, one hire per further two, hires kept', () => {
  const z = Array(18).fill(0)
  const staff = (acts) => m.calculateIncome(acts).map((x) => x.additionalDeliveryStaff)
  assert.deepEqual(staff([2, ...z.slice(1)]), z, 'two a month needs no hire')
  assert.equal(staff([3, ...z.slice(1)])[17], 1, 'three in one month needs one hire, kept to month 18')
  assert.equal(staff([5, ...z.slice(1)])[0], 2, 'five needs two')
  const x = m.calculateIncome([0, 0, 3, ...Array(15).fill(0)])
  close(x[1].incrementalCosts, 0, 'no hire before it is needed')
  close(x[2].additionalDeliveryCosts, a.additionalDeliveryStaffMonthlyLoaded, 'hire costed')
  close(x[17].incrementalCosts - x[17].billableCompanies * a.incrementalDeliveryPerCompany, a.additionalDeliveryStaffMonthlyLoaded, 'hire still costed in month 18')
  for (const s of m.incomeScenarios) s.months.forEach((x, i) => {
    close(x.incrementalCosts, x.billableCompanies * a.incrementalDeliveryPerCompany + s.activations[i] * a.incrementalOnboardingPerActivation + x.additionalDeliveryCosts, `${s.id} m${x.month} incremental`)
    // Round 5: the budgeted onboarding staff include the implementation engineer from their start month.
    assert.ok((m.budgetedDeliveryStaff(x.month) + x.additionalDeliveryStaff) * a.activationsPerDeliveryStaff >= s.activations[i], `${s.id} m${x.month} capacity covers activations`)
  })
})

check('opening cash is a parameter; the page default is the budget target, which is the $1,000,000 raise', () => {
  assert.equal(m.financingTarget(), 1000000); assert.equal(a.planningRaise.amount, m.financingTarget())
  const base = m.incomeScenarios.find((s) => s.id === 'base')
  const at = m.calculateIncome(base.activations, 0)
  at.forEach((x, i) => close(base.months[i].cash - x.cash, m.financingTarget(), `m${x.month}`))
})

check('round-3 hires: costed in fixed spending from their start month; with none, round 2 reproduces', () => {
  const p = m.operatingAssumptions
  const hires = [...p.salesHires, ...p.technicalDeliveryHires]
  assert.ok(p.salesHires.length >= 1 && p.salesHires.length <= 2 && p.technicalDeliveryHires.length >= 1)
  const none = loadIncomeModel({ 'financial-plan.json': { salesHires: [], technicalDeliveryHires: [] } })
  for (let month = 1; month <= 18; month++)
    close(m.baseOperatingCost(month) - none.baseOperatingCost(month), hires.filter((h) => month >= h.startMonth).reduce((t, h) => t + h.monthlyLoaded, 0), `m${month}`)
  assert.equal(none.financingTarget(), 650000, 'control: without the hires the budget target is the old $650,000')
  const r2 = none.calculateIncome(none.incomeAssumptions.scenarios.find((s) => s.id === 'base').activations)
  close(Math.round(r2[17].operatingResult), 5199, 'control: round-2 base month-18 operating result')
  assert.throws(() => loadIncomeModel({ 'financial-plan.json': { salesHires: [{ role: 'x', startMonth: 19, monthlyLoaded: 1 }] } }).baseOperatingCost(1), /Invalid hire/)
})

check('round-4 sales lift: account executives add companies on top of the founder-led schedule, ramped, inside 1 to 2 a month', () => {
  const p = m.operatingAssumptions
  assert.ok(a.aeMonthlyQuota >= 1 && a.aeMonthlyQuota <= 2, 'quota inside the ruled range')
  assert.deepEqual(a.aeRamp, [0, 0.5, 1])
  const q = a.aeMonthlyQuota, lift = m.salesLift()
  lift.forEach((v, i) => {
    const want = p.salesHires.reduce((t, h) => t + (i + 1 < h.startMonth + 1 ? 0 : i + 1 === h.startMonth + 1 ? q / 2 : q), 0)
    close(v, want, `m${i + 1} lift`)
  })
  for (const bad of [0.99, 2.01]) assert.throws(() => m.salesLift(bad), /ruled range/)
  const cum = (xs) => xs.reduce((r, n) => (r.push((r.at(-1) ?? 0) + n), r), [])
  const base = m.incomeScenarios.find((s) => s.id === 'base')
  const want = cum(base.founderLedActivations).map((v, i) => Math.round(v + cum(lift)[i]))
  assert.deepEqual(cum(base.activations), want, 'base = founder-led + lift, rounded cumulatively')
  for (const s of m.incomeScenarios) {
    assert.ok(s.activations.every((n) => Number.isInteger(n) && n >= 0), `${s.id} whole activations`)
    const total = s.activations.reduce((t, n) => t + n, 0)
    assert.ok(s.description.includes(`${total} activations by month 18`), `${s.id} description states its total ${total}`)
  }
  const none = loadIncomeModel({ 'financial-plan.json': { salesHires: [] } })
  assert.deepEqual(none.scenarioActivations('base'), none.incomeAssumptions.scenarios.find((s) => s.id === 'base').activations, 'control: no executives, no lift')
})

check('round 5: the implementation engineer is onboarding capacity, counted once', () => {
  const p = m.operatingAssumptions
  const eng = p.technicalDeliveryHires.find((h) => h.role === 'Implementation engineer')
  assert.ok(eng, 'the implementation engineer is a named technical delivery hire')
  for (let month = 1; month <= 18; month++)
    assert.equal(m.budgetedDeliveryStaff(month), 1 + p.technicalDeliveryHires.filter((h) => month >= h.startMonth).length, `m${month} budgeted staff`)
  assert.equal(m.budgetedDeliveryStaff(eng.startMonth - 1), 1, 'no capacity before the engineer starts')
  assert.equal(m.budgetedDeliveryStaff(eng.startMonth), 2, 'two onboarding staff from the engineer start month')
  // Counted once: the engineer's cost is in fixed spending only; incremental costs carry no engineer cost.
  for (const s of m.incomeScenarios) s.months.forEach((x, i) =>
    close(x.incrementalCosts, x.billableCompanies * a.incrementalDeliveryPerCompany + s.activations[i] * a.incrementalOnboardingPerActivation + x.additionalDeliveryStaff * a.additionalDeliveryStaffMonthlyLoaded, `${s.id} m${x.month} no engineer cost in incremental`))
  // Capacity, not a free hire: from the engineer start, a month of 4 activations needs no extra hire, a month of 5 needs one.
  const z = Array(18).fill(0), at = (n) => z.map((_, i) => (i + 1 === eng.startMonth ? n : 0))
  assert.equal(m.calculateIncome(at(4))[17].additionalDeliveryStaff, 0, 'four onboarded by the budgeted two')
  assert.equal(m.calculateIncome(at(5))[17].additionalDeliveryStaff, 1, 'five needs one extra hire')
  assert.equal(m.calculateIncome([4, ...z.slice(1)])[17].additionalDeliveryStaff, 1, 'month 1, before the engineer: four needs one hire')
  // Control: without the engineer, round 4's capacity rule (founders/lead only) reproduces.
  const none = loadIncomeModel({ 'financial-plan.json': { technicalDeliveryHires: [] } })
  const nb = none.incomeScenarios.find((s) => s.id === 'base')
  nb.months.forEach((x, i) => assert.equal(x.additionalDeliveryStaff, Math.max(0, ...nb.activations.slice(0, i + 1).map((n) => Math.ceil(n / 2) - 1)), `control m${x.month}`))
})

check('slower and faster are about 25% either side of base (cumulative, within half a company)', () => {
  const cum = (acts) => acts.reduce((r, n) => (r.push((r.at(-1) ?? 0) + n), r), [])
  const b = cum(m.incomeScenarios.find((s) => s.id === 'base').activations)
  for (const [id, f] of [['slower', 0.75], ['faster', 1.25]]) {
    const c = cum(m.incomeScenarios.find((s) => s.id === id).activations)
    c.forEach((v, i) => assert.ok(Math.abs(v - b[i] * f) <= 0.5, `${id} m${i + 1}: ${v} vs ${b[i] * f}`))
  }
})

check('ruling: the base case reaches a positive monthly operating result by month 18, on recurring revenue alone', () => {
  const base = m.incomeScenarios.find((s) => s.id === 'base')
  assert.ok(base.months.some((x) => x.operatingResult > 0), 'base breaks even within the horizon')
  assert.ok(base.months[17].operatingResult > 0, 'and is still positive at month 18')
  assert.ok(base.months[17].operatingResult - base.months[17].setupIncome > 0, 'on recurring revenue alone at month 18')
})

check('round 5: the second account executive starts in the latest month that breaks base even on recurring revenue by month 18', () => {
  const p = m.operatingAssumptions
  assert.equal(a.aeMonthlyQuota, 2, 'quota stays at 2 a month')
  const ae2 = p.salesHires[1]
  const recurringM18 = (start) => {
    const x = loadIncomeModel({ 'financial-plan.json': { salesHires: [p.salesHires[0], { ...ae2, startMonth: start }] } })
      .incomeScenarios.find((s) => s.id === 'base').months[17]
    return x.operatingResult - x.setupIncome
  }
  assert.ok(recurringM18(ae2.startMonth) > 0, `start month ${ae2.startMonth} breaks even`)
  for (let later = ae2.startMonth + 1; later <= 15; later++)
    assert.ok(recurringM18(later) <= 0, `control: start month ${later} does not break even`)
})

check('computed raise need: deepest zero-start draw + contingency on its operating part + repayment + reserve', () => {
  const base = m.incomeScenarios.find((s) => s.id === 'base')
  const z = m.calculateIncome(base.activations, 0)
  const low = Math.min(...z.map((x) => x.cash))
  const p = m.operatingAssumptions
  const last = z[17]
  const raw = (-low - p.founderFundingRepayment) * (1 + p.contingencyRate) + p.founderFundingRepayment
    + a.raiseReserveMonths * (last.baseOperatingCosts + last.incrementalCosts)
  const r = m.computedRaiseNeed()
  close(r.draw, -low, 'draw'); assert.equal(r.need, Math.ceil(raw / p.roundingIncrement) * p.roundingIncrement)
  assert.ok(r.need >= raw && r.need - raw < p.roundingIncrement, 'rounded up once')
})

check('ship 1019: the budget fits $1,000,000 at a 10.00% contingency; hires and repayment unchanged', () => {
  // Seat ruling 2026-10-19 (ship candidate): contingency 10.00% in place of round 6's fitted 10.18%.
  // The raise stays $1,000,000; the hires and the founder repayment are not cut.
  const p = m.operatingAssumptions
  assert.deepEqual(p.salesHires.map((h) => [h.startMonth, h.monthlyLoaded]), [[7, 10000], [12, 10000]])
  assert.deepEqual(p.technicalDeliveryHires.map((h) => [h.startMonth, h.monthlyLoaded]), [[6, 11000]])
  assert.equal(p.founderFundingRepayment, 32000); assert.equal(p.contingencyRate, 0.1)
  const at = (c) => loadIncomeModel({ 'financial-plan.json': { contingencyRate: c } }).financingTarget()
  assert.equal(at(0.125), 1025000, 'round 5 rate: the $25,000 is the rounding step')
  assert.equal(at(0.1), 1000000); assert.equal(at(0.1019), 1025000, 'the fit ceiling sits between 10.18% and 10.19%')
  const fwd = Array.from({ length: p.horizonMonths }, (_, i) => m.baseOperatingCost(i + 1)).reduce((s, v) => s + v, 0) + p.closingLegalBudget
  close(fwd, 878500, 'forward budget unchanged from round 6')
  const raw = fwd * (1 + p.contingencyRate) + p.founderFundingRepayment
  close(raw, 998350, 'unrounded budget at 10.00%')
  assert.ok(raw <= 1000000 && 1000000 - raw < p.roundingIncrement, `unrounded ${raw}: one rounding step to $1,000,000`)
})

console.log(`${checks - failed} of ${checks} checks passed`)
if (failed) process.exit(1)
