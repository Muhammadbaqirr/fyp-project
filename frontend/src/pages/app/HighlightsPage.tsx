import { Clapperboard } from 'lucide-react'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/layout/PageHeader'

/** Set to `[]` to preview the empty state (FR-3 with no processed clips yet). */
const clips = [
  { id: 'h1', session: 'ses-101', label: 'Board work segment', duration: '0:42' },
  { id: 'h2', session: 'ses-101', label: 'Q&A highlight', duration: '1:05' },
  { id: 'h3', session: 'ses-102', label: 'Lecture peak', duration: '0:38' },
]

export function HighlightsPage() {
  return (
    <div>
      <PageHeader
        title="Highlights"
        description="Short clips representing major classroom activities (FR-3). Filter and play across sessions once the summarization module returns clip URLs."
      />
      {clips.length === 0 ? (
        <EmptyState
          icon={Clapperboard}
          title="No highlight clips yet"
          description="When processing completes, key segments (board work, Q&A, lecture peaks) appear here for quick review — per thesis FR-3."
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((c) => (
            <Card
              key={c.id}
              className="group !p-0 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.25),_transparent_70%)] opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-2 ring-white/30 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <PlayIcon />
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/55 px-2 py-0.5 font-mono text-xs text-white backdrop-blur-sm">
                  {c.duration}
                </span>
              </div>
              <div className="p-5">
                <CardTitle className="!text-base">{c.label}</CardTitle>
                <CardDescription className="!mt-1 !text-xs">
                  Session{' '}
                  <span className="font-mono text-slate-700 dark:text-slate-300">{c.session}</span>
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

function PlayIcon() {
  return (
    <svg className="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
