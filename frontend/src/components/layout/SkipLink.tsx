export function SkipLink({ href = '#main-content' }: { href?: string }) {
  return (
    <a
      href={href}
      className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg ring-2 ring-white/40 transition-all focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:outline-none dark:ring-brand-200/30"
    >
      Skip to main content
    </a>
  )
}
