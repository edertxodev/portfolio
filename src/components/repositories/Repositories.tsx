import { getUserData } from '@/lib/graphql/queries/User'
import RepositoriesContent from '@/components/repositories/RepositoriesContent'

export default async function Repositories() {
  const data = await getUserData()

  return <RepositoriesContent data={data} />
}
