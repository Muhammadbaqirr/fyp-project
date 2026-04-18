# Classroom Monitor — frontend

React (Vite + TypeScript) + Tailwind CSS admin dashboard for the **AI-Based Classroom Monitoring** FYP, with **light/dark** theme.

## Structure

```
frontend/
├── src/
│   ├── components/     # UI + layout (header, sidebar, shell)
│   ├── contexts/       # Theme + auth (single admin)
│   ├── layouts/        # Public vs app shell
│   ├── lib/            # Auth helpers
│   ├── pages/
│   │   ├── public/     # Home, About, Contact, Privacy
│   │   ├── auth/       # Login only (no register)
│   │   └── app/        # Protected dashboard routes
│   ├── routes/
│   ├── App.tsx
│   └── main.tsx
├── public/
└── index.html
```

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # uses npx so tsc/vite work without global installs (Windows-friendly)
npm run preview
npm run lint
```

Requires **Node.js** with npm; devDependencies include **TypeScript** and **`@types/node`** (for `vite.config.ts`).

## Demo login (replace with API)

Use username **`admin`** and password **`admin123`** to create a local session (`localStorage`). Production should use your FastAPI/Flask JWT or session cookies.

## Routes

| Path | Area |
|------|------|
| `/` | Landing |
| `/about`, `/faq`, `/contact`, `/privacy` | Public |
| `/login` | Admin sign-in |
| `/app` | Dashboard (protected) |
| `/app/sessions`, `/app/sessions/:id` | Upload + session detail |
| `/app/highlights`, `/app/punctuality`, `/app/alerts` | Core modules |
| `/app/analytics`, `/app/reports` | Insights & exports |
| `/app/teachers`, `/app/timetable` | Directory & schedule |
| `/app/settings` | Theme + prefs |
