import { useState, type ReactNode } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useTheme } from '@/contexts/ThemeContext'
import { AdminExitLink } from '@/components/ui/AdminNavButton'
import { Button } from '@/components/ui/Button'
import { AdminBreadcrumbs } from '@/components/layout/AdminBreadcrumbs'
import { AppSidebar } from '@/components/layout/AppSidebar'
import { SkipLink } from '@/components/layout/SkipLink'

export function DashboardShell({ children }: { children: ReactNode }) {
  const { logout, username } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#d8e0ea] dark:bg-[#0b0f16] lg:flex-row lg:gap-0">
      <SkipLink />
      <div
        className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        aria-hidden
        onClick={() => setMobileOpen(false)}
      />
      {/* Desktop: fixed rail + content pl so no gutter; mobile: overlay drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[min(17rem,88vw)] max-w-[88vw] transform transition-transform lg:z-30 lg:w-[15.5rem] lg:max-w-none ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <AppSidebar onNavigate={() => setMobileOpen(false)} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col lg:min-h-screen lg:pl-[15.5rem]">
        {/* Same top chrome in light & dark app theme (always “dark bar”) */}
        <header className="sticky top-0 z-30 flex h-[3.25rem] items-center justify-between gap-3 border-b border-white/[0.08] bg-[#020617] px-3 shadow-md shadow-black/40 sm:gap-4 sm:px-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
          <div className="relative flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
            <AdminExitLink />
          </div>
          <div className="relative hidden min-w-0 flex-1 justify-center px-2 md:flex">
            <AdminBreadcrumbs />
          </div>
          <div className="relative flex shrink-0 items-center gap-2 sm:gap-3">
            <span className="hidden max-w-[10rem] truncate rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10 sm:inline">
              {username}
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full bg-slate-800/90 p-2 text-slate-300 ring-1 ring-white/10 hover:bg-slate-800 hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <Button
              variant="secondary"
              className="!border-white/10 !bg-white/10 !py-2 !text-xs !text-white hover:!bg-white/15 sm:!text-sm"
              onClick={() => logout()}
            >
              Log out
            </Button>
          </div>
        </header>
        <main
          id="main-content"
          className="relative flex-1 overflow-x-hidden p-4 outline-none sm:p-6 lg:p-8"
          tabIndex={-1}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-mesh-light opacity-[0.88] dark:bg-mesh-dark dark:opacity-[0.6]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-28 top-[-12%] h-[min(36rem,85vh)] w-[min(36rem,95vw)] rounded-full bg-brand-400/45 blur-3xl dark:bg-brand-400/35"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-[-18%] h-[22rem] w-[22rem] rounded-full bg-violet-400/32 blur-3xl dark:bg-violet-500/26"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/28 blur-3xl dark:bg-teal-500/22"
            aria-hidden
          />
          <div className="relative z-[1] min-h-0">{children}</div>
        </main>

        <footer
          className="relative z-[1] border-t border-white/10 bg-[#020617] px-4 py-6 text-center"
          aria-label="Admin footer"
        >
          <div
            className="mx-auto mb-5 h-px w-1/2 max-w-md bg-gradient-to-r from-transparent via-brand-500/45 to-transparent"
            aria-hidden
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Classroom Monitor</p>
          <p className="mt-2 text-sm text-slate-400">Admin console · institutional monitoring UI</p>
          <p className="mt-3 text-xs text-slate-600">
            © {new Date().getFullYear()} FYP — BS Artificial Intelligence · COMSATS Attock
          </p>
        </footer>
      </div>
    </div>
  )
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}
