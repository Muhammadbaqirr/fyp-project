import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const SEGMENT_LABELS: Record<string, string> = {
  sessions: 'Sessions',
  highlights: 'Highlights',
  punctuality: 'Punctuality',
  alerts: 'Alerts',
  analytics: 'Analytics',
  reports: 'Reports',
  teachers: 'Teachers',
  timetable: 'Timetable',
  settings: 'Settings',
}

export function AdminBreadcrumbs() {
  const { pathname } = useLocation()
  const rest = pathname.replace(/\/$/, '').split('/').filter(Boolean)

  if (rest.length <= 1) {
    return (
      <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
        <span className="rounded-full bg-brand-500/15 px-3 py-1 font-semibold text-brand-200 ring-1 ring-brand-500/30">
          Overview
        </span>
      </div>
    )
  }

  const crumbs: { to: string; label: string }[] = [{ to: '/app', label: 'Dashboard' }]
  for (let i = 1; i < rest.length; i++) {
    const to = `/${rest.slice(0, i + 1).join('/')}`
    const seg = rest[i]!
    const label =
      SEGMENT_LABELS[seg] ??
      (seg.startsWith('ses-') ? `Session · ${seg}` : seg.replace(/-/g, ' '))
    crumbs.push({ to, label })
  }

  return (
    <nav
      className="flex max-w-full min-w-0 items-center justify-center gap-1 text-sm text-slate-500"
      aria-label="Breadcrumb"
    >
      {crumbs.map((c, i) => (
        <span key={c.to} className="flex min-w-0 items-center gap-1">
          {i > 0 ? <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-600" aria-hidden /> : null}
          {i === crumbs.length - 1 ? (
            <span className="truncate font-medium text-slate-300">{c.label}</span>
          ) : (
            <Link
              to={c.to}
              className="truncate rounded transition-colors hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50"
            >
              {c.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}
