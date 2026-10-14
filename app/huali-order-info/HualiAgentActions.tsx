// Ordering is by phone (Mark 2026-10-13, compliance P1-1c). The record of what this replaced is in the
// compliance evidence, 1c-foundry-gate-RESULT.md.
// 2026-10-14: restyled in the site-wide redesign (components/site); the link, its id and href are unchanged.
export function HualiAgentActions() {
  return (
    <div className="stack">
      <a
        id="huali-call-agent"
        href="tel:5053374443"
        className="btn btn-solid huali-call"
      >
        Call the Huali™ Order Line: 505-337-4443
      </a>
    </div>
  )
}
