# Baksos Pengobatan Dukkes (Mobile-first)

Aplikasi web mobile-first untuk registrasi, antrean, triage, pemeriksaan, farmasi, rujukan, dokumen, dan laporan kegiatan bakti sosial kesehatan.

## Solusi cepat untuk layar **New Project – Vercel**

Jika Anda sedang di halaman yang tampil seperti screenshot (Import repo GitHub → pilih framework, build command, output directory, env), isi seperti ini:

### 1) Konfigurasi utama (persis)
- **Project Name**: `baksos-dukkes`
- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

> Konfigurasi ini sudah sesuai dengan `package.json` dan `vercel.json` di repo ini.

### 2) Environment Variables yang wajib diisi
Tambahkan variable berikut di Vercel (minimal untuk **Production** dan **Preview**):

- `DATABASE_URL`
- `BLOB_READ_WRITE_TOKEN`
- `JWT_SECRET`
- `APP_ENV`
- `VITE_APP_NAME`
- `VITE_API_BASE_URL` (opsional; kosongkan jika frontend pakai same-origin `/api`)

Contoh nilai aman:
- `APP_ENV=production`
- `VITE_APP_NAME=Baksos Pengobatan Dukkes`
- `JWT_SECRET` = random string kuat (>= 32 karakter)

### 3) Klik **Deploy**
Setelah itu klik tombol deploy. Vercel akan:
1. install dependency (`npm install`)
2. build app (`npm run build`)
3. publish hasil build dari folder `dist`

### 4) Cek hasil deploy
Setelah deployment sukses:
- Buka domain Vercel Anda.
- Coba refresh halaman selain `/api/*` (harus tetap jalan karena SPA rewrite aktif).
- Tes endpoint API, misalnya `/api/dashboard`.

---

## Kenapa config ini benar?
Project ini sudah punya `vercel.json`:
- framework: `vite`
- build command: `npm run build`
- output: `dist`
- rewrite SPA yang **tidak mengganggu** route API `/api/*`

Jadi nilai default di layar New Project tinggal disamakan seperti poin di atas.

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

## Deploy Vercel (opsi CLI)
```bash
npm i -g vercel
vercel
vercel --prod
```

## Struktur utama
- `src/` frontend mobile-first
- `api/` Vercel Functions route
- `db/` schema dan client Drizzle
- `scripts/seed.ts` seed data
