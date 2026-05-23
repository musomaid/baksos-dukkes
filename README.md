# Baksos Pengobatan Dukkes

Aplikasi mobile-first PWA berbasis Next.js App Router + TypeScript.

## Setup
1. `cp .env.example .env.local`
2. Isi `DATABASE_URL` (Neon Postgres/Vercel Postgres), `BLOB_READ_WRITE_TOKEN`, `JWT_SECRET`.
3. `npm install`
4. `npm run db:migrate`
5. `npm run db:seed`
6. `npm run dev`

## Halaman
- /
- /patients
- /patients/new
- /patients/[id]
- /services
- /visits/[id]
- /pharmacy
- /reports
- /settings

## API
Semua route tersedia di `app/api/**/route.ts` sesuai requirement.

## Deploy Vercel
- Import repo ke Vercel.
- Tambah Postgres dari Vercel Marketplace (contoh Neon), salin `DATABASE_URL`.
- Tambah Vercel Blob, salin `BLOB_READ_WRITE_TOKEN`.
- Set env variables di Project Settings.
- Deploy.
