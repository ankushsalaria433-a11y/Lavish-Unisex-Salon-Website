# Lavish Unisex Salon

Lavish Unisex Salon is a responsive, editorial-style website for the Indore salon, with services, gallery, reviews, contact details, and an appointment enquiry flow.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/lavish-salon/src/App.tsx` — page composition and interactive behavior
- `artifacts/lavish-salon/src/data.ts` — editable business details, services, gallery image URLs, and FAQs
- `artifacts/lavish-salon/src/index.css` — typography, palette, texture, and reduced-motion rules
- `artifacts/lavish-salon/index.html` — SEO title, description, Open Graph, and font loading

## Architecture decisions

- The website is frontend-only because the appointment brief explicitly says not to pretend enquiries are stored without a booking backend.
- Appointment enquiries validate in the browser and end in a clear “ready to connect” success state, with the phone fallback remaining immediately available.
- Business content and replaceable remote imagery live in `src/data.ts` so the owner can update facts without searching through layout markup.
- The page uses accessible native controls for the menu, gallery lightbox, FAQ accordion, and form fields, with reduced-motion support in the stylesheet.

## Product

Visitors can learn about Lavish, browse service categories and gallery images, view the verified 4.3/5 rating from 178 reviews, open Google Maps directions, call the salon, and submit a client-side appointment enquiry.

## User preferences

- The brand should feel premium, warm, inclusive, and distinctive rather than like a generic salon template.
- Do not invent testimonials, awards, pricing, opening hours, or business history.

## Gotchas

- The managed frontend workflow provides `PORT` and `BASE_PATH`; use the workflow or preview for runtime checks rather than running the Vite build command without those variables.
- Remote gallery images are intentionally centralized and should be replaced with final brand photography when available.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
