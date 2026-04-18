import { Outlet, useLocation } from 'react-router-dom'
import { DashboardShell } from '@/components/layout/DashboardShell'

export function AppLayout() {
  const { pathname } = useLocation()

  return (
    <DashboardShell>
      <div key={pathname} className="animate-admin-enter">
        <Outlet />
      </div>
    </DashboardShell>
  )
}
