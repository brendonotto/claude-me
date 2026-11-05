# brendonotto.com

Personal site for Brendon Otto. Static, one page, no client framework.

- **Astro 5** builds it. CSS is inlined, so the page is one HTML file plus fonts.
- **Content** lives in `src/data/profile.ts` and must match the profile in
  `../.claude/skills/about-brendon/references/profile.md`.
- **Design**: a drawing set. Vellum drafting paper in light mode, blueprint in dark,
  copper for the one thing to click. Archivo for display, IBM Plex Sans for body,
  IBM Plex Mono for labels. The hero is an exploded isometric view of four APIs
  lifting out of a monolith, computed in `src/components/ExplodedView.astro`.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # -> dist/
npm run og         # regenerates public/og.png (needs Playwright + Chromium)
```

`scripts/shots.mjs <outDir>` screenshots the built site at desktop and phone widths in both
themes and reports horizontal overflow and console errors.

## Deploy

The output is a static `dist/` folder, so any static host works. Two good options:

1. **Cloudflare Pages**: connect the repo, set the root directory to `site`, build command
   `npm run build`, output `dist`. Point the `brendonotto.com` DNS at it.
2. **GitHub Pages**: `.github/workflows/site.yml` builds and deploys on pushes to `main`
   that touch `site/`. Enable Pages (Settings → Pages → Source: GitHub Actions) and add
   `brendonotto.com` as the custom domain.

## Open items

- Blog post links go to `/posts` until the real slugs are confirmed; the build environment
  could not reach brendonotto.com.
- No headshot. The design does not need one, but the `og.png` could carry one later.
- Contact is LinkedIn and X only. Add email back in `src/data/profile.ts` if wanted.
