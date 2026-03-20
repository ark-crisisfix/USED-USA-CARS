# Used Cars USA

Next.js static site (App Router) with `output: 'export'`.

## Deploy (Cloudflare Pages / Netlify)

- **Framework preset:** `None` (not “Next.js”) — this project is a **static export**; the Next preset uses another pipeline and often yields **404 on `/`**.
- **Build command:** `npm run build`  
  (`npm run build && npm run export` is OK — `export` only checks that `out/` exists.)
- **Build output directory:** `out` (must be exactly `out`, not `.next`, not repo root)
- **Root directory:** leave empty if the repo root is the app (not a monorepo subfolder).
- **Node:** 20+ (22 is fine)

### If you see HTTP 404 on `*.pages.dev/`

1. Open **Workers & Pages → Project → Deployments** — latest deploy must be **Success**.
2. **Settings → Builds & deployments → Build configuration:**
   - Output directory = **`out`**
   - Build command includes **`npm run build`** (install is usually automatic as `npm install`).
3. Turn **Framework preset** to **None** and save, then **Retry deployment**.

Local check after `npm run build`: the file **`out/index.html`** must exist (that is your homepage).

## Local

```bash
npm install
npm run dev
```

```bash
npm run build   # produces static files in out/
```
