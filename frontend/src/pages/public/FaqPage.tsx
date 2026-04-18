import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What problem does this system solve?',
    a: 'Institutions often rely on manual classroom visits to verify teaching activity and punctuality. This FYP proposes an AI pipeline (I3D + LSTM) on classroom video to automate activity recognition, summarization, highlight extraction, timetable comparison, and alerts — reducing workload and improving consistency, as described in the project thesis.',
  },
  {
    q: 'How does this relate to the FYP documentation?',
    a: 'The dashboard is designed around the documented functional requirements FR-1 through FR-7: detected activities, text summaries, highlight clips, arrival/departure, timetable validation, alerts, and a unified admin view. The UI also reflects non-functional goals such as HTTPS, role-based access (single admin in this deployment), and HD MP4 playback.',
  },
  {
    q: 'Who can log in?',
    a: 'This frontend demo uses one institutional administrator account (no public registration). The thesis lists additional stakeholder types for a full rollout; this build intentionally scopes access to a single admin, as agreed for the deployment model.',
  },
  {
    q: 'What stack does the thesis specify?',
    a: 'Chapter 3 and 4 reference a React + Tailwind CSS dashboard, REST APIs via Flask or FastAPI, MongoDB or PostgreSQL, and GPU-backed inference for the vision model. The current repository delivers the client layer; wire your backend when endpoints are ready.',
  },
  {
    q: 'Is classroom video stored in the browser?',
    a: 'No. Videos should be uploaded to your server and processed there. The UI provides upload controls and players that bind to URLs returned by your API. See the Privacy page for data-handling expectations.',
  },
]

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl flex-1 px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
        Help
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Frequently asked questions
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Answers are aligned with the FYP scope (AI-Based Classroom Monitoring System, COMSATS Attock).
      </p>

      <div className="mt-10 space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <Card key={item.q} className="!p-0 overflow-hidden transition-shadow hover:shadow-md dark:hover:shadow-card-dark">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-semibold text-slate-900 dark:text-white">
                  {item.q}
                </span>
                <ChevronDown
                  className={`mt-0.5 h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen ? (
                <div className="border-t border-slate-200/80 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:text-slate-400">
                  {item.a}
                </div>
              ) : null}
            </Card>
          )
        })}
      </div>

      <Card className="mt-10">
        <CardTitle>Still need help?</CardTitle>
        <CardDescription className="!mt-2">
          For formal supervision or viva preparation, refer to your thesis and supervisor. For site
          issues, use the contact form.
        </CardDescription>
        <Link
          to="/contact"
          className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
        >
          Go to contact →
        </Link>
      </Card>
    </div>
  )
}
