import { useMemo } from 'react'

export function DashboardGreeting({ username }: { username: string | null }) {
  const { greeting, dateLabel } = useMemo(() => {
    const h = new Date().getHours()
    const greeting =
      h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'
    const dateLabel = new Intl.DateTimeFormat(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    }).format(new Date())
    return { greeting, dateLabel }
  }, [])

  const name = username ? username.charAt(0).toUpperCase() + username.slice(1) : 'Admin'

  return (
    <div className="mb-6 border-b border-slate-200/80 pb-8 dark:border-slate-700/60">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Classroom Monitor
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          {greeting},{' '}
          <span className="text-brand-600 dark:text-brand-400">{name}</span>
        </h2>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400">
          Here’s what’s happening with your monitoring pipeline today.
        </p>
        <div className="mt-5 rounded-2xl border border-slate-200/90 bg-white/90 px-6 py-3 shadow-sm ring-1 ring-slate-200/50 dark:border-slate-700/60 dark:bg-slate-900/70 dark:ring-white/5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-500">
            Today
          </p>
          <p className="mt-0.5 font-display text-base font-semibold text-slate-800 dark:text-slate-100 sm:text-lg">
            {dateLabel}
          </p>
        </div>
      </div>
    </div>
  )
}
