import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LocaleParams } from '@/lib/types'
import { Separator } from '@/components/ui/separator'
import { anton } from '@/lib/fonts'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { getDictionary } from '@/lib/dictionary'
import { getUserData } from '@/lib/graphql/queries/User'
import ExternalLink from '@/components/ui/external-link'

export default async function Repositories({ params }: LocaleParams) {
  const t = await getDictionary(params.lang)
  const data = await getUserData()

  return (
    <section id="repositories" className="px-2 md:px-8">
      <div className="flex flex-col 2xl:flex-row items-center">
        <h2
          className={`${anton.className} text-6xl md:text-7xl 2xl:text-8xl md:px-16 text-green-800 dark:text-white text-center`}
        >
          {t.repositories.title}
        </h2>
        <Separator className="my-12 2xl:hidden bg-green-800/60 dark:bg-white/60" />
        <div className="flex flex-wrap md:px-16 2xl:border-l border-green-800/60 dark:border-white/60">
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
