# Copilot / AI agent instructions — Playwright test repo

Quick summary
- This repository is a Playwright test workspace. Tests live under `tests/`, with JavaScript and TypeScript specs. The project uses npm and has a Playwright config and GitHub Actions workflow.

Big picture (what an AI agent should know)
- Tests follow Playwright conventions (`*.spec.js` and `*.spec.ts`) and live under `tests/`.
- The npm manifest and lockfile are in the repository root; the Playwright configuration is `playwright.config.js`.
- GitHub Actions runs the Playwright suite on pushes and pull requests.

How to run and debug (concrete commands)
- If a `package.json` exists, prefer using npm scripts; otherwise use the Playwright CLI via npx:

  - Run all tests:

    npm test

  - Run a single file:

    npx playwright test tests/example.spec.js

  - Debug with the Playwright inspector:

    npx playwright test --debug tests/example.spec.js

- The repository has a VS Code launch configuration named "Launch Chrome against localhost" at [.vscode/launch.json](.vscode/launch.json#L1-L20) which can be used to attach a Chrome browser when debugging a locally served app.

Project-specific patterns and conventions
- Test files: `*.spec.js` and `*.spec.ts` under `tests/`.
- The Playwright runner is configured to run headlessly and write an HTML report to `playwright-report/`.

Integration points
- `.github/workflows/playwright.yml` runs `npm ci`, installs Chromium and its Linux dependencies, runs `npm test`, and uploads reports.
- On successful pushes to `main`, the workflow publishes `playwright-report/` to GitHub Pages. Pull requests run tests but do not deploy.
- The test suite navigates to external websites; those sites must be reachable from the CI runner.

When modifying the repo
- If you add dependencies, update `package-lock.json` with npm.
- Keep the GitHub Actions workflow and local npm test command aligned.

Examples agents can follow (concrete edits)
- Add a spec under `tests/` that imports Playwright helpers from `@playwright/test` and uses `test()` / `expect()`.

If anything above is unclear or you want more coverage (CI, monorepo layout, TypeScript test support), tell me which area to expand.
