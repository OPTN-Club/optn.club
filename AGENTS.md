# AGENTS.md

Workspace memory for AI agents working on **optn.club** — a Vue 3 + Vite single-page app for Forza Motorsport / Horizon tune sharing.

## Project basics

- **Framework:** Vue 3 (script setup, Composition API), TypeScript, Vite, Tailwind CSS.
- **Tests:** Vitest with `--environment jsdom`. The test suite is small (≈5 tests) and lives next to source as `*.spec.ts`.
- **Lint:** ESLint v8 with the legacy `.eslintrc.js` config (NOT flat config). `npm run lint` runs `eslint --fix`.
- **Build:** `npm run build` runs `vue-tsc --noEmit && vite build`. Output goes to **`docs/`** (not `dist/`).
- **Repo host:** GitHub — `git@github.com:OPTN-Club/optn.club.git`.
- **Node:** Pinned to LTS via `.nvmrc`. Currently Node 24 ("Krypton").

## Deployment model

- **No CI build.** Builds are produced **locally** and the resulting `docs/` folder is committed and pushed. The remote auto-deploys from `docs/`.
- A standalone commit named `chore: rebuild app` (or similar) is the convention for the rebuilt artifacts. Keep build output in its own commit, separate from source/lint changes, so reviewers can ignore it.
- The deploy workflow file at `.github/workflows/static.yml` exists but does not currently build the app.

## Conventions

- **Commit style:** Conventional Commits (`chore(deps):`, `fix:`, `feat:`, `style(lint):`, etc.). Authors do tend to keep deps, lint autofix, and rebuild as **three separate commits** during a maintenance pass.
- **Branch naming:** `chore/...`, `fix/...`, `feat/...`. Date-stamped chore branches are accepted (e.g. `chore/deps-refresh-2026-04`).
- **Dependency upgrades policy:** "No breaking changes" is the explicit baseline. When in doubt, hold back majors that require config rewrites or source changes, and flag them as follow-up PRs.

## Held-back majors as of April 2026

These are intentionally NOT bumped in the latest dep refresh because each requires real migration work. Treat them as known follow-up PRs, not bugs:

- ESLint 9 (flat config) — cascades to ~7 plugins
- Tailwind 4 — Oxide engine, CSS-first config
- Express 5, Stylelint 16+, Vitest 4, vue-tsc 3, change-case 5

## AI-assistance disclosure

The maintainers are comfortable with AI-assisted PRs as long as they're disclosed. Standard footer used in PR descriptions:

```
*Authored with AI assistance. Every change was reviewed, verified locally with the project's lint/test/build pipeline, and is the maintainer's responsibility.*
```
