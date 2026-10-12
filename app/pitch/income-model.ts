import p from './financial-plan.json'
import a from './income-assumptions.json'

export const incomeAssumptions = a
export const operatingAssumptions = p
export type IncomeMonth = {
  month: number; newCompanies: number; openingCompanies: number; churnedCompanies: number;
  activeCompanies: number; billableCompanies: number; revenue: number; mrr: number; arr: number;
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
}
export function financingTarget(): number {
  const forward = Array.from({length: p.horizonMonths}, (_, i) => baseOperatingCost(i + 1))
    .reduce((s, v) => s + v, 0) + p.closingLegalBudget
  return Math.ceil((forward * (1 + p.contingencyRate) + p.founderFundingRepayment)
    / p.roundingIncrement) * p.roundingIncrement
}
export function calculateIncome(activations: number[]): IncomeMonth[] {
  if (a.months !== p.horizonMonths || a.months !== 18 || activations.length !== a.months)
    throw new Error('Income forecast and the cost plan must use the same qualified 18-month horizon')
  if (a.collectionLagMonths !== 1 || a.monthlyChurn < 0 || a.monthlyChurn >= 1)
    throw new Error('Requalify the cash model before changing collection timing or churn semantics')
  let active = 0, cumulativeRevenue = 0, cumulativeOperatingResult = 0, cash = financingTarget()
  const months: IncomeMonth[] = []
  activations.forEach((newCompanies, i) => {
    if (!Number.isInteger(newCompanies) || newCompanies < 0) throw new Error('Invalid activation count')
    const month = i + 1
    const openingCompanies = active
    const churnedCompanies = openingCompanies * a.monthlyChurn
    const retained = openingCompanies - churnedCompanies
    const billableCompanies = retained + newCompanies * a.newCustomerFirstMonthFraction
    active = retained + newCompanies
    const revenue = billableCompanies * a.monthlyBlendedRevenue
    const mrr = active * a.monthlyBlendedRevenue
    const collections = i ? months[i - 1].revenue : 0
    const baseOperatingCosts = baseOperatingCost(month)
    const incrementalCosts = billableCompanies * a.incrementalDeliveryPerCompany
      + newCompanies * a.incrementalOnboardingPerActivation
    const operatingResult = revenue - baseOperatingCosts - incrementalCosts
    const closingCosts = month === 1 ? p.closingLegalBudget : 0
    const founderRepayment = month === p.repaymentMonth ? p.founderFundingRepayment : 0
    cumulativeRevenue += revenue
    cumulativeOperatingResult += operatingResult
    cash += collections - baseOperatingCosts - incrementalCosts - closingCosts - founderRepayment
    months.push({month, newCompanies, openingCompanies, churnedCompanies, activeCompanies: active,
      billableCompanies, revenue, mrr, arr: mrr * 12, collections, baseOperatingCosts,
      incrementalCosts, operatingResult, cumulativeRevenue, cumulativeOperatingResult,
      closingCosts, founderRepayment, cash, receivables: revenue})
  })
  return months
}
export const incomeScenarios = a.scenarios.map(s => ({...s, months: calculateIncome(s.activations)}))
