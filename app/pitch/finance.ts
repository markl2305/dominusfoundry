/* The costed operating plan behind chapter XI. Moved out of FinancePlan.tsx
   (2026-10-14, the redesigned /pitch) so the figures strip, the use-of-funds
   bar and the hero summary all read ONE computation. Every amount comes from
   financial-plan.json; nothing here is typed by hand. */
import p from './financial-plan.json'
import { RAISE } from './claims'
import { financingTarget, hireCost, type Hire } from './income-model'

export const plan = p
export const usd = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)

// Months on payroll and total cost of a set of hires over the horizon.
const hireTotal = (hires: Hire[]) => Array.from({ length: p.horizonMonths }, (_, i) => hireCost(hires, i + 1)).reduce((s, v) => s + v, 0)
const hireBasis = (hires: Hire[]) => hires.map((h) => `${h.role.toLowerCase()} from month ${h.startMonth} at ${usd(h.monthlyLoaded)} monthly`).join('; ')
export const budgetRows: [string, number, string][] = [
  ['Founder compensation', p.founderAnnualCombined / 12 * p.horizonMonths, `${usd(p.founderAnnualCombined)} combined annual gross pay for Mark and Bri; ${p.horizonMonths} months.`],
  ['Founder employer-cost allowance', p.founderAnnualCombined / 12 * p.horizonMonths * p.founderCostLoad, `${p.founderCostLoad * 100}% planning allowance, separate from gross pay. Actual payroll and benefit treatment to be confirmed.`],
  ['External developer AI tools', p.developerAiMonthly * p.horizonMonths, `${usd(p.developerAiMonthly)} monthly for development, review and maintenance. Not a production-model API cost.`],
  ['AWS compute and infrastructure', 6 * (p.awsMonthlyFirstSix + p.awsMonthlySecondSix + p.awsMonthlyThirdSix), `${usd(p.awsMonthlyFirstSix)}, ${usd(p.awsMonthlySecondSix)} and ${usd(p.awsMonthlyThirdSix)} monthly in successive six-month periods. Serving, training and infrastructure allowances, not measured capacity guarantees.`],
  ['Deployment and customer support', Math.max(0, p.horizonMonths - p.deliveryLeadStartMonth + 1) * p.deliveryLeadMonthlyLoaded, `${usd(p.deliveryLeadMonthlyLoaded)} monthly from month ${p.deliveryLeadStartMonth}, including planned employment costs. Hiring follows workload.`],
  ['Specialist engineering', p.engineeringMonthly * p.horizonMonths, `${usd(p.engineeringMonthly)} monthly for scoped engineering support alongside AI-assisted development.`],
  ['Technical delivery team', hireTotal(p.technicalDeliveryHires), `${hireBasis(p.technicalDeliveryHires)}, fully loaded. On top of the deployment lead and any activation-driven delivery hires in the income scenarios.`],
  ['Sales team', hireTotal(p.salesHires), `${hireBasis(p.salesHires)}, fully loaded including planned commission. Each starts about two months before the base case steps up its activation pace.`],
  ['Sales, research and acquisition', p.salesMonthly * p.horizonMonths, `${usd(p.salesMonthly)} monthly for founder-led closing, external sales and research support and acquisition costs, alongside the sales team.`],
  ['Administration and business software', p.adminMonthly * p.horizonMonths, `${usd(p.adminMonthly)} monthly for administration, accounting, insurance and non-development software allowances.`],
  ['Legal and security readiness', p.closingLegalBudget + p.securityComplianceBudget, `${usd(p.closingLegalBudget)} for financing and corporate work; ${usd(p.securityComplianceBudget)} for security/compliance readiness. Allowances, not quotes or certification claims.`],
]
export const forward = budgetRows.reduce((sum, row) => sum + row[1], 0)
export const outflows = forward + p.founderFundingRepayment
export const target = Math.ceil((forward * (1 + p.contingencyRate) + p.founderFundingRepayment) / p.roundingIncrement) * p.roundingIncrement
export const reserve = target - outflows
// ⛔ The page refuses to render if the raise, this budget and the income model's own target disagree.
const raiseAmount = Number(RAISE.amount.replace(/[^0-9.]/g, ''))
if (target !== raiseAmount || financingTarget() !== raiseAmount) throw new Error('Financing target and operating budget disagree')
