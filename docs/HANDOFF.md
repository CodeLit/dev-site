# Handoff — pending tasks (dev-site)

Portfolio is **live at https://codelit.app** and on `main` (GitLab + GitHub). Open items:

## 1. CV button

The "CV → PDF" button is off until the file exists (no dead links).

1. Drop the PDF at `public/cv.pdf` (rewrite the CV under the new positioning
   first — Senior Fullstack, payments/fintech; the old Vartus-IT CV is stale).
2. In `app/page.tsx`, set `const CV_URL = "/cv.pdf"`. The button appears
   automatically.

## 2. Deploy to codelit.app — ✅ DONE

Live at **https://codelit.app** via **Cloudflare Workers Builds** (the merged
Pages/Workers Git flow), auto-deploy on every push to `main`.

- Source: Git-connected to GitHub `CodeLit/dev-site`, production branch `main`.
- Build command `npm run build`; deploy command `npx wrangler deploy`.
- `wrangler.jsonc` (committed) serves the static export as an assets-only Worker
  (`assets.directory = "./out"`), with `workers_dev` and `preview_urls` set to
  `false` so `codelit.app` is the single canonical URL. NB: these must stay in
  the config — a bare `wrangler deploy` re-enables `workers.dev` by default.
- Custom domain `codelit.app` attached in the Worker's **Domains** tab (had to
  delete the pre-existing apex `A` record first; CF then created its own record
  + TLS cert). Email DNS (MX/SPF/DKIM/DMARC) untouched.
- `www.codelit.app` → 301 → apex via a Redirect Rule (`https://www.*` →
  `https://${1}`) + a proxied `www` CNAME.
- Account `workers.dev` subdomain renamed `cyberwolfelite` → `codelit`.

Remaining (optional): enable zone **SSL/TLS → Edge Certificates → Always Use
HTTPS** so `http://www` upgrades to HTTPS before the redirect fires (otherwise
plain-HTTP `www` returns 523; HTTPS works fine).

## 3. GitHub auto-mirror (currently manual)

Remotes: `origin` = GitLab `clit/dev-site` (primary, private), `github` =
`CodeLit/dev-site` (public showcase). GitHub is a **manual** second remote —
updates need `git push github main` by hand.

To auto-sync on every push, set up a GitLab **push mirror**:

- https://gitlab.com/clit/dev-site/-/settings/repository → **Mirroring repositories**
- Git repository URL: `https://github.com/CodeLit/dev-site.git`
- Direction: **Push**
- Password: a GitHub PAT with `repo` scope (https://github.com/settings/tokens)

When ready for recruiters, flip the GitLab repo public too (or just rely on the
public GitHub mirror): `glab repo edit clit/dev-site --visibility public`.

## 4. Infisical — probably skip

This is a **static export** (`output: "export"`) with no backend, no runtime
env, and no build secrets — there is nothing for Infisical to inject. Connecting
it would just point `.infisical.json` at an empty project.

Only bother if you want consistency across repos: `infisical init` in the repo
root and leave the project empty. Otherwise leave it unconnected.
