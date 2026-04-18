import { useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { ADMIN_DEMO_PASSWORD, ADMIN_USERNAME } from '@/lib/auth'
import { Button } from '@/components/ui/Button'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { Field } from '@/components/ui/Input'
import { PasswordField } from '@/components/ui/PasswordField'

export function LoginPage() {
  const { isAuthenticated, login } = useAuth()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from || '/app'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) {
    return <Navigate to={from.startsWith('/app') ? from : '/app'} replace />
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const result = await login(username, password)
    setLoading(false)
    if (!result.ok) setError(result.message || 'Login failed.')
  }

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-1 flex-col items-center justify-center overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.2),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-30%,rgba(20,184,166,0.12),transparent)]" />
      <div className="relative w-full max-w-[420px]">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow ring-4 ring-brand-500/10">
            <LockIcon className="h-7 w-7 text-white" />
          </div>
          <h1 className="mt-5 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Administrator sign in
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Single admin access — no public registration.
          </p>
        </div>

        <div className="rounded-[1.35rem] bg-gradient-to-b from-brand-500/20 to-transparent p-[1px] shadow-glow dark:from-brand-500/15">
          <Card accent className="!shadow-none ring-0">
            <CardTitle className="sr-only">Sign in</CardTitle>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {error ? (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-200/80 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-100"
                >
                  <span className="mt-0.5 shrink-0 text-red-600 dark:text-red-400">!</span>
                  <span>{error}</span>
                </div>
              ) : null}
              <Field
                label="Username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={ADMIN_USERNAME}
              />
              <PasswordField
                label="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <Button type="submit" className="w-full !py-3" disabled={loading}>
                {loading ? 'Signing in…' : 'Sign in'}
              </Button>
            </form>
            <CardDescription className="!mt-6 border-t border-slate-200/80 pt-5 text-center !text-xs dark:border-slate-700/80">
              Demo credentials:{' '}
              <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                {ADMIN_USERNAME}
              </code>{' '}
              /{' '}
              <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                {ADMIN_DEMO_PASSWORD}
              </code>
              . Replace with API auth for production.
            </CardDescription>
          </Card>
        </div>

        <p className="mt-8 text-center">
          <Link
            to="/"
            className="text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  )
}
