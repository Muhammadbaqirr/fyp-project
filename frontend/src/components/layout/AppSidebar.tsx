import {
  BarChart3,
  Bell,
  Calendar,
  Clapperboard,
  Clock,
  FileDown,
  LayoutDashboard,
  Settings,
  Users,
  Video,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { BrandLogo } from '@/components/brand/BrandLogo'

const items = [
  { to: '/app', end: true, label: 'Dashboard', Icon: LayoutDashboard },
  { to: '/app/sessions', end: false, label: 'Sessions & upload', Icon: Video },
  { to: '/app/highlights', end: false, label: 'Highlights', Icon: Clapperboard },
  { to: '/app/punctuality', end: false, label: 'Punctuality', Icon: Clock },
  { to: '/app/alerts', end: false, label: 'Alerts', Icon: Bell },
  { to: '/app/analytics', end: false, label: 'Analytics', Icon: BarChart3 },
  { to: '/app/reports', end: false, label: 'Reports', Icon: FileDown },
  { to: '/app/teachers', end: false, label: 'Teachers', Icon: Users },
  { to: '/app/timetable', end: false, label: 'Timetable', Icon: Calendar },
  { to: '/app/settings', end: false, label: 'Settings', Icon: Settings },
] as const

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
    isActive
      ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md shadow-brand-900/30'
      : 'text-slate-400 hover:bg-white/5 hover:text-white'
  }`

export function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="flex h-full min-h-screen w-full flex-col border-r border-white/10 bg-slate-950 lg:h-screen lg:min-h-0">
      <div className="border-b border-white/10 p-4 lg:p-5">
        <BrandLogo size="sm" to="/app" />
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Single administrator
        </p>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3">
        {items.map(({ to, end, label, Icon }) => (
          <NavLink key={to} to={to} end={end} className={linkClass} onClick={onNavigate}>
            <Icon
              className="h-[18px] w-[18px] shrink-0 opacity-90"
              strokeWidth={2}
              aria-hidden
            />
            <span className="truncate">{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-2 rounded-xl bg-brand-500/10 px-3 py-2 ring-1 ring-brand-500/20">
          <span className="h-2 w-2 shrink-0 rounded-full bg-brand-400 shadow-sm shadow-brand-500/40" />
          <p className="text-[10px] font-medium leading-snug text-brand-200/90">
            UI ready for API · connect backend when available
          </p>
        </div>
      </div>
    </aside>
  )
}
