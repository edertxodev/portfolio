import { Button } from '@/components/ui/button'
import { FieldValues, useForm } from 'react-hook-form'
import { PropsWithChildren } from 'react'
import { Form as UIForm } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import Spinner from '@/components/spinner/Spinner'

type FormProps = PropsWithChildren & {
  onSubmit: (data: any) => void
  schema: any
  submitButtonText?: string
  defaultValues?: any
  className?: string
  submiting?: boolean
}

export default function Form<T extends FieldValues>({
  onSubmit,
  schema,
  defaultValues,
  className,
  submitButtonText,
  submiting,
  children,
}: FormProps) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues,
  })

  return (
    <UIForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-8 ${className}`} autoComplete="on">
        {children}
        <Button
          type="submit"
          variant="secondary"
          className="w-full font-bold text-white bg-green-800 hover:bg-green-900 dark:bg-neutral-900 hover:dark:bg-neutral-800"
          disabled={!form.formState.isValid || submiting}
        >
          {submitButtonText ?? 'Action'}
          {submiting ? <Spinner className="ml-2" /> : null}
        </Button>
      </form>
    </UIForm>
  )
}
