export function PageHeader({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="mb-8 border-b border-slate-200/80 pb-6 text-center dark:border-slate-700/60">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
        Admin
      </p>
      <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  )
}
