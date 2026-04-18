import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Field({ label, id, className = '', ...props }: Props) {
  const inputId = id ?? label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input id={inputId} className={`input-field mt-2 ${className}`} {...props} />
    </div>
  )
}
