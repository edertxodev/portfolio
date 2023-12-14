import { LocaleParams } from '@/lib/types'
import Contact from '@/components/contact/Contact'
import Experiences from '@/components/experiences/Experiences'
import Info from '@/components/info/Info'
import Projects from '@/components/projects/Projects'
import Repositories from '@/components/repositories/Repositories'

export default async function HomePage({ params }: LocaleParams) {
  return (
    <main className="flex flex-col space-y-48">
      <Info params={params} />
      <Experiences params={params} />
      <Projects />
      <Repositories />
      <Contact />
    </main>
  )
}
