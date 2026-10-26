# KiranaSaathi landing page

Next.js (App Router) + TypeScript + Tailwind. Static, no backend, no paid services.

## Run locally
```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
npm run build                # production check
```

## Replace before publishing
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL` = your real email (shown on site, used by "Email us")
- [ ] `NEXT_PUBLIC_SITE_URL` = your final https URL (used for Open Graph)
- [ ] `NEXT_PUBLIC_APP_URL` = Play Store link when live (until then "Get Started" scrolls to Contact)
- [ ] `lib/site.ts`: `legalOwner`, `jurisdiction`, `lastUpdated`
- [ ] `app/privacy/page.tsx` and `app/terms/page.tsx`: fill every [bracketed] item, get them reviewed
- [ ] Remove the amber draft notice in `components/Legal.tsx` only after review

## GitHub
```bash
git init && git add . && git commit -m "KiranaSaathi landing page"
git branch -M main
# create an empty repo named kiranasaathi on github.com, then:
git remote add origin https://github.com/<your-username>/kiranasaathi.git
git push -u origin main
```

## Deploy free on Vercel
1. Sign up at vercel.com with GitHub (Hobby plan is free).
2. Add New > Project > import the `kiranasaathi` repo. Framework is auto-detected as Next.js.
3. Under Environment Variables add the three variables from `.env.example`.
4. Click Deploy. You get `https://<project>.vercel.app` over HTTPS.
5. If you change `NEXT_PUBLIC_SITE_URL` later, redeploy.

## Custom domain later
Vercel project > Settings > Domains > Add. Add the DNS records Vercel shows at your registrar, wait for verification, then update `NEXT_PUBLIC_SITE_URL` and redeploy.
