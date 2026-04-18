import { FileDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/layout/PageHeader'

export function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="Reports & exports"
        description="Download session summaries and punctuality reports (thesis Module 5 FE5). Exports are generated server-side once the reporting service is implemented."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card accent>
          <CardTitle>Monthly punctuality PDF</CardTitle>
          <CardDescription className="!mt-1">Aggregated logs vs timetable (FR-4, FR-5).</CardDescription>
          <Button className="mt-6" variant="secondary" disabled>
            Download (API)
          </Button>
        </Card>
        <Card>
          <CardTitle>Session summary bundle</CardTitle>
          <CardDescription className="!mt-1">ZIP of text summaries for a date range (FR-2).</CardDescription>
          <Button className="mt-6" variant="secondary" disabled>
            Download (API)
          </Button>
        </Card>
      </div>
      <div className="mt-8">
        <EmptyState
          icon={FileDown}
          title="No exports in queue"
          description="After you connect the backend, completed exports and download history can appear here. NFR: keep sensitive reports behind HTTPS and admin auth."
        />
      </div>
    </div>
  )
}
