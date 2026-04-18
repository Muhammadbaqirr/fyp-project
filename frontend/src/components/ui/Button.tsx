import type { ButtonHTMLAttributes, ReactNode } from 'react'

const variants = {
  primary:
    'bg-gradient-to-b from-brand-500 to-brand-600 text-white shadow-md shadow-brand-900/15 hover:from-brand-600 hover:to-brand-700 dark:from-brand-500 dark:to-brand-600 dark:hover:from-brand-400 dark:hover:to-brand-500',
  secondary:
    'border border-slate-200/90 bg-white text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700/90',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100/80 dark:text-slate-300 dark:hover:bg-slate-800',
  danger:
    'bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500',
} as const

type Variant = keyof typeof variants

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  variant?: Variant
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  children,
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
