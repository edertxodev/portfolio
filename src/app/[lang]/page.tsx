import { LocaleParams } from '@/lib/types'
import Experiences from '@/components/experiences/Experiences'
import Info from '@/components/info/Info'
import Projects from '@/components/projects/Projects'
import Repositories from '@/components/repositories/Repositories'

export default async function HomePage({ params }: LocaleParams) {
  return (
    <main className="flex flex-col space-y-32">
      <Info params={params} />
      <Experiences params={params} />
      <Projects />
      <Repositories params={params} />
    </main>
  )
}
