import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/components/layout/PageLoader'
import { PublicLayout } from '@/layouts/PublicLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { ProtectedRoute } from '@/routes/ProtectedRoute'
import { HomePage } from '@/pages/public/HomePage'
import { AboutPage } from '@/pages/public/AboutPage'
import { ContactPage } from '@/pages/public/ContactPage'
import { PrivacyPage } from '@/pages/public/PrivacyPage'
import { FaqPage } from '@/pages/public/FaqPage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { DashboardPage } from '@/pages/app/DashboardPage'
import { SessionsPage } from '@/pages/app/SessionsPage'
import { SessionDetailPage } from '@/pages/app/SessionDetailPage'
import { HighlightsPage } from '@/pages/app/HighlightsPage'
import { PunctualityPage } from '@/pages/app/PunctualityPage'
import { AlertsPage } from '@/pages/app/AlertsPage'
import { ReportsPage } from '@/pages/app/ReportsPage'
import { TeachersPage } from '@/pages/app/TeachersPage'
import { TimetablePage } from '@/pages/app/TimetablePage'
import { SettingsPage } from '@/pages/app/SettingsPage'
import { AppNotFoundPage } from '@/pages/app/AppNotFoundPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

/** Code-split: pulls in Recharts only when /app/analytics is opened (fixes large main chunk warning). */
const AnalyticsPage = lazy(async () => {
  const m = await import('@/pages/app/AnalyticsPage')
  return { default: m.AnalyticsPage }
})

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="sessions" element={<SessionsPage />} />
        <Route path="sessions/:sessionId" element={<SessionDetailPage />} />
        <Route path="highlights" element={<HighlightsPage />} />
        <Route path="punctuality" element={<PunctualityPage />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route
          path="analytics"
          element={
            <Suspense fallback={<PageLoader />}>
              <AnalyticsPage />
            </Suspense>
          }
        />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="timetable" element={<TimetablePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<AppNotFoundPage />} />
      </Route>

      <Route path="/dashboard" element={<Navigate to="/app" replace />} />
    </Routes>
  )
}
