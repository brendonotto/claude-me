# Putting brendonotto.com on Cloudflare

The site in `site/` deploys as a Cloudflare Worker that serves static assets. This is the
setup Cloudflare now recommends over the older Pages product. Same free tier, same static
hosting, same Wrangler CLI, and it leaves room to add a Worker script later for a contact form.

Written 2026-11-05. Dashboard labels move around; the steps are what matter.

## 1. One-time account setup (about 10 minutes)

1. **Create a Cloudflare account** at dash.cloudflare.com if you don't have one. Free plan is fine.
2. **Add the domain.** Dashboard → *Add a domain* → `brendonotto.com` → Free plan. Cloudflare scans
   your current DNS records and imports them. Check that any records you care about came across
   (email MX records especially, if you receive mail at the domain). Finish the wizard. It will show
   you **two nameservers** like `ada.ns.cloudflare.com` and `rob.ns.cloudflare.com`. Keep that tab open.
3. **Find your account ID.** Dashboard → *Workers & Pages* → right sidebar shows *Account ID*. Copy it.
4. **Create an API token.** Profile icon (top right) → *My Profile* → *API Tokens* → *Create Token* →
   use the **Edit Cloudflare Workers** template → Continue → Create. Copy the token now; it is shown once.
   Store it somewhere safe. It is only for deploying, never put it in the repo.

## 2. First deploy from your machine (proves the config)

From the repo root:

```bash
cd site
npm ci
npm run build
npx wrangler login
```

`wrangler login` opens a browser and links the CLI to your account. Then:

```bash
npx wrangler deploy
```

Wrangler creates a Worker named `brendonotto-com` and uploads `dist/`. It prints a
`*.workers.dev` URL. Open it. The whole site should be there, including `/posts`, `/rss.xml`,
and a styled 404 for a bad path.

From then on, any machine or AI session with Wrangler logged in can publish with:

```bash
cd site && npm run build && npx wrangler deploy
```

## 3. Automatic deploys from GitHub

`.github/workflows/site.yml` builds and deploys on every push to `main` that touches `site/`.
It needs two repository secrets. GitHub → repo → *Settings* → *Secrets and variables* → *Actions*
→ *New repository secret*:

| Name | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | the token from step 1.4 |
| `CLOUDFLARE_ACCOUNT_ID` | the ID from step 1.3 |

Alternative without secrets: Cloudflare's own Git integration. Dashboard → *Workers & Pages*
→ the `brendonotto-com` Worker → *Settings* → *Build* → connect the GitHub repo, root directory
`site`, build command `npm run build`, deploy command `npx wrangler deploy`. Either works; the
GitHub Actions route keeps the build log next to the code.

## 4. Point the domain at the Worker

1. Dashboard → *Workers & Pages* → `brendonotto-com` → *Settings* → *Domains & Routes* →
   *Add* → *Custom Domain* → `brendonotto.com`. Add `www.brendonotto.com` the same way.
   Cloudflare creates the DNS records and the certificate for you. Nothing to type.
2. If the old site had an `A` or `CNAME` record for the root or `www` that the import brought over,
   Cloudflare will say it conflicts. Let it replace them.

## 5. Change the nameservers at your registrar (the only step outside Cloudflare)

This is the step that actually moves the domain. Until it is done, visitors still see the old site.

**Find where the domain is registered.** Run this from any terminal:

```bash
whois brendonotto.com | grep -iE 'registrar:|name server'
```

The *Registrar* line names the company (Namecheap, GoDaddy, Google Domains → now Squarespace,
Porkbun, Hover, Cloudflare Registrar, and so on). The *Name Server* lines show who serves DNS today,
which may be the same company or a host like Netlify or Vercel. If `whois` is not installed,
https://lookup.icann.org shows the same information.

**At that registrar**, open the domain's DNS or nameserver settings, switch from the registrar's
default nameservers to *custom* nameservers, and enter the two Cloudflare nameservers from step 1.2.
Save. Tell me the registrar's name and I will give you the exact click path for it.

**Wait.** Cloudflare emails you when it sees the change, usually within an hour, sometimes up to a
day. The Cloudflare dashboard shows the domain as *Active* when done.

**Verify:**

```bash
curl -sI https://brendonotto.com | head -5
```

You should see `server: cloudflare` and a `200`. Check `https://brendonotto.com/posts/scratch-your-own-itch/`
to confirm an old post URL still resolves.

## 6. Afterward

- Archive the old site's repo (`brendonotto-astro`) and delete its hosting project, if any.
- Keep the two Cloudflare nameservers; everything else about the domain stays at the registrar.
- Renewals and ownership do not move. Only DNS does.

## Bots, spam, and the future contact form

Being on Cloudflare puts the site behind its proxy, which absorbs most scraper and bot traffic
before it reaches anything. For a contact form, the pieces are all on the same platform:

- **Turnstile**, Cloudflare's free CAPTCHA replacement, blocks automated submissions without a puzzle.
- A small **Worker script** in this project receives the form POST, verifies the Turnstile token,
  and forwards the message (to email via a provider, or to a queue). The `wrangler.jsonc` comment
  shows where it plugs in.
- The site stays static; only the form endpoint runs code.

Your email address never appears in the page, so address-harvesting bots get nothing.
