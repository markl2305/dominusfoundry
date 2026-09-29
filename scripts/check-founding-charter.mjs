#!/usr/bin/env node
// Counted founding availability lives on hiresabina.ai/hire, not on this site.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseDocument, DomUtils } from 'htmlparser2'
import { createHash } from 'node:crypto'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const approved = '- Founding Seats: awarded by application (See current founding availability: https://hiresabina.ai/hire#founding)'
const link = 'https://hiresabina.ai/hire#founding'
const old = /Founding Seats:\s*ten total|The Founding Charter is ten seats/i
const term = /\b(seats?|founding|cohort|openings?|slots?|spots?|charter|availability|remain|remaining|unclaimed|spoken for|signed)\b/i
const num = /\b(?:\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?|(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?:-(?:zero|one|two|three|four|five|six|seven|eight|nine))?|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|zero|one|two|three|four|five|six|seven|eight|nine|hundreds?|thousands?|millions?|billions?|dozens?|several|few|half|handful|couple)\b/gi
const date = /\b(?:19|20)\d{2}-\d{2}-\d{2}\b|\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+(?:\d{1,2},\s+)?(?:19|20)\d{2}\b/gi
const count = /\b(one|two|three|four|five|six|seven|eight|nine|ten|[0-9]{1,2})\b(\s+of\s+the\s+\S+)?\s+(founding\s+)?seats?\b|\b(one|two|three|four|five|six|seven|eight|nine|ten|[0-9]{1,2})\s+(signed|spoken for|open|unclaimed|still open|remain|left)\b|\bseats?\b[^.\n]{0,30}\b(one|two|three|four|five|six|seven|eight|nine|ten|[0-9]{1,2})\s+(open|signed|spoken for|unclaimed|remain|left)\b/i
const adjudicatedCompanyBio = '664c7d5f0835eb2ddd41f520f7e4b60ac3f496718bc7b539c77b9e3a682be983'
const allow = new Map([
  // 2026-09-29 seat adjudication of evidence/26-08/gate.md: four findings arise
  // from these three preserved whole blocks; /company triggers B5 and R11.
  // Each exception is route-scoped and pinned to the exact normalized text.
  ['company', [
    adjudicatedCompanyBio,
  ]],
  ['pitch', [
    '7a2c05d10c0a235c76e8650626191e8a8ae25dfcc1805fc3d5bdbd9bbed7dc7c',
    'a075efac3f754a6b319e80570dc788571adf5f62ea4b593936e417d4904a4ee3',
    'c2871c91bce2335035bd84e054ea469a2cb8292d7bbfefd4b944cb6bd9f90f00',
    '06b27dd8956b9da87f12879de1407646f193c388d04d0cc5940b7f355b89a4f8',
  ]],
  ['press', [
    '132a5376341ff3bc89b8e51a4e0ddeb85e46aef2315339f42cf2b79c1f99ce5f',
  ]],
  ['pricing', [
    '09e3d5d0e6ea2ec829190e0257c77a865b969841bcd03dbfd6a807df3229b598',
  ]],
])
const listed = new Set(['p','li','h1','h2','h3','h4','h5','h6','td','th','dd','dt','blockquote','figcaption','button','a','title','text','desc'])
const attrs = new Set(['value','placeholder','alt','title','aria-label','label'])
const errors = []
const check = (ok, msg) => { if (!ok) errors.push(msg) }
const read = p => fs.readFileSync(path.join(root, p), 'utf8')
const norm = s => String(s).replace(/\s+/g, ' ').replace(/\s+([,.;:!?)])/g, (_m, punctuation) => punctuation).replace(/\(\s+/g, '(').trim()
const hash = s => createHash('sha256').update(norm(s)).digest('hex')
function walk(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])
}
function jsonBlocks(v, keys = []) {
  if (Array.isArray(v)) return v.flatMap(x => jsonBlocks(x, keys))
  if (v && typeof v === 'object') return Object.entries(v).flatMap(([k,x]) => jsonBlocks(x, [...keys, k]))
  const value = v === null ? 'null' : String(v)
  return [...(typeof v === 'string' ? [norm(value)] : []), norm(`${keys.slice(-2).map(k => String(k).replace(/([a-z0-9])([A-Z])/g, (_m, left, right) => left + ' ' + right).replace(/[_\-.@]+/g, ' ')).join(' ')} ${value}`)].filter(Boolean)
}
function htmlBlocks(raw) {
  const doc = parseDocument(raw, { decodeEntities: true })
  const out = []
  const visit = (node, inListed = false) => {
    if (node.type === 'text') { if (!inListed && norm(node.data)) out.push(norm(node.data)); return }
    const tag = (node.name || '').toLowerCase()
    if (tag === 'script' || tag === 'style') return
    for (const [k,v] of Object.entries(node.attribs || {})) if (attrs.has(k) && norm(v)) out.push(norm(v))
    if (tag === 'meta' && node.attribs?.content) out.push(norm(node.attribs.content))
    if (listed.has(tag)) { const value = norm(DomUtils.getText(node)); if (value) out.push(value) }
    for (const child of node.children || []) visit(child, inListed || listed.has(tag))
  }
  for (const child of doc.children) visit(child)
  for (const m of raw.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { out.push(...jsonBlocks(JSON.parse(m[1]))) } catch { errors.push('B7: malformed inline JSON-LD') }
  }
  return out
}
function textBlocks(raw) {
  try { return jsonBlocks(JSON.parse(raw)) } catch {}
  return /<[A-Za-z!?/]/.test(raw) ? htmlBlocks(raw) : raw.split(/\r?\n/).map(norm).filter(Boolean)
}
function block(b, where, route) {
  b = norm(b)
  if (!b || (allow.get(route) || []).includes(hash(b))) return
  if (count.test(b)) errors.push(`${where}: founding/count pattern: ${b.slice(0, 180)}`)
  if (!term.test(b)) return
  num.lastIndex = 0
  const hit = num.exec(b.replace(date, m => ' '.repeat(m.length)))
  if (hit) errors.push(`${where}: ${hit[0]} shares block with availability term: ${b.slice(0, 180)}`)
}
function source() {
  const llms = read('public/llms.txt').split(/\r?\n/)
  check(llms.filter(l => l.trim() === approved).length === 1, 'S1: approved llms line must occur exactly once')
  check(llms.filter(l => /seat/i.test(l)).every(l => l.trim() === approved), 'S1: another llms seat line exists')
  check(!old.test(llms.join('\n')), 'S4: old founding count remains in llms')
  for (const dir of ['app','components']) for (const file of walk(path.join(root, dir))) {
    if (!/\.[cm]?[jt]sx?$/.test(file)) continue
    const raw = fs.readFileSync(file, 'utf8')
    const rel = path.relative(root, file)
    check(!/from\s*['"][^'"]*founding-charter\.mjs['"]/.test(raw), `S2: founding count import in ${rel}`)
    const uncommented = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\n)\s*\/\/[^\n]*/g, (_m, prefix) => prefix)
    check(!count.test(uncommented) && !/\bseven of ten\b/i.test(uncommented), `S3: literal count in ${rel}`)
  }
  console.log(`SOURCE: ${errors.length ? 'FAIL' : 'PASS'} (S1-S4)`)
}
function render() {
  const appRoutes = JSON.parse(read('.next/app-path-routes-manifest.json'))
  const prerender = JSON.parse(read('.next/prerender-manifest.json')).routes
  const routes = Object.entries(appRoutes).filter(([k]) => k.endsWith('/page'))
  const routeBlocks = new Map()
  for (const [src, url] of routes) {
    const route = url === '/' ? 'index' : url.slice(1)
    const htmlFile = path.join(root, '.next/server/app', `${route}.html`)
    check(url in prerender && fs.existsSync(htmlFile), `R4: page ${url} has no prerendered HTML (${src})`)
    if (!fs.existsSync(htmlFile)) continue
    const raw = fs.readFileSync(htmlFile, 'utf8')
    const blocks = htmlBlocks(raw)
    routeBlocks.set(route, blocks)
    blocks.forEach((b,i) => block(b, `B5/6/7/R10 ${url} block ${i+1}`, route))
    if (blocks.some(b => /seat/i.test(b) && !(route === 'company' && hash(b) === adjudicatedCompanyBio)))
      check(raw.includes(link), `R11: ${url} has a seat mention without founding link`)
    for (const ext of ['meta','rsc','body']) {
      const f = path.join(root, '.next/server/app', `${route}.${ext}`)
      if (!fs.existsSync(f)) continue
      const data = fs.readFileSync(f, 'utf8')
      const strings = ext === 'rsc'
        ? [...data.matchAll(/"(?:\\.|[^"\\])*"/g)].flatMap(m => {
            try {
              const decoded = JSON.parse(m[0])
              if (typeof decoded !== 'string') return []
              try {
                const nested = JSON.parse(decoded)
                if (nested && typeof nested === 'object') return [decoded, ...jsonBlocks(nested)]
              } catch {}
              return [decoded]
            } catch { return [] }
          })
        : textBlocks(data)
      strings.forEach((b,i) => block(b, `B6/8/9 ${url} ${ext} ${i+1}`, route))
    }
  }
  for (const file of walk(path.join(root, 'public'))) {
    const data = fs.readFileSync(file)
    if (data.includes(0)) continue
    const raw = data.toString('utf8')
    if (!Buffer.from(raw).equals(data)) continue
    textBlocks(raw).forEach((b,i) => block(b, `B9 ${path.relative(root,file)} ${i+1}`, 'public'))
  }
  for (const [route, phrases] of allow) for (const phrase of phrases)
    check(routeBlocks.get(route)?.some(b => hash(b) === phrase), `R12: allowlist phrase missing as whole block on /${route}`)
  console.log(`RENDER: ${errors.length ? 'FAIL' : 'PASS'} (${routes.length} page routes, ${[...routeBlocks.values()].reduce((n,b) => n+b.length,0)} blocks)`)
}
process.argv.includes('--render') ? render() : source()
if (errors.length) { for (const e of errors) console.error(`FAIL ${e}`); process.exit(1) }
