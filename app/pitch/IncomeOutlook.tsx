import {incomeAssumptions as a, incomeScenarios, financingTarget, type IncomeMonth} from './income-model'

const money = (v: number) => v < 0
  ? `(${new Intl.NumberFormat('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0}).format(-v)})`
  : new Intl.NumberFormat('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0}).format(v)
const headStyle = {textAlign:'right' as const, padding:'12px 16px', borderBottom:'1px solid currentColor', whiteSpace:'nowrap' as const}
const cellStyle = {textAlign:'right' as const, padding:'10px 16px', verticalAlign:'top' as const}
const labelStyle = {...cellStyle, textAlign:'left' as const}
const rows: {label:string; value:(m:IncomeMonth)=>string}[] = [
  {label:'Active company equivalents at month end',value:m=>m.activeCompanies.toFixed(1)},
  {label:'Month-end recurring revenue (MRR)',value:m=>money(m.mrr)},
  {label:'Annualized recurring run rate (ARR)',value:m=>money(m.arr)},
  {label:'Cumulative service revenue earned',value:m=>money(m.cumulativeRevenue)},
  {label:'That month’s operating profit / (loss)',value:m=>money(m.operatingResult)},
  {label:'Cumulative operating profit / (loss)',value:m=>money(m.cumulativeOperatingResult)},
  {label:'Ending cash after financing and planned outflows',value:m=>money(m.cash)},
]
export default function IncomeOutlook() {
  const base = incomeScenarios.find(s=>s.id==='base')!
  const points = [6,12,18].map(month=>base.months[month-1])
  const firstPositive = base.months.find(m=>m.operatingResult>=0)?.month
  const trough = base.months.reduce((lowest,m)=>m.cash<lowest.cash?m:lowest,base.months[0])
  return <section id="income-projection" aria-labelledby="income-title" style={{marginTop:48}}>
    <h3 className="pitch-h3" id="income-title">Revenue, operating income and cash</h3>
    <p>The operating budget and the income case belong together. This direct-customer forecast uses the same founder compensation, development tools, AWS, staffing and overhead plan shown above. Initial customers come from across industries; no trades-first starting point or MSP launch is assumed.</p>
    <p className="pitch-note">Illustrative planning scenarios dated {a.asOf}, not achieved results or guaranteed growth. Amounts are USD. Months begin at financing close. The model starts with zero new modeled Sabina customers; it does not restate current company traction. Company counts are expected values after modeled churn, not fractional actual customers.</p>
    <h4 className="pitch-h3">Base planning case</h4>
    <p>{base.description} The model applies {a.monthlyChurn*100}% monthly customer churn, half-month service revenue for new activations and collections one month after revenue is earned. The existing blended internal revenue assumption is an underwriting input, not a published customer rate. Current written proposals govern actual pricing.</p>
    <div style={{overflowX:'auto'}} tabIndex={0} role="region" aria-label="Base revenue and cash projection">
      <table style={{width:'100%',minWidth:640,borderCollapse:'collapse'}}>
        <thead><tr><th scope="col" style={{...headStyle,textAlign:'left'}}>Measure</th>{points.map(m=><th scope="col" key={m.month} style={headStyle}>Month {m.month}</th>)}</tr></thead>
        <tbody>{rows.map(row=><tr key={row.label}><th scope="row" style={{...labelStyle,fontWeight:500}}>{row.label}</th>{points.map(m=><td key={m.month} style={cellStyle}>{row.value(m)}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <p className="pitch-note">ARR is month-end MRR multiplied by twelve; it is not revenue earned during the period. Operating result is before taxes, interest, depreciation, amortization and the separately presented financing/corporate-work allowance. It is not GAAP net income or distributable profit. The base case first shows a positive monthly operating result in month {firstPositive}; the cumulative operating result remains a loss at month {a.months}.</p>
    <h4 className="pitch-h3">What slower or faster activation changes</h4>
    <div style={{overflowX:'auto'}} tabIndex={0} role="region" aria-label="Month 18 scenario comparison">
      <table style={{width:'100%',minWidth:700,borderCollapse:'collapse'}}>
        <thead><tr><th scope="col" style={{...headStyle,textAlign:'left'}}>At month {a.months}</th><th scope="col" style={headStyle}>Active companies</th><th scope="col" style={headStyle}>ARR</th><th scope="col" style={headStyle}>Revenue earned to date</th><th scope="col" style={headStyle}>Monthly operating result</th><th scope="col" style={headStyle}>Ending cash</th></tr></thead>
        <tbody>{incomeScenarios.map(s=>{const m=s.months[s.months.length-1];return <tr key={s.id}><th scope="row" style={{...labelStyle,fontWeight:500}}>{s.label}</th><td style={cellStyle}>{m.activeCompanies.toFixed(1)}</td><td style={cellStyle}>{money(m.arr)}</td><td style={cellStyle}>{money(m.cumulativeRevenue)}</td><td style={cellStyle}>{money(m.operatingResult)}</td><td style={cellStyle}>{money(m.cash)}</td></tr>})}</tbody>
      </table>
    </div>
    <p className="pitch-note">Slower activation: {incomeScenarios[0].description} Faster activation: {incomeScenarios[2].description} These vary activation timing and volume, not prices or the fixed spending schedule. They are sensitivity cases, not statistical confidence bounds or demonstrated sales/deployment capacity.</p>
    <h4 className="pitch-h3">How the cash and cost figures connect</h4>
    <p>Each scenario includes the full {money(financingTarget())} financing at the start and the proposed founder-funding repayment under the closing conditions stated above. Investment proceeds are not revenue; repayment of founder funding is not operating expense. The base-case cash low is {money(trough.cash)} in month {trough.month}. Cash is not the same as earned profit.</p>
    <p className="pitch-note">In addition to the fixed operating budget, the income scenarios allow {money(a.incrementalDeliveryPerCompany)} per billable company-month for incremental delivery costs and {money(a.incrementalOnboardingPerActivation)} per activation for incremental setup costs. These are extra cash allowances, not a second allocation of existing salaries or AWS spending. No setup-fee income, existing Forge revenue, MSP income, data-product income, existing cash, cloud credits or further financing is included. No bad debt, tax, interest or additional capital expenditure is modeled. Actual workload may require different capacity and staffing costs. Detailed monthly assumptions and formulas are available in diligence.</p>
  </section>
}
