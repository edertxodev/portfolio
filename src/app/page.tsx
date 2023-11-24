import { Suspense } from 'react'
import Info from '@/components/info/Info'
import InfoSkeleton from '@/components/info/InfoSkeleton'
import Repositories from '@/components/repositories/Repositories'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center space-y-32 pt-48">
      <Suspense fallback={<InfoSkeleton />}>
        <Info />
      </Suspense>
      <Suspense fallback={<InfoSkeleton />}>
        <Repositories />
      </Suspense>
    </main>
  )
}
