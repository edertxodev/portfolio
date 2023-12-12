'use client'

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { createContext } from 'react'

export const LanguageContext = createContext<any>({})

type ProvidersProps = {
  dictionary: any
} & ThemeProviderProps

export async function Providers({ children, dictionary, ...props }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} {...props}>
      <LanguageContext.Provider value={dictionary}>{children}</LanguageContext.Provider>
    </ThemeProvider>
  )
}
