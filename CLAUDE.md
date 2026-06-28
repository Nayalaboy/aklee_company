# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> The `@AGENTS.md` rule above is critical: this is **Next.js 16** with breaking changes from older versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code — do not rely on training-data conventions for the App Router, route handlers, metadata, or config.

## Commands

```bash
npm run dev      # Dev server on port 5000 (0.0.0.0) — NOT the default 3000
npm run build    # prisma generate, then next build
npm start        # Production server on port 5000
npm run lint     # ESLint (flat config, eslint-config-next)

npx prisma generate     # Regenerate client after editing schema.prisma (also runs on postinstall/build)
npx prisma migrate dev  # Create + apply a migration locally
npx prisma db push      # Push schema without a migration (used in the Replit workflow)
npx prisma studio       # Inspect the DB
```

There is no test framework configured.

## Architecture

Single Next.js App Router project for the **Mirigraphix** company marketing site (a tech company offering training, enterprise Mac hardware, R&D apps, and consulting bridging the U.S. and Africa). Most of `src/app/*/page.tsx` are self-contained, statically-rendered marketing pages with content hardcoded in JSX — they do **not** read from the database. The database/API layer exists for the dynamic features (auth, enrollments, orders, contact, etc.) and is the part that requires understanding multiple files.

- `src/app/` — App Router pages. `layout.tsx` is the root shell (Navbar + Footer). Some routes add their own `layout.tsx` purely for per-route metadata.
- `src/app/api/*/route.ts` — REST route handlers. Public read endpoints (courses, products, blog, events) filter on `published: true`. Mutating/user-scoped endpoints (`enrollments`, `orders`) are auth-gated.
- `src/components/` — Shared `Navbar` and `Footer` only.
- `src/lib/db.ts` — Singleton `PrismaClient` (cached on `globalThis` outside production to survive dev hot-reload). Import as `import { prisma } from "@/lib/db"`.
- `src/lib/auth.ts` — bcrypt password hashing + JWT helpers (`signToken`/`verifyToken`, 7-day expiry). `@/*` resolves to `src/*` (see tsconfig).
- `prisma/schema.prisma` — data model: User, Course, Enrollment, Product, Order, OrderItem, BlogPost, Contact, Event, Subscriber.

### Auth flow

Stateless JWT, no session middleware. `register`/`login` return a token in the JSON body; the client is expected to send it back as a `Bearer` token in the `Authorization` header. Protected handlers parse the header, call `verifyToken`, and 401 on failure — there is no shared auth wrapper, so each protected route repeats this inline. `role` (default `"user"`) lives in the token payload for future authorization.

### AI chatbot

`/chat` (page) talks to `src/app/api/chat/route.ts`, which streams from Anthropic via the Vercel AI SDK (`@ai-sdk/anthropic` + `ai`'s `streamText`, `toTextStreamResponse`). The assistant persona, company facts, and guardrails live entirely in the `system` prompt in that route. Requires `ANTHROPIC_API_KEY`.

### Internationalization (EN/FR)

The site is bilingual via a **cookie-based locale**, not URL routing. `src/lib/i18n.ts` exposes `getLocale()` (reads the `lang` cookie server-side; defaults to `en`) and the `Locale` type. The root layout (`src/app/layout.tsx`) is `async`, reads the locale, sets `<html lang>`, and passes it to `Navbar`/`Footer`. Reading the cookie in the root layout makes **every page dynamically rendered** (`ƒ` in the build output) — this is intentional.

Per-page convention: each page defines a module-level `const copy = { en: {...}, fr: {...} } as const`, is an `async` server component that does `const locale = await getLocale(); const t = copy[locale];`, and renders all user-facing text from `t.*`. **Client components** (`"use client"`, e.g. `hardware`, `faq`, `contact`, `chat`) can't call `getLocale()` — they read the cookie in a `useEffect` (`document.cookie.match(/(?:^|; )lang=(fr|en)/)`). The FR/EN switch lives in `Navbar.tsx`: it sets the `lang` cookie and calls `router.refresh()`. Page `metadata` titles are intentionally left English. When adding a page, follow `src/app/page.tsx` as the reference.

### Content honesty

This is a pre-launch company: do **not** add invented metrics, client/learner counts, testimonials, named partners, team-member names, or dated events. Keep claims qualitative (status pills like Beta/In Development/Planned, the `.stage-track` roadmap) until real figures exist.

### Data convention

Fields holding structured data (e.g. `Course.modules`) are stored as **JSON strings** via `JSON.stringify` on write — stringify/parse at the boundary; they are not native JSON columns.

## Database gotcha

The local setup runs against **SQLite** (`DATABASE_URL="file:./dev.db"`, and the committed migration lock is `sqlite`) — queries work fine this way. But `schema.prisma` declares `provider = "postgresql"` (the Replit deploy target). Before running `prisma migrate`/`db push`, make the schema `provider` and your `DATABASE_URL` agree — migrating with the two out of sync will fail.

## Running locally

`npm run dev` hardcodes port **5000**, which on macOS is usually occupied by the AirPlay Receiver (ControlCenter, returns 403). Either disable AirPlay Receiver in System Settings, or run on another port: `npx next dev -p 5050 -H 0.0.0.0`. DB-backed API routes (e.g. `/api/courses`) return empty arrays until the database is seeded with `published: true` rows.

## Environment variables

Set in `.env` (not auto-loaded by Prisma per the file's own note): `DATABASE_URL`, `ANTHROPIC_API_KEY`. Auth also reads `JWT_SECRET` (falls back to an insecure dev default if unset).
