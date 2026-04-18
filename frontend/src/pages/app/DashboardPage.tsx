import { Bell, ChevronRight, Clock, Video } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { DashboardGreeting } from '@/components/layout/DashboardGreeting'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { MiniSparkline } from '@/components/ui/MiniSparkline'
import { DashboardSkeleton } from '@/components/ui/Skeleton'
import { PageHeader } from '@/components/layout/PageHeader'

const kpis = [
  {
    label: 'Sessions processed',
    value: '24',
    hint: 'This month',
    Icon: Video,
    tint: 'from-brand-500/25 to-brand-700/10 text-brand-600 dark:text-brand-300 ring-brand-500/25',
    spark: [4, 6, 5, 9, 8, 12, 14, 18, 16, 20, 22, 24],
  },
  {
    label: 'Open alerts',
    value: '3',
    hint: 'Requires review',
    Icon: Bell,
    tint: 'from-amber-500/20 to-amber-700/10 text-amber-600 dark:text-amber-300 ring-amber-500/25',
    spark: [2, 5, 4, 6, 3, 4, 5, 3, 4, 3, 3, 3],
  },
  {
    label: 'On-time rate',
    value: '91%',
    hint: 'Punctuality',
    Icon: Clock,
    tint: 'from-emerald-500/20 to-emerald-700/10 text-emerald-600 dark:text-emerald-300 ring-emerald-500/25',
    spark: [72, 75, 78, 80, 82, 85, 84, 88, 87, 89, 90, 91],
  },
]

export function DashboardPage() {
  const { username } = useAuth()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 420)
    return () => window.clearTimeout(t)
  }, [])

  if (!ready) {
    return (
      <div>
        <DashboardSkeleton />
      </div>
    )
  }

  return (
    <div>
      <DashboardGreeting username={username} />
      <PageHeader
        title="Dashboard"
        description="Overview of classroom monitoring: summaries, highlights, punctuality, and alerts (FR-7)."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {kpis.map((k) => (
          <Card
            key={k.label}
            className="group !p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-card-dark"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {k.label}
                </p>
                <p className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {k.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">{k.hint}</p>
                <div className="mt-3 text-slate-400 dark:text-slate-500">
                  <MiniSparkline points={k.spark} className="h-8 w-20" />
                </div>
              </div>
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ${k.tint}`}
                aria-hidden
              >
                <k.Icon className="h-6 w-6" strokeWidth={2} />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card accent>
          <CardTitle>Quick links</CardTitle>
          <CardDescription className="!mt-1">Jump to the most-used modules.</CardDescription>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                className="group flex items-center justify-between rounded-xl bg-slate-50/80 px-4 py-3 font-semibold text-brand-700 ring-1 ring-slate-200/80 transition-all hover:bg-white hover:shadow-card active:scale-[0.99] dark:bg-slate-800/40 dark:text-brand-300 dark:ring-slate-700 dark:hover:bg-slate-800"
                to="/app/sessions"
              >
                Sessions & upload
                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500" />
              </Link>
            </li>
            <li>
              <Link
                className="group flex items-center justify-between rounded-xl bg-slate-50/80 px-4 py-3 font-semibold text-brand-700 ring-1 ring-slate-200/80 transition-all hover:bg-white hover:shadow-card active:scale-[0.99] dark:bg-slate-800/40 dark:text-brand-300 dark:ring-slate-700 dark:hover:bg-slate-800"
                to="/app/alerts"
              >
                Alerts
                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500" />
              </Link>
            </li>
            <li>
              <Link
                className="group flex items-center justify-between rounded-xl bg-slate-50/80 px-4 py-3 font-semibold text-brand-700 ring-1 ring-slate-200/80 transition-all hover:bg-white hover:shadow-card active:scale-[0.99] dark:bg-slate-800/40 dark:text-brand-300 dark:ring-slate-700 dark:hover:bg-slate-800"
                to="/app/punctuality"
              >
                Punctuality logs
                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500" />
              </Link>
            </li>
          </ul>
        </Card>
        <Card>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription className="!mt-1">
            Live feed will appear when the processing API is connected.
          </CardDescription>
          <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 transition-colors hover:border-brand-200/60 dark:border-slate-700/60 dark:bg-slate-800/30 dark:hover:border-brand-900/40">
              <span className="font-mono text-xs text-slate-400">14:02</span>
              <span>
                Session <strong className="text-slate-800 dark:text-slate-200">ses-102</strong> —
                processing
              </span>
            </li>
            <li className="flex gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 transition-colors hover:border-brand-200/60 dark:border-slate-700/60 dark:bg-slate-800/30 dark:hover:border-brand-900/40">
              <span className="font-mono text-xs text-slate-400">11:40</span>
              <span>Alert: late arrival · Room A-101</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-dashed border-slate-200/90 px-4 py-3 text-slate-500 dark:border-slate-600 dark:text-slate-500">
              … more events from API
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
