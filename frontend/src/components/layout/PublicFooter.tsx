import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BrandLogo } from '@/components/brand/BrandLogo'

const links = [
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/login', label: 'Admin' },
]

/** Footer matches dark-mode chrome in all site themes; main content area alone is light/dark. */
export function PublicFooter() {
  return (
    <footer className="relative mt-auto border-t border-white/[0.08] bg-[#050810] text-slate-400 shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <BrandLogo size="lg" to="/" showTagline />
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
              AI-assisted classroom oversight: activity detection, session summaries, highlight reels,
              punctuality vs timetable, and alerts — built for a single institutional administrator.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-brand-300 ring-1 ring-brand-500/25">
                I3D + LSTM
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
                React · Tailwind
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="border-b border-brand-500/30 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-200">
                Navigate
              </h3>
              <ul className="mt-5 space-y-1">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="group flex items-center gap-1 rounded-lg py-1.5 text-[15px] font-medium text-slate-400 transition-colors hover:text-brand-300"
                    >
                      <ChevronRight
                        className="h-3.5 w-3.5 shrink-0 text-brand-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span className="group-hover:underline group-hover:decoration-brand-500/50 group-hover:underline-offset-4">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="border-b border-brand-500/30 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-200">
                Institution
              </h3>
              <p className="mt-5 text-sm font-medium leading-relaxed text-slate-400">
                COMSATS University Islamabad
                <br />
                <span className="text-slate-500">Attock Campus, Pakistan</span>
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="border-b border-brand-500/30 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-200">
                Access
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                Dashboard access is restricted to one designated admin per deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Half-cut decorative line (centered segment, fades at ends) */}
        <div className="mt-14 flex justify-center px-4" aria-hidden>
          <div className="h-px w-full max-w-lg bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-semibold text-slate-300">
            © {new Date().getFullYear()} Final Year Project — BS Artificial Intelligence
          </p>
          <p className="text-sm text-slate-500">Supervisor: Dr. Zahoor ur Rehman</p>
        </div>
      </div>
    </footer>
  )
}
