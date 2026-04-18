import type { LucideIcon } from 'lucide-react'
import { BookOpen, Cpu, LayoutDashboard, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'

export function HomePage() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b border-slate-300/50 dark:border-slate-800/80">
        <div className="absolute inset-0 bg-mesh-light opacity-70 dark:bg-mesh-dark dark:opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-slate-950/30 dark:to-transparent" />
        <div
          className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-400/25 blur-3xl dark:bg-brand-500/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/12"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-tight lg:text-5xl">
              AI-based classroom monitoring,{' '}
              <span className="text-brand-700 dark:text-brand-400">summarized</span> and explained.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              A thesis-aligned system that analyses classroom video with{' '}
              <strong className="font-semibold text-slate-800 dark:text-slate-200">I3D + LSTM</strong>,
              produces summaries and highlight clips, evaluates{' '}
              <strong className="font-semibold text-slate-800 dark:text-slate-200">
                punctuality against timetables
              </strong>
              , and surfaces{' '}
              <strong className="font-semibold text-slate-800 dark:text-slate-200">alerts</strong> — all
              reviewable from one responsive admin dashboard built with{' '}
              <strong className="font-semibold text-slate-800 dark:text-slate-200">
                React and Tailwind CSS
              </strong>
              , as specified in the project documentation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {['FR-1 … FR-7', 'REST API ready', 'HTTPS (NFR)', '720p+ video'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200/80 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/login">
                <Button>Open admin dashboard</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary">About the project</Button>
              </Link>
              <Link to="/faq">
                <Button variant="ghost" className="!text-slate-700 dark:!text-slate-300">
                  Read FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300/40 bg-white/50 py-14 dark:border-slate-800/60 dark:bg-slate-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
            How it works (high level)
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
            Mirrors the architectural workflow in the thesis: upload → AI processing → storage → dashboard.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Card className="h-full !p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/15 text-sm font-bold text-brand-700 dark:text-brand-300">
                    {i + 1}
                  </span>
                  <CardTitle className="!mt-3 !text-base">{s.title}</CardTitle>
                  <CardDescription className="!mt-2 !text-xs">{s.body}</CardDescription>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              What the system delivers
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Direct mapping to Chapter 3 functional requirements (FR-1 through FR-7).
            </p>
          </div>
          <Link
            to="/faq"
            className="text-sm font-semibold text-brand-700 hover:underline dark:text-brand-400"
          >
            Thesis FAQ →
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.title}>
              <Card accent className="h-full !p-6 transition-transform duration-300 hover:-translate-y-0.5">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400">{f.fr}</span>
                <CardTitle className="!mt-3 !text-base">{f.title}</CardTitle>
                <CardDescription className="!mt-2">{f.body}</CardDescription>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-slate-300/40 bg-slate-100/40 py-16 dark:border-slate-800/60 dark:bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
            Architecture at a glance
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            Four layers from the design chapter — client, API, AI engine, persistence.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ArchCard
              icon={LayoutDashboard}
              title="Client layer"
              body="React + Tailwind admin UI: upload, summaries, highlights, punctuality, alerts."
            />
            <ArchCard
              icon={Cpu}
              title="Backend API"
              body="Flask or FastAPI — video intake, job orchestration, JSON to the dashboard."
            />
            <ArchCard
              icon={BookOpen}
              title="AI engine"
              body="I3D + LSTM for spatiotemporal features and activity sequence labelling."
            />
            <ArchCard
              icon={Shield}
              title="Storage"
              body="MongoDB or PostgreSQL for metadata; object storage for video and clips."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ArchCard({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <Card className="!p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <CardTitle className="!mt-4 !text-base !font-bold">{title}</CardTitle>
      <CardDescription className="!mt-2 !text-xs">{body}</CardDescription>
    </Card>
  )
}

const steps = [
  {
    title: 'Upload',
    body: 'Administrator submits classroom MP4 (≥720p) via the dashboard; API stores and queues jobs.',
  },
  {
    title: 'Analyse',
    body: 'Frames and features flow through I3D + LSTM for activity labels, arrival/exit hints, and highlight candidates.',
  },
  {
    title: 'Compare',
    body: 'Detected times are validated against the timetable (CSV or forms) for punctuality status.',
  },
  {
    title: 'Review',
    body: 'Summaries, clips, logs, and alerts surface in the web UI for institutional oversight (FR-7).',
  },
]

const features = [
  {
    fr: 'FR-1',
    title: 'Teacher activity recognition',
    body: 'Classify explaining, writing, interaction, mobile use, and related actions from video.',
  },
  {
    fr: 'FR-2 & FR-3',
    title: 'Summaries & highlights',
    body: 'Text session synopsis plus short MP4 segments for key instructional moments.',
  },
  {
    fr: 'FR-4 — FR-6',
    title: 'Punctuality & alerts',
    body: 'Arrival/departure vs schedule; automated alerts for late, early leave, or absence.',
  },
]
