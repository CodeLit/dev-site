# Handoff — pending tasks (dev-site)

Portfolio is **live at https://codelit.app** and on `main` (GitLab + GitHub). Open items:

## 1. CV button — ✅ DONE

Live: **CV → PDF** button opens `/cv.pdf` (new tab). Source is the Google Doc
"Vladimir Gelunov — CV (Senior Fullstack, Payments)" exported to PDF and
committed at `public/cv.pdf`. To refresh: re-export the Doc → overwrite the file
→ push. `CV_URL = "/cv.pdf"` in `app/page.tsx`.

**Note — email mismatch:** the CV lists `vladimir@codelit.app`, the site uses
`codelits@gmail.com`. Pick one and make it consistent (and make sure the chosen
mailbox actually receives mail).

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

## 3. Remotes — ✅ GitHub is primary

`origin` = GitHub `CodeLit/dev-site` (public, deploy source). `gitlab` =
`clit/dev-site` kept as a cold backup only. `git push` goes straight to GitHub;
CF Workers Builds deploys from it, and direct commits paint the contribution
graph without lag.

Rationale for retiring GitLab here: dev-site is static and deploys via
GitHub → Cloudflare, so it never used GitLab's CI (unlike the langie ecosystem).
No mirror needed — one remote, no PAT to expire, no 5-min sync hop.

To push a backup to GitLab occasionally: `git push gitlab main`. Drop it
entirely if you don't want it: `git remote remove gitlab`.

## 4. Infisical — probably skip

This is a **static export** (`output: "export"`) with no backend, no runtime
env, and no build secrets — there is nothing for Infisical to inject. Connecting
it would just point `.infisical.json` at an empty project.

Only bother if you want consistency across repos: `infisical init` in the repo
root and leave the project empty. Otherwise leave it unconnected.
