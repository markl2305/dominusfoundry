'use client'

/* RuleLedger.tsx — the governance demonstration.
   A reader writes a grant in plain English, watches it land in the record with an
   author and a date, fires work at it, then revokes it and watches the capability
   disappear while the rule itself stays on the page, struck through.

   This is a faithful model of the real execution path, not the production engine:
   the rules, the default-deny, the citation and the append-only record behave the
   way they behave inside Forge. Nothing here is sent anywhere — it runs in the
   browser and resets when the page reloads. */

import { useCallback, useRef, useState } from 'react'

type Capability = 'proposals' | 'change-orders' | 'refunds'

const CAPABILITY_LABEL: Record<Capability, string> = {
  proposals: 'send proposals',
  'change-orders': 'approve change orders',
  refunds: 'issue refunds',
}

type Rule = {
  id: string
  capability: Capability
  limit: number
  author: string
  written: string
  revokedBy: string | null
  revokedOn: string | null
}

type Entry = {
  key: number
  kind: 'write' | 'revoke' | 'allow' | 'refuse'
  when: string
  head: string
  detail: string
}

type Action = {
  id: string
  label: string
  capability: Capability
  amount: number
}

const ACTIONS: Action[] = [
  { id: 'a1', label: 'Send a proposal — $14,200', capability: 'proposals', amount: 14200 },
  { id: 'a2', label: 'Send a proposal — $48,000', capability: 'proposals', amount: 48000 },
  { id: 'a3', label: 'Approve a change order — $6,400', capability: 'change-orders', amount: 6400 },
  { id: 'a4', label: 'Issue a refund — $900', capability: 'refunds', amount: 900 },
]

const SEED_RULES: Rule[] = [
  {
    id: 'R-001',
    capability: 'proposals',
    limit: 25000,
    author: 'Mark Lord',
    written: '2026-08-02',
    revokedBy: null,
    revokedOn: null,
  },
  {
    id: 'R-002',
    capability: 'change-orders',
    limit: 10000,
    author: 'Bri Lord',
    written: '2026-08-04',
    revokedBy: null,
    revokedOn: null,
  },
]

const SEED_RECORD: Entry[] = [
  {
    key: 2,
    kind: 'write',
    when: '2026-08-04 09:12',
    head: 'R-002 written',
    detail: 'Bri Lord granted: approve change orders up to $10,000.',
  },
  {
    key: 1,
    kind: 'write',
    when: '2026-08-02 16:41',
    head: 'R-001 written',
    detail: 'Mark Lord granted: send proposals up to $25,000.',
  },
]

const money = (n: number) => `$${n.toLocaleString('en-US')}`

function sentence(r: Rule) {
  return `Sabina may ${CAPABILITY_LABEL[r.capability]} up to ${money(r.limit)} without asking me.`
}

function stamp() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return {
    day: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
    full: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`,
  }
}

export default function RuleLedger() {
  const [rules, setRules] = useState<Rule[]>(SEED_RULES)
  const [record, setRecord] = useState<Entry[]>(SEED_RECORD)
  const [capability, setCapability] = useState<Capability>('refunds')
  const [amount, setAmount] = useState('2,500')
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState('Two grants are active. Everything else is refused by default.')
  const counter = useRef(2)
  const ruleNo = useRef(2)

  const append = useCallback((kind: Entry['kind'], head: string, detail: string) => {
    counter.current += 1
    setRecord((prev) => [{ key: counter.current, kind, when: stamp().full, head, detail }, ...prev])
  }, [])

  const writeRule = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const parsed = Number(amount.replace(/[^0-9]/g, ''))
      if (!parsed || parsed < 1) {
        setError('Give the grant a boundary — a dollar figure above zero.')
        return
      }
      if (parsed > 10_000_000) {
        setError('Keep the demonstration under $10,000,000.')
        return
      }
      setError(null)
      ruleNo.current += 1
      const id = `R-${String(ruleNo.current).padStart(3, '0')}`
      const rule: Rule = {
        id,
        capability,
        limit: parsed,
        author: 'You',
        written: stamp().day,
        revokedBy: null,
        revokedOn: null,
      }
      setRules((prev) => [...prev, rule])
      append('write', `${id} written`, `You granted: ${CAPABILITY_LABEL[capability]} up to ${money(parsed)}.`)
      setStatus(`${id} is now active, authored by you, dated ${rule.written}. Fire the matching work at it, then revoke it.`)
    },
    [amount, capability, append],
  )

  const revoke = useCallback(
    (id: string) => {
      const day = stamp().day
      let revoked: Rule | undefined
      setRules((prev) =>
        prev.map((r) => {
          if (r.id !== id || r.revokedBy) return r
          revoked = r
          return { ...r, revokedBy: 'You', revokedOn: day }
        }),
      )
      if (revoked) {
        append(
          'revoke',
          `${id} revoked`,
          `You revoked the grant to ${CAPABILITY_LABEL[revoked.capability]} up to ${money(revoked.limit)}. The rule stays in the record, struck through.`,
        )
        setStatus(`${id} is revoked. The capability is gone; the rule is still on the page, because a ledger annotates — it does not erase.`)
      }
    },
    [append],
  )

  const run = useCallback(
    (action: Action) => {
      const active = rules.filter((r) => !r.revokedBy && r.capability === action.capability)
      if (active.length === 0) {
        append(
          'refuse',
          'REFUSED · no grant covers this',
          `${action.label} — Sabina holds no active authority to ${CAPABILITY_LABEL[action.capability]}. Escalated to the owner.`,
        )
        setStatus(`Refused. Nothing grants "${CAPABILITY_LABEL[action.capability]}", and unnamed authority is not assumed.`)
        return
      }
      const permitting = active.find((r) => action.amount <= r.limit)
      if (permitting) {
        append(
          'allow',
          `ALLOWED · ${permitting.id}`,
          `${action.label} — inside the boundary on ${permitting.id}, written by ${permitting.author} on ${permitting.written}.`,
        )
        setStatus(`Allowed under ${permitting.id}. The action carries the rule it applied and the person who wrote it.`)
        return
      }
      const nearest = active.reduce((a, b) => (a.limit >= b.limit ? a : b))
      append(
        'refuse',
        `REFUSED · outside ${nearest.id}`,
        `${action.label} — over the ${money(nearest.limit)} boundary ${nearest.author} set on ${nearest.written}. Escalated to the owner.`,
      )
      setStatus(`Refused. ${money(action.amount)} is outside the boundary on ${nearest.id}; it goes to a human instead of through.`)
    },
    [rules, append],
  )

  return (
    <div className="ledger">
      <div className="ledger-pane">
        <h3 className="lp-h serif">1 · Write a rule</h3>
        <p className="lp-lead">
          A grant is a sentence in plain English with a boundary in it. Choose what Sabina may do and how far, and it lands in the canon
          attributed to you.
        </p>

        <form className="composer" onSubmit={writeRule}>
          <p className="composer-line">
            <span>Sabina may</span>
            <label className="sr-only" htmlFor="rl-capability">
              What Sabina may do
            </label>
            <select
              id="rl-capability"
              className="composer-field"
              value={capability}
              onChange={(e) => setCapability(e.target.value as Capability)}
            >
              <option value="refunds">issue refunds</option>
              <option value="proposals">send proposals</option>
              <option value="change-orders">approve change orders</option>
            </select>
            <span>up to</span>
            <label className="sr-only" htmlFor="rl-amount">
              Dollar boundary on the grant
            </label>
            <span className="composer-money">
              <span aria-hidden="true">$</span>
              <input
                id="rl-amount"
                className="composer-field composer-input"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                aria-describedby={error ? 'rl-error' : undefined}
              />
            </span>
            <span>without asking me.</span>
          </p>
          {error && (
            <p className="composer-error" id="rl-error" role="alert">
              {error}
            </p>
          )}
          <button className="btn btn-solid" type="submit">
            Write it into the canon <span className="arr">→</span>
          </button>
        </form>

        <h3 className="lp-h serif lp-h-2">2 · The canon</h3>
        <p className="lp-lead">
          Every rule carries who wrote it and when. Revoke one and it does not vanish — it is struck through and annotated, because the record
          has to still be true a year from now.
        </p>
        <ul className="grants">
          {rules.map((r) => (
            <li className={`grant ${r.revokedBy ? 'revoked' : ''}`} key={r.id}>
              <div className="grant-head">
                <span className="grant-id">{r.id}</span>
                <span className={`grant-state ${r.revokedBy ? 'is-revoked' : 'is-active'}`}>{r.revokedBy ? 'Revoked' : 'Active'}</span>
              </div>
              <p className="grant-text">{r.revokedBy ? <s>{sentence(r)}</s> : sentence(r)}</p>
              <p className="grant-meta">
                Written by {r.author} · {r.written}
              </p>
              {r.revokedBy && (
                <p className="grant-meta grant-annot">
                  Revoked by {r.revokedBy} · {r.revokedOn} — capability withdrawn, entry retained.
                </p>
              )}
              <button
                className="grant-btn"
                type="button"
                onClick={() => revoke(r.id)}
                disabled={!!r.revokedBy}
                aria-label={`Revoke ${r.id}: ${sentence(r)}`}
              >
                {r.revokedBy ? 'Already revoked' : 'Revoke this grant'}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="ledger-pane">
        <h3 className="lp-h serif">3 · Send her work</h3>
        <p className="lp-lead">
          Each of these is a real thing a front office does on a Friday afternoon. Nothing executes outside the canon, so every one of them is
          checked against the rules above before it happens — and refused if no rule allows it.
        </p>
        <div className="fire">
          {ACTIONS.map((a) => (
            <button className="fire-btn" type="button" key={a.id} onClick={() => run(a)}>
              {a.label}
            </button>
          ))}
        </div>
        <p className="lp-note" role="status" aria-live="polite">
          {status}
        </p>

        <h3 className="lp-h serif lp-h-2">4 · The record</h3>
        <p className="lp-lead">
          Append-only, newest first, readable by the owner rather than by an engineer. Grants, revocations and decisions all land in the same
          place, and nothing is ever removed from it.
        </p>
        <ol className="record">
          {record.map((e) => (
            <li className={`rec rec-${e.kind}`} key={e.key}>
              <span className="rec-when">{e.when}</span>
              <span className="rec-head">{e.head}</span>
              <span className="rec-detail">{e.detail}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
