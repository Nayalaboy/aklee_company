# Mirigraphix: Company Website

A full-stack marketing and operations website for **Mirigraphix**, a research-driven
technology company headquartered in New York, NY (founded 2023) serving the U.S. and
African markets. The site presents the company's four lines of business (R&D product
engineering, consulting, enterprise hardware, and professional training) and ships a
small backend for auth, enrollments, orders, contact, and an AI assistant.

The entire public site is **bilingual (English / French)** with an in-page language
toggle, built for a U.S. and French-speaking West African audience.

---

## Table of contents

- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Pages & functionality](#pages--functionality)
- [Internationalization (EN/FR)](#internationalization-enfr)
- [API reference](#api-reference)
- [Database](#database)
- [Authentication](#authentication)
- [AI chatbot](#ai-chatbot)
- [Design system](#design-system)
- [Content policy](#content-policy)
- [Deployment](#deployment)

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16** (App Router, Turbopack) |
| UI | **React 19**, TypeScript |
| Styling | **Tailwind CSS v4** + a custom CSS design system (`src/app/globals.css`) |
| Database | **Prisma ORM**: SQLite in local dev, PostgreSQL in production |
| Auth | **JWT** (`jsonwebtoken`) + **bcryptjs** password hashing |
| AI | **Vercel AI SDK** (`ai`, `@ai-sdk/anthropic`, `@ai-sdk/react`) with Anthropic Claude |
| Analytics | `@vercel/analytics` |
| Fonts | Inter (body), Space Grotesk (display), JetBrains Mono (mono) via `next/font` |

> **Note on Next.js 16:** this version has breaking changes from earlier majors
> (e.g. `params` is async, middleware is `proxy.ts`). When changing framework-level
> code, consult the bundled docs in `node_modules/next/dist/docs/`.

---

## Quick start

```bash
# 1. Install dependencies (runs `prisma generate` via postinstall)
npm install

# 2. Configure environment: create/edit .env (see "Environment variables" below)

# 3. Sync the database schema
npx prisma db push

# 4. Run the dev server
npm run dev
```

The dev server listens on **port 5000** by default (`http://localhost:5000`).

> **macOS users:** port 5000 is often occupied by the AirPlay Receiver (returns 403).
> Either disable *System Settings → General → AirDrop & Handoff → AirPlay Receiver*,
> or run on another port: `npx next dev -p 5050 -H 0.0.0.0`.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server (Turbopack) on port 5000 |
| `npm run build` | `prisma generate` + production build |
| `npm start` | Start the production server on port 5000 |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Browse/edit the database in a GUI |
| `npx prisma db push` | Apply the schema to the database without a migration |
| `npx prisma migrate dev` | Create and apply a migration locally |

There is no automated test suite configured.

---

## Environment variables

Defined in `.env` (not committed). Prisma does not auto-load `.env` for the CLI in all
cases. See the note at the top of the file.

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | **yes** | Prisma connection string. Local dev uses `file:./dev.db` (SQLite); production uses a PostgreSQL URL. |
| `ANTHROPIC_API_KEY` | for `/chat` | API key for the AI assistant. Without it, the chat page loads but `/api/chat` fails on send. |
| `JWT_SECRET` | recommended | Secret used to sign/verify auth tokens. Falls back to an **insecure dev default** if unset, so set this in production. |
| `NEXT_PUBLIC_SITE_URL` | optional | Base URL for metadata/OpenGraph (defaults to `https://mirigraphix.com`). |
| `SESSION_SECRET` | optional | Reserved for session use. |

> **Database provider gotcha:** `prisma/schema.prisma` declares `provider = "postgresql"`,
> while local dev runs on SQLite (`dev.db`). Keep the schema `provider` and your
> `DATABASE_URL` in agreement before running `prisma migrate` / `db push`.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, <html lang>, Navbar, Footer, Analytics
│   ├── globals.css             # Design system (tokens, components, utilities)
│   ├── page.tsx                # Homepage
│   ├── about/  rnd/  services/ hardware/  trainings/  testimonials/
│   ├── team/  partners/  events/  careers/  faq/  contact/  blog/  chat/
│   ├── trainings/[slug]/       # Dynamic course-detail pages
│   ├── legal/{privacy,terms,refund}/
│   ├── sitemap.ts  robots.ts   # SEO route handlers
│   └── api/                    # REST + streaming endpoints (see API reference)
├── components/
│   ├── Navbar.tsx              # Sticky nav, mobile menu, EN/FR toggle
│   └── Footer.tsx              # Footer link columns + legal/contact strip
└── lib/
    ├── db.ts                   # Singleton PrismaClient
    ├── auth.ts                 # Password hashing + JWT helpers
    └── i18n.ts                 # getLocale() + Locale type for the EN/FR system

prisma/
├── schema.prisma              # Data model
├── migrations/                # SQL migrations
└── dev.db                     # Local SQLite database
```

Path alias: `@/*` → `src/*`.

---

## Pages & functionality

All public pages are server-rendered, fully styled, and available in English and French.

| Route | Page | What it does |
|-------|------|--------------|
| `/` | **Home** | Hero, the "one lab, three ways in" offerings grid (Product engineering / Consulting & hardware / Training), the R&D product showcase with an honest status roadmap, and a CTA. |
| `/about` | **About** | Company story (founded 2023, HQ New York), mission/vision, values, and how the team works. |
| `/rnd` | **Research & Development** | The three R&D products: Cross-Border Payments (beta), AI Job Matching (in development), and Immigration Assist (planned), with a roadmap stage-track and the "how we build" approach. |
| `/services` | **Consulting** | Five consulting service offerings and the engagement model. |
| `/hardware` | **Hardware** | Enterprise Mac catalog with client-side category filtering, custom-config and volume-order info. |
| `/trainings` | **Training** | Training disciplines (cybersecurity, networking, AI/software) with certification-prep framing. |
| `/trainings/[slug]` | **Course detail** | Per-course curriculum/modules. Dynamic route with `generateStaticParams` + `generateMetadata`. |
| `/team` | **Team** | The team presented **by function** (Engineering, Hardware, Training, Research, Operations), with no individual names. |
| `/partners` | **Partners** | An honest "open to partnership" page describing the kinds of partners sought. |
| `/testimonials` | **Testimonials** | Early-stage statement inviting first reference clients (no fabricated quotes). |
| `/events` | **Events** | Honest empty-state (no events scheduled yet) with a notify CTA. |
| `/careers` | **Careers** | Benefits and an open invitation to apply. |
| `/faq` | **FAQ** | Accordion of questions across Trainings / Hardware / R&D / General (client component). |
| `/contact` | **Contact** | Contact form (name, email, topic, message) posting to `/api/contact`, plus an info sidebar. |
| `/blog` | **Journal** | Launch announcement and newsletter signup. |
| `/chat` | **AI advisor** | Streaming chat with an AI assistant that guides visitors to the right offering. |
| `/legal/privacy` `/legal/terms` `/legal/refund` | **Legal** | Privacy policy, terms of service, and refund policy. |

Plus SEO routes: `/sitemap.xml` and `/robots.txt`.

---

## Internationalization (EN/FR)

The site is bilingual using a **cookie-based locale** (no `/fr` URLs; the path stays
the same in both languages).

- **`src/lib/i18n.ts`** exposes `getLocale()` (reads the `lang` cookie server-side,
  defaults to `en`) and the `Locale` type (`"en" | "fr"`).
- The **root layout** is `async`, reads the locale, sets `<html lang>`, and passes the
  locale to the Navbar and Footer. (Reading the cookie here makes every page
  dynamically rendered, which is intentional.)
- Each page defines a local `const copy = { en: {...}, fr: {...} } as const` and renders
  text from `copy[locale]`. Client components (`hardware`, `faq`, `contact`, `chat`)
  read the cookie in a `useEffect` instead of calling `getLocale()`.
- The **EN/FR switch** lives in the Navbar: it sets the `lang` cookie and calls
  `router.refresh()`, which re-renders the server components in the chosen language.
- Page `<title>` metadata is intentionally kept in English.

To add a page, copy the pattern from `src/app/page.tsx`.

---

## API reference

REST + streaming endpoints under `src/app/api/`. Public read endpoints filter on
`published: true`. Endpoints marked **🔒** require a `Bearer <token>` in the
`Authorization` header.

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `/api/auth/register` | `POST` | Create a user; returns a JWT. |
| `/api/auth/login` | `POST` | Verify credentials; returns a JWT. |
| `/api/courses` | `GET`, `POST` | List published courses (optional `?category=`); create a course. |
| `/api/courses/[slug]` | `GET` | Fetch a single course by slug. |
| `/api/products` | `GET`, `POST` | List in-stock hardware products; create a product. |
| `/api/blog` | `GET` | List published blog posts. |
| `/api/events` | `GET` | List published events. |
| `/api/enrollments` | `GET`, `POST` 🔒 | A user's training enrollments / enroll in a course. |
| `/api/orders` | `GET`, `POST` 🔒 | A user's hardware orders / place an order. |
| `/api/contact` | `POST` | Submit a contact message (stored in `Contact`). |
| `/api/newsletter` | `POST` | Subscribe an email to the newsletter (`Subscriber`). |
| `/api/chat` | `POST` | Stream an AI assistant reply (text stream). |

Structured fields (e.g. `Course.modules`) are stored as **JSON strings**: stringify on
write, parse on read.

---

## Database

Prisma models (`prisma/schema.prisma`):

| Model | Purpose |
|-------|---------|
| `User` | Account with hashed password and `role` (default `user`). |
| `Course` / `Enrollment` | Training catalog and user enrollments. |
| `Product` / `Order` / `OrderItem` | Hardware catalog and orders. |
| `BlogPost` | Journal articles. |
| `Contact` | Contact-form submissions. |
| `Event` | Events listing. |
| `Subscriber` | Newsletter signups. |

The Prisma client is a singleton (`src/lib/db.ts`) cached on `globalThis` outside
production to survive dev hot-reload. Import it as `import { prisma } from "@/lib/db"`.

---

## Authentication

Stateless JWT. There is no session middleware.

1. `register` / `login` hash/verify the password with **bcryptjs** and return a signed
   token (7-day expiry) containing `{ userId, role }`.
2. The client stores the token and sends it as `Authorization: Bearer <token>`.
3. Protected route handlers parse the header, call `verifyToken`, and respond `401` on
   failure. Each protected route does this inline (no shared wrapper).

Helpers live in `src/lib/auth.ts`.

---

## AI chatbot

`/chat` talks to `src/app/api/chat/route.ts`, which streams responses from Anthropic
Claude via the Vercel AI SDK (`streamText` → `toTextStreamResponse`). The assistant's
persona, company facts, and guardrails are defined entirely in the `system` prompt in
that route. Requires `ANTHROPIC_API_KEY`.

---

## Design system

All styling lives in `src/app/globals.css` as CSS custom properties + component classes
(the site does not use Tailwind utility classes heavily). Highlights:

- **Tokens:** an OKLCH color palette (`--ink*`, `--bg*`, `--line*`, `--accent` green,
  signal colors), spacing/radius scale, and the three font families.
- **Aesthetic:** a clean "research-lab dossier" look with a fine background grid, mono
  eyebrow labels, status pills (Beta / In Development / Planned), and card components.
- **Reusable components:** `.offer-grid` (offerings), `.project` / `.stage-track`
  (R&D roadmap), `.stats-strip`, `.svc-list`, `.hw-grid`, `.milestones`, `.cta-block`,
  `.footer`, and a `.lang-toggle` for the EN/FR switch.

---

## Content policy

Mirigraphix is a **pre-launch company with no public track record**. The site
deliberately contains **no fabricated** metrics, client/learner counts, testimonials,
named partners, individual team-member names, or dated events. Claims are kept
qualitative (status pills, roadmap stages, capability descriptions) until real data
exists. Please preserve this when editing; do not add invented numbers or social proof.

---

## Deployment

The project targets Vercel-style deployment with a PostgreSQL database.

1. Provision a PostgreSQL database and set `DATABASE_URL` to its connection string.
2. Ensure `schema.prisma` `provider` is `postgresql`, then run `npx prisma migrate deploy`
   (or `db push`) against it.
3. Set production env vars: `DATABASE_URL`, `ANTHROPIC_API_KEY`, `JWT_SECRET`,
   and optionally `NEXT_PUBLIC_SITE_URL`.
4. `npm run build` then `npm start` (or deploy to the platform of your choice).

A Replit configuration (`.replit`, `replit.md`) is also included for running on Replit.
