# Deploy baksos-dukkes-app ke Vercel (React + Vite + TypeScript)

Panduan ini menyiapkan deployment mobile-first app **Baksos Pengobatan Dukkes** dengan:
- Frontend: React + Vite + TypeScript
- Backend: Vercel Functions di folder `/api`
- Database: Vercel Postgres
- File storage: Vercel Blob

## 1) Konfigurasi Project Vercel

Pengaturan sudah direpresentasikan di `vercel.json`:
- Framework: `vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite agar refresh halaman React tidak 404

`vercel.json`:
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/((?!api/).*)",
      "destination": "/index.html"
    }
  ]
}
```

> Catatan: rewrite di atas **mengecualikan path `/api`** supaya route backend Vercel Functions tetap berfungsi.

## 2) Environment Variables

Tambahkan variable ini di **Vercel Project → Settings → Environment Variables**:

- `DATABASE_URL`
- `BLOB_READ_WRITE_TOKEN`
- `JWT_SECRET`
- `APP_ENV`
- `VITE_APP_NAME`

Contoh nilai awal ada di `.env.example`.

### Rekomendasi scope env

Set masing-masing env minimal untuk environment berikut:
- Development
- Preview
- Production

Rekomendasi:
- `APP_ENV=development|preview|production`
- `VITE_APP_NAME="Baksos Pengobatan Dukkes"`
- `JWT_SECRET` gunakan random string kuat (>= 32 karakter)

## 3) Setup Vercel Postgres (Marketplace)

1. Buka project di Vercel.
2. Masuk ke tab **Storage**.
3. Pilih **Create Database** → **Postgres** (dari Vercel Marketplace).
4. Hubungkan ke project ini.
5. Vercel akan menginjeksi env Postgres (termasuk `DATABASE_URL`) ke environment terkait.
6. Verifikasi bahwa `DATABASE_URL` tersedia di Settings → Environment Variables.

## 4) Setup Vercel Blob

1. Di project yang sama, buka **Storage**.
2. Pilih **Create** → **Blob**.
3. Attach Blob store ke project.
4. Pastikan `BLOB_READ_WRITE_TOKEN` terpasang otomatis.
5. Jika belum, tambahkan manual dari token yang disediakan Blob store.

## 5) Migration & Seed Database

Karena struktur project memiliki `db/migrations` dan `db/seed.ts`, jalankan migration **sebelum production deploy aktif**.

### Opsi A (Disarankan): Jalankan via CI atau pre-deploy script
Tambahkan script pada `package.json` (sesuaikan tool migration yang dipakai):

```json
{
  "scripts": {
    "db:migrate": "<your-migration-command>",
    "db:seed": "<your-seed-command>",
    "build": "vite build"
  }
}
```

Contoh command umum (pilih yang sesuai stack Anda):
- Drizzle: `drizzle-kit migrate`
- Prisma: `prisma migrate deploy`
- Knex: `knex migrate:latest`

Lalu jalankan:

```bash
npm run db:migrate
npm run db:seed
```

### Opsi B: Jalankan manual dari lokal (target remote DB)
1. Pull env dari Vercel:
   ```bash
   vercel env pull .env.production.local
   ```
2. Jalankan migration dan seed:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

## 6) Deploy

## Via Vercel Dashboard
1. Import repository ke Vercel.
2. Pastikan Root Directory mengarah ke folder aplikasi (`baksos-dukkes-app/` jika monorepo).
3. Confirm Build & Output:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

## Via Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

Jika monorepo, jalankan di folder app atau gunakan `--cwd`.

## 7) Checklist akhir sebelum go-live

- [ ] `DATABASE_URL` sudah mengarah ke Postgres production
- [ ] `BLOB_READ_WRITE_TOKEN` terpasang di Production env
- [ ] `JWT_SECRET` berbeda antara preview dan production
- [ ] Migration sukses di production database
- [ ] Seed data dasar sudah terisi (jika dibutuhkan)
- [ ] Refresh halaman selain `/api/*` tidak 404 (SPA rewrite aktif)
- [ ] Endpoint di `/api/*` merespons normal

---

Jika Anda ingin, langkah berikutnya saya bisa bantu buatkan template `package.json` scripts migration/seed spesifik sesuai ORM yang Anda pakai (Drizzle/Prisma/Knex).
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
