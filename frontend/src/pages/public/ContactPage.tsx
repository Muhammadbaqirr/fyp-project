import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { Field } from '@/components/ui/Input'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-6xl flex-1 px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
        Departmental contact
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        Use this page for <strong className="text-slate-800 dark:text-slate-200">institutional</strong>{' '}
        or examiner-facing communication. Technical integration questions should reference the thesis
        API and NFR sections (HTTPS, role-based access, performance targets).
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardTitle className="!text-base">Department</CardTitle>
          <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
              <span>
                Department of Computer Science
                <br />
                COMSATS University Islamabad
                <br />
                Attock Campus, Pakistan
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
              <span>
                Replace with official departmental email when publishing (thesis cover page).
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
              <span>Main campus switchboard — see CUI directory for current numbers.</span>
            </li>
          </ul>
          <p className="mt-6 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
            <strong className="text-slate-700 dark:text-slate-300">Response expectation:</strong> this
            web form is a UI placeholder; production deployments should route messages to a monitored
            mailbox or ticketing system.
          </p>
        </Card>

        <Card accent className="lg:col-span-2">
          <CardTitle>Send a message</CardTitle>
          <CardDescription className="!mt-1">
            Static demo — wire fields to your FastAPI/Flask endpoint and validate server-side.
          </CardDescription>
          {sent ? (
            <p className="mt-6 rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800 dark:bg-brand-950/40 dark:text-brand-200">
              Thank you. In production this would enqueue an email or ticket. Connect the form action
              to your API.
            </p>
          ) : (
            <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
              <div className="sm:col-span-2">
                <Field label="Full name" name="name" required autoComplete="name" />
              </div>
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Organization" name="org" autoComplete="organization" />
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="input-field mt-2"
                  placeholder="Topic, preferred contact time, or integration questions…"
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit">Submit message</Button>
              </div>
            </form>
          )}
        </Card>
      </div>

      <Card className="mt-8 !bg-slate-900/5 !ring-slate-200/60 dark:!bg-white/[0.03] dark:!ring-white/10">
        <CardTitle className="!text-base">Dashboard access</CardTitle>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          The monitoring console is not open registration: one designated{' '}
          <strong className="text-slate-800 dark:text-slate-200">institutional administrator</strong>{' '}
          signs in to upload video, view AI outputs, and manage timetables — consistent with the
          security NFR in the thesis and the single-admin deployment choice for this repository.
        </p>
      </Card>
    </div>
  )
}
