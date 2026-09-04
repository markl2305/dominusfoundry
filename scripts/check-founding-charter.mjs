#!/usr/bin/env node
// Fails the build if public/llms.txt (a hand-maintained static file that cannot
// import a JS module) has drifted from content/founding-charter.mjs, the single
// source of truth for the Founding Charter seat count.
//
// Run standalone: node scripts/check-founding-charter.mjs
// Run automatically: `npm run build` (wired as "prebuild" in package.json).

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import {
  TOTAL_SEATS,
  SIGNED_SEATS,
  SPOKEN_FOR_SEATS,
  OPEN_SEATS,
  totalSeatsWord,
  signedSeatsWord,
  spokenForSeatsWord,
  openSeatsWord,
} from '../content/founding-charter.mjs'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const LLMS_PATH = path.join(ROOT, 'public', 'llms.txt')

const expected = `The Founding Charter is ${totalSeatsWord} seats, awarded by application (${signedSeatsWord} signed, ${spokenForSeatsWord} spoken for, ${openSeatsWord} open)`

const text = readFileSync(LLMS_PATH, 'utf8')

if (!text.includes(expected)) {
  console.error('\nFAILED: public/llms.txt has drifted from content/founding-charter.mjs\n')
  console.error(`Source of truth says: TOTAL_SEATS=${TOTAL_SEATS} SIGNED_SEATS=${SIGNED_SEATS} SPOKEN_FOR_SEATS=${SPOKEN_FOR_SEATS} OPEN_SEATS=${OPEN_SEATS}`)
  console.error(`Expected public/llms.txt to contain:\n  "${expected}"`)
  console.error(`\nIt does not. Update public/llms.txt to match content/founding-charter.mjs (or vice versa if the ruled seat count changed).\n`)
  process.exit(1)
}

console.log(`OK: public/llms.txt matches content/founding-charter.mjs (${totalSeatsWord} total, ${signedSeatsWord} signed, ${spokenForSeatsWord} spoken for, ${openSeatsWord} open)`)
