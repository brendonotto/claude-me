# Output guide: personal professional site

A multi-section site (or multi-page, if asked) at brendonotto.com for a hiring manager, a CTO weighing a contract, or a peer who wants the longer story. Enough personal detail to feel human; a lot of professional detail. Think "the resume a person would actually enjoy reading."

## Pages / sections

1. **Home.** Name, title, one-line tagline (pick from the profile's tagline options or adapt), short bio, two calls to action: "Read my story" (→ About) and "See my work" (→ Experience). Links to socials in the header or footer.
2. **About.** The long bio, expanded if there's room: the origin story in full, the FMG arc (website team → team lead → Architecture team), what he's doing now, values/how he works, and one paragraph of personal life (family time, outdoors, Oliver, woodworking, 3D printing, BJJ, geocaching).
3. **Experience.** Reverse-chronological, one block per employer, one sub-block per title at FMG. Pull bullets straight from the profile's Work Experience section; trim to the strongest three to six per role. Keep dates exactly as the profile has them and keep the "Open Items" uncertainty out of the public copy (just use the resume dates).
4. **Projects / Selected work.** Cards for Montage, AI enablement program, API platform, Visual Editing, Knockout → React, WebForms migration, mobile app API. Each card: name, one-line problem, what he did, outcome. Use the "boring release" quote and the "no caching needed" fact; those are the memorable ones.
5. **Skills.** Grouped: daily stack, infrastructure & tooling, AI tooling, exploring. Omit legacy tech.
6. **Writing.** List the six blog posts with dates and one-line summaries, linking to brendonotto.com/posts/<slug>. Note that side projects live in Rust, Elixir, Phoenix, SvelteKit.
7. **Contact / Open to.** Staff or Principal roles; project-based contracting with a CTO; conversations with peers. LinkedIn and X as the channels; no email on the page.

## Build notes (when producing code)

- Prefer a static site. Astro is the natural choice because his blog already runs on it; plain HTML/CSS is fine for a first draft. Don't introduce a JavaScript framework for a content site. The built site lives in `site/` in the claude-me repo; its content file is `site/src/data/profile.ts`.
- Location on the page is "Minnesota, remote". Do not name the city.
- Same styling rules as the link-in-bio guide: CSS variables, light/dark, mobile-first, 16px gutters.
- Each page gets a `<title>` of the form "Page · Brendon Otto" and a meta description drawn from the profile.
- If the site includes the blog, keep the existing post slugs so old links don't break.

## Things to avoid

- Padding thin sections. If Writing has six posts, show six posts; don't add "coming soon."
- Testimonials or client logos; there are none in the profile.
- Copying the blog's stale about text ("12 years", "Lead Developer").
