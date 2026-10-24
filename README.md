# Belajar Vibe Coding - REST API

REST API boilerplate dibangun menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan database **MySQL**.

## 🛠️ Tech Stack
- **Runtime**: [Bun](https://bun.sh)
- **Web Framework**: [ElysiaJS](https://elysiajs.com)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team)
- **Database Driver**: [mysql2](https://github.com/sidorares/node-mysql2)
- **Database**: MySQL

---

## 🚀 Getting Started

### 1. Prasyarat
Pastikan Anda sudah menginstal **Bun**:
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 2. Environment Setup
Salin file `.env.example` menjadi `.env` lalu sesuaikan konfigurasi database:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=belajar_vibe_coding
```

### 3. Instalasi Dependencies
```bash
bun install
```

### 4. Database Schema & Migration (Drizzle)
Generate file migrasi atau push skema langsung ke database:
```bash
# Push schema langsung ke MySQL (Development)
bun run db:push

# Atau generate migration SQL
bun run db:generate

# Menjalankan Drizzle Studio (Database GUI viewer)
bun run db:studio
```

### 5. Menjalankan Server
```bash
# Development mode (dengan hot reload)
bun run dev

# Production mode
bun run start
```

---

## 📡 API Endpoints
- `GET /` - Root status & info API
- `GET /health` - Health check status & uptime
- `GET /users` - Mengambil daftar data users dari MySQL
- `POST /users` - Menambahkan user baru (JSON: `{ "name": "...", "email": "..." }`)
