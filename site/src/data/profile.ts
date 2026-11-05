// Content for brendonotto.com. Every fact here traces to
// .claude/skills/about-brendon/references/profile.md. Edit that first, then this.

export const identity = {
  name: 'Brendon Otto',
  first: 'Brendon',
  pronouns: 'he/him',
  title: 'Lead Staff Software Engineer',
  team: 'Architecture team',
  company: 'FMG Suite',
  companyUrl: 'https://fmgsuite.com/',
  location: 'Minnesota, remote',
  tagline: 'I take large systems apart, make them make sense, and help teams ship faster on top of them.',
  shortBio:
    "I'm a Lead Staff Software Engineer on the Architecture team at FMG Suite, where I set engineering standards, decompose a .NET monolith into team-owned APIs, and lead AI adoption across a 40+ engineer department. I got into software by taking a system apart to understand it, and I've been doing that ever since.",
  description:
    'Brendon Otto is a Lead Staff Software Engineer on the Architecture team at FMG Suite: monolith decomposition, API standards, and AI adoption across a 40+ engineer department. Minnesota, remote.',
  url: 'https://brendonotto.com',
};

export const links = [
  { label: 'Blog', handle: 'brendonotto.com/posts', href: 'https://brendonotto.com/posts' },
  { label: 'GitHub', handle: 'brendonotto', href: 'https://github.com/brendonotto' },
  { label: 'LinkedIn', handle: 'brendon-otto', href: 'https://www.linkedin.com/in/brendon-otto/' },
  { label: 'X', handle: '@brendondotto', href: 'https://x.com/brendondotto' },
  { label: 'YouTube', handle: 'brendonotto', href: 'https://www.youtube.com/brendonotto' },
];

// What I do now. Ordered by scope.
export const now = [
  {
    code: 'MONTAGE',
    title: 'Montage',
    body:
      'Leading the decoupling of our ASP.NET monolith into .NET 10 containerized APIs, each owned and released by its own team. It ends the shared central release train.',
  },
  {
    code: 'AI-ADOPT',
    title: 'AI adoption across 40+ engineers',
    body:
      'Day-and-a-half GitHub Copilot workshops for six product teams, weekly department trainings, layered AGENTS.md conventions across repositories, and custom agents and skills that encode our products for AI-assisted review. Piloted the GitHub Copilot Upgrade Agent for .NET modernization with Microsoft.',
  },
  {
    code: 'STANDARDS',
    title: 'Engineering standards',
    body:
      'Working with the VP of Engineering on org-wide standards tied to the return on our AI investment. Eliminate process before automating it.',
  },
  {
    code: 'API-PLAT',
    title: 'API platform',
    body:
      'Started the Content API, helped lay the foundations for the Management API, built the Site API, and set the conventions behind them. None of them has needed a data cache yet.',
  },
];

export const story = [
  "I didn't come in through a computer science degree. After a Communication Studies degree from the University of Minnesota and a stint in insurance sales, I took an installation technician job at Insite Software just to get inside a technology company.",
  'Tier 2 and 3 support taught me how the whole system fit together: printer connectivity, broken customizations, bad data. Volunteering for small Progress customizations to offload the senior engineers turned into a programming job, earned by delivering projects on time and under budget. When the product was rebuilt in C#, I taught myself at night and designed the bridges between the two systems so expensive carrier certifications could be reused across both.',
  'That habit of getting into a system, breaking it down to its pieces, and making sense of it carried me through Epicor and ProAg Crop Insurance and into FMG, where I went from senior engineer on the website team, to team lead, to co-founding the Architecture team that now guides the flagship product.',
  'I still use the communication degree every day. Most of the job at this level is translating: between engineers and product owners, between a technical trade-off and a business decision, between what a system does and what a VP needs to know about it.',
];

export const experience = [
  {
    company: 'FMG Suite',
    where: 'Remote',
    span: '2019 – present',
    roles: [
      {
        title: 'Lead Staff Software Engineer, Architecture team',
        span: '2024 – present',
        bullets: [
          'Co-founded the Architecture team, now six to seven engineers. Scope: engineering practices, CI/CD, .NET modernization, infrastructure R&D, and technical assessment with product teams.',
          'Lead Montage, decoupling the ASP.NET monolith into team-owned .NET 10 containerized APIs.',
          'Lead AI adoption across a 40+ engineer department: workshops for six product teams, weekly trainings, AGENTS.md conventions, custom agents and skills.',
          'Spent about a year leading the WebForms migration straight to React and APIs, skipping MVC, with an offshore team.',
        ],
      },
      {
        title: 'Lead Software Engineer, Website team',
        span: '2019 – 2024',
        bullets: [
          'Designed and led delivery of Visual Editing: the CMS renders on the real website and edits that view. Forward and backward migration scripts made the release a non-event on a shortened timeline.',
          'Started the Content API, helped set the foundations for the Management API, built the Site API, and set the conventions used since.',
          'Pulled into the tiger team that built the API backend for the mobile app, which led into the Architecture team.',
        ],
      },
      {
        title: 'Senior Software Engineer, Website team',
        span: '2019',
        bullets: [
          'Ran the React proof of concept that replaced Knockout.js and chose Material UI as the component foundation.',
          'Trained teams on async/await in C#, introduced integration tests with seed data.',
        ],
      },
    ],
  },
  {
    company: 'ProAg Crop Insurance',
    where: 'Maple Grove, MN',
    span: '2016 – 2019',
    roles: [
      {
        title: 'Software Engineer II',
        span: '',
        bullets: [
          'Built a customer-facing self-service crop insurance platform in C#, AngularJS, and SQL, tested front and back.',
          'Shipped integrations with JPMorgan Chase and DocuSign.',
          'Made the mapping application 90% faster for large policies. Trained seven developers on the shared library.',
        ],
      },
    ],
  },
  {
    company: 'Epicor Software',
    where: 'Minneapolis, MN',
    span: '2015 – 2016',
    roles: [
      {
        title: 'Applications Developer',
        span: '',
        bullets: [
          'Led the migration from Visual SourceSafe to Git and automated .NET builds with PowerShell.',
          'Shipped UPS, FedEx, and Eastern Connection carrier integrations. Made the Progress-based product 80% faster for DataServer customers.',
        ],
      },
    ],
  },
  {
    company: 'Insite Software',
    where: 'Minneapolis, MN',
    span: '2011 – 2015',
    roles: [
      {
        title: 'Installation Technician → Technical Account Manager',
        span: '',
        bullets: [
          'Cut average install time from three hours to an hour and a half.',
          'Moved from Tier 2/3 support into writing Progress customizations, then into scoping and delivering them on time and under budget.',
        ],
      },
    ],
  },
];

export const work = [
  {
    code: 'P-01',
    name: 'Montage',
    problem: 'One ASP.NET monolith, one shared release train, every team waiting on everyone else.',
    did: 'Leading the decomposition into .NET 10 containerized APIs, each owned and released by its team.',
    outcome: 'Independent releases per team. In progress, 2026.',
  },
  {
    code: 'P-02',
    name: 'AI enablement program',
    problem: 'A 40+ engineer department with new tools and no shared way of using them.',
    did: 'Per-team workshops, weekly trainings, layered AGENTS.md, custom agents and skills, model-selection coaching, and ROI standards with the VP.',
    outcome: 'Six product teams onboarded. Standards the company can measure against.',
  },
  {
    code: 'P-03',
    name: 'API platform',
    problem: 'One internal-only API when I joined.',
    did: 'Started the Content API, laid foundations for the Management API, built the Site API. RESTful, resources named early, performance tuned from day one, caching gated behind approval.',
    outcome: 'No API has needed a data cache yet.',
  },
  {
    code: 'P-04',
    name: 'Visual Editing',
    problem: 'A CMS that edited pages in decoupled sections, far from what customers saw.',
    did: 'Proved, designed, and led the shift to editing the rendered site in place, with forward and backward migration scripts.',
    outcome: 'Shipped on a shortened timeline. The VP of Engineering called the release "super boring."',
  },
  {
    code: 'P-05',
    name: 'Knockout to React',
    problem: 'An aging Knockout.js front end and no agreed path forward.',
    did: 'Ran the React proof of concept against a colleague’s Vue one. Chose Material UI as the component foundation.',
    outcome: 'Most of the product is now React. Engineers stopped making UX decisions ad hoc.',
  },
  {
    code: 'P-06',
    name: 'WebForms migration',
    problem: 'ASP.NET Web Forms pages that needed to go.',
    did: 'Led about a year of migration straight to React and APIs, skipping MVC, managing an offshore team through tickets, review, testing, and releases.',
    outcome: 'Legacy pages retired without a detour through an intermediate stack.',
  },
];

export const skills = [
  { group: 'Daily', items: ['C#', '.NET 10', 'ASP.NET Core', 'React', 'TypeScript', 'SQL Server'] },
  { group: 'Infrastructure', items: ['AWS', 'GitHub Actions', 'Datadog', 'Docker', 'Git'] },
  { group: 'AI tooling', items: ['GitHub Copilot', 'Claude Code', 'AGENTS.md', 'Context engineering', 'Custom agents & skills'] },
  { group: 'Testing & data', items: ['Playwright', 'Jest', 'MSTest', 'Moq', 'Dapper', 'EF Core'] },
  { group: 'Exploring', items: ['Rust', 'Elixir', 'OCaml'] },
];

export const principles = [
  { title: 'Software is a team sport.', body: 'I do my best work in low-ego rooms where nobody cares whose idea it was.' },
  { title: 'Performance is a feature.', body: 'Working well means working fast. Tune first. Caching needs approval.' },
  { title: 'Disagree, decide, get in line.', body: 'Argue the technical case fully, then commit. No relitigating afterward, on either side.' },
  { title: 'Eliminate process before automating it.', body: "I don't want to spend tokens on something we shouldn't be doing in the first place." },
  { title: 'Create over consume.', body: 'Shipping code teaches faster than reading about it.' },
  { title: 'Scratch your own itch.', body: "Tools built for your own problem tend to become solutions for someone else's." },
];

// TODO: brendonotto.com is not reachable from the build session, so post slugs are unverified.
// Each entry links to the posts index until the real slugs are filled in.
export const postsIndex = 'https://brendonotto.com/posts';
export const writing = [
  { date: '2023-08', title: 'Hello world with Axum and Svelte', summary: 'A Rust backend serving a static SvelteKit build for a quotes side project.' },
  { date: '2022-09', title: 'Set Docker image to use on Fly', summary: 'Pinning a base image in fly.toml for an Elixir 1.14 Phoenix app.' },
  { date: '2022-03', title: 'Host a Docker registry on a Synology NAS', summary: 'A private registry on a DS920+ for self-hosted projects.' },
  { date: '2021-12', title: 'Scratch your own itch', summary: 'A Rust CLI for teammates’ time zones that became a work tool a day later.' },
  { date: '2021-09', title: 'Setting up MDX with Next.js', summary: 'mdx-bundler for the original version of this blog.' },
  { date: '2021-07', title: "Collector's Fallacy", summary: 'On information hoarding and learning by shipping instead of reading.' },
];

export const personal =
  'Father and husband. I 3D print, do woodworking, train Brazilian Jiu-Jitsu, hike and geocache with my family, and walk my dog Oliver. I like balancing making things with my hands and making them digitally.';

export const openTo = {
  lead: "I'm most interested in Staff or Principal Engineer roles where I can own architecture decisions and help product teams ship faster on top of them.",
  also: "I'm also open to project-based contracting with a CTO who needs a .NET and React modernization, an API platform, or an AI enablement program moved forward.",
};
