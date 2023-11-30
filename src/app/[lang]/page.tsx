import { LocaleParams } from '@/lib/types'
import Experiences from '@/components/experiences/Experiences'
import Info from '@/components/info/Info'
import Repositories from '@/components/repositories/Repositories'

export default async function HomePage({ params }: LocaleParams) {
  return (
    <main className="flex flex-col space-y-32">
      <Info params={params} />
      <Experiences params={params} />
      <Repositories params={params} />
    </main>
  )
}
