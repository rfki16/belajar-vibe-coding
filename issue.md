# Task: Setup Project REST API dengan Bun, ElysiaJS, Drizzle ORM & MySQL

## 1. Overview
Inisialisasi project backend baru pada repositori ini menggunakan runtime **Bun**, framework web **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**. Dokumen ini berfungsi sebagai panduan implementasi tingkat tinggi (high-level) bagi pelaksana tugas/model pengembang.

---

## 2. Tech Stack & Dependencies
- **Runtime & Package Manager**: Bun
- **Web Framework**: ElysiaJS (`elysia`)
- **ORM**: Drizzle ORM (`drizzle-orm`)
- **Database Driver**: MySQL driver (`mysql2`)
- **Dev Tools / CLI**: `drizzle-kit`, TypeScript types

---

## 3. High-Level Implementation Steps

### Phase 1: Project Initialization
1. Inisialisasi project TypeScript menggunakan Bun di root folder.
2. Setup file `.gitignore` standar untuk project Node/Bun (abaikan `node_modules`, `.env`, dll).
3. Buat template konfigurasi environment (`.env.example` dan `.env`) untuk menyimpan kredensial database MySQL (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).

### Phase 2: Dependency Installation
1. Install core dependencies:
   - `elysia`
   - `drizzle-orm`
   - `mysql2`
2. Install development dependencies:
   - `drizzle-kit`
   - `@types/bun` (jika belum ada)

### Phase 3: Project Structure & Database Setup
1. Rancang struktur folder modular (misal: `src/` berisi `db/`, `routes/` atau `modules/`, dan file utama `index.ts`).
2. Buat koneksi database:
   - Konfigurasi instance koneksi Drizzle dengan client MySQL membaca dari environment variable.
3. Siapkan konfigurasi Drizzle (`drizzle.config.ts`):
   - Arahkan path schema ke folder schema yang ditentukan.
   - Atur dialect ke `mysql` dan baca kredensial dari `.env`.
4. Buat contoh schema sederhana (misal: tabel `users` atau health-check table) untuk memvalidasi ORM dan migrasi.

### Phase 4: Elysia Server & Routes
1. Buat entry point server Elysia (`src/index.ts`).
2. Buat endpoint dasar:
   - `GET /` atau `GET /health` untuk memastikan server berjalan normal dan dapat merespons request.
   - Endpoint uji coba koneksi database (opsional/sederhana) untuk memastikan query ke MySQL berfungsi.
3. Konfigurasikan script di `package.json` untuk menjalankan server dalam mode development (`bun --watch src/index.ts` atau `bun dev`).

### Phase 5: Database Migration & Scripts
1. Tambahkan scripts di `package.json` untuk pengelolaan database menggunakan `drizzle-kit` (misalnya: `db:generate`, `db:migrate`, `db:push`, `db:studio`).

---

## 4. Acceptance Criteria (Definition of Done)
- [ ] Project berhasil diinisialisasi dengan Bun dan dependencies terpasang tanpa error.
- [ ] File `.env.example` tersedia dengan variabel koneksi MySQL yang jelas.
- [ ] Server Elysia dapat dijalankan menggunakan perintah `bun run dev` (atau `bun dev`).
- [ ] Konfigurasi Drizzle ORM (`drizzle.config.ts`) siap digunakan untuk generate/push skema ke database MySQL.
- [ ] Endpoint dasar dapat diakses dan mengembalikan response sukses (HTTP 200).
- [ ] Kode terorganisir rapi, modular, dan tidak ada kredensial sensitif yang di-hardcode.
