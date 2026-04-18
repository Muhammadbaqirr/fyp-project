import { useCallback, useId, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { OpenSessionLink } from '@/components/ui/AdminNavButton'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { DataTable } from '@/components/ui/DataTable'
import { PageHeader } from '@/components/layout/PageHeader'

const mockSessions = [
  { id: 'ses-101', title: 'Room A — CS-301', status: 'Completed', date: '2025-03-18' },
  { id: 'ses-102', title: 'Room B — AI-401', status: 'Processing', date: '2025-03-19' },
  { id: 'ses-103', title: 'Lab 2 — Workshop', status: 'Queued', date: '2025-03-19' },
]

export function SessionsPage() {
  const inputId = useId()
  const [file, setFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)

  const pickFile = useCallback((f: File | undefined | null) => {
    if (f) setFile(f)
  }, [])

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      pickFile(e.dataTransfer.files[0])
    },
    [pickFile],
  )

  return (
    <div>
      <PageHeader
        title="Sessions & upload"
        description="Upload classroom video (MP4, 720p+). When your API is ready, wire the same file object to your upload endpoint."
      />
      <Card accent className="mb-8">
        <CardTitle>Upload video</CardTitle>
        <CardDescription>
          Drop a video here or click to choose. MP4 recommended (720p+).
        </CardDescription>
        <div className="mt-6 flex flex-wrap items-stretch gap-4">
          <label
            htmlFor={inputId}
            onDragOver={(e) => {
              e.preventDefault()
              setDragOver(true)
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={[
              'flex min-h-[10rem] min-w-[200px] flex-1 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 text-center transition-colors',
              dragOver
                ? 'border-brand-500 bg-brand-50/60 dark:border-brand-400 dark:bg-brand-950/40'
                : 'border-slate-300/90 bg-slate-50/50 hover:border-brand-400/60 hover:bg-brand-50/30 dark:border-slate-600 dark:bg-slate-800/30 dark:hover:border-brand-500/40',
            ].join(' ')}
          >
            <input
              id={inputId}
              type="file"
              accept="video/mp4,video/*"
              className="sr-only"
              onChange={(e) => pickFile(e.target.files?.[0])}
            />
            <span className="text-base font-bold text-slate-800 dark:text-slate-100">
              {file ? file.name : 'Drop file or browse'}
            </span>
            <span className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {file
                ? `${(file.size / (1024 * 1024)).toFixed(1)} MB · ready to queue`
                : 'Drag and drop or tap to select'}
            </span>
          </label>
          <div className="flex items-end">
            <Button
              disabled={!file}
              onClick={() => {
                if (!file) return
                // Replace with fetch() to your upload API when available
                window.alert(
                  `Ready to upload “${file.name}” — connect your FastAPI/Flask endpoint to transfer this file.`,
                )
              }}
            >
              Start upload
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <CardTitle>Session list</CardTitle>
        <CardDescription className="!mt-1">Recent processing jobs (mock data).</CardDescription>
        <div className="mt-6">
          <DataTable>
            <table className="w-full min-w-[480px] text-left text-[15px]">
              <thead>
                <tr className="border-b border-slate-200/90 bg-slate-50/95 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
                  <th className="px-4 py-3 font-bold">Session</th>
                  <th className="px-4 py-3 font-bold">Date</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                  <th className="px-4 py-3 font-bold" />
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                {mockSessions.map((s, i) => (
                  <tr
                    key={s.id}
                    className={`border-b border-slate-100 last:border-0 dark:border-slate-800/90 ${
                      i % 2 === 1 ? 'bg-slate-50/40 dark:bg-slate-800/20' : ''
                    }`}
                  >
                    <td className="px-4 py-3.5 font-bold text-slate-900 dark:text-white">
                      {s.title}
                    </td>
                    <td className="px-4 py-3.5">{s.date}</td>
                    <td className="px-4 py-3.5">
                      <StatusBadge status={s.status} />
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <OpenSessionLink to={`/app/sessions/${s.id}`} />
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

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Completed:
      'bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:ring-emerald-800/50',
    Processing:
      'bg-amber-100 text-amber-900 ring-1 ring-amber-200/80 dark:bg-amber-950/50 dark:text-amber-200 dark:ring-amber-800/50',
    Queued:
      'bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-600',
  }
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${colors[status] || ''}`}
    >
      {status}
    </span>
  )
}
