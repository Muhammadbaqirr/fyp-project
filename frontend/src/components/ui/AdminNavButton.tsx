import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Dark admin bar — “back to marketing site” (user-preferred pill style). */
export function AdminExitLink({ to = '/' }: { to?: string }) {
  return (
    <Link
      to={to}
      className="group hidden items-center gap-2 rounded-full border border-white/20 bg-gradient-to-b from-white/[0.12] to-white/[0.04] px-4 py-2.5 text-sm font-bold tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 transition hover:border-brand-400/45 hover:from-brand-500/25 hover:to-brand-600/10 hover:text-brand-100 hover:shadow-[0_0_20px_-4px_rgba(45,212,191,0.35)] sm:inline-flex"
    >
      <ArrowLeft
        className="h-4 w-4 shrink-0 text-brand-300 transition group-hover:-translate-x-0.5 group-hover:text-brand-200"
        strokeWidth={2.5}
      />
      Public site
    </Link>
  )
}

/** Light table rows — primary session action. */
export function OpenSessionLink({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-teal-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-brand-900/25 ring-1 ring-white/30 transition hover:from-brand-500 hover:via-teal-500 hover:to-teal-500 hover:shadow-lg hover:shadow-brand-500/20 active:scale-[0.98] dark:ring-white/10"
    >
      Open
      <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
    </Link>
  )
}

/** Session detail — back to list on light canvas. */
export function BackToListLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 shadow-sm ring-1 ring-slate-200/80 transition hover:border-brand-300 hover:bg-brand-50/80 hover:text-brand-800 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-600 dark:hover:border-brand-500/40 dark:hover:bg-slate-800/90 dark:hover:text-brand-200"
    >
      <ArrowLeft
        className="h-4 w-4 shrink-0 text-brand-600 transition group-hover:-translate-x-0.5 dark:text-brand-400"
        strokeWidth={2.5}
      />
      {label}
    </Link>
  )
}
