import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

type TextareaFieldProps = {
  name: string
  label?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextareaField({ name, placeholder, label, className }: TextareaFieldProps) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label ? <FormLabel>{label}</FormLabel> : null}
          <FormControl>
            <Textarea placeholder={placeholder} {...field} className="resize-none" rows={10} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
