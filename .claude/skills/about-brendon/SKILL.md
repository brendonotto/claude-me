---
name: about-brendon
description: The single source of truth about Brendon Otto (Lead Staff Software Engineer, FMG Suite; White Bear Lake, MN) and how to write about him. Use this skill whenever a task involves representing Brendon to other people in any form - his GitHub profile README, a link-in-bio or landing page, his personal/professional website, a short or long bio, an "about me" section, a resume or CV, a LinkedIn summary, a cover letter, a speaker or author bio, a portfolio or case-study page, a conference or podcast intro, or an answer to "who is Brendon / what has he worked on." Also use it whenever Brendon shares a new fact about his career or life that should be remembered, and when any page or document needs his socials, title, location, or work history. Trigger even if the user just says "my bio", "my profile", "my site", "about me" or "my README" without naming the skill.
---

# About Brendon

This skill exists so Brendon's story is captured once and reused everywhere. Every bio, page, and README should agree with each other and with the facts in `references/profile.md`. Your job is to turn those facts into the requested artifact without inventing anything.

## Workflow

1. **Read `references/profile.md` in full** before writing anything. It is ~360 lines. The top half is curated copy (bios, taglines, experience, skills, values); the bottom half is raw interview notes and blog excerpts that back the curated copy. Quote from either, but the curated half is the canonical wording.
2. **Open the matching output guide** in `references/outputs/` and follow its structure:
   - `github-readme.md` - profile README for github.com/brendonotto
   - `link-in-bio.md` - single-page landing page (socials + short/long bio)
   - `personal-site.md` - multi-section professional website
   - `bios.md` - standalone short/long/third-person bios, LinkedIn "About", speaker bios, resume summaries
   If none fits, use `bios.md` as the baseline and adapt.
3. **Draft from the profile only.** Every employer, date, number, quote, project name, and hobby must trace to the profile. If the artifact needs something the profile lacks, write a visible `TODO:` placeholder and tell Brendon what is missing rather than filling the gap with something plausible. He will be reading this with a hiring manager's eyes, and one invented detail undermines everything else.
4. **Match the audience.** Ranked: (1) a hiring manager or CEO filling a Staff/Principal Engineer role, (2) a CTO looking for a contractor on a project, (3) professional peers. Lead with what those readers care about: scope of ownership, architecture decisions, measurable outcomes, how he works with people. Personal detail is seasoning, not the meal.
5. **When Brendon gives you a new fact**, append it to the Raw Interview Notes at the bottom of `references/profile.md` under a dated heading, then update the curated section it affects so the two halves stay in sync. `references/profile.md` inside this skill is the only copy; there is no separate working file to keep in sync.

## Voice

Brendon is a pragmatic engineer with a Communication Studies degree. He explains things with analogies, values plain language, and distrusts buzzwords. Write like he talks:

- **Concrete over adjectival.** "Decomposed a .NET monolith into team-owned containerized APIs" beats "passionate about scalable architecture." Never use passionate, rockstar, ninja, guru, synergy, or "results-driven."
- **Use his own phrases** where they fit. He actually says these: "software is a team sport," "performance is a feature," "disagree, decide, get in line," "eliminate process before automating it," "scratch your own itch," "create over consume." The VP of Engineering calling the Visual Editing release "super boring" is a line he likes.
- **First person** for his own pages (README, landing page, site). **Third person** for bios that other people will publish (speaker pages, author boxes) unless asked otherwise.
- **Pronouns:** he/him.
- **Light on emoji.** He opens his blog with a single 👋. One is fine; a row of them is not.
- **Sentence length:** short to medium. No marketing cadence, no exclamation points in professional copy.
- **The origin story is the hook.** Communication Studies degree, insurance sales, installation tech at Insite Software, taught himself Progress and then C#, earned the engineer role by shipping. Use it in anything longer than a paragraph. It explains both his systems thinking and his communication strength.

## Privacy boundaries

Public and fine to use: hobbies (3D printing, woodworking, movies, occasional video games, hiking, geocaching), Brazilian Jiu-Jitsu, the dog Oliver, "father and husband," White Bear Lake, MN. Do not go further: no names of family members, no street address, no employer internals beyond what the profile already states (project names like Montage and Visual Editing are fine; he chose to share them). Instagram is linked from his blog but is a personal account; leave it off professional pages unless he asks for it.

## Key facts (quick reference; the profile has the detail)

| Item | Value |
|---|---|
| Name / pronouns | Brendon Otto, he/him |
| Title | Lead Staff Software Engineer, Platforms/Architecture team, FMG Suite |
| Tenure | FMG since 2019 (Senior Eng → Lead Eng/team lead → Lead Staff, 2024–) |
| Location | White Bear Lake, Minnesota; remote |
| Core stack | C#, .NET (to .NET 10), React, SQL Server, AWS, GitHub Actions, Datadog |
| AI tooling | GitHub Copilot (org rollout), Claude Code, AGENTS.md / context engineering |
| Exploring | Rust, Elixir, OCaml |
| Headline work | Montage (monolith → team-owned .NET 10 APIs), AI adoption across 40+ engineers, Content/Management/Site APIs, Visual Editing, Knockout → React |
| Prior | ProAg Crop Insurance (2016–19), Epicor (2015–16), Insite Software (2011–15) |
| Education | B.A. Communication Studies, University of Minnesota, 2010 |
| Links | brendonotto.com · github.com/brendonotto · linkedin.com/in/brendon-otto · x.com/brendondotto · youtube.com/brendonotto · brendon@brendonotto.com |

Note the X handle has a "d": brendon**d**otto. The GitHub and YouTube handles do not.

## Known gaps (don't paper over these)

- Exact month of each FMG promotion; resume says Lead 2019–2024 and Lead Staff 2024–present.
- Business impact numbers for Visual Editing (retention, sales) are unknown.
- No external talks, podcasts, or open-source contributions to list. Don't imply any.
- The blog's own about page is stale ("12 years", "Lead Developer"); don't copy those figures.
