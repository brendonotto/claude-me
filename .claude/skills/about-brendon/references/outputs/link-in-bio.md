# Output guide: link-in-bio landing page

A single page at brendonotto.com (or a subpath) that works like Linktree but looks like him. Mobile-first: most visitors tap through from a social profile on a phone.

## Content, top to bottom

1. **Name, title, location.** "Brendon Otto · Lead Staff Software Engineer · Minnesota, remote" (no city). Photo: his GitHub avatar, kept in the claude-me repo at `site/public/images/brendon.jpg`.
2. **Short bio** from the profile (~60 words). It should stand alone; many visitors read nothing else.
3. **Link buttons**, in this order unless told otherwise: Website/Blog, GitHub, LinkedIn, X, YouTube. No email button. Each button is full-width, large tap target, label plus the bare handle or domain. Use the exact URLs from the profile; the X handle is brendon**d**otto.
4. **Long bio**, collapsed behind a "More about me" toggle or placed below the links. ~350 words, from the profile. First person.
5. **What I'm open to**, one short paragraph: Staff/Principal roles first, project-based contracting second. Phrase it as an invitation, not a job ad.
6. **Footer**: copyright with the current year, pronouns he/him.

## Build notes (when producing HTML)

- One self-contained HTML file: inline CSS, no framework, no build step, system font stack or IBM Plex Mono via Google Fonts (his blog already uses Plex Mono).
- Respect `prefers-color-scheme`; define colors as CSS variables on `:root`.
- Max content width ~600px, 16px side gutters, buttons at least 48px tall.
- Semantic HTML: `<main>`, `<nav aria-label="Links">`, real `<a>` elements with `rel="me"` on social links so they double as identity verification.
- Add Open Graph and Twitter meta tags using the short bio as the description.
- No analytics, no third-party scripts.

## Things to avoid

- Marketing-style hero copy. The short bio is the hero.
- Icon fonts that need a CDN. Inline SVG or plain text labels are fine.
- Instagram. It's personal; leave it off unless he asks.
