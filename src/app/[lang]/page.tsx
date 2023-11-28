import { LocaleParams } from '@/lib/types'
import { Separator } from '@/components/ui/separator'
import { Suspense } from 'react'
import { getDictionary } from '@/lib/dictionary'
import Info from '@/components/info/Info'
import InfoSkeleton from '@/components/info/InfoSkeleton'
import Repositories from '@/components/repositories/Repositories'
import RepositoriesSkeleton from '@/components/repositories/RepositoriesSkeleton'

export default async function HomePage({ params }: LocaleParams) {
  const t = await getDictionary(params.lang)

  return (
    <main className="flex flex-col items-center justify-center space-y-32 pt-48">
      <Suspense fallback={<InfoSkeleton />}>
        <Info />
      </Suspense>
      <section id="repositories">
        <h2 className="text-3xl pb-8">{t.repositories.title}</h2>
        <Separator className="mb-12" />
        <Suspense fallback={<RepositoriesSkeleton />}>
          <Repositories />
        </Suspense>
      </section>
    </main>
  )
}
