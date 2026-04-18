# Classroom Monitor — page-by-page guide

This document explains **what each screen is for** and **why it is designed** the way it is in the React + Tailwind frontend. Use it with **`doc.extracted.txt`** (thesis text extract) and the PDF in the project root.

**Auth model:** single institutional admin (demo: `admin` / `admin123`); no self-registration.

---

## Layout rules (public vs admin)

- **Public site:** The **header and footer always use dark chrome** (same look as “dark mode” styling). Only the **main content column** switches between light and dark when the user toggles theme—so navigation areas stay visually consistent and separate from the page body.
- **Admin app (`/app`):** **Sidebar, top bar, and admin footer** stay **dark** in both global theme modes. **Main** uses light mesh when the site theme is light, and dark mesh when the site theme is dark.
- **Admin sidebar:** On large screens it is **fixed** so it does **not scroll away**; only the main column (and admin footer) scroll with the page.

---

## Public site (marketing layout)

| Route | Page | Purpose & design intent |
|-------|------|-------------------------|
| `/` | **Home** | Landing: thesis-aligned value proposition (I3D + LSTM, punctuality, alerts, React/Tailwind), tags, CTAs to login / About / FAQ. Hero centered; workflow, FR mapping, and architecture cards below. |
| `/about` | **About** | Project background, team, institution, supervisor. |
| `/faq` | **FAQ** | Short answers for examiners and visitors. |
| `/contact` | **Contact** | Stakeholder / department contact. |
| `/privacy` | **Privacy** | Brief policy for sensitive classroom data. |
| `/login` | **Login** | Entry to admin app; theme-aware **card** (page body), not the nav chrome. |
| `*` (public) | **Not found** | 404 outside `/app`. |

---

## Admin app (authenticated layout)

| Route | Page | Purpose & design intent |
|-------|------|-------------------------|
| `/app` | **Dashboard** | FR-7 overview: greeting, KPI cards, quick links, recent activity placeholder, skeleton on first paint. |
| `/app/sessions` | **Sessions & upload** | Video upload UI + session table with Open actions. |
| `/app/sessions/:id` | **Session detail** | Summary, highlight placeholder, activity timeline (FR-1–3). |
| `/app/highlights` | **Highlights** | FR-3 highlight reels placeholder. |
| `/app/punctuality` | **Punctuality** | FR-4 / FR-5 logs concept. |
| `/app/alerts` | **Alerts** | FR-6 alerts list. |
| `/app/analytics` | **Analytics** | Charts (lazy-loaded Recharts): punctuality + high-contrast activity mix. |
| `/app/reports` | **Reports** | Export placeholders. |
| `/app/teachers` | **Teachers** | Directory placeholder. |
| `/app/timetable` | **Timetable** | FR-5 schedule UI. |
| `/app/settings` | **Settings** | Admin preferences shell. |
| `*` under `/app` | **App 404** | In-app missing route. |

---

## Project files (reference)

| Asset | Role |
|-------|------|
| `doc.extracted.txt` | Thesis/document text extract. |
| `FYP_Docummentation__for_7th_and_8th_semester___1_ (4).pdf` | Source thesis PDF. |
| `frontend/` | Vite + React + TypeScript; `npm run build` → `frontend/dist/`. |

---

*Aligned with `frontend/src/App.tsx` routes.*
