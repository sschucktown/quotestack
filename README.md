# QuoteStack Landing (Next.js + Tailwind + shadcn/ui)

Minimal, production-ready landing page for QuoteStack built with Next.js 14 (App Router), TailwindCSS, and shadcn-style UI primitives (Button, Card).

## Local Development
```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Deploy to Render
1. Push this repo to GitHub.
2. In Render, create a new **Web Service** from the repo.
3. Use the defaults or this Render build config:

- Build Command: `npm run build`
- Start Command: `npm start`
- Node Version: 18.x or 20.x

Alternatively, include the provided `render.yaml` to auto-detect settings.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS 3
- shadcn-style components (local Button/Card)

## Customization
- Edit the landing copy in `app/page.tsx`.
- Global styles in `app/globals.css`.
- UI components in `components/ui/*`.

## Notes
- This project uses local shadcn-like primitives to avoid a CLI step.
- You can later run the official shadcn CLI to add more components.
