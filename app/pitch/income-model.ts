import p from './financial-plan.json'
import a from './income-assumptions.json'

export const incomeAssumptions = a
export const operatingAssumptions = p
export type IncomeMonth = {
  month: number; newCompanies: number; openingCompanies: number; churnedCompanies: number;
  activeCompanies: number; cumulativeActivations: number; billableCompanies: number; revenue: number; mrr: number; arr: number;
  setupIncome: number; cumulativeSetupIncome: number; additionalDeliveryStaff: number; additionalDeliveryCosts: number;
  collections: number; baseOperatingCosts: number; incrementalCosts: number;
  operatingResult: number; cumulativeRevenue: number; cumulativeOperatingResult: number;
  closingCosts: number; founderRepayment: number; cash: number; receivables: number;
}
export function baseOperatingCost(month: number): number {
  const aws = month <= 6 ? p.awsMonthlyFirstSix : month <= 12 ? p.awsMonthlySecondSix : p.awsMonthlyThirdSix
  const security = month >= p.securityStartMonth && month <= p.securityEndMonth
    ? p.securityComplianceBudget / (p.securityEndMonth - p.securityStartMonth + 1) : 0
  return p.founderAnnualCombined / 12 * (1 + p.founderCostLoad)
    + p.developerAiMonthly + aws
    + (month >= p.deliveryLeadStartMonth ? p.deliveryLeadMonthlyLoaded : 0)
    + p.engineeringMonthly + p.salesMonthly + p.adminMonthly + security
    + hireCost(p.salesHires, month) + hireCost(p.technicalDeliveryHires, month)
}
// Monthly cost of the named hires on payroll in a month: each is costed from its start month on.
export type Hire = { role: string; startMonth: number; monthlyLoaded: number }
export function hireCost(hires: Hire[], month: number): number {
  if (hires.some((h) => !Number.isInteger(h.startMonth) || h.startMonth < 1 || h.startMonth > p.horizonMonths || !(h.monthlyLoaded >= 0)))
    throw new Error('Invalid hire')
  return hires.reduce((s, h) => s + (month >= h.startMonth ? h.monthlyLoaded : 0), 0)
}
export function financingTarget(): number {
  const forward = Array.from({length: p.horizonMonths}, (_, i) => baseOperatingCost(i + 1))
    .reduce((s, v) => s + v, 0) + p.closingLegalBudget
  return Math.ceil((forward * (1 + p.contingencyRate) + p.founderFundingRepayment)
    / p.roundingIncrement) * p.roundingIncrement
}
// This forward cohort is the current standard offer. Signed founding agreements are outside
// its scope, not repriced or consumed as new discounted seats.
export const setupIncomePerActivation = (): number => a.setupFee
/* Budgeted onboarding staff in a month: the founders (then the deployment lead) plus each named
   technical delivery hire on payroll. Mark, 19 October (round 5): the implementation engineer is
   delivery and onboarding capacity. Their cost is already in baseOperatingCost, so they count here
   as capacity only and add no cost. */
export const budgetedDeliveryStaff = (month: number): number =>
  1 + p.technicalDeliveryHires.filter((h) => month >= h.startMonth).length
export function calculateIncome(activations: number[], openingCash: number = financingTarget()): IncomeMonth[] {
  if (a.months !== p.horizonMonths || a.months !== 18 || activations.length !== a.months)
    throw new Error('Income forecast and the cost plan must use the same qualified 18-month horizon')
  if (a.collectionLagMonths !== 1 || a.monthlyChurn < 0 || a.monthlyChurn >= 1)
    throw new Error('Requalify the cash model before changing collection timing or churn semantics')
  if (a.cohort !== 'new-standard-offer-only' || !Number.isFinite(a.standardMonthlyRevenue) || a.standardMonthlyRevenue <= 0)
    throw new Error('Invalid standard-offer cohort or monthly price')
  if (a.setupFee !== 0)
    throw new Error('The standard-offer forecast must not include setup-fee income')
  if (!(a.newCustomerFirstMonthFraction > 0 && a.newCustomerFirstMonthFraction <= 1))
    throw new Error('Invalid first-month service fraction')
  if (!Number.isInteger(a.activationsPerDeliveryStaff) || a.activationsPerDeliveryStaff < 1)
    throw new Error('Invalid delivery capacity')
  // Every modeled activation is a new standard-offer company. Existing signed founding
  // contracts and any custom-priced large accounts are deliberately outside this cohort.
  // Delivery capacity: each budgeted onboarding staff member (budgetedDeliveryStaff) onboards
  // activationsPerDeliveryStaff a month. A month needing more adds staff, kept for the rest of the horizon.
  let active = 0, cumulativeActivations = 0, cumulativeRevenue = 0, cumulativeOperatingResult = 0, cumulativeSetupIncome = 0
  let additionalDeliveryStaff = 0, cash = openingCash
  const months: IncomeMonth[] = []
  activations.forEach((newCompanies, i) => {
    if (!Number.isInteger(newCompanies) || newCompanies < 0) throw new Error('Invalid activation count')
    const month = i + 1
    const openingCompanies = active
    const churnedCompanies = openingCompanies * a.monthlyChurn
    const retained = openingCompanies - churnedCompanies
    const billableCompanies = retained + newCompanies * a.newCustomerFirstMonthFraction
    active = retained + newCompanies
    cumulativeActivations += newCompanies
    const revenue = billableCompanies * a.standardMonthlyRevenue
    const mrr = active * a.standardMonthlyRevenue
    // Zero for this standard-offer cohort; kept separate from recurring service revenue.
    const setupIncome = newCompanies * setupIncomePerActivation()
    additionalDeliveryStaff = Math.max(additionalDeliveryStaff, Math.ceil(newCompanies / a.activationsPerDeliveryStaff) - budgetedDeliveryStaff(month))
    const additionalDeliveryCosts = additionalDeliveryStaff * a.additionalDeliveryStaffMonthlyLoaded
    const collections = (i ? months[i - 1].revenue : 0) + setupIncome
    const baseOperatingCosts = baseOperatingCost(month)
    const incrementalCosts = billableCompanies * a.incrementalDeliveryPerCompany
      + newCompanies * a.incrementalOnboardingPerActivation + additionalDeliveryCosts
    const operatingResult = revenue + setupIncome - baseOperatingCosts - incrementalCosts
    const closingCosts = month === 1 ? p.closingLegalBudget : 0
    const founderRepayment = month === p.repaymentMonth ? p.founderFundingRepayment : 0
    cumulativeRevenue += revenue
    cumulativeSetupIncome += setupIncome
    cumulativeOperatingResult += operatingResult
    cash += collections - baseOperatingCosts - incrementalCosts - closingCosts - founderRepayment
    months.push({month, newCompanies, openingCompanies, churnedCompanies, activeCompanies: active, cumulativeActivations,
      billableCompanies, revenue, mrr, arr: mrr * 12, setupIncome, cumulativeSetupIncome, additionalDeliveryStaff, additionalDeliveryCosts,
      collections, baseOperatingCosts,
      incrementalCosts, operatingResult, cumulativeRevenue, cumulativeOperatingResult,
      closingCosts, founderRepayment, cash, receivables: revenue})
  })
  return months
}
/* The raise the plan needs: the deepest cash draw of the base case funded from zero (which is the
   cost of reaching its break-even, collection lag included), with the budget's contingency on the
   operating part, plus the founder repayment and an end-of-horizon reserve of reserveMonths of
   month-18 spending. Rounded up like financingTarget(). Reported beside the planning raise; it does
   not set any term on the page. */
export function computedRaiseNeed(activations: number[] = scenarioActivations('base')) {
  const months = calculateIncome(activations, 0)
  const low = months.reduce((lo, m) => (m.cash < lo.cash ? m : lo), months[0])
  const draw = Math.max(0, -low.cash)
  const last = months[months.length - 1]
  const reserve = a.raiseReserveMonths * (last.baseOperatingCosts + last.incrementalCosts)
  const operatingDraw = Math.max(0, draw - p.founderFundingRepayment)
  const need = Math.ceil((operatingDraw * (1 + p.contingencyRate) + p.founderFundingRepayment + reserve)
    / p.roundingIncrement) * p.roundingIncrement
  return { need, draw, drawMonth: low.month, contingency: operatingDraw * p.contingencyRate, reserve }
}
/* Sales lift: each account executive (financial-plan.json salesHires) adds activations on top of the
   founder-led schedule. aeRamp[k] of aeMonthlyQuota k months after the start month, full quota after
   the ramp. Mark, 19 October: quota is 1 to 2 standard companies a month per executive; nothing above. */
export function salesLift(quota: number = a.aeMonthlyQuota): number[] {
  if (!(quota >= 1 && quota <= 2)) throw new Error('Account-executive quota is outside the ruled range of 1 to 2 a month')
  return Array.from({length: a.months}, (_, i) => p.salesHires.reduce((t, h) => {
    const k = i + 1 - h.startMonth
    return t + (k < 0 ? 0 : quota * a.aeRamp[Math.min(k, a.aeRamp.length - 1)])
  }, 0))
}
const cumulative = (xs: number[]) => xs.reduce<number[]>((r, n) => (r.push((r.length ? r[r.length - 1] : 0) + n), r), [])
const monthly = (c: number[]) => c.map((v, i) => v - (i ? c[i - 1] : 0))
/* Activations a scenario models: base is its founder-led schedule plus the sales lift, rounded to whole
   companies cumulatively; slower and faster are aeScale times base's cumulative total, rounded the same way. */
export function scenarioActivations(id: string, quota: number = a.aeMonthlyQuota): number[] {
  const s = a.scenarios.find((x) => x.id === id)!, base = a.scenarios.find((x) => x.id === 'base')!
  const lift = cumulative(salesLift(quota))
  const baseTotal = cumulative(base.activations).map((v, i) => v + lift[i])
  return monthly(baseTotal.map((v) => Math.round(v * s.aeScale)))
}
export const incomeScenarios = a.scenarios.map(s => {
  const activations = scenarioActivations(s.id)
  return {...s, founderLedActivations: s.activations, activations, months: calculateIncome(activations)}
})
