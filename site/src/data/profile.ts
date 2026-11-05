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
    "I'm a Lead Staff Software Engineer on the Architecture team at FMG Suite, where I set engineering standards, break a large monolith into team-owned services, and lead AI adoption across a 40+ engineer department. I got into software by taking a system apart to understand it, and I've been doing that ever since.",
  description:
    'Brendon Otto is a Lead Staff Software Engineer on the Architecture team at FMG Suite: architecture and modernization, API design, AI enablement for engineering orgs, and technical leadership. Minnesota, remote.',
  url: 'https://brendonotto.com',
};

export const links = [
  { label: 'Blog', handle: 'brendonotto.com/posts', href: 'https://brendonotto.com/posts' },
  { label: 'GitHub', handle: 'brendonotto', href: 'https://github.com/brendonotto' },
  { label: 'LinkedIn', handle: 'brendon-otto', href: 'https://www.linkedin.com/in/brendon-otto/' },
  { label: 'X', handle: '@brendondotto', href: 'https://x.com/brendondotto' },
  { label: 'YouTube', handle: 'brendonotto', href: 'https://www.youtube.com/brendonotto' },
];

// What I do. Capabilities first; the specific project is evidence, not the headline.
export const capabilities = [
  {
    code: 'ARCH',
    title: 'Architecture and modernization',
    body:
      'I take large, aging systems apart along the lines teams actually work on, so each piece can be owned and released independently. Monolith to services, legacy UI to modern front end, with migrations that can roll forward or back.',
    evidence: 'Currently leading a monolith-to-containerized-services decomposition across every product team.',
  },
  {
    code: 'API',
    title: 'API design and platform standards',
    body:
      'RESTful conventions, resources and actions named early, performance treated as a feature from day one. Caching is a gated exception, not a default, so the API itself gets tuned first.',
    evidence: 'Designed or founded three platform APIs. None has needed a data cache.',
  },
  {
    code: 'AI',
    title: 'AI enablement for engineering orgs',
    body:
      'Getting a whole department productive with AI tooling: per-team workshops, weekly trainings, model-selection and token coaching, layered repository context, custom agents and skills, and standards that tie the spend to a measurable return.',
    evidence: '40+ engineers and six product teams onboarded over two years.',
  },
  {
    code: 'LEAD',
    title: 'Technical leadership',
    body:
      'Team lead, then co-founder of an architecture team that grew from two engineers to seven. I mentor Socratically, run projects with product owners and delivery leads, and manage offshore teams through tickets, review, and releases.',
    evidence: 'Engineering standards developed with engineering leadership and rolled out org-wide.',
  },
  {
    code: 'FE',
    title: 'Front-end platform',
    body:
      'Choosing the framework and component foundation, proving it in a real feature, and standardizing it so engineers stop making UX decisions ad hoc.',
    evidence: 'Ran the proof of concept that moved a product from Knockout.js to React and Material UI.',
  },
  {
    code: 'COMM',
    title: 'Translation between engineering and the business',
    body:
      'A Communication Studies degree used daily: explaining trade-offs to product owners, customers, and executives, and breaking work into steps so nothing gets dropped.',
    evidence: 'The hardest conversations at this level are about scope and sequencing, not syntax.',
  },
];

export const story = [
  "I didn't come in through a computer science degree. After a Communication Studies degree from the University of Minnesota and a stint in insurance sales, I took an installation technician job at Insite Software just to get inside a technology company.",
  'Tier 2 and 3 support taught me how the whole system fit together: printer connectivity, broken customizations, bad data. Volunteering for small Progress customizations to offload the senior engineers turned into a programming job, earned by delivering projects on time and under budget. When the product was rebuilt in C#, I taught myself at night and designed the bridges between the two systems so expensive carrier certifications could be reused across both.',
  'That habit of getting into a system, breaking it down to its pieces, and making sense of it carried me through Epicor and ProAg Crop Insurance and into FMG, where I went from senior engineer on the website team, to team lead, to co-founding the Architecture team that now guides the flagship product.',
  'I still use the communication degree every day. Most of the job at this level is translating: between engineers and product owners, between a technical trade-off and a business decision, between what a system does and what engineering leadership needs to know about it.',
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
          'Leading the decomposition of the monolith into team-owned containerized services, each released independently.',
          'Lead AI adoption across a 40+ engineer department: workshops for six product teams, weekly trainings, AGENTS.md conventions, custom agents and skills.',
          'Spent about a year leading the WebForms migration straight to React and APIs, skipping MVC, with an offshore team.',
        ],
      },
      {
        title: 'Lead Software Engineer, Website team',
        span: '2019 – 2024',
        bullets: [
          'Designed and led delivery of in-place visual editing for the CMS. Forward and backward migration scripts made the release a non-event on a shortened timeline.',
          'Founded or built three platform APIs and set the conventions the department has used since.',
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

// Problems I have solved. Framed so they transfer; the "where" line is the proof.
export const problems = [
  {
    code: 'P-01',
    name: 'Decouple a monolith so teams can release independently',
    problem: 'One shared codebase, one release train, every team waiting on everyone else.',
    approach: 'Find the seams along team ownership, stand up containerized services with clear contracts, and end the central release.',
    where: 'Leading this now for a 40+ engineer department, .NET to containerized services.',
  },
  {
    code: 'P-02',
    name: 'Get an engineering org productive with AI',
    problem: 'New tools, no shared way of using them, and leadership asking what the spend returns.',
    approach: 'Workshops per team, weekly trainings, layered repository context, custom agents and skills, and standards the company can measure against.',
    where: 'Six product teams and 40+ engineers over two years. Piloted a vendor modernization agent with Microsoft.',
  },
  {
    code: 'P-03',
    name: 'Stand up an API platform that performs without caching',
    problem: 'One internal-only API and no conventions for the next ten.',
    approach: 'RESTful design, resources named early, return exactly what the caller needs, tune before you cache.',
    where: 'Three platform APIs founded or built. No data cache needed to date.',
  },
  {
    code: 'P-04',
    name: 'Ship a large product change with a boring release',
    problem: 'A core editing experience had to change under a shortened timeline, with a big audience watching.',
    approach: 'Prove it first, write forward and backward migrations, rehearse the release so rollback is a non-event.',
    where: 'In-place visual editing for a CMS. Engineering leadership called the release "super boring."',
  },
  {
    code: 'P-05',
    name: 'Replace a front-end framework without stopping the product',
    problem: 'An aging framework and no agreed path forward.',
    approach: 'Run competing proofs of concept on real features, pick a component foundation, and standardize so the rest of the product can follow.',
    where: 'Knockout.js to React and Material UI. Most of the product has since moved.',
  },
  {
    code: 'P-06',
    name: 'Retire legacy UI with a distributed team',
    problem: 'Legacy pages that had to go, with the delivery team in another time zone.',
    approach: 'Skip the intermediate stack, go straight to the target architecture, and run the work through tickets, review, testing, and releases.',
    where: 'About a year of ASP.NET Web Forms to React and APIs with an offshore team.',
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

// Fallback list used only if src/content/posts/ is empty. The live Writing section reads the collection.
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
