# Deploy checklist

## 1. Portfolio Hub

```powershell
cd "C:\Users\user\Desktop\portfolio-hub"
# push to GitHub, import on vercel.com
```

**Vercel env variables:**

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://YOUR-portfolio.vercel.app` |
| `NEXT_PUBLIC_FIVERR_URL` | `https://www.fiverr.com/YOUR_USERNAME` |
| `NEXT_PUBLIC_GITHUB_URL` | `https://github.com/RawidAslanov` |
| `NEXT_PUBLIC_GYM_URL` | gym URL after step 2 |

## 2. IRON BODY GYM (Site 1)

See `gym site/VERCEL_DEPLOY.md`

**Vercel env:**

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://YOUR-gym.vercel.app` |
| `NEXT_PUBLIC_PORTFOLIO_URL` | portfolio URL from step 1 |

## 3. After both are live

- Put portfolio URL in Fiverr profile → Website / Portfolio
- Put portfolio URL in `FIVERR_GIG_EN.md`
- Upload Fiverr Gallery screenshots (see `FIVERR_GALLERY.md`)
