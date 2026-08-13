# Copilot / AI agent instructions — Playwright test repo

Quick summary
- This repository is a minimal Playwright test workspace. The only test file present is [example.spec.js](example.spec.js) (currently empty). The VS Code debug config is at [.vscode/launch.json](.vscode/launch.json#L1-L20) and contains a Chrome launch entry.

Big picture (what an AI agent should know)
- Tests follow Playwright conventions (files named `*.spec.js`) and currently live in the repository root.
- No package.json or Playwright config file was found in the workspace root — the project appears not yet fully initialized.

How to run and debug (concrete commands)
- If a `package.json` exists, prefer using npm scripts; otherwise use the Playwright CLI via npx:

  - Install/playwright (if needed):

    npm init -y
    npm install --save-dev @playwright/test
    npx playwright install

  - Run all tests:

    npx playwright test

  - Run a single file (example):

    npx playwright test example.spec.js

  - Debug with the Playwright inspector:

    npx playwright test --debug example.spec.js

- The repository has a VS Code launch configuration named "Launch Chrome against localhost" at [.vscode/launch.json](.vscode/launch.json#L1-L20) which can be used to attach a Chrome browser when debugging a locally served app.

Project-specific patterns and conventions
- Test files: `*.spec.js` in repo root (example: [example.spec.js](example.spec.js)).
- No source or fixture directories detected; expect tests to create or import helpers at the repository root.

Integration points and missing items (observed)
- No `package.json`, `playwright.config.js`, or CI workflow files were present in the scanned workspace. An AI agent should not assume existing npm scripts or CI — verify before running.

When modifying the repo
- If you add dependencies or test runner setup, include a `package.json` and `playwright.config.*` and update this file with any project-specific commands.

Examples agents can follow (concrete edits)
- Create `package.json` and add a test script: `"test": "playwright test"`.
- Add a simple `example.spec.js` test that imports Playwright test helpers and uses `test()` / `expect()`.

If anything above is unclear or you want more coverage (CI, monorepo layout, TypeScript test support), tell me which area to expand.
