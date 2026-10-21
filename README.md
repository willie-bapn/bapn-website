# bapn.co.nz

Website for **BAPN — Badminton Academy Performance & Nutrition**, Christchurch.
Owned by CZW Limited (trading as BAPN). Built by Kiwi Cloud Homes.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
```

## Stack

- Astro 5, static output. Tailwind CSS 4 with the brand tokens in `src/styles/global.css`
  (navy `#2e3192`, red `#c1272d`, from the logo).
- No database, no server. Forms post to Netlify Forms.
- Images in `src/assets/` are optimised at build by Astro.

## Where things live

| Path | What |
| --- | --- |
| `src/data/content.json` | **All words and numbers** — coaches, programmes, membership, news, partners. From BAPN's content pack (October 2026). Edit this, not the pages. |
| `src/data/policies.ts` | The Player Agreement, transcribed. BAPN's wording. |
| `src/data/site.ts` | Types, navigation, the primary call to action. |
| `src/pages/` | One file per page. `news/[slug].astro` builds one page per news item. |
| `src/components/` | Header, footer, cards, hero, CTA band, partner logo, policy section. |
| `src/assets/` | Coach headshots, training photos, partner logos, brand. |

## Forms

`/contact` and `/sign-up` are Netlify Forms (`data-netlify="true"`, honeypot field `company`,
success page `/thanks`). Notification email is set in the Netlify UI: Forms → Settings →
notifications → `info@bapn.co.nz`.

## Before go-live

- [ ] Remove `<meta name="robots" content="noindex">` in `src/layouts/Base.astro`
- [ ] Delete `public/robots.txt` (or replace with an allow-all)
- [ ] Remove the `X-Robots-Tag` header block from `netlify.toml`
- [ ] Set form notifications to `info@bapn.co.nz`
- [ ] Add the domain in Netlify and the DNS records at the registrar (see Kiwi Cloud Homes' handover notes)
- [ ] Replace the interim hero photo if BAPN supplies a new one
