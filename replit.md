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
- **Hero:** Deep cosmic dark purple gradient

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
