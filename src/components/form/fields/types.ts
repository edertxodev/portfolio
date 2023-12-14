export type SelectFormFieldOption = {
  label: string
  value: string
}

export type FormFieldProps = {
  name: string
  label?: string
  placeholder?: string
  options?: SelectFormFieldOption[]
  className?: string
}
