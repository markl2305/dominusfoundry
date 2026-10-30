#!/usr/bin/env node
// Standard-offer forecast: independent cohort arithmetic and cash identities,
// with existing acquisition, hiring, delivery and fixed-budget controls preserved.
import assert from 'node:assert/strict'
import { loadIncomeModel } from './load-income-model.mjs'

const A = 'income-assumptions.json'
const close = (x, y, msg) => assert.ok(Math.abs(x - y) < 1e-6, `${msg}: ${x} !== ${y}`)
let checks = 0, failed = 0
const check = (name, fn) => {
  checks++
  try { fn(); console.log(`ok ${checks} - ${name}`) }
  catch (e) { failed++; console.log(`not ok ${checks} - ${name}\n  ${String(e.message).split('\n')[0]}`) }
}
const m = loadIncomeModel(), a = m.incomeAssumptions
const zeros = () => Array(18).fill(0)

// Cohort convolution is independent of the model's rolling customer-state loop.
function cohorts(activations, price, churn, firstFraction) {
  return activations.map((n, i) => {
    const prior = activations.slice(0, i).reduce((sum, count, j) => sum + count * (1 - churn) ** (i - j), 0)
    return { active: prior + n, revenue: (prior + n * firstFraction) * price, mrr: (prior + n) * price }
  })
}

check('current offer has a dated, explicit new-standard-only scope, $1,500/mo and no setup fee', () => {
  assert.equal(a.asOf, '2026-10-30'); assert.equal(a.cohort, 'new-standard-offer-only')
  assert.equal(a.standardMonthlyRevenue, 1500); assert.equal(a.setupFee, 0)
  assert.match(a.sources.revenue, /signed founding agreements.*excluded/i)
  assert.match(a.sources.revenue, /signed terms remain unchanged/i)
  for (const key of ['foundingSeats', 'foundingSeatsAlreadyTaken', 'foundingMonthlyRevenue', 'setupFeeWaivedShare']) assert.equal(key in a, false, `${key} must not allocate legacy terms to new acquisitions`)
})

check('first activation earns $750 half-month service revenue and has $1,500 month-end MRR', () => {
  const x = m.calculateIncome([1, ...Array(17).fill(0)])
  close(x[0].revenue, 750, 'activation revenue'); close(x[0].mrr, 1500, 'activation MRR')
  close(x[0].collections, 0, 'service collection is one month later')
  close(x[1].revenue, 1470, 'next full service month after churn'); close(x[1].collections, 750, 'first collection')
  close(x[0].incrementalCosts, 600, '$100 billable delivery plus $500 onboarding cost, despite zero setup fee')
})

check('all scenario months match independent cohort convolution, not a founding-price allocation', () => {
  for (const s of m.incomeScenarios) {
    const ref = cohorts(s.activations, 1500, a.monthlyChurn, a.newCustomerFirstMonthFraction)
    s.months.forEach((x, i) => { close(x.activeCompanies, ref[i].active, `${s.id} m${x.month} active`); close(x.revenue, ref[i].revenue, `${s.id} m${x.month} earned`); close(x.mrr, ref[i].mrr, `${s.id} m${x.month} MRR`); close(x.arr, 12 * ref[i].mrr, `${s.id} m${x.month} ARR`) })
  }
})

check('price sensitivity follows inputs; signed founding references do not reprice this cohort', () => {
  const price = 1800
  const z = loadIncomeModel({ [A]: { standardMonthlyRevenue: price, foundingSeats: 100, foundingMonthlyRevenue: 1 } })
  for (const s of z.incomeScenarios) {
    const ref = cohorts(s.activations, price, a.monthlyChurn, a.newCustomerFirstMonthFraction)
    s.months.forEach((x, i) => close(x.revenue, ref[i].revenue, `${s.id} m${x.month}`))
  }
})

check('setup income remains zero while real onboarding and capacity costs remain', () => {
  assert.equal(m.setupIncomePerActivation(), 0); assert.equal(a.incrementalOnboardingPerActivation, 500)
  for (const s of m.incomeScenarios) for (const x of s.months) {
    close(x.setupIncome, 0, 'setup income'); close(x.cumulativeSetupIncome, 0, 'cumulative setup income')
    close(x.operatingResult, x.revenue - x.baseOperatingCosts - x.incrementalCosts, `${s.id} operating result`)
  }
  assert.throws(() => loadIncomeModel({ [A]: { setupFee: 500 } }), /must not include setup-fee income/)
})

check('gross activations are whole starts; active equivalents are separately reduced by churn', () => {
  for (const s of m.incomeScenarios) {
    let gross = 0
    s.months.forEach((x, i) => { gross += s.activations[i]; assert.equal(x.cumulativeActivations, gross); close(x.activeCompanies, x.openingCompanies - x.churnedCompanies + x.newCompanies, `${s.id} m${x.month} active bridge`); assert.ok(x.activeCompanies <= gross + 1e-8) })
  }
  assert.equal(m.incomeScenarios.find(s => s.id === 'base').months[17].cumulativeActivations, 76)
  close(m.incomeScenarios.find(s => s.id === 'base').months[17].activeCompanies, 68.35344944925302, 'base net active, not75 or76')
})

check('collections, earned revenue, receivables and cash reconcile independently each month', () => {
  for (const s of m.incomeScenarios) {
    let cash = 1000000, revenue = 0, operating = 0
    s.months.forEach((x, i) => {
      const due = i ? s.months[i - 1].revenue : 0
      close(x.collections, due, `${s.id} m${x.month} collections`)
      cash += due - x.baseOperatingCosts - x.incrementalCosts - x.closingCosts - x.founderRepayment
      revenue += x.revenue; operating += x.revenue - x.baseOperatingCosts - x.incrementalCosts
      close(x.cash, cash, `${s.id} m${x.month} cash`); close(x.cumulativeRevenue, revenue, `${s.id} m${x.month} cumulative revenue`)
      close(x.cumulativeOperatingResult, operating, `${s.id} m${x.month} cumulative operating`); close(x.receivables, x.revenue, `${s.id} m${x.month} receivables`)
      close(x.cash, 1000000 + operating - x.receivables - s.months.slice(0,i+1).reduce((t,z)=>t+z.closingCosts+z.founderRepayment,0), `${s.id} m${x.month} profit/cash bridge`)
    })
  }
})

check('without new customers the preserved $1M funding plan leaves its $89,500 cash reserve', () => {
  const x = m.calculateIncome(zeros())
  assert.ok(x.every(x => x.revenue === 0 && x.setupIncome === 0 && x.collections === 0))
  close(x[17].cash, 89500, 'budget reserve after fixed costs, legal allowance and founder repayment')
  assert.ok(x[0].founderRepayment === 32000 && x.slice(1).every(x => x.founderRepayment === 0), 'repayment is one financing cash use, not service income')
})

check('invalid scope, amounts, horizon and activation schedules fail rather than silently changing the offer', () => {
  for (const fields of [{cohort:'all-contracts'}, {standardMonthlyRevenue:0}, {standardMonthlyRevenue:-1}, {newCustomerFirstMonthFraction:0}, {newCustomerFirstMonthFraction:2}]) assert.throws(()=>loadIncomeModel({[A]:fields}), /Invalid/)
  assert.throws(()=>m.calculateIncome([1]), /horizon/)
  assert.throws(()=>m.calculateIncome([-1,...Array(17).fill(0)]), /activation count/)
  assert.throws(()=>m.calculateIncome([0.5,...Array(17).fill(0)]), /activation count/)
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
