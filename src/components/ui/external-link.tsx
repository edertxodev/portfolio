import { PropsWithChildren } from 'react'

type ExternalLinkProps = {
  href: string
  className?: string
} & PropsWithChildren

export default function ExternalLink({ href, className, children }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      className={`transition-all ease-in-out ${className ?? ''}`}
    >
      {children}
    </a>
  )
}
