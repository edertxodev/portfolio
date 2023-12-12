'use client'

import { GITHUB_URL } from '@/lib/utils'
import ExternalLink from '@/components/ui/external-link'
import useTranslation from '@/lib/hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="flex w-full justify-center pt-48 pb-4">
      <p className="text-xs text-green-800 dark:text-white">
        <ExternalLink href={GITHUB_URL} className="hover:underline">
          EdertxoDEV
        </ExternalLink>{' '}
        @{new Date().getFullYear()} - {t('footer.madeWithLove')}
      </p>
    </footer>
  )
}
