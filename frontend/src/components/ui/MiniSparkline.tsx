/** Decorative trend line until real time-series data exists */
export function MiniSparkline({
  points,
  className = '',
}: {
  points: number[]
  className?: string
}) {
  const max = Math.max(...points, 1)
  const min = Math.min(...points, 0)
  const range = max - min || 1
  const w = 80
  const h = 32
  const pad = 2
  const d = points
    .map((p, i) => {
      const x = pad + (i / Math.max(points.length - 1, 1)) * (w - pad * 2)
      const y = pad + (1 - (p - min) / range) * (h - pad * 2)
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`shrink-0 text-current opacity-90 ${className}`}
      aria-hidden
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
