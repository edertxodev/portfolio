import { LanguageContext } from '@/components/providers'
import { useContext } from 'react'

/** Get translations from client-side components */
export default function useTranslation() {
  const context = useContext(LanguageContext)

  function t(key: string): string {
    const parts = key.split('.')
    const length = parts.length
    let property = context

    for (let i = 0; i < length; i++) {
      property = property[parts[i]]
    }

    return property
  }
  return { t }
}
