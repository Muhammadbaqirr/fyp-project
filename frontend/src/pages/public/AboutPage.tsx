import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl flex-1 px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
        COMSATS University Islamabad, Attock Campus
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        About the project
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Final-year submission for the degree of{' '}
        <strong className="text-slate-800 dark:text-slate-200">BS Artificial Intelligence</strong>{' '}
        (Spring 2025).
      </p>

      <Card accent className="mt-10">
        <CardTitle>Formal title</CardTitle>
        <CardDescription className="!mt-2 text-base font-medium text-slate-800 dark:text-slate-200">
          An AI-Based Classroom Monitoring System Leveraging Computer Vision and Machine Learning
        </CardDescription>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          The work addresses manual, inconsistent supervision of teaching activity by proposing an
          integrated pipeline: deep learning on classroom video for{' '}
          <strong className="text-slate-800 dark:text-slate-200">activity recognition</strong>,{' '}
          <strong className="text-slate-800 dark:text-slate-200">summarization</strong>,{' '}
          <strong className="text-slate-800 dark:text-slate-200">highlight extraction</strong>, and{' '}
          <strong className="text-slate-800 dark:text-slate-200">punctuality evaluation</strong>{' '}
          against institutional timetables, with{' '}
          <strong className="text-slate-800 dark:text-slate-200">automated alerts</strong> — as
          defined in the requirement analysis and design chapters of the thesis.
        </p>
      </Card>

      <Card className="mt-6">
        <CardTitle>Core modules (thesis Ch. 4)</CardTitle>
        <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <li className="rounded-xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/40">
            <strong className="text-slate-900 dark:text-white">Video processing & activity</strong>{' '}
            — frame extraction, I3D features, LSTM classification; outputs feed summaries and
            punctuality.
          </li>
          <li className="rounded-xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/40">
            <strong className="text-slate-900 dark:text-white">Summarization & highlights</strong>{' '}
            — narrative summary and ranked short clips for reviewer efficiency.
          </li>
          <li className="rounded-xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/40">
            <strong className="text-slate-900 dark:text-white">Punctuality & alerts</strong> — compare
            detected presence to timetable; raise late / early / absence notifications.
          </li>
          <li className="rounded-xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/40">
            <strong className="text-slate-900 dark:text-white">Admin web dashboard</strong> — React +
            Tailwind interface for all review tasks (FR-7).
          </li>
        </ul>
      </Card>

      <Card className="mt-6">
        <CardTitle>Team</CardTitle>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li className="flex justify-between gap-4 rounded-xl bg-slate-50/80 px-4 py-3 dark:bg-slate-800/40">
            <span className="font-medium text-slate-900 dark:text-white">Hassan Rasheed</span>
            <span className="font-mono text-xs text-slate-500">CIIT/FA22-BAI-045/ATK</span>
          </li>
          <li className="flex justify-between gap-4 rounded-xl bg-slate-50/80 px-4 py-3 dark:bg-slate-800/40">
            <span className="font-medium text-slate-900 dark:text-white">Muhammad Baqir</span>
            <span className="font-mono text-xs text-slate-500">CIIT/FA22-BAI-020/ATK</span>
          </li>
          <li className="flex justify-between gap-4 rounded-xl bg-slate-50/80 px-4 py-3 dark:bg-slate-800/40">
            <span className="font-medium text-slate-900 dark:text-white">Zaheer Khan</span>
            <span className="font-mono text-xs text-slate-500">CIIT/FA22-BAI-011/ATK</span>
          </li>
        </ul>
      </Card>

      <Card className="mt-6">
        <CardTitle>Supervision</CardTitle>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          <strong className="text-slate-900 dark:text-white">Dr. Zahoor ur Rehman</strong>, Department
          of Computer Science, COMSATS University Islamabad, Attock Campus.
        </p>
        <Link
          to="/faq"
          className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
        >
          Questions? See FAQ →
        </Link>
      </Card>
    </div>
  )
}
