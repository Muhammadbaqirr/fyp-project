import { Eye, EyeOff } from 'lucide-react'
import { useId, useState, type InputHTMLAttributes } from 'react'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
}

export function PasswordField({ label, id, className = '', autoComplete, ...props }: Props) {
  const reactId = useId()
  const inputId = id ?? `${label.replace(/\s+/g, '-').toLowerCase()}-${reactId}`
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          autoComplete={autoComplete ?? 'current-password'}
          className={`input-field w-full pr-11 ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <EyeOff className="h-4 w-4" strokeWidth={2} /> : <Eye className="h-4 w-4" strokeWidth={2} />}
        </button>
      </div>
    </div>
  )
}
