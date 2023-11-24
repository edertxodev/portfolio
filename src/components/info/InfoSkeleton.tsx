import { Skeleton } from '@/components/ui/skeleton'

export default function InfoSkeleton() {
  return (
    <div className="flex items-center space-x-8">
      <Skeleton className="h-[252px] w-[252px] rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 ml-6 w-[200px]" />
        <Skeleton className="h-4 ml-12 w-[150px]" />
        <Skeleton className="h-4 ml-12 w-[150px]" />
      </div>
    </div>
  )
}
