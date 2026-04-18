import { Card, CardDescription, CardTitle } from '@/components/ui/Card'

const rows = [
  {
    category: 'Classroom video',
    examples: 'Uploaded MP4 recordings, derived frames',
    note: 'Large objects in secure storage; thesis cites 720p minimum and GPU processing.',
  },
  {
    category: 'Inferred activities',
    examples: 'Labels, timestamps, confidence from I3D + LSTM',
    note: 'Tied to sessions; used for FR-1, FR-2, FR-3 outputs.',
  },
  {
    category: 'Punctuality & timetable',
    examples: 'Schedule rows, detected arrival/departure, status',
    note: 'FR-4, FR-5; compared for compliance reporting.',
  },
  {
    category: 'Alerts & audit',
    examples: 'Late arrival, absence, early leave events',
    note: 'FR-6; optional email/SMS per external interface section.',
  },
  {
    category: 'Accounts',
    examples: 'Admin credentials, session tokens',
    note: 'NFR: HTTPS, role-based access; this build uses one admin demo login.',
  },
]

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl flex-1 px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
        Data governance
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Privacy & data
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Summary of sensitive categories implied by the FYP functional and non-functional
        requirements. Final policies belong to the deploying institution.
      </p>

      <Card accent className="mt-10">
        <CardTitle>Transmission & storage</CardTitle>
        <CardDescription className="!mt-2 leading-relaxed">
          The thesis requires <strong className="text-slate-800 dark:text-slate-200">HTTPS</strong>{' '}
          between browser and API. Classroom video, behavioural inferences, and attendance-like
          punctuality data are <strong className="text-slate-800 dark:text-slate-200">highly sensitive</strong>
          : host only on infrastructure your institution approves, with backups and access logging.
        </CardDescription>
      </Card>

      <Card className="mt-6">
        <CardTitle>Data categories (thesis-aligned)</CardTitle>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-700">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Examples</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              {rows.map((r) => (
                <tr key={r.category} className="border-b border-slate-100 last:border-0 dark:border-slate-800">
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                    {r.category}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.examples}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mt-6">
        <CardTitle>Access control</CardTitle>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Only the <strong className="text-slate-800 dark:text-slate-200">institutional administrator</strong>{' '}
          should receive production credentials. The thesis discusses multiple user classes for a full
          campus rollout; this repository implements a single admin surface to match the agreed scope.
        </p>
      </Card>

      <Card className="mt-6">
        <CardTitle>Retention & consent</CardTitle>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>Define how long raw video and derived features are kept (institutional policy + law).</li>
          <li>Document consent or statutory basis for recording where required.</li>
          <li>Provide a channel for data subject requests if applicable in your jurisdiction.</li>
        </ul>
      </Card>
    </div>
  )
}
