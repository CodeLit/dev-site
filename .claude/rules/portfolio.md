# dev-site — key facts

This repo is **Vladimir Gelunov's personal portfolio** — a recruiter-facing,
single-screen landing. Next.js (App Router) + React + Tailwind + TypeScript,
`output: "export"` → pure static, deploys to any static host.

It is the **React port of the personal landing that used to live in the
`make-site` repo** (a Laravel/Inertia/Vue app). `make-site` is now a **separate
SaaS product** (a website/landing generator) — its personal `Pages/`,
`Sections/`, `App/projects.js`, `lang/*` content is **legacy/frozen**. This repo
is the source of truth for the portfolio.

## Owner & positioning

- **Vladimir Gelunov**, Senior Fullstack Engineer. Target: **US remote, Senior
  Fullstack**, positioned as **fullstack + depth in payments/fintech**.
- Relocating to **Recife, Brazil (Sep 2026)** → strong overlap with US hours.
- Experience framing: **"5+ years"** overall, with **"3+ years in payments &
  fintech"** as the headline — lead with payments depth, not raw tenure.
- Ecommpay 2023–2026: **4 payment plugins from scratch** (Commercetools,
  Salesforce Commerce Cloud, PrestaShop, Drupal Commerce) + **lead dev** on the
  WooCommerce plugin (incl. React/TS WooCommerce Blocks).
- Stack to feature: **PHP, TypeScript, Node.js, React, Apex, Docker**.

## Canonical assets (single source of truth)

- **Domain:** `codelit.app` — NOT `codelit.win` (retired).
- **GitHub (showcase, recruiters google it):** https://github.com/CodeLit
- **GitLab (tooling):** namespace `clit` — dev-site origin is `gitlab.com/clit/dev-site`.
- **LinkedIn:** https://www.linkedin.com/in/codelit/
- **Email (public contact):** vladimir@codelit.app (Cloudflare Email Routing →
  gmail; codelits@gmail.com is the account/login). **Telegram:**
  https://t.me/Lit32 · **WhatsApp:** https://wa.me/lit32
- **CV:** to be rewritten under the new positioning; add `public/cv.pdf` then set
  `CV_URL` in `app/page.tsx`.

## Content policy (the durable rules)

- **Curated, not a résumé dump.** One screen, no blog, no "my journey". A
  recruiter has ~15 seconds.
- Portfolio = **3–4 payment/fintech cases + live project links only.**
- **Keep scope to the senior/payments story.** Don't pull in the old `make-site`
  content — the generic "What I do / What I know" bullet lists (Travis, CentOS 8,
  Lua, 1C, NeoLife game) and the ~13 Whitewill-era Moscow real-estate sites. It's
  off-message for a senior payments profile.
- **No Go / Lua / CSS as headline skills** — off-message. (Go may return later
  via a real SaaS MVP, not courses.)
- All content lives in the consts at the top of `app/page.tsx` — edit there.
- Never ship a dead link: unknown links (e.g. CV) stay off until the target
  exists.

## Who we build for (audience)

Two distinct readers, design for both — do not conflate them:

- **Recruiter / HR (first touch).** Googles `github.com/CodeLit` as a checkbox,
  then skims `codelit.app` for ~15 seconds. Does **not** read code. Optimise for
  the one-screen skim: positioning, payments cases, live links — instant to parse.
- **Tech lead (final stage).** The only reader who actually opens the repo and
  reads code. This is who clean commits, sane structure, and `docs/` are for.

Practical upshot: content/UX is tuned for the 15-second HR skim; code quality and
git hygiene are tuned for the tech lead. Neither audience reads a résumé dump.

## Distribution

- GitLab `clit/dev-site` is **private** (flip to public when ready).
- **Mirrored to GitHub `CodeLit/dev-site` (public)** so recruiters see it.
