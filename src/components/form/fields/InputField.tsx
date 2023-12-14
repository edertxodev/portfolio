import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

type InputFieldProps = {
  name: string
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function InputField({ name, placeholder, label, type, className }: InputFieldProps) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label ? <FormLabel>{label}</FormLabel> : null}
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
