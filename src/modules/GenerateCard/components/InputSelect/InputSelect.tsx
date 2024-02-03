import { SelectHTMLAttributes } from 'react'

type InputSelectProps = {
  label: string
  options: string[]
} & SelectHTMLAttributes<HTMLSelectElement>

export const InputSelect = ({ label, options, ...props }: InputSelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <select
        {...props}
        className="h-8 w-fit min-w-24 rounded-md px-1 capitalize text-brand-dark"
      >
        {options.map((option) => (
          <option key={option} className="capitalize" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
