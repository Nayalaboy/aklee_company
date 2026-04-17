# Mirigraphix Company — Replit Project

## Overview
Full-stack Next.js 16 company website for **Mirigraphix** — a technology company offering professional training, enterprise Mac hardware, and R&D solutions bridging the U.S. and Africa.

## Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL (Replit Helium DB) via Prisma ORM
- **Auth:** JWT (jsonwebtoken) + bcryptjs
- **Language:** TypeScript

## Architecture
- `src/app/` — Next.js App Router pages
- `src/app/api/` — REST API routes (auth, courses, products, blog, events, orders, contact, newsletter)
- `src/components/` — Shared components (Navbar, Footer)
- `src/lib/` — Utilities (db.ts = Prisma client, auth.ts = JWT helpers)
- `prisma/schema.prisma` — PostgreSQL schema

## Design System (Updated April 2026)
- **Primary:** Indigo/Violet (#4f46e5)
- **Secondary:** Cyan (#06b6d4)
- **Accent:** Amber/Gold (#f59e0b)
- **Background:** Soft lavender-white (#f7f7ff)
- **Hero:** Deep cosmic dark purple gradient (`from-[#060412] via-[#1a0e40] to-[#0c1635]`)
- **Cards:** White with rounded-3xl, indigo/amber border, card-hover shadow
- **Content source:** Adapted from github.com/Nayalaboy/aklee_company (simpler R&D descriptions, same colors)

## Pages (all updated — consistent cosmic dark hero design)
- **/** — Homepage: "Innovation. Technology. Impact." hero, R&D featured, stats, 2 testimonials, CTA
- **/rnd** — R&D: Cross-Border Payments (Beta), AI Job Matching (In Dev), Immigration Assistance (Coming Soon) — simple descriptions only
- **/about** — Mission/Vision, Values, Milestones timeline 2023–2026, Global Presence (US + Africa)
- **/testimonials** — 6 testimonials + 2 case studies with premium cards
- **/trainings** — 4 training categories with courses, certs, and stats bar
- **/hardware** — Enterprise hardware catalog, 4 categories (laptops, desktops, tablets, networking)
- **/services** — Consulting services + "How We Work" 4-step process
- **/blog** — 6 real articles (fintech, AI, case study, Security+, design, networking) — no more "coming soon"
- **/contact** — Full contact form + info panel + quick links + dark global office card
- **/faq** — 4 FAQ categories with animated accordion
- **/team** — Executive team + team grid with gradient avatars
- **/careers** — 8 open positions + benefit icons
- **/partners** — 6 partner cards + investor relations + partner CTA
- **/events** — 4 upcoming events with colored top bars + past events archive
- **/legal/privacy, /legal/terms, /legal/refund** — Consistent dark hero + clean card layout

## AI-Generated Images (`public/images/`)
- `hero-bridge.png` — Hero/general
- `rnd-money-transfer.png` — Cross-Border Payments project
- `rnd-job-app.png` — AI Job Matching project
- `rnd-immigration.png` — Immigration Assistance project

## Environment Variables
- `DATABASE_URL` — PostgreSQL connection string (Replit Helium)
- `JWT_SECRET` — Secret for signing JWT tokens
- `SESSION_SECRET` — Session secret

## Running
- **Dev:** `npm run dev` → port 5000
- **Workflow:** "Start application" configured in Replit

## Database
- Provider: PostgreSQL (Helium)
- Schema pushed with: `npx prisma db push`
- Models: User, Course, Enrollment, Product, Order, OrderItem, BlogPost, Contact, Event, Subscriber
