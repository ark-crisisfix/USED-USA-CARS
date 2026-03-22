# NorthAm Cars (northamcars.com)

Публичный бренд: **NorthAm Cars**, продакшен: **https://northamcars.com/**. Фраза *Used Cars USA* остаётся в SEO-слое (title/description, лендинги), не как имя компании в UI.

Next.js static site (App Router) with `output: 'export'`.

## Languages

- **English (default):** site root, e.g. `/`, `/catalog`, `/contact`
- **Russian:** prefix `/ru`, e.g. `/ru`, `/ru/catalog`, `/ru/contact`
- **Switcher:** header (EN | RU) keeps the same page in the other language when a Russian route exists.

Copy lives in `lib/dictionaries.ts` (`en` / `ru`).

**Changelog:** значимые изменения фиксируются в **`CHANGELOG.md`** ([Keep a Changelog](https://keepachangelog.com/)); подробности — в `.cursor/rules/northam-project.mdc`.

## Deploy (Cloudflare Pages / Netlify)

- **Framework preset:** `None` (not “Next.js”) — this project is a **static export**; the Next preset uses another pipeline and often yields **404 on `/`**.
- **Build command:** `npm run build`  
  (`npm run build && npm run export` is OK — `export` only checks that `out/` exists.)
- **Build output directory:** type exactly **`out`** — no leading `/`, **no spaces** (e.g. `/ out` or `/out` can break routing and cause **404** on the homepage).
- **Root directory:** leave empty if the repo root is the app (not a monorepo subfolder).
- **Node:** 20+ (22 is fine)

### If you see HTTP 404 on `*.pages.dev/`

1. Open **Workers & Pages → Project → Deployments** — latest deploy must be **Success**.
2. **Settings → Builds & deployments → Build configuration:**
   - **Build output directory:** clear the field completely, then type **`out`** (three letters only). Do **not** use `/ out`, `/out`, or trailing spaces.
   - Build command = **`npm run build`**
3. Hard-refresh the site (`Ctrl+Shift+R`) or try incognito — old **404** can be cached in the browser.
4. **Framework preset** = **None**, save, then **Retry deployment** on the latest commit.

Local check after `npm run build`: the file **`out/index.html`** must exist (that is your homepage).

### Hash URL works, but `used-usa-cars.pages.dev` does not

If **`https://<hash>.used-usa-cars.pages.dev`** opens the site, but **`https://used-usa-cars.pages.dev`** returns **404**, the **production** URL is tied to the wrong Git branch.

This repo is updated on **`main`** (e.g. `git push origin master:main`). Cloudflare must use the same branch for production:

1. **Workers & Pages** → **used-usa-cars** → **Settings** → **Builds & deployments**.
2. Find **Production branch** (or **Branch control** / **Production**).
3. Set it to **`main`** (not `master`), **Save**.
4. Open **Deployments** → on the latest successful build for **`main`**, use **Retry deployment** or wait for the next push.

Until this matches, previews get a **per-deployment subdomain** (`<hash>.pages.dev`) while the **root** `project.pages.dev` keeps an old or empty production deploy → **404**.

## Local

```bash
npm install
npm run dev
```

```bash
npm run build   # produces static files in out/
```

## Ready cars, cases, and contact CTA

- **Data (JSON, swap for API later):** `data/ready-cars.json`, `data/savings-cases.json`
- **Routes:** `/ready-cars`, `/ready-cars/[slug]`, `/cases`, `/cases/[slug]` (and `/ru/...` mirrors)
- **Contact block:** `components/LeadFormUniversal.tsx` renders direct contact actions and a server-side lead form below them.
  - Call: `+1 672-673-9976`, `+778-254-55333`
  - WhatsApp: `+380 99 255 7209`
  - Telegram: `@ARMAN_TATEVOSYAN`
  - Email: `bid@hortham.com`
- **Lead endpoint:** `functions/api/leads.ts` for Cloudflare Pages Functions (`POST /api/leads`)

### Email order template

The email CTA opens a `mailto:` link with a prefilled subject and body. The template includes:

- current page path
- inquiry type / context
- prefilled car or case identifiers when available
- basic order fields for the customer to complete manually

## Lead handling (Cloudflare + HubSpot)

Lead flow:

1. User submits the form in `LeadFormUniversal`
2. Frontend sends `POST /api/leads`
3. Cloudflare Pages Function validates and normalizes the payload
4. Lead is durably persisted in HubSpot server-side
5. Optional internal email notification is sent if configured

### Environment variables

Required:

- `HUBSPOT_ACCESS_TOKEN`

Optional:

- `RESEND_API_KEY`
- `NOTIFY_EMAIL_TO`
- `NOTIFY_EMAIL_FROM`

Behavior:

- If `HUBSPOT_ACCESS_TOKEN` is missing, the API returns a backend failure and does not fake success
- If Resend env vars are missing, email notification is skipped
- Success is returned only after HubSpot persistence succeeds

### HubSpot setup

The implementation always stores the lead in HubSpot by creating/updating a contact and attaching a note with the full lead payload.

Recommended custom contact properties for cleaner reporting:

- `budget_range`
- `destination`
- `preferred_vehicle`
- `condition_preference`
- `source_context`
- `page_url`
- `ready_car_reference_id`
- `case_reference_id`
- `car_reference_id`
- `form_type`

These properties are optional for the code to work. If they do not exist yet, the contact still syncs with standard fields and the full lead is preserved in the HubSpot note.

### Manual QA checklist

- Homepage lead: submit a valid request and confirm a HubSpot contact + note are created
- Ready car inquiry: confirm `ready_car_reference_id` and `source_context` appear in the note
- Case inquiry: confirm `case_reference_id` appears in the note
- Honeypot: fill the hidden field manually and confirm the request is rejected
- Missing `HUBSPOT_ACCESS_TOKEN`: confirm the API returns an error instead of success
- Missing Resend vars: confirm the lead still saves successfully in HubSpot

### Security note

Keep the HubSpot private app token server-side only in Cloudflare environment variables. If a token was ever pasted into chat or logs, rotate it in HubSpot before production deployment.
