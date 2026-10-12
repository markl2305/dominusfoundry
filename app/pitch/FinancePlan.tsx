import p from './financial-plan.json'
import { RAISE } from './claims'

const usd = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)
const rows: [string, number, string][] = [
  ['Founder compensation', p.founderAnnualCombined / 12 * p.horizonMonths, `${usd(p.founderAnnualCombined)} combined annual gross pay for Mark and Bri; ${p.horizonMonths} months.`],
  ['Founder employer-cost allowance', p.founderAnnualCombined / 12 * p.horizonMonths * p.founderCostLoad, `${p.founderCostLoad * 100}% planning allowance, separate from gross pay. Actual payroll and benefit treatment to be confirmed.`],
  ['External developer AI tools', p.developerAiMonthly * p.horizonMonths, `${usd(p.developerAiMonthly)} monthly for development, review and maintenance. Not a production-model API cost.`],
  ['AWS compute and infrastructure', 6 * (p.awsMonthlyFirstSix + p.awsMonthlySecondSix + p.awsMonthlyThirdSix), `${usd(p.awsMonthlyFirstSix)}, ${usd(p.awsMonthlySecondSix)} and ${usd(p.awsMonthlyThirdSix)} monthly in successive six-month periods. Serving, training and infrastructure allowances, not measured capacity guarantees.`],
  ['Deployment and customer support', Math.max(0, p.horizonMonths - p.deliveryLeadStartMonth + 1) * p.deliveryLeadMonthlyLoaded, `${usd(p.deliveryLeadMonthlyLoaded)} monthly from month ${p.deliveryLeadStartMonth}, including planned employment costs. Hiring follows workload.`],
  ['Specialist engineering', p.engineeringMonthly * p.horizonMonths, `${usd(p.engineeringMonthly)} monthly for scoped engineering support alongside AI-assisted development.`],
  ['Sales, research and acquisition', p.salesMonthly * p.horizonMonths, `${usd(p.salesMonthly)} monthly. Founder-led closing with external sales and research support, not an automatic account-executive hire.`],
  ['Administration and business software', p.adminMonthly * p.horizonMonths, `${usd(p.adminMonthly)} monthly for administration, accounting, insurance and non-development software allowances.`],
  ['Legal and security readiness', p.closingLegalBudget + p.securityComplianceBudget, `${usd(p.closingLegalBudget)} for financing and corporate work; ${usd(p.securityComplianceBudget)} for security/compliance readiness. Allowances, not quotes or certification claims.`],
]
const forward = rows.reduce((sum, row) => sum + row[1], 0)
const outflows = forward + p.founderFundingRepayment
const target = Math.ceil((forward * (1 + p.contingencyRate) + p.founderFundingRepayment) / p.roundingIncrement) * p.roundingIncrement
const reserve = target - outflows
if (target !== Number(RAISE.amount.replace(/[^0-9.]/g, ''))) throw new Error('Financing target and operating budget disagree')

export default function FinancePlan() {
  return <>
    <div className="pitch-figures">
      <div className="pitch-figure"><span className="pitch-figure-v">{usd(target)}</span><span className="pitch-figure-l">Proposed financing target</span><span className="pitch-figure-f">planning budget · {p.asOf}</span></div>
      <div className="pitch-figure"><span className="pitch-figure-v">{p.horizonMonths} months</span><span className="pitch-figure-l">Operating horizon from financing close</span><span className="pitch-figure-f">no forecast receipts required by this budget</span></div>
      <div className="pitch-figure"><span className="pitch-figure-v">{usd(reserve)}</span><span className="pitch-figure-l">Reserve after planned outflows</span><span className="pitch-figure-f">cash retained, not operating expense</span></div>
    </div>
    <p>Capital funds direct customer deployment, repeatable operation and the people carrying the business. Production AI runs on Foundry-operated models on its AWS servers. External AI tools used to build, review and maintain the software are budgeted separately as development tools.</p>
    <p className="pitch-note">Current planning budget: {p.asOf}. Month one starts at financing close. Costs are planning allowances unless identified as founder-directed, not audited actuals, current bank balances, vendor quotations or customer-capacity guarantees. Earlier financial scenarios are retained below only as a clearly marked historical reference.</p>
    <h3 className="pitch-h3">The financing target</h3>
    <div className="pitch-terms">
      <div><span>Instrument</span><strong>{RAISE.instrument}</strong></div>
      <div><span>Raise</span><strong>{RAISE.amount}</strong></div>
      <div><span>Valuation cap</span><strong>{RAISE.cap}</strong></div>
      <div><span>Investment / post-money cap</span><strong>{RAISE.dilution}</strong></div>
      <div><span>Minimum check</span><strong>{RAISE.minimum}</strong></div>
    </div>
    <p className="pitch-note">Financing reference terms dated {RAISE.asOf}; actual financing documents govern conversion and later dilution. Revised use of funds: {p.asOf}.</p>
    <h3 className="pitch-h3">Use of funds: a costed operating plan</h3>
    <div className="pitch-rows">
      {rows.map(([label, amount, basis]) => <div key={label}><span>{label} — <strong>{usd(amount)}</strong></span><span>{basis}</span></div>)}
      <div><span>Forward operating and project budget — <strong>{usd(forward)}</strong></span><span>All forward compensation, delivery, development, infrastructure and business costs above.</span></div>
      <div><span>Proposed founder-funding repayment — <strong>{usd(p.founderFundingRepayment)}</strong></span><span>Separately disclosed related-party use of proceeds for funds the founder put into the business. Not additional operating expense.</span></div>
      <div><span>Total planned cash outflows — <strong>{usd(outflows)}</strong></span><span>Forward spending plus the proposed founder-funding repayment.</span></div>
      <div><span>Working-capital and contingency reserve — <strong>{usd(reserve)}</strong></span><span>Cash retained against timing differences and overruns; not counted twice as an expense.</span></div>
      <div><span>Total financing target — <strong>{usd(target)}</strong></span><span>Forward budget, proposed founder-funding repayment and reserve.</span></div>
    </div>
    <p className="pitch-note">The target is calculated from the forward budget plus a {p.contingencyRate * 100}% contingency allowance, the proposed founder-funding repayment, and rounding to the next {usd(p.roundingIncrement)}. No existing cash, forecast customer collections, prospective cloud credits, MSP revenue or future data revenue reduces this funding requirement. Actual overruns consume the reserve; actual collections extend operating room or support separately approved growth. Any additional historical liabilities must be reconciled before closing.</p>
    <h3 className="pitch-h3">Founder funding: explicit, limited and documented</h3>
    <p>The plan includes up to {usd(p.founderFundingRepayment)} to repay part of the founder funding used for the business before this round. Payment is subject to supporting records, accounting classification, applicable company and investor approvals, and financing terms. It is separate from compensation and is not an automatic payment at every closing. Other historical founder funding and credit-card balances are not assumed repaid by this plan.</p>
    <h3 className="pitch-h3">What the operating period must establish</h3>
    <ol className="pitch-list pitch-list-num">
      <li>Paying direct deployments carrying agreed responsibilities with inspectable outcomes.</li>
      <li>Repeatable setup, customer adoption and support, with human effort measured.</li>
      <li>Measured AWS workload capacity and cost of service on the accepted production configuration.</li>
      <li>Company context, corrections and governed follow-through supporting subsequent work.</li>
      <li>Documented operations, recovery and security readiness for the qualified service.</li>
      <li>A defined MSP responsibility and economics model after direct delivery is repeatable.</li>
    </ol>
    <p>A smaller first close requires its own spending schedule; it does not automatically fund this complete plan. Revenue forecasts remain separate scenarios with explicit activation, collection, retention and delivery assumptions.</p>
  </>
}
