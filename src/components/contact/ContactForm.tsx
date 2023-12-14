'use client'

import { ContactFormFields, ContactFormSchema } from '@/lib/schemas/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceDizzy, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import Form from '@/components/form/Form'
import InputField from '@/components/form/fields/InputField'
import TextareaField from '@/components/form/fields/TextareaField'
import useTranslation from '@/lib/hooks/useTranslation'

export default function ContactForm() {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [submiting, setSubmiting] = useState<boolean>(false)

  function errorToast() {
    toast({
      title: (
        <span>
          {t('contact.form.error.title')}
          <FontAwesomeIcon icon={faFaceDizzy} className="ml-2" />
        </span>
      ),
      description: t('contact.form.error.description'),
      variant: 'destructive',
    })
  }

  async function processForm(data: ContactFormFields) {
    // Prevent from SPAM Bots
    if (!data.preventSpam) {
      setSubmiting(true)
      fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res?.error) {
            errorToast()
          } else {
            toast({
              title: (
                <span>
                  {t('contact.form.success.title')}
                  <FontAwesomeIcon icon={faFaceGrinHearts} className="ml-2" />
                </span>
              ),
              description: t('contact.form.success.description'),
              className: 'bg-info text-white',
            })
          }
          setSubmiting(false)
        })
        .catch(() => {
          errorToast()
          setSubmiting(false)
        })
    }
  }

  return (
    <Form<ContactFormFields>
      onSubmit={processForm}
      schema={ContactFormSchema}
      submitButtonText={t('contact.form.submit')}
      submiting={submiting}
    >
      <div className="flex flex-row space-x-8">
        <InputField
          name="name"
          label={t('contact.form.fields.name')}
          placeholder={t('contact.form.fields.name')}
          className="flex-1"
        />
        <InputField
          name="email"
          type="email"
          label={t('contact.form.fields.email')}
          placeholder={t('contact.form.fields.email')}
          className="flex-1"
        />
      </div>
      <TextareaField
        name="content"
        label={t('contact.form.fields.content')}
        placeholder={t('contact.form.fields.content')}
      />
      <InputField type="hidden" name="preventSpam" className="hidden" />
    </Form>
  )
}
