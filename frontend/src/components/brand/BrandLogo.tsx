import { Link } from 'react-router-dom'

const sizes = {
  sm: { wrap: 'gap-2', box: 'h-9 w-9 rounded-lg', icon: 'h-4 w-4', text: 'text-base', sub: 'hidden' },
  md: { wrap: 'gap-2.5', box: 'h-10 w-10 rounded-xl', icon: 'h-5 w-5', text: 'text-lg sm:text-xl', sub: 'hidden' },
  lg: { wrap: 'gap-3', box: 'h-12 w-12 rounded-xl', icon: 'h-6 w-6', text: 'text-2xl sm:text-3xl', sub: 'block' },
} as const

function Mark({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinejoin="round"
      />
      <path
        d="M9 9.5h6M9 13h4"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
      />
      <circle cx="17" cy="8" r="2" fill="white" fillOpacity={0.95} />
    </svg>
  )
}

export function BrandLogo({
  size = 'md',
  to = '/',
  showTagline = false,
  onClick,
  /** Use on public header/footer in light mode (dark text on pale chrome). */
  onLightChrome = false,
}: {
  size?: keyof typeof sizes
  to?: string | null
  showTagline?: boolean
  onClick?: () => void
  onLightChrome?: boolean
}) {
  const s = sizes[size]
  const inner = (
    <span className={`flex items-center ${s.wrap}`}>
      <span
        className={`flex shrink-0 ${s.box} items-center justify-center bg-gradient-to-br from-brand-500 to-teal-700 text-white shadow-md shadow-black/20 ring-1 ring-black/10 transition group-hover:brightness-110 dark:ring-white/20`}
      >
        <Mark className={s.icon} />
      </span>
      <span className="min-w-0 text-left leading-snug">
        <span
          className={`font-sans font-semibold tracking-normal ${s.text} block ${
            onLightChrome ? 'text-slate-900' : 'text-white'
          }`}
        >
          Classroom{' '}
          <span
            className={`font-semibold ${onLightChrome ? 'text-brand-600' : 'text-brand-300'}`}
          >
            Monitor
          </span>
        </span>
        {showTagline ? (
          <span
            className={`mt-0.5 block text-[11px] font-medium ${onLightChrome ? 'text-slate-600' : 'text-slate-500'}`}
          >
            AI classroom insights
          </span>
        ) : null}
      </span>
    </span>
  )

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="group inline-flex outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 rounded-lg"
      >
        {inner}
      </Link>
    )
  }
  return <span className="inline-flex">{inner}</span>
}
