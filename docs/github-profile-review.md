# GitHub profile review — github.com/brendonotto

Reviewed 2026-11-04 against the profile in `.claude/skills/about-brendon/references/profile.md`. The current README was last updated 2026-03-11 and is saved at `drafts/github-profile/README.current.md`. A full replacement is at `drafts/github-profile/README.md`.

## What the current README gets right

- Title is correct (lead staff software engineer), company is linked, pronouns are stated, X handle is correct.
- "Training developers and teams, and helping others be their best selves" is true and reflects the mentoring side.
- It is short, and short is right for a README.

## What a hiring manager or CTO can't learn from it

1. **Scope.** "Building out APIs, architecting new service" undersells what you own. The profile has three concrete, current things: Montage (monolith → team-owned .NET 10 containerized APIs), AI adoption across a 40+ engineer department, and the API conventions behind Content, Management, and Site APIs. None of them appear.
2. **The origin story.** Communication Studies → insurance sales → installation tech → Lead Staff Engineer is the most memorable thing about you and it's absent.
3. **Outcomes.** Nothing measurable. The README can carry at least: six product teams through Copilot workshops, 40+ engineers, no API has needed a data cache, the "super boring" release.
4. **How you work.** Your principles ("software is a team sport", "performance is a feature", "disagree, decide, get in line") are the kind of signal a staff-level interviewer looks for and they're easy to list.
5. **Links.** Only X is listed. Your website, LinkedIn, YouTube, and email are missing, and the website should be first since it's the hub.

## Specific edits, line by line

| Current | Problem | Suggested |
|---|---|---|
| `# Brendon Otto` + `### Hi there 👋` | Two headings for one greeting | One `# Hi, I'm Brendon 👋` |
| "in the Minneapolis area" | Fine, but White Bear Lake, MN plus "remote" says more to a hiring manager | "White Bear Lake, Minnesota (remote)" |
| "building out APIs, architecting new service, training developers and teams" | Generic; no project names, no scale | Replace with a "What I do now" list naming Montage, AI adoption across 40+ engineers, API standards, React/Material UI platform |
| 🔭 "currently working in C#, React & SQL" | Accurate but thin | Daily stack line: C#, .NET 10, ASP.NET Core, React, TypeScript, SQL Server, AWS, GitHub Actions, Datadog |
| 🤖 "Getting better everyday at AI and collaborating with agents" | Reads as a learner; you're the person who rolled AI out to the department | "Leading AI adoption across a 40+ engineer department: Copilot workshops for six product teams, AGENTS.md conventions, custom agents and skills" |
| 🌱 "currently learning Rust" / 🤔 "looking for help with Rust" | Rust has been a side-project language since 2021 (blog); "looking for help" reads junior | "Exploring: Rust, Elixir, OCaml" and drop the help line |
| 👯 "looking to collaborate on Rust, Elixir, React" | No public work backs it up, so it invites a question you can't answer yet | Drop, or replace with "Open to Staff/Principal roles and project-based contracting" once you're ready to say so publicly |
| 📫 "How to reach me: @brendondotto on X" | Only one channel, and X is the least professional | Links section: website, LinkedIn, X, YouTube, email |
| Emoji bullet template | It's GitHub's default; readers recognize it | Plain bold-lead bullets; keep the single 👋 |

## Things to leave out on purpose

- GitHub stats or contribution-graph widgets. Your public GitHub is thin and a widget would advertise that.
- Open-source, talks, podcasts. The profile has none, so don't imply any.
- The blog's stale figures ("12 years", "Lead Developer").

## Profile fields outside the README

These live in GitHub settings, not the repo. The public profile page wasn't fetchable from this session, so check each:

- **Bio field** (160 chars): "Lead Staff Software Engineer @ FMG Suite. Architecture, APIs, and AI enablement for .NET + React teams. Performance is a feature."
- **Company**: FMG Suite. **Location**: White Bear Lake, MN. **Website**: https://brendonotto.com. **Social accounts**: LinkedIn, X, YouTube.
- **Pinned repos**: pin anything public that backs the "exploring Rust/Elixir" line (the quotes app from the Axum post, the time-zone CLI from "Scratch your own itch") if those are public. If nothing is, leave pins empty rather than pinning forks.

## Decisions for you

- Whether to say "open to Staff/Principal roles and contracting" on a README your current employer can see. The draft says it only in the landing page's "What I'm open to" section, not in the README.
- Whether "co-founded the Architecture team" is accurate. The draft uses it in the long bio; the README draft avoids it.
