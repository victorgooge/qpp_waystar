# Quick Payment Pages (QPP)

A hosted, full-stack web application that enables providers to create flexible, branded, self-service payment pages.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript + Vite |
| Backend | Express 5 + TypeScript |
| Database | MySQL 8 (Docker) |
| Payments | Stripe (sandbox) |

## Project Structure

```
qpp/
├── frontend/          # React + Vite app
├── backend/           # Express API
│   └── .env           # Environment variables (see below)
├── db/
│   └── init.sql       # Database schema
├── docker-compose.yml # MySQL service
└── package.json       # Root convenience scripts
```

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/)

## Setup

### 1. Clone the repo

```bash
git clone <repo-url>
cd <repo-name>
```

### 2. Install dependencies

```bash
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

### 3. Configure environment variables

Copy the example and fill in your values:

```bash
cp backend/.env.example backend/.env
```

| Variable | Description |
|----------|-------------|
| `PORT` | Backend server port (default: `3000`) |
| `DB_HOST` | MySQL host (default: `localhost`) |
| `DB_PORT` | MySQL port (default: `3306`) |
| `DB_NAME` | Database name |
| `DB_USER` | MySQL user (use `root` for local dev) |
| `DB_PASSWORD` | Password for `DB_USER` — must match `DB_ROOT_PASSWORD` when using root |
| `DB_ROOT_PASSWORD` | MySQL root password set by Docker |

### 4. Start the database

```bash
npm run db:up
```

To reset the database and re-run migrations:

```bash
npm run db:down -- -v && npm run db:up
```

### 5. Start the backend

```bash
npm run backend
# or: cd backend && npm run dev
```

### 6. Start the frontend

```bash
npm run frontend
# or: cd frontend && npm run dev
```

The app will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Root Scripts

| Script | Description |
|--------|-------------|
| `npm run db:up` | Start MySQL container |
| `npm run db:down` | Stop MySQL container |
| `npm run db:logs` | Tail database container logs |
| `npm run backend` | Start backend dev server |
| `npm run frontend` | Start frontend dev server |

## Database Schema

See [`db/init.sql`](db/init.sql) for the full schema. Core tables:

- `admin_users` — admin portal accounts
- `payment_pages` — QPP configurations (branding, amounts, fields)
- `custom_fields` — dynamic form fields per payment page
- `transactions` — payment records
- `field_responses` — custom field values per transaction
