14:29:20.113 Running build in Washington, D.C., USA (East) – iad1
14:29:20.114 Build machine configuration: 4 cores, 8 GB
14:29:20.226 Cloning github.com/markl2305/dominusfoundry (Branch: main, Commit: fb82387)
14:29:20.467 Cloning completed: 241.000ms
14:29:20.966 Restored build cache from previous deployment (7Yr9tDVcP7H2yeHp4vd3SpPFewTe)
14:29:21.435 Running "vercel build"
14:29:21.851 Vercel CLI 48.8.0
14:29:22.364 Installing dependencies...
14:29:23.271 
14:29:23.271 up to date in 637ms
14:29:23.271 
14:29:23.272 47 packages are looking for funding
14:29:23.272   run `npm fund` for details
14:29:23.302 Detected Next.js version: 14.2.5
14:29:23.306 Running "npm run build"
14:29:23.423 
14:29:23.424 > dominus-foundry@0.1.0 build
14:29:23.424 > next build
14:29:23.424 
14:29:24.162   ▲ Next.js 14.2.5
14:29:24.162 
14:29:24.190    Creating an optimized production build ...
14:29:24.945  ⚠ Found lockfile missing swc dependencies, run next locally to automatically patch
14:29:27.737 Failed to compile.
14:29:27.737 
14:29:27.737 ./components/LeadForm.jsx
14:29:27.737 Error: 
14:29:27.737   [31mx[0m Unexpected eof
14:29:27.738     ,-[[36;1;4m/vercel/path0/components/LeadForm.jsx[0m:74:1]
14:29:27.738  [2m74[0m |             name="sourceSystem" 
14:29:27.738  [2m75[0m |             className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
14:29:27.738  [2m76[0m |           >
14:29:27.738     `----
14:29:27.738 
14:29:27.738 Caused by:
14:29:27.738     Syntax Error
14:29:27.738 
14:29:27.738 Import trace for requested module:
14:29:27.738 ./components/LeadForm.jsx
14:29:27.738 ./app/qb-migration/page.js
14:29:27.738 
14:29:27.746 
14:29:27.747 > Build failed because of webpack errors
14:29:27.769 Error: Command "npm run build" exited with 1
