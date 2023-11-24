import { GITHUB_URL } from '@/lib/utils'
import ExternalLink from '@/components/ui/external-link'

export default function Footer() {
  return (
    <footer className="flex w-full justify-center pt-32 pb-4">
      <p className="text-xs">
        <ExternalLink href={GITHUB_URL} className="hover:underline">
          EdertxoDW
        </ExternalLink>{' '}
        @{new Date().getFullYear()} - Made with ♥ with Next.js
      </p>
    </footer>
  )
}
