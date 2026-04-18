import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { PageHeader } from '@/components/layout/PageHeader'

const alerts = [
  { id: '1', type: 'Late arrival', detail: 'Room A-101 · +7 min', time: '2h ago', read: false },
  { id: '2', type: 'Early departure', detail: 'Room B-204 · −12 min', time: '1d ago', read: true },
  { id: '3', type: 'Absence', detail: 'Lab-1 · no instructor detected', time: '1d ago', read: false },
]

export function AlertsPage() {
  return (
    <div>
      <PageHeader
        title="Alerts"
        description="Automated notifications from timetable comparison (FR-6). Optional email/SMS can be added server-side."
      />
      <ul className="space-y-4">
        {alerts.map((a) => (
          <li key={a.id}>
            <Card
              className={`!p-0 overflow-hidden ${
                !a.read
                  ? 'ring-2 ring-brand-500/25 shadow-glow dark:ring-brand-400/20'
                  : ''
              }`}
            >
              <div className="flex gap-0">
                <div
                  className={`w-1 shrink-0 ${!a.read ? 'bg-gradient-to-b from-brand-400 to-brand-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                />
                <div className="flex flex-1 flex-wrap items-start justify-between gap-3 p-5">
                  <div>
                    <div className="flex items-center gap-2">
                      {!a.read ? (
                        <span className="h-2 w-2 rounded-full bg-brand-500 shadow-sm shadow-brand-500/50" />
                      ) : null}
                      <CardTitle className="!text-base">{a.type}</CardTitle>
                    </div>
                    <CardDescription className="!mt-1 !text-sm">{a.detail}</CardDescription>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {a.time}
                  </span>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
