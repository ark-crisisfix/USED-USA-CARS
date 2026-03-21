# Used Cars USA

Next.js static site (App Router) with `output: 'export'`.

## Languages

- **English (default):** site root, e.g. `/`, `/catalog`, `/contact`
- **Russian:** prefix `/ru`, e.g. `/ru`, `/ru/catalog`, `/ru/contact`
- **Switcher:** header (EN | RU) keeps the same page in the other language when a Russian route exists.

Copy lives in `lib/dictionaries.ts` (`en` / `ru`).

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

## Ready cars, cases, and leads (MVP)

- **Data (JSON, swap for API later):** `data/ready-cars.json`, `data/savings-cases.json`
- **Routes:** `/ready-cars`, `/ready-cars/[slug]`, `/cases`, `/cases/[slug]` (and `/ru/...` mirrors)
- **Lead form:** `components/LeadFormUniversal.tsx` — posts JSON to **`/api/leads`** (see below). Optional `NEXT_PUBLIC_LEAD_SUBMIT_URL` to override the POST URL (e.g. absolute URL to your Worker).

### Cloudflare Pages Function — `POST /api/leads`

With static export, the handler lives in **`functions/api/leads.ts`**. It imports `lib/leads/handleLeadPost.ts`.

**Environment variables (Cloudflare Pages → Settings → Variables):**

| Variable | Purpose |
|----------|---------|
| `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` | Insert into `leads` table via REST (optional; if unset, email-only path) |
| `RESEND_API_KEY` + `LEADS_NOTIFY_EMAIL` + `RESEND_FROM_EMAIL` | Internal notification email (optional) |
| `HUBSPOT_PRIVATE_APP_TOKEN` | Optional contact create; failures do not block success if DB path is configured |

**Supabase `leads` table** (match columns used in `handleLeadPost` `dbRow`):  
`created_at`, `name`, `contact`, `budget`, `destination`, `preferred_vehicle`, `condition_preference`, `message`, `page_type`, `page_url`, `source_context`, `car_reference_id`, `ready_car_reference_id`, `case_reference_id`, `ip_hash`, `user_agent`, `referrer`, `status`, `hubspot_sync_status`.

Local smoke test for the function: use **`wrangler pages dev ./out`** from the project root (with Node 20+) and POST to `/api/leads`.

### Spam protection

Honeypot field `website`, server-side validation in `lib/leads/leadValidate.ts`. Rate limiting can be added later (e.g. KV).
