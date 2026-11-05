# claude-me

Everything Claude needs to write about me, in one place.

- `.claude/skills/about-brendon/` — the **about-brendon** skill. Claude Code loads it automatically when working in this repo. `references/profile.md` inside it is the single source of truth: bios, work history, skills, values, links, and the raw interview notes behind them.
- `about-brendon.skill` — the same skill packaged for claude.ai (open it in the Claude app and choose *Save skill*). Re-package after editing the profile.
- `docs/` — reviews and notes, e.g. the GitHub profile review.
- `drafts/` — generated artifacts: GitHub profile README, link-in-bio landing page, bios, and screenshots. Regenerate these from the skill rather than editing by hand, so they stay consistent with the profile.
- `site/` — the personal site for brendonotto.com, built with Astro. See `site/README.md` for running, building, and deploying it. `.github/workflows/site.yml` deploys it to Cloudflare; `docs/cloudflare-deploy.md` has the account, DNS, and registrar steps.

## Updating facts

Edit `.claude/skills/about-brendon/references/profile.md` (or tell Claude the new fact while working in this repo; the skill appends it). Then regenerate whatever drafts the change affects.

## Re-packaging the skill

```bash
cd .claude/skills && zip -r ../../about-brendon.skill about-brendon -x 'about-brendon/evals/*'
```
