'use client'

import 'moment/locale/es'
import 'moment/locale/eu'
import { EXPERIENCES } from '@/lib/static-data'
import { Experience, LocaleParams } from '@/lib/types'
import { Separator } from '@/components/ui/separator'
import { VerticalTabs, VerticalTabsList } from '@/components/ui/tabs'
import { anton } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import ExperienceContentData from '@/components/experiences/ExperienceContentData'
import ExperienceTabData from '@/components/experiences/ExperienceTabData'
import moment from 'moment'
import useIsVisibleComponent from '@/lib/hooks/useIsVisibleComponent'
import useTranslation from '@/lib/hooks/useTranslation'

export type ExperienceTabDataProps = {
  experience: Experience
}

export default function Experiences({ params }: LocaleParams) {
  const { t } = useTranslation()
  moment.locale(params.lang)

  /** Animation refs */
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const titleIsVisible = useIsVisibleComponent(titleRef)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const contentIsVisible = useIsVisibleComponent(contentRef)

  return (
    <section id="experience" className="px-8">
      <div className="flex flex-col 2xl:flex-row items-center">
        <h2
          ref={titleRef}
          className={cn(
            `${anton.className} invisible text-6xl md:text-7xl 2xl:text-8xl md:px-16 text-green-800 dark:text-white text-center`,
            { 'animate-fade-left !visible': titleIsVisible }
          )}
        >
          {t('experiences.title')}
        </h2>
        <Separator
          className={cn('invisible my-12 2xl:hidden bg-green-800/60 dark:bg-white/60', {
            'animate-flip-up !visible': titleIsVisible,
          })}
        />
        <VerticalTabs
          ref={contentRef}
          defaultValue={EXPERIENCES[0]?.id}
          orientation="horizontal"
          className={cn(
            'invisible md:px-16 2xl:border-l border-green-800/60 dark:border-white/60 rounded-none flex-col 2xl:flex-row gap-0',
            { 'animate-fade-right !visible': contentIsVisible }
          )}
        >
          <VerticalTabsList className="rounded-b-none shadow-md">
            {EXPERIENCES.map((experience) => (
              <ExperienceTabData key={experience.id} experience={experience} />
            ))}
          </VerticalTabsList>
          {EXPERIENCES.map((experience) => (
            <ExperienceContentData key={experience.id} experience={experience} />
          ))}
        </VerticalTabs>
      </div>
    </section>
  )
}
