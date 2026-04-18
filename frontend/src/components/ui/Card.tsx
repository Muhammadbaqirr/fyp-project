import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  /** Teal left accent */
  accent?: boolean
  padding?: 'md' | 'lg'
}

const pad = { md: 'p-5 sm:p-6', lg: 'p-6 sm:p-8' } as const

export function Card({ children, className = '', accent = false, padding = 'md' }: CardProps) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-2xl',
        pad[padding],
        accent ? 'border-l-[3px] border-brand-500' : '',
        'border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50/95',
        'shadow-card dark:border-slate-700/55 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:shadow-card-dark',
        'ring-1 ring-inset ring-white/60 dark:ring-white/[0.05]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

export function CardTitle({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl ${className}`}
    >
      {children}
    </h2>
  )
}

export function CardDescription({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={`mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400 ${className}`}>
      {children}
    </p>
  )
}
