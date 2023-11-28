import { Skeleton } from '@/components/ui/skeleton'

export default function RepositoriesSkeleton() {
  return (
    <div className="grid grid-flow-row gap-12 sm:grid-cols-1 md:grid-cols-2">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  )
}
