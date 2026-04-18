/** Shown while a lazy-loaded route chunk is downloading */
export function PageLoader() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-4">
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-brand-500 border-t-transparent dark:border-brand-400"
        aria-hidden
      />
      <p className="text-sm text-slate-500 dark:text-slate-400">Loading…</p>
    </div>
  )
}
