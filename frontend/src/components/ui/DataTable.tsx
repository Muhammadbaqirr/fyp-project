import type { ReactNode } from 'react'

/** Rounded, elevated table shell for dashboard lists */
export function DataTable({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-card dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-card-dark">
      <div className="overflow-x-auto">{children}</div>
    </div>
  )
}
