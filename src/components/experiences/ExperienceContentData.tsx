import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExperienceTabDataProps } from '@/components/experiences/Experiences'
import { VerticalTabsContent } from '@/components/ui/tabs'
import { getAptitudeBadgetVariant, getFormatedMonthAndYear } from '@/lib/utils'
import useTranslation from '@/lib/hooks/useTranslation'

export default function ExperienceContentData({ experience }: ExperienceTabDataProps) {
  const { t } = useTranslation()

  return (
    <VerticalTabsContent key={experience.id} value={experience.id} className="!ml-0 mt-0">
      <Card className="border-t-0 2xl:border-t 2xl:border-l-0 max-w-full 2xl:max-w-lg 2xl:mt-28">
        <CardHeader>
          <CardTitle>{t(experience.position)}</CardTitle>
          <CardDescription className="flex flex-col">
            <span className="mb-1">{experience.company}</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-600">{`${getFormatedMonthAndYear(
              experience.dateFrom
            )} - ${experience.dateTo ? getFormatedMonthAndYear(experience.dateTo) : t('general.dates.present')}`}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t(`${experience.description}`) }} />
          <div className="space-x-2 space-y-2">
            {experience.aptitudes.map((aptitude) => (
              <Badge key={aptitude.name} variant={getAptitudeBadgetVariant(aptitude.technologyType)}>
                {aptitude.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </VerticalTabsContent>
  )
}
