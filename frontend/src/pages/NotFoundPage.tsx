import { Link } from 'react-router-dom'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[55vh] flex-1 flex-col items-center justify-center px-4 py-20">
      <Card accent className="max-w-md text-center !p-10">
        <p className="font-display text-7xl font-bold tabular-nums text-slate-200 dark:text-slate-700">
          404
        </p>
        <CardTitle className="!mt-4 !text-xl">Page not found</CardTitle>
        <CardDescription className="!mt-2">
          The URL may be mistyped, or the page was moved.
        </CardDescription>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-b from-brand-500 to-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-900/20"
        >
          Go home
        </Link>
      </Card>
    </div>
  )
}
