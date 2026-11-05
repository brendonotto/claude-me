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

**Squarespace Domains** (brendonotto.com is registered there, migrated from Google Domains):

1. Go to https://account.squarespace.com/domains and sign in with the Google account that owned the
   domain at Google Domains.
2. Click **brendonotto.com**.
3. In the left menu click **DNS**. Before touching nameservers, check **DNSSEC**: if it shows as
   *enabled*, turn it **off** and wait until the status reads disabled (usually under an hour, can be
   longer). Changing nameservers while DNSSEC is on makes the domain unresolvable until the old
   signatures expire. Google Domains defaulted DNSSEC to on for many domains, so check this.
4. Still under DNS, find **Domain Nameservers** (sometimes shown as *Nameservers*). Click **Use custom
   nameservers**.
5. Enter the two Cloudflare nameservers from step 1.2, one per field, exactly as Cloudflare shows them.
   Remove any Squarespace or Google entries.
6. Click **Save**. Squarespace warns that its DNS records and email forwarding will stop applying.
   That is expected; Cloudflare now answers for the domain.
7. Leave the domain's **Lock** on and auto-renew as they were. Nothing else at Squarespace changes.

Squarespace reports the change to the registry within minutes; the world sees it over the next
hour or so.

**Check email before you flip the switch.** brendon@brendonotto.com is served by DNS records at the
current provider. Two possibilities:

- *Google Workspace* (paid mailbox): Cloudflare's import in step 1.2 copies the MX records, and mail
  keeps working. Confirm the five `MX` records and any `TXT` records for SPF and DKIM are in the
  Cloudflare DNS list before changing nameservers.
- *Squarespace email forwarding* (the free forwarding Google Domains offered): this stops the moment
  nameservers change, because Squarespace is no longer serving the MX records. Replace it with
  Cloudflare **Email Routing** (free): Dashboard → the domain → *Email* → *Email Routing* → enable →
  add a rule forwarding `brendon@brendonotto.com` to your real inbox. Cloudflare adds the MX records
  automatically. Set this up before changing nameservers so there is no gap.

To tell which you have: at Squarespace, Domains → brendonotto.com → look for **Email forwarding**
in the left menu. If it lists a forward for `brendon@`, it is the second case.

**Wait.** Cloudflare emails you when it sees the change, usually within an hour, sometimes up to a
day. The Cloudflare dashboard shows the domain as *Active* when done.

**Verify:**

```bash
curl -sI https://brendonotto.com | head -5
```

You should see `server: cloudflare` and a `200`. Check `https://brendonotto.com/posts/scratch-your-own-itch/`
to confirm an old post URL still resolves.

## 6. Optional: move the registration itself to Cloudflare Registrar

Changing nameservers (step 5) is all the site needs. Transferring the registration is a separate,
optional step that can happen any time after the domain is Active on Cloudflare. Trade-offs:

**For transferring**

- At-cost renewals. Cloudflare charges the registry wholesale price with no markup (a .com is in the
  $10–11 range); Squarespace charges about double. Over ten years that is real money.
- One dashboard. DNS, the Worker, the certificate, and the registration all in one account you
  already use, with the same API and Wrangler access.
- Free WHOIS redaction and registrar lock by default.
- Transfer adds a year to the expiry on top of what remains, so nothing is lost.

**Against, or at least to know**

- Cloudflare Registrar requires Cloudflare DNS. You can't point the domain at other nameservers
  while it's registered there. For this site that is fine; it's a constraint if you ever want to
  host DNS elsewhere.
- A transfer takes up to five days (usually under an hour once approved) and costs one year of
  renewal up front.
- ICANN's 60-day lock: a domain can't transfer within 60 days of registration, a prior transfer, or
  a registrant contact change. The Google Domains → Squarespace migration happened in 2023–2024, so
  this no longer applies, but if you have recently edited the registrant name or email at
  Squarespace, wait it out.
- Anything bundled with Squarespace Domains (email forwarding, Google Workspace billing through
  Squarespace) ends. Email forwarding is replaced by Cloudflare Email Routing per the note above.
  Google Workspace itself keeps working, you just manage billing at Google instead.
- No real downside to leaving it at Squarespace other than price and a second login.

**Recommendation:** do the nameserver change first, confirm the site and email work for a week, then
transfer. Separating the two means that if anything breaks you know which change caused it.

**How to transfer, when ready**

1. Make sure the domain is Active on Cloudflare with DNS working (step 5 done).
2. At Squarespace: Domains → brendonotto.com → **Transfer** (or *Transfer domain out*) → turn the
   **Lock** off → copy the **Authorization code** (also called EPP or transfer code). Confirm the
   registrant email on the domain is one you can read; the registry sends a confirmation there.
3. At Cloudflare: Dashboard → *Domain Registration* → *Transfer Domains* → brendonotto.com appears as
   eligible → enter the authorization code → pay one year's renewal → confirm.
4. Squarespace emails a request to approve or deny the transfer. Approve it to skip the five-day
   wait. Otherwise it completes automatically after five days.
5. When it finishes, re-enable the lock at Cloudflare (it is on by default) and check auto-renew.

## 7. Afterward

- Archive the old site's repo (`brendonotto-astro`) and delete its hosting project, if any.
- Unless you transferred (step 6), renewals and ownership stay at Squarespace. Only DNS moved.

## Bots, spam, and the future contact form

Being on Cloudflare puts the site behind its proxy, which absorbs most scraper and bot traffic
before it reaches anything. For a contact form, the pieces are all on the same platform:

- **Turnstile**, Cloudflare's free CAPTCHA replacement, blocks automated submissions without a puzzle.
- A small **Worker script** in this project receives the form POST, verifies the Turnstile token,
  and forwards the message (to email via a provider, or to a queue). The `wrangler.jsonc` comment
  shows where it plugs in.
- The site stays static; only the form endpoint runs code.

Your email address never appears in the page, so address-harvesting bots get nothing.
