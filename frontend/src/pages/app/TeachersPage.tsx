import { Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardTitle } from '@/components/ui/Card'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/layout/PageHeader'

/** Replace with API data. Use `[]` to preview the empty state (Module 5 FE6). */
const teachers: { id: string; name: string; dept: string; email: string }[] = [
  { id: 't1', name: 'Dr. Khan', dept: 'Computer Science', email: 'khan@institution.edu' },
  { id: 't2', name: 'Ms. Ahmed', dept: 'Artificial Intelligence', email: 'ahmed@institution.edu' },
]

export function TeachersPage() {
  return (
    <div>
      <PageHeader
        title="Teachers"
        description="Instructor profiles linked to sessions and timetable (thesis Module 5 FE6, database module)."
      />
      <div className="mb-6 flex justify-end">
        <Button disabled>Add instructor (API)</Button>
      </div>
      {teachers.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No instructors on file"
          description="Add teacher records so sessions and punctuality rows can resolve names and departments. This list will populate from your MongoDB/PostgreSQL API."
          action={
            <Button disabled variant="secondary">
              Sync from directory (API)
            </Button>
          }
        />
      ) : (
        <Card>
          <CardTitle>Directory</CardTitle>
          <ul className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">
            {teachers.map((t) => (
              <li key={t.id} className="flex flex-wrap items-center justify-between gap-4 py-4">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-slate-500">
                    {t.dept} · {t.email}
                  </p>
                </div>
                <Button variant="ghost" className="!px-3 !py-2 text-sm" disabled>
                  Edit
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
}
