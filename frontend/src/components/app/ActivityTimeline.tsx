export type TimelineEvent = {
  time: string
  label: string
  detail?: string
  kind?: 'arrival' | 'activity' | 'other'
}

export function ActivityTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <ol className="space-y-0">
      {events.map((e, i) => (
        <li key={`${e.time}-${i}`} className="flex gap-4">
          <div className="flex w-4 shrink-0 flex-col items-center pt-1">
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 border-white shadow-sm dark:border-slate-900 ${
                e.kind === 'arrival'
                  ? 'bg-brand-500 ring-2 ring-brand-500/30'
                  : e.kind === 'activity'
                    ? 'bg-slate-400 dark:bg-slate-500'
                    : 'bg-slate-300 dark:bg-slate-600'
              }`}
              aria-hidden
            />
            {i < events.length - 1 ? (
              <span
                className="mt-1 min-h-[2.75rem] w-0.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"
                aria-hidden
              />
            ) : null}
          </div>
          <div className={`min-w-0 flex-1 ${i < events.length - 1 ? 'pb-6' : ''}`}>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-mono text-xs font-semibold text-brand-600 dark:text-brand-400">
                {e.time}
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{e.label}</span>
            </div>
            {e.detail ? (
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {e.detail}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}
