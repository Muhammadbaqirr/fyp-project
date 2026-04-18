import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { DataTable } from '@/components/ui/DataTable'
import { PageHeader } from '@/components/layout/PageHeader'

const rows = [
  { teacher: 'Dr. Khan', room: 'A-101', scheduled: '09:00', arrival: '09:02', status: 'Late' },
  { teacher: 'Ms. Ahmed', room: 'B-204', scheduled: '11:00', arrival: '10:58', status: 'On time' },
  { teacher: 'Mr. Ali', room: 'Lab-1', scheduled: '14:00', arrival: '—', status: 'Absent' },
]

export function PunctualityPage() {
  return (
    <div>
      <PageHeader
        title="Punctuality"
        description="Arrival and departure vs timetable (FR-4, FR-5). Data comes from video timestamps compared to schedule."
      />
      <Card accent>
        <CardTitle>Punctuality log</CardTitle>
        <CardDescription className="!mt-1">
          Compare detected first/last presence with the timetable CSV.
        </CardDescription>
        <div className="mt-6">
          <DataTable>
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200/90 bg-slate-50/95 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
                  <th className="px-4 py-3 font-semibold">Instructor</th>
                  <th className="px-4 py-3 font-semibold">Room</th>
                  <th className="px-4 py-3 font-semibold">Scheduled</th>
                  <th className="px-4 py-3 font-semibold">Detected arrival</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.teacher}
                    className={`border-b border-slate-100 last:border-0 dark:border-slate-800/90 ${
                      i % 2 === 1 ? 'bg-slate-50/40 dark:bg-slate-800/20' : ''
                    }`}
                  >
                    <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-white">
                      {r.teacher}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 dark:text-slate-400">{r.room}</td>
                    <td className="px-4 py-3.5 font-mono text-sm">{r.scheduled}</td>
                    <td className="px-4 py-3.5 font-mono text-sm">{r.arrival}</td>
                    <td className="px-4 py-3.5 font-semibold text-slate-800 dark:text-slate-200">
                      {r.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
        </div>
      </Card>
    </div>
  )
}
