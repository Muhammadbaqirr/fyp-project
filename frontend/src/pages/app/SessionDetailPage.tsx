import { useParams } from 'react-router-dom'
import { ActivityTimeline, type TimelineEvent } from '@/components/app/ActivityTimeline'
import { BackToListLink } from '@/components/ui/AdminNavButton'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { PageHeader } from '@/components/layout/PageHeader'

const SAMPLE_TIMELINE: TimelineEvent[] = [
  {
    time: '00:04',
    label: 'Instructor enters frame',
    detail: 'Arrival anchor for punctuality (FR-4) — first visible presence.',
    kind: 'arrival',
  },
  {
    time: '00:12',
    label: 'Explaining',
    detail: 'I3D + LSTM activity class — lecture / explanation segment (FR-1).',
    kind: 'activity',
  },
  {
    time: '00:35',
    label: 'Writing on board',
    detail: 'Board work detection for summary weighting (FR-1, FR-2).',
    kind: 'activity',
  },
  {
    time: '00:52',
    label: 'Student interaction',
    detail: 'Q&A or discussion — optional highlight candidate (FR-3).',
    kind: 'activity',
  },
  {
    time: '…',
    label: 'Further detections',
    detail: 'Remaining timestamps stream from model output JSON via API.',
    kind: 'other',
  },
]

export function SessionDetailPage() {
  const { sessionId } = useParams<{ sessionId: string }>()

  return (
    <div>
      <BackToListLink to="/app/sessions" label="All sessions" />
      <PageHeader
        title={`Session ${sessionId ?? ''}`}
        description="AI-generated summary, highlight playback, and detected activity timeline — FR-1, FR-2, FR-3 in the thesis."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card accent>
          <CardTitle>Text summary (FR-2)</CardTitle>
          <CardDescription className="!mt-1">
            Automated narrative from detected activities across the session recording.
          </CardDescription>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Placeholder copy: the backend will return a concise paragraph describing instructional
            flow (e.g. opening explanation, board work, interaction). Bind this block to your
            summary API field when the pipeline is connected.
          </p>
        </Card>
        <Card>
          <CardTitle>Highlight clip (FR-3)</CardTitle>
          <CardDescription className="!mt-1">MP4 playback — thesis §3.5.1 (HD video).</CardDescription>
          <div className="mt-4 flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 ring-1 ring-white/10">
            <p className="max-w-xs px-4 text-center text-sm text-slate-400">
              Player placeholder — set <code className="text-xs text-brand-400">src</code> from API
              storage paths for highlight segments.
            </p>
          </div>
        </Card>
        <Card className="lg:col-span-2">
          <CardTitle>Activity timeline (FR-1)</CardTitle>
          <CardDescription className="!mt-1">
            Chronological labels from I3D + LSTM — sample data for UI review.
          </CardDescription>
          <div className="mt-6">
            <ActivityTimeline events={SAMPLE_TIMELINE} />
          </div>
        </Card>
      </div>
    </div>
  )
}
