'use client'

import 'moment/locale/es'
import 'moment/locale/eu'
import { EXPERIENCES } from '@/lib/static-data'
import { Experience, LocaleParams } from '@/lib/types'
import { Separator } from '@/components/ui/separator'
import { VerticalTabs, VerticalTabsList } from '@/components/ui/tabs'
import { anton } from '@/lib/fonts'
import ExperienceContentData from '@/components/experiences/ExperienceContentData'
import ExperienceTabData from '@/components/experiences/ExperienceTabData'
import moment from 'moment'
import useTranslation from '@/lib/hooks/useTranslation'

export type ExperienceTabDataProps = {
  experience: Experience
}

export default function Experiences({ params }: LocaleParams) {
  const { t } = useTranslation()
  moment.locale(params.lang)

  return (
    <section id="experience" className="px-8">
      <div className="flex flex-col lg:flex-row">
        <h2
          className={`${anton.className} text-6xl md:text-7xl lg:text-8xl md:px-16 text-green-800 dark:text-white text-center`}
        >
          {t('experiences.title')}
        </h2>
        <Separator className="my-12 lg:hidden bg-green-800/60 dark:bg-white/60" />
        <VerticalTabs
          defaultValue={EXPERIENCES[0]?.id}
          orientation="horizontal"
          className="md:px-16 lg:border-l border-green-800/60 dark:border-white/60 rounded-none flex-col 2xl:flex-row gap-0"
        >
          <VerticalTabsList className="rounded-b-none 2xl:rounded-b-lg shadow-md">
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
