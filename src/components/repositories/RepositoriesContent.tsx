'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Maybe, User } from '@/lib/graphql/generated'
import { Separator } from '@/components/ui/separator'
import { anton } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react'
import ExternalLink from '@/components/ui/external-link'
import useIsVisibleComponent from '@/lib/hooks/useIsVisibleComponent'
import useTranslation from '@/lib/hooks/useTranslation'

type RepositoriesContentProps = {
  data?: Maybe<User>
}

export default function RepositoriesContent({ data }: RepositoriesContentProps) {
  const { t } = useTranslation()

  /** Animation refs */
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const titleIsVisible = useIsVisibleComponent(titleRef)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const contentIsVisible = useIsVisibleComponent(contentRef)

  return (
    <section id="repositories" className="px-2 md:px-8">
      <div className="flex flex-col 2xl:flex-row items-center">
        <h2
          ref={titleRef}
          className={cn(
            `${anton.className} invisible text-6xl md:text-7xl 2xl:text-8xl md:px-16 text-green-800 dark:text-white text-center`,
            { 'animate-fade-left !visible': titleIsVisible }
          )}
        >
          {t('repositories.title')}
        </h2>
        <Separator
          className={cn('invisible my-12 2xl:hidden bg-green-800/60 dark:bg-white/60', {
            'animate-flip-up !visible': titleIsVisible,
          })}
        />
        <div
          ref={contentRef}
          className={cn('invisible flex flex-wrap md:px-16 2xl:border-l border-green-800/60 dark:border-white/60', {
            'animate-fade-right !visible': contentIsVisible,
          })}
        >
          {data?.pinnedItems.nodes?.map((repository) => (
            <div className="w-full md:w-1/2 p-8" key={repository?.id}>
              <ExternalLink href={repository?.url}>
                <Card className="default-transition hover:bg-green-50 hover:dark:bg-white/5">
                  <CardHeader className="text-2xl !flex-row">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="mr-4" />
                    {repository?.name}
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-4 bg-green-800/60 dark:bg-white/60" />
                    <p className="text-sm">{repository?.description}</p>
                  </CardContent>
                </Card>
              </ExternalLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
