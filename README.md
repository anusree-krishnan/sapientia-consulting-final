# Sapientia Consulting

A production-ready consulting platform built with React (Vite) + Node.js (Express) + MongoDB.

---

## Quick Start

### 1 — Backend

```bash
cd backend
cp .env.example .env          # edit MONGO_URI if needed
npm install
npm run dev                   # http://localhost:3000
```

> **No MongoDB?** The server starts anyway and stores contact submissions in memory.  
> To use MongoDB locally: `brew services start mongodb-community` (macOS)  
> Or point `MONGO_URI` at a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster.

### 2 — Frontend

```bash
cd frontend
npm install
npm run dev                   # http://localhost:5173
```

Open **http://localhost:5173** — the home page shows a live "Server Connected" badge when the backend is reachable.

---

## Project Structure

```
Sapientia-Consulting/
├── backend/
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── About.jsx
    │   │   └── Contact.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## API Reference

| Method | Endpoint   | Description                       |
|--------|------------|-----------------------------------|
| GET    | /health    | Health check → `{ status: "ok" }` |
| POST   | /contact   | Submit contact form               |
| GET    | /contact   | List all submissions              |

### POST /contact — Request body

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "Hello, I'd like to learn more about your services."
}
```

### POST /contact — Success response

```json
{
  "success": true,
  "message": "Thank you! We'll be in touch soon.",
  "id": "665f1a2b3c4d5e6f7a8b9c0d"
}
```

---

## Sample curl Commands

```bash
# Health check
curl http://localhost:3000/health

# Submit contact form
curl -X POST http://localhost:3000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","email":"jane@example.com","message":"Interested in strategic advisory services."}'

# List all submissions
curl http://localhost:3000/contact
```

---

## Environment Variables

| Variable   | Default                                    | Description         |
|------------|--------------------------------------------|---------------------|
| PORT       | 3000                                       | Backend port        |
| MONGO_URI  | mongodb://localhost:27017/sapientia        | MongoDB connection  |
| NODE_ENV   | development                                | Environment mode    |

---

## Tech Stack

| Layer     | Technology                   |
|-----------|------------------------------|
| Frontend  | React 18, Vite 5, React Router 6, Axios |
| Backend   | Node.js ≥20, Express 4       |
| Database  | MongoDB 7/8 via Mongoose 8   |
| Config    | dotenv                       |
