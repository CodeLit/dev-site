# Handoff — pending tasks (dev-site)

Portfolio is live-ready and on `main` (GitLab + GitHub). Open items:

## 1. CV button

The "CV → PDF" button is off until the file exists (no dead links).

1. Drop the PDF at `public/cv.pdf` (rewrite the CV under the new positioning
   first — Senior Fullstack, payments/fintech; the old Vartus-IT CV is stale).
2. In `app/page.tsx`, set `const CV_URL = "/cv.pdf"`. The button appears
   automatically.

## 2. Deploy to codelit.app

The site is a static export (`output: "export"` → `out/`), so any static host
works. Recommended: **Cloudflare Pages** from the GitHub repo.

- Build command: `npm run build`
- Output dir: `out`
- Custom domain: `codelit.app` (already owned; `.win` redirects to it)

Then update `codelit.app` DNS to point at the chosen host. Verify the deployed
page loads fast and the contact links work before putting it on LinkedIn.

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
