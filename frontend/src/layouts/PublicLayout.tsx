import { Outlet } from 'react-router-dom'
import { PublicFooter } from '@/components/layout/PublicFooter'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { SkipLink } from '@/components/layout/SkipLink'

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink />
      <PublicHeader />
      <main
        id="main-content"
        className="flex-1 bg-[#e8edf5] bg-mesh-light outline-none dark:bg-[#101620] dark:bg-mesh-dark"
        tabIndex={-1}
      >
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  )
}
