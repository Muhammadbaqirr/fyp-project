import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { PageHeader } from '@/components/layout/PageHeader'

/** Sample series — replace with API metrics (thesis §3.3, Module 5 FE4). */
const punctualityTrend = [
  { week: 'W1', onTime: 78 },
  { week: 'W2', onTime: 82 },
  { week: 'W3', onTime: 80 },
  { week: 'W4', onTime: 88 },
  { week: 'W5', onTime: 86 },
  { week: 'W6', onTime: 90 },
  { week: 'W7', onTime: 91 },
]

/**
 * FR-1 activity categories — intentionally high-contrast hues so segments are easy to tell apart
 * (explaining vs writing vs interaction vs phone/mobile).
 */
const activityMix = [
  { name: 'Explaining', value: 42, fill: '#2563eb' },
  { name: 'Writing', value: 28, fill: '#ea580c' },
  { name: 'Interaction', value: 22, fill: '#16a34a' },
  { name: 'Mobile / other', value: 8, fill: '#a855f7' },
]

const PIE_SEGMENT_STROKE = 'rgba(148, 163, 184, 0.35)'
const PIE_STROKE_WIDTH = 2

const chartCardClass =
  'relative overflow-hidden !border-slate-200/70 bg-gradient-to-br from-white via-slate-50/80 to-brand-50/25 shadow-lg shadow-slate-900/[0.06] ring-1 ring-slate-200/50 dark:!border-slate-700/60 dark:from-slate-900 dark:via-slate-900/95 dark:to-brand-950/25 dark:shadow-black/30 dark:ring-white/[0.06]'

const chartPanelClass =
  'relative rounded-xl bg-gradient-to-b from-slate-100/40 to-transparent p-3 dark:from-white/[0.04] dark:to-transparent'

type TooltipPayloadItem = {
  name?: string
  value?: number
  color?: string
  dataKey?: string | number
}

type TooltipContentProps = {
  active?: boolean
  payload?: TooltipPayloadItem[]
  label?: string | number
}

function ChartTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-slate-200/90 bg-white/95 px-3 py-2 text-sm shadow-lg backdrop-blur-sm dark:border-slate-600 dark:bg-slate-900/95">
      {label != null && label !== '' ? (
        <p className="mb-1.5 font-semibold text-slate-800 dark:text-slate-100">{label}</p>
      ) : null}
      <ul className="space-y-0.5">
        {payload.map((p, i) => (
          <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-sm ring-1 ring-black/10 dark:ring-white/10"
              style={{ backgroundColor: p.color }}
            />
            <span>
              {p.name}: <strong className="text-slate-900 dark:text-white">{p.value}%</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ActivityLegendContent(props: {
  payload?: Array<{ value?: string; color?: string }>
}) {
  const { payload } = props
  if (!payload?.length) return null
  return (
    <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2.5 px-1 text-sm sm:justify-center">
      {payload.map((entry, i) => (
        <li
          key={`${entry.value}-${i}`}
          className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200"
        >
          <span
            className="h-3.5 w-3.5 shrink-0 rounded-md shadow-sm ring-2 ring-white dark:ring-slate-800"
            style={{ backgroundColor: entry.color }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  )
}

export function AnalyticsPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-x-4 -inset-y-2 -z-10 overflow-hidden sm:-inset-x-8"
        aria-hidden
      >
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-500/15" />
        <div className="absolute bottom-0 right-[5%] h-80 w-80 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/12" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-500/10" />
      </div>

      <PageHeader
        title="Analytics"
        description="Teacher performance and punctuality trends (thesis Module 5 FE4). Charts use sample data until your FastAPI/Flask metrics endpoints are connected."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card accent className={chartCardClass}>
          <CardTitle>Punctuality trend</CardTitle>
          <CardDescription className="!mt-1">
            Weekly on-time rate (%) — compares detected arrival vs timetable (FR-4, FR-5).
          </CardDescription>
          <div className={`mt-5 h-72 w-full min-h-[18rem] ${chartPanelClass}`}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={punctualityTrend} margin={{ top: 12, right: 12, left: 4, bottom: 8 }}>
                <defs>
                  <linearGradient id="punctualityBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5eead4" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(148, 163, 184, 0.35)"
                  vertical={false}
                />
                <XAxis
                  dataKey="week"
                  tick={{ fontSize: 12, fill: '#94a3b8' }}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(148, 163, 184, 0.4)' }}
                />
                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fontSize: 12, fill: '#94a3b8' }}
                  width={48}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(148, 163, 184, 0.4)' }}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(20, 184, 166, 0.08)' }}
                  content={<ChartTooltip />}
                />
                <Bar
                  dataKey="onTime"
                  name="On-time"
                  fill="url(#punctualityBar)"
                  radius={[8, 8, 4, 4]}
                  maxBarSize={48}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className={chartCardClass}>
          <CardTitle>Activity distribution</CardTitle>
          <CardDescription className="!mt-1">
            Share of detected instructor actions from I3D + LSTM (FR-1). Colors are chosen for quick
            contrast — violet highlights phone / mobile-related segments.
          </CardDescription>
          <div className={`mt-4 flex h-72 min-h-[18rem] flex-col ${chartPanelClass}`}>
            <div className="min-h-0 flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activityMix}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="48%"
                    outerRadius="72%"
                    paddingAngle={3}
                    stroke={PIE_SEGMENT_STROKE}
                    strokeWidth={PIE_STROKE_WIDTH}
                  >
                    {activityMix.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                  <Legend content={<ActivityLegendContent />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
