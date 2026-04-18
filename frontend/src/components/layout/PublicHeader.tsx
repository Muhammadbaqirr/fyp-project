import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { useTheme } from '@/contexts/ThemeContext'

/** Public nav always uses dark chrome (same look in light & dark site theme); only the page body toggles. */
const navClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors md:inline md:rounded-full md:px-3.5 md:py-2 ${
    isActive
      ? 'bg-brand-500/15 text-brand-300 md:ring-1 md:ring-brand-400/40'
      : 'text-slate-400 hover:bg-white/5 hover:text-white md:hover:bg-white/5'
  }`

const navItems = [
  { to: '/', end: true, label: 'Home' },
  { to: '/about', end: false, label: 'About' },
  { to: '/faq', end: false, label: 'FAQ' },
  { to: '/contact', end: false, label: 'Contact' },
  { to: '/privacy', end: false, label: 'Privacy' },
] as const

export function PublicHeader() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#070b12] shadow-lg shadow-black/40 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="relative mx-auto flex min-h-[4rem] max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <div className="min-w-0 shrink">
          <BrandLogo size="md" to="/" onClick={() => setMenuOpen(false)} />
        </div>
        <nav className="hidden items-center gap-1 md:flex md:gap-1">
          {navItems.map(({ to, end, label }) => (
            <NavLink key={to} to={to} end={end} className={navClass}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full bg-slate-800/80 p-2.5 text-slate-300 ring-1 ring-white/10 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          <Link
            to="/login"
            className="hidden rounded-full bg-gradient-to-b from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-900/30 transition-all hover:from-brand-400 hover:to-brand-500 sm:inline-block"
            onClick={() => setMenuOpen(false)}
          >
            Admin login
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <>
          <div
            className="fixed inset-0 top-16 z-30 bg-slate-950/70 backdrop-blur-sm md:hidden"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
          <div className="border-t border-white/10 bg-[#070b12] px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map(({ to, end, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/login"
                className="mt-3 rounded-full bg-gradient-to-b from-brand-500 to-brand-600 py-3 text-center text-sm font-semibold text-white shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                Admin login
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}
