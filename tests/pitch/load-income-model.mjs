// Loads app/pitch/income-model.ts in plain Node: transpile it with the repo's own
// TypeScript to CommonJS, resolving its two JSON imports from disk.
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const ts = createRequire(import.meta.url)('typescript')

export function loadIncomeModel(overrides = {}) {
  const dir = path.join(root, 'app/pitch')
  const src = fs.readFileSync(path.join(dir, 'income-model.ts'), 'utf8')
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText
  const req = (spec) => {
    const name = path.basename(spec)
    const data = JSON.parse(fs.readFileSync(path.join(dir, name), 'utf8'))
    return { ...data, ...(overrides[name] || {}) }
  }
  const module = { exports: {} }
  new Function('require', 'module', 'exports', js)(req, module, module.exports)
  return module.exports
}
