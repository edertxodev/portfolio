import { LanguageContext } from '@/components/providers'
import { useContext } from 'react'

type TranslationVariables = {
  [key: string]: string
}

/** Get translations from client-side components */
export default function useTranslation() {
  const context = useContext(LanguageContext)

  function t(key: string, variables?: TranslationVariables): string {
    const parts = key.split('.')
    const length = parts.length
    let property = context

    for (let i = 0; i < length; i++) {
      property = property?.[parts[i]]
    }

    if (variables) {
      Object.keys(variables).forEach((variableName) => {
        property = property.replaceAll(`{{${variableName}}}`, variables[variableName])
      })
    }

    return property
  }
  return { t }
}
