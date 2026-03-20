# Used Cars USA

Next.js static site (App Router) with `output: 'export'`.

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

## Local

```bash
npm install
npm run dev
```

```bash
npm run build   # produces static files in out/
```
