# Brendon Otto — Professional Profile (source of truth)

> Captured via interview on 2026-11-03/04 plus resume. This document feeds: GitHub profile README, link-in-bio landing page, and a personal professional site. The curated sections at the top are the canonical copy; the Raw Interview Notes at the bottom are the evidence behind them.

## Identity & Basics
- **Name:** Brendon Otto
- **Pronouns:** he/him
- **Email:** brendon@brendonotto.com
- **Location:** White Bear Lake, Minnesota (Twin Cities area). Works remote.
- **Current title / role:** Lead Staff Software Engineer, Platforms/Architecture team — FMG Suite (https://fmgsuite.com/) (2019–present)
- **Career length:** Software since 2011 (Insite Software); full-time engineer since ~2013.
- **Education:** University of Minnesota — B.A. Communication Studies, 2010

## One-liner / Tagline options
1. Lead Staff Engineer who breaks monoliths into APIs, standardizes how teams build, and gets engineering orgs productive with AI.
2. Architecture, APIs, and AI enablement for .NET + React product teams. Performance is a feature.
3. I take large systems apart, make them make sense, and help teams ship faster on top of them.

## Short Bio (~60 words)
Brendon Otto is a Lead Staff Software Engineer on the Architecture team at FMG Suite, where he sets engineering standards, decomposes a .NET monolith into team-owned APIs, and leads AI adoption across a 40+ engineer department. He got into software by taking a system apart to understand it, and has been doing that ever since. He lives in White Bear Lake, Minnesota.

## Long Bio (~350 words)
Brendon Otto is a Lead Staff Software Engineer at FMG Suite, where he has spent seven years moving from senior engineer on the website team, to team lead, to co-founding the company's Architecture team. Today that team guides the flagship product's architectural decisions and builds the foundations other product teams ship on.

His path into software was not a computer science degree. After a Communication Studies degree from the University of Minnesota and a stint in insurance sales, he took an installation technician job at Insite Software just to get inside a technology company. Doing Tier 2 and 3 support taught him how the whole system fit together, and volunteering for small customizations in Progress turned into a programming job earned by delivering projects on time and under budget. When the product was rebuilt in C#, he taught himself at night and designed the bridges between the two systems. That habit of getting into a system, breaking it down to its pieces, and making sense of it carried him through Epicor, ProAg Crop Insurance, and into FMG.

At FMG he ran the original React proofs of concept that replaced Knockout.js, chose Material UI as the component foundation, and later led the team that shipped Visual Editing, a large product and process change that a shortened timeline did not derail. The VP of Engineering called the release "super boring," which was the point. He started the Content API, helped lay the foundations for the Management API, built the Site API, and set the conventions behind them: RESTful design, resources and actions identified early, and performance tuned from day one so caching is a last resort. None of those APIs has needed a data cache yet.

For the last two years he has led FMG's AI adoption: day-and-a-half Copilot workshops for every product team, weekly department trainings, layered AGENTS.md conventions across repositories, and engineering standards developed with the VP so the company can measure the return on its AI investment. His current project, Montage, decouples the ASP.NET monolith into .NET 10 containerized APIs that each team owns and releases independently.

He believes software is a team sport, that performance is a feature, and that once a decision is made everyone gets in line. Outside work he 3D prints, does woodworking, trains Brazilian Jiu-Jitsu, and walks his dog Oliver.

## Professional Focus & Specialties
- **Architecture & modernization:** monolith → team-owned containerized .NET APIs (Montage), WebForms → React + APIs, Knockout → React.
- **API design & standards:** RESTful conventions, early resource/action modeling, performance-first design, caching as a gated exception.
- **AI enablement for engineering orgs:** Copilot and Claude Code rollout, per-team workshops, model-selection guidance, context engineering (AGENTS.md hierarchies, decision docs, custom agents/skills), ROI-focused standards.
- **Front-end platform:** React + Material UI design-system standardization so engineers don't make UX decisions ad hoc.
- **Technical leadership:** team lead experience, mentoring, cross-functional communication from product owners to C-suite.

## Work Experience

### FMG Suite — Remote — 2019–Present
**Lead Staff Software Engineer, Platforms/Architecture Team (2024–Present)**
- Co-founded the Architecture team (started as two engineers, now 6–7). Scope: engineering practices, CI/CD, .NET modernization, infrastructure R&D and guidance, project planning and technical assessment with product teams. Ran a team of Staff, QA Automation, and cloud engineers.
- Leads **Montage** (2026): decoupling the ASP.NET Windows monolith into .NET 10 containerized APIs, each owned and released by its team. Ends the shared central release train.
- Leads AI adoption across a 40+ engineer department: planned and ran all-day GitHub Copilot workshops for six product teams, weekly department trainings, token-efficiency and model-selection coaching, migration from Copilot instructions to layered AGENTS.md, custom agents and skills that encode FMG's products for AI-assisted review. Improved agent experience in the Playwright automation codebase.
- Collaborated with Microsoft to pilot the GitHub Copilot Upgrade Agent for .NET modernization.
- Works with the VP of Engineering on org-wide engineering standards tied to AI ROI; principle: eliminate process before automating it.
- Spent ~1 year leading the WebForms migration (ASP.NET Web Forms → React + APIs, skipping MVC), including managing an offshore team: tickets, code review, testing, releases.

**Lead Software Engineer, Website Team (2019–2024)**
- Promoted to team lead; managed projects and timelines with the product owner and agile delivery lead; mentored on engineering practices, testing, and team dynamics.
- POC'd, designed, and led delivery of **Visual Editing**: the CMS renders on the real website and edits that rendered view, replacing decoupled sectional editing. Built forward and backward migration scripts; shipped on a shortened timeline with a low-stress release.
- Pulled into a tiger team to build the API backend enabling FMG's mobile app, which led into the Architecture team.
- Started the Content API, helped set foundations for the Management API with the admin team, built the Site API for the website team, and set the API conventions used since.
- Broke the .NET Framework monolith into ASP.NET Core APIs.

**Senior Software Engineer, Website Team (Apr–Dec 2019)**
- Built advisor website product (e.g. "downloadables," non-marketing materials advisors use to run client meetings) in C#, Knockout.js, and SQL.
- Ran the React proof of concept (vs. a colleague's Vue POC) that became the platform's front-end direction: forms, API requests, and Material UI as the component framework. Most of the product has since moved from Knockout to React.
- Trained teams on async/await in C#; introduced integration tests with seed data; added caching around an expensive stored procedure.

### ProAg Crop Insurance — Maple Grove, MN — 2016–2019
**Software Engineer II**
- Built a customer-facing self-service crop insurance platform in C#, AngularJS, and SQL with unit and integration tests front and back.
- Shipped integrations with JPMorgan Chase and DocuSign.
- Improved mapping-application speed for policy data and reports by 90% for large policies.
- Trained seven developers on the internal shared library; created Visual Studio templates; interviewed and mentored new developers.
- Prototyped and shipped a forms-collection system for agents and an Office-based employee idea-collection tool.

### Epicor Software — Minneapolis, MN — 2015–2016
**Applications Developer**
- Championed and led the migration from Visual SourceSafe to Git; trained developers on it.
- Automated .NET builds with PowerShell; upgraded Crystal Reports integration for faster, more reliable printing.
- Shipped carrier integrations (UPS, FedEx, Eastern Connection, ACE exports); assisted Prophet 21 integration.
- Increased performance of the Progress-based product by 80% for DataServer customers.
- Trained a new development team in India on the C# and Progress codebases.

### Insite Software (Ship division acquired by Epicor) — Minneapolis, MN — 2011–2015
**Technical Account Manager (2013–2015)** — Wrote Progress code for customizations and base changes; scoped modifications with customers; delivered projects on time and under budget; trained customers; wrote internal and external documentation.
**Senior Installation Technician (2012–2013)** — Tested and validated custom code; managed go-lives and installations; Tier 2/3 troubleshooting; trained new hires; began writing Progress customizations.
**Installation Technician (2011–2012)** — Cut average install time from 3 hours to 1.5; recommended customer hardware/software; drove internal process improvements.

## Notable Projects
- **Montage (2026, FMG)** — Monolith → team-owned .NET 10 containerized APIs; independent release per team.
- **AI enablement program (2024–present, FMG)** — Workshops, trainings, AGENTS.md conventions, custom agents/skills, ROI standards across 40+ engineers and six teams.
- **WebForms migration (FMG)** — ASP.NET Web Forms → React + APIs, led with an offshore team.
- **Visual Editing (FMG)** — In-place rendered editing for the proprietary CMS; reversible migration; "boring" release.
- **API platform (FMG)** — Content, Management, and Site APIs plus the conventions behind them; no data caching needed to date.
- **React + Material UI adoption (FMG)** — Replaced Knockout.js; dropped Storybook once Figma understood Material UI natively.
- **Mobile app API (FMG)** — Tiger-team API backend that enabled FMG's mobile app.

## Skills & Technologies
- **Daily stack:** C#, .NET (through .NET 10), ASP.NET Core, React, TypeScript/JavaScript, Microsoft SQL Server, SQL.
- **Infra & tooling:** AWS, GitHub Actions, Datadog, Docker/containers, Git.
- **AI tooling:** GitHub Copilot (org rollout and administration), Claude Code, AGENTS.md / context engineering, custom agents and skills. Model-agnostic.
- **Data access & testing (resume):** Dapper, Entity Framework Core, MSTest, Moq, Jest, Playwright.
- **Exploring:** Rust, Elixir, OCaml (hobby projects in Rust and Elixir).
- **Legacy (not seeking):** VB.NET, AngularJS, Knockout.js, Progress, Crystal Reports.

## Education & Certifications
- University of Minnesota — B.A. Communication Studies, 2010.
- No certifications listed.

## Speaking, Writing, Community
- Blog: https://brendonotto.com — built with Astro (migrated from Next.js in Jan 2023). Six posts, 2021–2023, mostly hands-on write-ups from side projects plus a couple of reflective pieces:
  - *Hello world with Axum and Svelte* (Aug 2023) — Rust/Axum backend serving a static SvelteKit build; a quotes-collection side project.
  - *Set Docker Image to use on Fly* (Sep 2022) — pinning a base image in fly.toml for an Elixir 1.14 Phoenix app.
  - *Host Docker Registry on a Synology NAS* (Mar 2022) — private registry on a DS920+ for self-hosted projects.
  - *Scratch your own itch* (Dec 2021) — a Rust CLI for teammates' time zones (team spanned North and South America and Europe) that was ~80% of a work tool a day later; Rust vs. Ruby concurrency comparison with a colleague.
  - *Setting Up MDX with Next.js* (Sep 2021) — mdx-bundler setup for the original blog.
  - *Collector's Fallacy* (Jul 2021) — on information hoarding, creating over consuming, and learning by shipping rather than reading.
- Blog self-description: "I'm a father, husband and developer. Occasional wood worker, blogger and YouTuber."
- Blog about page: "I've been a software engineer for 12 years working mainly in .NET, SQL and JavaScript. Technologies I play with outside of work are Elixir, Rust and the occasional front end framework. When not in front of a computer I enjoy being outside taking hikes or geocaching with my family. I also enjoy making things with wood and 3D printing, balancing making things with my hands and digitally."
- Site links to Instagram (https://www.instagram.com/bdotto/) in addition to the socials below.
- Internal: weekly engineering department trainings and multi-team AI workshops at FMG.
- Volunteering: Feed My Starving Children, Chanhassen MN (2016).
- No external talks, podcasts, or open-source contributions to list.

## What I'm Looking For / Open To
- Undecided on exact shape; leaning toward what's most comfortable.
- Target audience, ranked: (1) hiring manager / CEO for a Staff or Principal Engineer role, (2) CTO looking for a contractor to supplement a project, (3) professional peers.
- Longer-term: open to going independent or building something of his own.
- Would want: modern front-end plus C#/.NET, Rust, Elixir, or OCaml on the back end. Not VB.NET, Angular, or Knockout.

## Personal (the "enough" part)
- Lives in White Bear Lake, Minnesota. Family time and the outdoors: hiking, walking the family dog, Oliver.
- Hobbies: 3D printing, woodworking, movies, the occasional video game. Likes balancing making things with his hands and digitally.
- Geocaching with family (from blog). Self-hosts side projects on a Synology NAS.
- Father and husband (per blog; keep family details to this level).
- Started Brazilian Jiu-Jitsu in the last year as a mental and physical outlet.
- Grew up with a computer from elementary school on; it has been a hobby ever since.

## Socials & Links
- Website / blog: https://brendonotto.com
- GitHub: https://github.com/brendonotto
- LinkedIn: https://www.linkedin.com/in/brendon-otto/
- X / Twitter: https://x.com/brendondotto
- YouTube: https://www.youtube.com/brendonotto (briefly attempted channel)
- Instagram: https://www.instagram.com/bdotto/ (linked from blog; confirm whether it belongs on the professional page)
- Email: brendon@brendonotto.com

## Values / How I Work
- **Software is a team sport.** Best in low-ego environments where people are intrinsically motivated, eager to learn, and don't care whose idea it was.
- **Performance is a feature.** Working well means working fast. Tune first; caching needs approval.
- **Pragmatic.** Software exists to meet a goal or a customer need. Whitespace and linting debates don't build a better product.
- **Eliminate process before automating it.** Don't spend tokens on work that shouldn't exist.
- **Disagree, decide, get in line.** Argue the technical case fully, then commit to the decision. No back-channel relitigating, on either side.
- **Socratic mentoring.** Ask questions, match the learner's style, use analogies, and give people room to run experiments. Earned experience beats being told.
- **Create over consume.** From the "Collector's Fallacy" post: shipping code teaches faster than reading about it; stopped trying to track every front-end framework and learns the one the job needs.
- **Scratch your own itch.** Build tools for your own problems; they tend to become solutions for someone else's.
- **Communication is the job.** The Communication Studies degree is used daily: translating technical concepts for product owners, customers, and executives.
- **Struggles with:** dragging an unwilling team forward; siloed teams that don't collaborate.

## Open Items / Follow-ups
- Blog's about page says "12 years" as a software engineer and title "Lead Developer" — both stale; update the site when the new one is built.
- Decide whether Instagram belongs on the professional landing page.
- Confirm exact promotion dates (team lead, architecture team) — resume says Lead 2019–2024, Lead Staff 2024–present.
- Optional: a specific mentoring success story, and any retention/sales impact numbers for Visual Editing.

---
## Raw Interview Notes
_(verbatim-ish answers, appended as we go)_

### Q1 — Current role / location
- FMG since 2019 (~7 yrs). Title: Lead Staff Engineer on the Architecture team.
- Architecture team guides FMG's flagship product on architectural decisions and enables other product teams to be successful — building foundations he build product on top of.
- Lives in White Bear Lake, MN.
- Open to going independent / building something for himself in the near future.

### Q2 — Career progression at FMG
**Senior Software Engineer, Website team (2019–?)**
- Built product for advisor websites, e.g. "downloadables" — non-marketing materials advisors use to run client meetings.
- Piloted new front-end tech. Platform was Knockout when he joined; he and a colleague each took a framework (he: React, colleague: Vue) to experiment with integrating into the platform. React won; most of the product has since migrated from Knockout to React.
- Did the original React POCs: figured out forms, API requests and other core front-end problems; chose Material UI as the component framework to build on.

**Team Lead, Website team**
- Promoted to team lead; coding became a minority of the day job, running the team was the priority.
- Team built **Visual Editing** — product renders on the actual website and returns that rendered view, replacing the decoupled sectional editing that existed before.

**Tiger team → Architecture team (Lead Staff Engineer)**
- Pulled into a tiger team to build an API to enable a mobile app; that transitioned him to the Architecture team.
- Architecture team started as him + one other dev; now 6–7 people.
- Current focus: AI adoption and consistency across the FMG product; setting architecture and engineering standards across the department.
- Spent ~1 year on a **Web Forms migration** project: getting off ASP.NET Web Forms, leaping directly to React + APIs (deliberately skipping MVC).
- 2026: project **Montage** — decoupling the ASP.NET Windows monolith into .NET 10 containerized APIs, each owned by a team. No more shared central repo/release train; each team has its own API it can iterate on and release quickly.

### Q3 — Biggest wins / impact
**Visual Editing**
- Strategic goal: keep the product competitive with other website-builder platforms (pre-AI-boom). Framed as a "shore up the product" initiative.
- Context: an acquisition brought in similar tech; in practice the acquisition provided the roadmap and the team built a competing/equivalent capability in-house. Worked really well.
- Built forward *and* backward migration scripts so the release could roll forward or roll back — gave the team a lot of confidence.
- Release outcome: the VP of Engineering called the release "super boring" despite a large audience watching — well prepared, well executed, shipped even after the timeline was shortened. Measurable impact: a low-stress release for a very large change to both product and process.
- Retention / sales impact: unknown to him.

**React + Material UI standardization**
- UI built faster and more consistently across the platform.
- Started with Storybook but dropped it: Figma improved to natively understand Material UI, so he skipped that dependency.
- Result: consistent UI and clear expectations for how interfaces are built. Product feels more holistic; engineers aren't making UI/UX decisions ad hoc — the path is already decided, with clear patterns forward.

**APIs (biggest portion of his impact)**
- When he joined there was a single, internal-only API.
- Started **Content API**; helped set foundations for **Management API** with the admin team; built **Site API** for the website team.
- Key decisions / standards he pushed:
  - RESTful conventions; teams identify his resources and actions early.
  - Talk about performance from day one. Caching is *not* the default — reaching for cache requires approval first, because caching complicates *what* gets cached, *when*, and *by whom*.
  - Instead engineers start by tuning the API itself: return just the right data for the caller, avoid overfetching, avoid unnecessary joins.
- Result: APIs that perform really well, more consistent product/service surface, and **no caching has been needed for any data access in any API to date**.

### Q4 — AI adoption leadership at FMG (~2 years)
**Kickoff: per-team workshops (started ~2024)**
- Ran a ~1.5-day workshop with each team: got everyone's tooling set up (FMG is on GitHub → started with GitHub Copilot), wrote initial standards, and expanded people's sense of what's now possible when building product with AI.
- Set up Copilot instructions per repository — Copilot could draft him, but he had teams review him and own keeping him current as decisions are made.

**Ongoing enablement**
- Keeps teams current on model updates and which models are available in Copilot.
- After Copilot's pricing change, coached people on token efficiency — e.g. don't use a frontier model for a git commit.
- Favorite framing for model selection: "do you need a high schooler, a college student, or a PhD for this task?" — has landed well with both engineers and automation engineers.

**Context engineering / repo knowledge management (intermediate → advanced)**
- Migrating from Copilot-instructions to AGENTS.md as the team adopts other AI harnesses/platforms.
- Layered AGENTS.md pattern: root file for universal project rules; a separate one at the test root for testing conventions/expectations vs. source-code conventions.
- Breaking decisions out into independent documents that get pulled in only when relevant, instead of polluting context in one giant agents file.
- Building agents and skills that encapsulate FMG's products and users, so AI can review a change and answer "is this workflow broken?" far faster than browser automation.
- Worked with the automation team on his Playwright codebase to improve agent experience: resolved conflicting definitions/guidelines, made decisions explicit and clear.

**Org-level standards (with the VP of Engineering)**
- Rolling out engineering standards across the org so the company can measure returns on its AI investment.
- Principle: eliminate process before automating it — "I wouldn't want to spend tokens on something we shouldn't be doing in the first place."

### Q5 — Pre-FMG career, education (from resume, 2026-11-03)
**Resume-stated FMG title breakdown (dates to reconcile with Q2 narrative):**
- Lead Staff Software Engineer, FMG Suite (Remote), 2024–Present
  - Piloted GitHub Copilot and other AI tools; trained/educated the engineering department (40+ engineers).
  - Ran weekly department trainings on Copilot and AI advancements; planned/led all-day Copilot workshops for six product teams.
  - Leads the Platforms/Architecture team: engineering practices, CI/CD, .NET modernization, project management, infrastructure R&D and guidance.
  - Collaborated with Microsoft to pilot the GitHub Copilot Upgrade Agent for .NET modernization.
  - Pairs with product teams on infrastructure decisions, project planning, technical assessment.
  - Ran a team of Staff, QA Automation, and cloud engineers.
- Lead Software Engineer, 2019–2024
  - Managed projects/timelines with product owner and agile delivery lead; weekly dept training; mentored on engineering practices, testing, team dynamics.
  - Researched Knockout.js replacements, implemented React; built API infra/backend for mobile app; broke .NET Framework monolith into ASP.NET Core APIs.
  - Managed WebForms migration with an offshore team (tickets, code review, testing, releases).
  - POC'd, designed, implemented the visual website-editing paradigm for the proprietary CMS.
- Senior Software Engineer, Apr–Dec 2019
  - C#, Knockout.js, SQL. Trained teams on async/await; integration tests with seed data; caching around an expensive stored procedure.

**ProAg Crop Insurance** — Software Engineer II, Maple Grove MN, 2016–2019
- C#, AngularJS, SQL; unit + integration tests front and back; code review at every check-in.
- Shipped integrations with JPMorgan Chase and DocuSign.
- Trained 7 developers on internal shared library; created/documented Visual Studio templates; interviewed and mentored new devs.
- Prototyped/delivered an Office-based employee idea-collection solution; built and shipped a forms-collection system for agents.
- Improved mapping-application speed for policy data/reports by 90% for large policies.

**Epicor Software** — Applications Developer, Minneapolis MN, 2015–2016
- Championed migration from Visual SourceSafe to Git; trained 3 devs on Git.
- Automated .NET builds with PowerShell; upgraded Crystal Reports (faster, more reliable printing).
- Integrations: Eastern Connection, UPS, ACE (exports), FedEx; assisted Prophet 21 distribution integration.
- Increased performance of Progress-based product by 80% for DataServer customers.
- Trained new dev team in India on C# and Progress codebases.

**Insite Software** (Ship division acquired by Epicor), Minneapolis MN, 2011–2015
- Technical Account Manager, 2013–2015: wrote Progress code for retrofits/customizations/base changes; scoped mods with customers; delivered on time and under budget, driving revenue; trained customers on Crystal Reports; wrote internal/external docs; moved Professional Services onto OneNote.
- Senior Installation Technician, 2012–2013: tested custom code pre-delivery; troubleshot client issues; managed go-lives/installs; trained new hires; started small Progress customizations.
- Installation Technician, 2011–2012: cut average install time from 3h to 1.5h; recommended hardware/software; supported ticket handling; drove internal process improvements.

**Education:** University of Minnesota — B.A. Communication Studies, 2010.
**Volunteering:** Feed My Starving Children, Chanhassen MN, 2016.

**Resume skills line:** Expertise: C#, SQL, Git, JavaScript, React, ASP.NET (Core), Dapper, Entity Framework (Core), AngularJS, VB.NET, TFS. Proficient: MS Test, Moq, Jest, Jasmine, Elixir, Python, NHibernate. Prior: SVN, Progress, Crystal Reports, Active Reports.

**Note:** brendonotto.com (blog) could not be fetched — host not allowed by this session's network policy. Revisit as source material once allowed.

### Q6 — Origin story & the communications background
- Always wanted to work for a technology company. Left **insurance sales** and took an installation technician job at Insite Software just to get a foot in the door and see if he'd enjoy it.
- Computers were a lifelong hobby; grew up with access to a computer from elementary school through high school.
- Took a few C++ courses in college — didn't excite him. At Insite the language was **Progress**, which reads much more like English; he realized he had a knack for breaking operations down into steps.
- Worked his way in: volunteered for small modifications to offload senior engineers, investigated how the system fit together (customizations, database connections), and grew responsibilities until he earned the programmer role by delivering several projects, some on time and under budget.
- As an install tech he was also Tier 2/3 support — printer connectivity, broken modifications, debugging, bad data retrieval — so he understood the whole system before he ever wrote production code.
- When Insite started rebuilding the product in C#, he took online courses, watched videos, and wrote his own C# programs at home to transition. Mapped out how to bridge the Progress and C# systems to reuse expensive third-party certifications (FedEx, UPS) across both languages.
- Through-line: get into a system, break it down to its pieces, make sense of it. That carried him from Epicor → ProAg (customer-facing self-service crop insurance platform) → FMG Suite.
- Loves getting computers to do what he wants while thinking about how the pieces come together.
- For many years learned a new programming language every year to varying depth to stay sharp; that has fallen off with AI.

**Communication Studies degree — used every day**
- Explaining technical concepts to non-technical audiences: shippers, insured farmers, FMG product owners.
- Building analogies, translating what's happening and how; written and oral communication as a lead; running projects and breaking down steps so nothing is omitted.
- Classes on building arguments, explaining concepts, and using analogy enabled the non-technical half of his career, while technical curiosity drove the other half.
- "Software is a team sport." Communicating across roles, teams, stakeholders, up through VPs and C-suite — a skill that's *more* valuable in the age of AI, not less.

### Q7 — Links & public footprint
- Little professional work online outside employers. Blog at brendonotto.com has a few posts.
- GitHub: github.com/brendonotto · X: x.com/brendondotto (note the "d" in the handle) · YouTube: youtube.com/brendonotto (briefly tried a channel) · LinkedIn: linkedin.com/in/brendon-otto/
- No talks, podcasts, OSS, or community involvement mentioned.

### Q8 — Independent / audience
- Honestly unsure what "independent" looks like yet. Leans toward comfort: a Staff/Principal role hired by a CEO/hiring manager, or contracting for a CTO on a project.
- Audience ranking: hiring manager > contracting > peers.

### Q9 — How he works / engineering beliefs
- "Software engineering is a team sport." Every team works together to build something cool.
- Best with people genuinely interested in learning, in **low-ego environments** that discuss problems and solutions and care little about attribution (whose idea, whose problem, whose solution).
- Core tenets:
  - **Performance is a feature.** Working well means working fast.
  - **Pragmatic.** Software exists to achieve a goal or fulfill a customer need. Debates about whitespace, formatting, and linting go only so far — he don't build a better product and tend to be something engineers argue about instead of solving customer problems.
  - (Earlier) **Performance before caching.** Tune the API first; caching requires approval.
  - (Earlier) **Eliminate process before automating it.**
- Best environment: people eager to do stuff, want to do a good job, intrinsically motivated.
- Would struggle: having to drag a team forward, or siloed teams that don't want to collaborate or learn from each other.
- *(Not yet answered: how he handles disagreement with a team/VP; mentoring style — follow up.)*

### Q10 — Disagreement & mentoring
**Disagreement example (with Director of Engineering)**
- Director pushed for all content types to live in one API. Brendon (with another engineer on his team) argued each API should own its own data structure and just send compliance cases into the content/compliance API — more scalable, and avoids turning the content API into a new monolith / central authority for everything.
- He lost. Once decided, he let it go and stayed productive in the chosen system.
- Attitude: "Disagree, have the technical discussion, hash it out, and once it's decided, everybody gets in line." No undermining after the fact, no steering back toward his original direction behind the scenes. Applies to whichever side he's on.

**Mentoring style**
- Largely **Socratic**: ask questions, help people discover problems, lead him to solutions he can reach themselves.
- Figures out each person's learning style — asks whether he learn best hands-on, or by reading/listening/watching first — and cross-checks with how he's observed him learn. Then provides what he need.
- Leans on **analogies** for concepts and higher-order ideas, **hands-on experience** to lock it in.
- Gives space to experiment: if someone proposes a different approach, he doesn't say "do it my way." He try it; whichever of him is right gets proven, and he internalize the trade-offs he may have considered but not shared.
- Belief: being told something has some impact, but earned, hands-on experience internalizes trade-offs far more and people learn faster.
- *(No specific "engineer I'm proud of" example given.)*

### Q11 — Personal (all OK to share publicly)
- Hobbies: 3D printing, woodworking, movies, the occasional video game. Likes balancing making things with his hands and digitally.
- Geocaching with family (from blog). Self-hosts side projects on a Synology NAS.
- Father and husband (per blog; keep family details to this level).
- Lots of family time; outdoors — hiking, walking the family dog **Oliver**.
- Started **Brazilian Jiu-Jitsu** in the last year as both a mental and physical outlet.
- *(Pronouns not stated — confirm. Doc currently uses he/him based on nothing; switch to whatever he confirms.)*

### Q12 — Current skills snapshot
- **Core stack (daily):** SQL (Microsoft SQL Server), C#, .NET, React. CI/CD: GitHub Actions. Cloud: AWS. Monitoring/alerting: Datadog.
- **AI tooling:** heavily invested in GitHub Copilot at work; Claude Code both at work and outside. Not opinionated about specific models.
- Worked on a "connect" layer at work — an API surface, not directly AI-related.
- **Exploring outside work:** Rust and Elixir (hobby projects in both); OCaml on the side.
  - Rust: no runtime, lower level, "a bunch of programming history built in" — trade-offs of many languages compiled into one.
  - Elixir: functional + actor model; bends a different part of the brain; heavy runtime (BEAM/OTP) but lots of benefits.
  - OCaml: strong types from the Rust side + functional/piping from the Elixir side; has a runtime but lighter than BEAM/OTP. An interesting in-between.
- **Would leave off / not work in again:** VB.NET, Angular(JS), Knockout. Happy with any modern front-end and any of the back-end languages above.
- **Pronouns:** he/him.

### Blog source material — brendonotto.com (fetched 2026-11-04)
- Site: Astro (moved from Next.js 2023-01-08), IBM Plex Mono, copyright 2023. Pages: /, /about, /posts, /tags, /search, /rss.xml.
- Home intro: "Hi 👋 I'm Brendon! I'm a father, husband and developer. Occassional wood worker, blogger and YouTuber. I am a Lead Developer with FMG Suite."
- Social links on site: GitHub, Twitter (brendondotto), Instagram (bdotto), LinkedIn, YouTube.
- About page: 12 years as a software engineer in .NET, SQL, JavaScript; plays with Elixir, Rust, occasional front-end framework; hikes and geocaches with family; woodworking and 3D printing — "balancing making things with my hands and digitally."
- Tags: pkm, learning, docker, nas, rust, axum, svelte, fly, elixir, nextjs, mdx.
- Posts (newest first):
  1. **Hello world with Axum and Svelte** — 2023-08-21. Rust/Axum + SvelteKit static adapter; quotes-collection app idea (wants an API to show quotes in the site footer; Readwise subscriber); prefers backend work; interested in Leptos; dislikes running JS on the server.
  2. **Set Docker Image to use on Fly** — 2022-09-09. New Phoenix app on Elixir 1.14; Fly.io build failed on a missing hexpm image; fix via `[build] image = ...` in fly.toml.
  3. **Host Docker Registry on a Synology NAS** — 2022-03-06. DS920+; insecure-registries config client-side and in dockerd.json on the NAS; restart via systemctl/synopkgctl; Portainer.
  4. **Scratch your own itch** — 2021-12-26. Built a Rust console app hitting a time-zone API concurrently to respect teammates' hours (team across North America, Europe, South America). Next day, reused it to test DNS resolution for a batch of migrated domains at work. Colleague did a Ruby version; Rust was ~2x faster but Ruby got close surprisingly quickly. Lesson: solving your own problems often pre-solves work problems.
  5. **Setting Up MDX with Next.js** — 2021-09-11. Next.js TypeScript blog template + mdx-bundler/esbuild, replacing gray-matter/remark. Updated 2023 to note the move to Astro.
  6. **Collector's Fallacy** — 2021-07-11. Self-described information hoarder (ebooks, articles, tabs, Udemy courses, unused electronics/tools). Inspired by a Shu Omi video. Resolutions: let go of "I'll get to it all"; stop tracking all three big JS frameworks, learn the one the job needs; create over consume because experience sticks better than words on a page.

### GitHub profile README as of 2026-03-11 (fetched 2026-11-04, for reference)
- Repo brendonotto/brendonotto, single README.md. Opens "Hi there 👋", describes him as "a lead staff software engineer in the Minneapolis area working for FMG Suite" doing .NET APIs, architecting services, training developers and teams, "helping others be their best selves."
- Emoji checklist (GitHub's default template): working in C#, React & SQL; getting better at AI and collaborating with agents; learning Rust; wants to collaborate on Rust, Elixir, React; "looking for help with Rust"; reach via @brendondotto on X; pronouns he/him.
- Links to https://fmgsuite.com/ — so the company URL is fine to use publicly.
