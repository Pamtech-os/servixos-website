# Servix OS Website

Next.js 16 + TypeScript marketing site for Servix OS.

## Tech Stack
- Next.js (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion

## Run Locally
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build
```bash
npm run build
npm run start
```

## SEO
This project includes:
- metadata + Open Graph + Twitter tags in `src/app/layout.tsx`
- JSON-LD structured data in `src/app/page.tsx`
- dynamic `robots.txt` via `src/app/robots.ts`
- dynamic sitemap via `src/app/sitemap.ts`
