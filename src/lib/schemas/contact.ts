import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string({ required_error: 'form.error.required' }).min(1, { message: 'form.error.required' }),
  email: z.string({ required_error: 'form.error.required' }).email({ message: 'form.error.email' }),
  content: z.string({ required_error: 'form.error.required' }).min(1, { message: 'form.error.required' }),
  preventSpam: z.optional(z.string()),
})

export type ContactFormFields = z.infer<typeof ContactFormSchema>
