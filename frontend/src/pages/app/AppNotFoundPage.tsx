import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/layout/PageHeader'

export function AppNotFoundPage() {
  return (
    <div>
      <PageHeader
        title="Page not found"
        description="This dashboard URL does not exist. Use the sidebar to navigate."
      />
      <Link
        to="/app"
        className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
      >
        ← Back to dashboard
      </Link>
    </div>
  )
}
