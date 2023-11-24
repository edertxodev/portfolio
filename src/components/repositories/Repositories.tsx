import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Separator } from '@/components/ui/separator'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { getUserData } from '@/lib/graphql/queries/User'
import ExternalLink from '@/components/ui/external-link'

export default async function Repositories() {
  const data = await getUserData()

  return (
    <section>
      <h2 className="text-3xl pb-8">Pinned repositories</h2>
      <Separator className="mb-12" />
      <div className="grid grid-flow-row gap-12 sm:grid-cols-1 md:grid-cols-2">
        {data?.pinnedItems.nodes?.map((repository) => (
          <ExternalLink href={repository?.url} key={repository?.id}>
            <Card className="hover:bg-neutral-50 hover:dark:bg-white/5">
              <CardHeader className="text-2xl !flex-row">
                <FontAwesomeIcon icon={faGithub} size="lg" className="mr-4" />
                {repository?.name}
              </CardHeader>
              <CardContent>
                <Separator className="mb-4" />
                <p className="text-sm">{repository?.description}</p>
              </CardContent>
            </Card>
          </ExternalLink>
        ))}
      </div>
    </section>
  )
}
