import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/utils'
import { faBuilding, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { getUserData } from '@/lib/graphql/queries/User'
import ExternalLink from '@/components/ui/external-link'
import Image from 'next/image'

export default async function Info() {
  const data = await getUserData()

  return (
    <section className="flex flex-col md:flex-row md:space-x-8">
      <Image
        src={data?.avatarUrl}
        width={252}
        height={252}
        alt={data?.name ?? ''}
        className="rounded-full shadow-2xl mb-4 ml-2 md:mb-0"
      />
      <div className="flex flex-col justify-center w-full text-center">
        <h1 className="text-4xl pb-2">{data?.name}</h1>
        <p className="text-sm">{data?.bio}</p>
        <p className="text-sm">
          <FontAwesomeIcon icon={faLocationDot} size="xs" className="mr-2" />
          {data?.location}
        </p>
        <p className="text-sm">
          <FontAwesomeIcon icon={faBuilding} size="xs" className="mr-2" />
          {data?.company}
        </p>
        <div className="flex flex-row justify-center pt-4 space-x-8">
          <ExternalLink href={LINKEDIN_URL}>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </ExternalLink>
          <ExternalLink href={GITHUB_URL}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
