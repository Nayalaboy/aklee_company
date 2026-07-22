<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Standard commands (`npm run dev` on port **5000**, `npm run lint`, `npm run build`) are in `README.md`/`CLAUDE.md`. There is no test framework. Notes below are the non-obvious startup caveats for this environment.

### Database: use local PostgreSQL, not SQLite

`README.md`/`CLAUDE.md` describe local dev on SQLite (`file:./dev.db`), but that path is unusable without editing committed code: `prisma/schema.prisma` declares `provider = "postgresql"`, so the generated Prisma client rejects any `file:` URL at runtime (`the URL must start with the protocol postgresql://`). All DB-backed API routes (`/api/courses`, `/api/products`, `/api/auth/*`, `/api/contact`, etc.) then return `500 Internal server error`. Do **not** switch the schema to SQLite — instead run Postgres so `DATABASE_URL` agrees with the committed `postgresql` provider.

A local PostgreSQL 16 cluster is provisioned with role/db `mirigraphix` (password `mirigraphix`). `.env` already points `DATABASE_URL` at it. The cluster is not auto-started on a fresh VM — start it and sync the schema before running the dev server:

```bash
sudo pg_ctlcluster 16 main start          # start Postgres (idempotent; "already running" is fine)
npx prisma db push                         # create/sync tables (schema is postgresql; safe to re-run)
npm run dev                                # dev server on http://localhost:5000
```

The database ships **empty** (no seed script), so public read endpoints return empty arrays until rows with `published: true` exist. You can create data via the API (e.g. `POST /api/auth/register`, `POST /api/courses`) or `npx prisma studio`.

### Other

- `.env` is gitignored and holds `DATABASE_URL` + `JWT_SECRET`. `ANTHROPIC_API_KEY` is only needed for the `/chat` page's `/api/chat` streaming route; the rest of the site works without it.
- If you edit `prisma/schema.prisma`, re-run `npx prisma generate` (also runs via `postinstall`/`build`) and `npx prisma db push`.
