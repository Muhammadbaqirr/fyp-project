import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/Button'
import { Card, CardTitle } from '@/components/ui/Card'
import { PageHeader } from '@/components/layout/PageHeader'

export function SettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Appearance and admin preferences. Authentication will move to server-issued tokens when the API is ready."
      />
      <Card className="max-w-xl">
        <CardTitle>Appearance</CardTitle>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Light and dark themes use Tailwind <code className="text-xs">class</code> strategy on{' '}
          <code className="text-xs">&lt;html&gt;</code>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            variant={theme === 'light' ? 'primary' : 'secondary'}
            onClick={() => setTheme('light')}
          >
            Light
          </Button>
          <Button
            variant={theme === 'dark' ? 'primary' : 'secondary'}
            onClick={() => setTheme('dark')}
          >
            Dark
          </Button>
        </div>
      </Card>
    </div>
  )
}
