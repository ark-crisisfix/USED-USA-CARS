# Used Cars USA

Next.js static site (App Router) with `output: 'export'`.

## Deploy (Cloudflare Pages / Netlify)

- **Build command:** `npm run build`  
  (You can also use `npm run build && npm run export` — `export` only checks that `out/` exists; `next export` is removed in Next.js 15.)
- **Output directory:** `out`
- **Node:** 20+ recommended

## Local

```bash
npm install
npm run dev
```

```bash
npm run build   # produces static files in out/
```
