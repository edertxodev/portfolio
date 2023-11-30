import { ExperienceTabDataProps } from '@/components/experiences/Experiences'
import { VerticalTabsTrigger } from '@/components/ui/tabs'
import { getFormatedMonthAndYear } from '@/lib/utils'
import useTranslation from '@/lib/hooks/useTranslation'

export default function ExperienceTabData({ experience }: ExperienceTabDataProps) {
  const { t } = useTranslation()

  return (
    <VerticalTabsTrigger value={experience.id} className="flex flex-col w-full space-y-1">
      <span className="font-bold">{t(experience.position)}</span>
      <span className="text-xs">{experience.company}</span>
      <span className="text-xs">{`${getFormatedMonthAndYear(experience.dateFrom)} - ${
        experience.dateTo ? getFormatedMonthAndYear(experience.dateTo) : t('general.dates.present')
      }`}</span>
    </VerticalTabsTrigger>
  )
}
