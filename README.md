# Baksos Pengobatan Dukkes (Mobile-first)

Aplikasi web mobile-first untuk registrasi, antrean, triage, pemeriksaan, farmasi, rujukan, dokumen, dan laporan kegiatan bakti sosial kesehatan.

## Stack
- React + Vite + TypeScript + Tailwind
- React Router + Zustand (bisa dikembangkan)
- Vercel Functions API (`/api/*`)
- PostgreSQL + Drizzle ORM
- Vercel Blob untuk upload dokumen
- Zod untuk validasi

## Jalankan lokal
1. `cp .env.example .env`
2. `npm install`
3. `npm run db:generate`
4. `npm run db:migrate`
5. `npm run db:seed`
6. `npm run dev`

## Build
- `npm run build`

## Deploy Vercel
- Import repo ke Vercel.
- Set env vars: `DATABASE_URL`, `BLOB_READ_WRITE_TOKEN`, `VITE_API_BASE_URL`.
- Pastikan Postgres + Blob sudah aktif di project Vercel.

## Struktur utama
- `src/` frontend mobile-first (header + bottom nav + card UI)
- `api/` Vercel Functions route
- `db/` schema dan client Drizzle
- `scripts/seed.ts` dummy seed

## Role-based access (sederhana)
- Admin: semua modul
- Dokter: pemeriksaan medis
- Perawat: triage
- Farmasi: obat + resep
- Relawan: registrasi pasien

## Catatan
- Endpoint API sudah disiapkan sesuai kebutuhan dan siap dihubungkan ke DB penuh.
- Seed saat ini berupa placeholder script yang dapat diperluas menjadi insert nyata.
