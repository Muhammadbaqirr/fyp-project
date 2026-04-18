import { Button } from '@/components/ui/Button'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { DataTable } from '@/components/ui/DataTable'
import { PageHeader } from '@/components/layout/PageHeader'

export function TimetablePage() {
  return (
    <div>
      <PageHeader
        title="Timetable"
        description="Upload CSV or maintain schedule in forms (FR-5). Punctuality module compares detections to these rows."
      />
      <Card accent className="mb-6">
        <CardTitle>Import CSV</CardTitle>
        <CardDescription className="!mt-1">
          Expected columns example: teacher_id, room, day, start_time, end_time.
        </CardDescription>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <label className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
            <input type="file" accept=".csv" className="text-xs file:mr-2 file:rounded-lg file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand-800 dark:file:bg-brand-950 dark:file:text-brand-200" disabled />
            Choose CSV
          </label>
          <Button disabled>Upload</Button>
        </div>
      </Card>
      <Card>
        <CardTitle>Upcoming slots (sample)</CardTitle>
        <CardDescription className="!mt-1">Preview of normalized timetable rows.</CardDescription>
        <div className="mt-6">
          <DataTable>
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200/90 bg-slate-50/95 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
                  <th className="px-4 py-3 font-semibold">Day</th>
                  <th className="px-4 py-3 font-semibold">Room</th>
                  <th className="px-4 py-3 font-semibold">Slot</th>
                  <th className="px-4 py-3 font-semibold">Instructor</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr className="border-b border-slate-100 dark:border-slate-800/90">
                  <td className="px-4 py-3.5 font-medium">Mon</td>
                  <td className="px-4 py-3.5">A-101</td>
                  <td className="px-4 py-3.5 font-mono text-xs sm:text-sm">09:00–10:30</td>
                  <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-white">
                    Dr. Khan
                  </td>
                </tr>
                <tr className="bg-slate-50/40 dark:bg-slate-800/20">
                  <td className="px-4 py-3.5 font-medium">Mon</td>
                  <td className="px-4 py-3.5">B-204</td>
                  <td className="px-4 py-3.5 font-mono text-xs sm:text-sm">11:00–12:30</td>
                  <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-white">
                    Ms. Ahmed
                  </td>
                </tr>
              </tbody>
            </table>
          </DataTable>
        </div>
      </Card>
    </div>
  )
}
