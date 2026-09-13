# dev-site

Vladimir Gelunov's personal portfolio — a recruiter-facing, single-screen
landing built with Next.js 16 (App Router) + React 19 + Tailwind + TypeScript.
`output: "export"` produces a static build (`out/`) deployed as a Cloudflare
Workers assets-only site, auto-deployed on every push to `main` via Cloudflare
Workers Builds (Git-connected to GitHub `CodeLit/dev-site`). Live at
https://codelit.app.

@AGENTS.md

## Operations

- `task dev` — Next.js dev server
- `task build` — static export build → `out/`
- `task start` — serve the production build
- `task lint` / `task lint:fix` — ESLint

Deploy is automatic on push to `main` (Cloudflare Workers Builds); no manual
deploy task exists in this repo.

## By domain

- **Positioning, content policy, canonical links (domain, GitHub, LinkedIn,
  email), audience rules for what goes on the page**: `.claude/rules/portfolio.md`
  — read BEFORE editing `app/page.tsx` content or adding a project/case study.
- **Deploy setup, DNS, remotes, open items**: `docs/HANDOFF.md` — read BEFORE
  touching `wrangler.jsonc`, DNS/domain config, or git remotes. Note: this file
  says GitHub is primary (`origin`) and GitLab is a cold backup, while
  `.claude/rules/portfolio.md` still describes GitLab as origin/private —
  `docs/HANDOFF.md` is the more recent source, treat the portfolio.md remotes
  section as stale.

## Constraints

- This is a **fork of Next.js with breaking changes** vs. training data — read
  `node_modules/next/dist/docs/` before writing App Router code (see `AGENTS.md`).
- Static export only: no API routes, no server runtime, no env secrets at
  build time — Infisical is deliberately not connected (see `docs/HANDOFF.md` §4).
- `wrangler.jsonc`'s `workers_dev: false` / `preview_urls: false` must stay —
  a bare `wrangler deploy` re-enables `workers.dev` by default and creates a
  duplicate public hostname.
- All portfolio copy lives in consts at the top of `app/page.tsx` — edit there,
  not scattered through components.
