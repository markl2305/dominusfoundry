/* Bottom-up market sizing for /pitch (6 November 2026, Mark: "these need to be
   realistic"; "starting with professional services businesses and growing
   outward is the current plan").

   Counts, provenance and limits come from market-sizing.json (Codex-owned,
   extracted from the raw 2022 Census SUSB file). The annual price comes from
   income-assumptions.json's standard monthly price, and SOM comes from the
   income model's own scenarios. Nothing here is a new forecast input: no TAM
   percentage, no new price, no new activation schedule.

   TAM and SAM are population-based spending envelopes at the current standard
   price. They are not budgets, purchase intent or revenue. SOM is the
   operating plan's month-18 ARR after churn, not a market-share assumption. */
import M from './market-sizing.json'
import { incomeAssumptions as a, incomeScenarios } from './income-model'

export const market = M

/* Current standard offer, annualized. Custom-price premiums are excluded. */
export const annualPrice = a.standardMonthlyRevenue * 12

export const tam = { firms: M.tamFirms, value: M.tamFirms * annualPrice }
export const sam = { firms: M.samFirms, value: M.samFirms * annualPrice }

/* SOM: each scenario's last modeled month. ARR is month-end MRR x 12. */
const lastMonth = (id: string) => {
  const s = incomeScenarios.find((x) => x.id === id)
  if (!s) throw new Error(`/pitch market sizing: scenario ${id} missing`)
  const m = s.months[s.months.length - 1]
  return { id, label: s.label, month: m.month, gross: m.cumulativeActivations, active: m.activeCompanies, arr: m.arr }
}
export const som = lastMonth('base')
export const somSensitivity = [lastMonth('slower'), lastMonth('faster')]

/* Illustrative qualification shares of the SAM firm population, at the same
   price. Qualification is unmeasured; these are sensitivities, not forecasts. */
export const samSensitivity = [0.5, 0.25].map((share) => ({ share, firms: M.samFirms * share, value: M.samFirms * share * annualPrice }))

/* Company-scale illustration (Mark, 6 Nov 2026): how many active companies at the
   current standard price would represent $100M ARR. The $100M is an illustrative
   scale marker, not a forecast, target or valuation, and not a plan input. */
export const illustrativeArr = 100_000_000
export const companiesForIllustration = Math.ceil(illustrativeArr / annualPrice)

/* Formatting shared by the page. */
export const fmtBillions = (v: number, digits = 2) => `$${(v / 1e9).toFixed(digits)}B`
export const fmtMillions = (v: number, digits = 2) => `$${(v / 1e6).toFixed(digits)}M`
export const fmtInt = (v: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(v)
export const fmtUsd = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)

/* ⛔ The page refuses to render if the sourced counts, the price or the plan
   drift from what the sizing was reviewed against. Change the inputs, not these
   guards, and re-review the section. */
if (M.employeeMin !== 10 || M.employeeMax !== 499 || M.unit !== 'firms, not establishments')
  throw new Error('/pitch market sizing: unexpected sizing boundary or unit')
if (sam.firms >= tam.firms) throw new Error('/pitch market sizing: SAM must be a subset of TAM')
if (som.arr >= sam.value) throw new Error('/pitch market sizing: SOM must sit inside SAM')
