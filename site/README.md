# brendonotto.com

Personal site for Brendon Otto. Static, one page, no client framework.

- **Astro 5** builds it. CSS is inlined, so the page is one HTML file plus fonts.
- **Content** lives in `src/data/profile.ts` and must match the profile in
  `../.claude/skills/about-brendon/references/profile.md`.
- **Design**: a drawing set. Vellum drafting paper in light mode, blueprint in dark,
  copper for the one thing to click. Archivo for display, IBM Plex Sans for body,
  IBM Plex Mono for labels. The hero is an exploded isometric view of four APIs
  lifting out of a monolith, computed in `src/components/ExplodedView.astro`.

## Writing a post

Add a Markdown file to `src/content/posts/`. The file name is the URL slug, so
`scratch-your-own-itch.md` is served at `/posts/scratch-your-own-itch/`. Frontmatter:

```yaml
---
title: Scratch your own itch
date: 2021-12-26
description: One sentence for the list page, RSS, and link previews.
tags: [rust, learning]
draft: false        # true hides it from the build (still visible in `npm run dev`)
updated: 2023-01-08 # optional
---
```

Images go in `public/images/` and are referenced as `/images/name.png`, or next to the
post if you prefer Astro's relative image handling. Code blocks are highlighted and follow
the light and dark theme. `/posts`, `/tags/<tag>`, and `/rss.xml` are generated from the
collection. The landing page's Writing section shows the six newest posts; until any post
exists it links to the current blog instead.

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

Cloudflare Workers with static assets, configured in `wrangler.jsonc`. Full setup, DNS, and
registrar steps are in `../docs/cloudflare-deploy.md`.

```bash
npm run deploy          # astro build && wrangler deploy (needs `npx wrangler login` once)
```

`.github/workflows/site.yml` does the same on every push to `main` that touches `site/`, using the
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets.

`public/_redirects` maps old URLs from the previous site, `public/_headers` sets caching and
security headers, and `src/pages/404.astro` is served for unknown paths.

## Migration notes

The six posts came from `brendonotto/brendonotto-astro` (`src/contents/`) with their original
slugs, so `/posts/<slug>/`, `/tags/<tag>/`, `/rss.xml`, and `/assets/images/*` URLs all still
resolve. Tags were lowercased to match the old site's tag URLs. `/search` was not carried over.

## Open items

- No headshot. The design does not need one, but the `og.png` could carry one later.
- Contact is LinkedIn and X only. Add email back in `src/data/profile.ts` if wanted.
