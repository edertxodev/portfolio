import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LocaleParams } from '@/lib/types'
import { anton } from '@/lib/fonts'
import { faBuilding, faLocationDot, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { getDictionary } from '@/lib/dictionary'
import { getUserData } from '@/lib/graphql/queries/User'
import Image from 'next/image'

export default async function Info({ params }: LocaleParams) {
  const t = await getDictionary(params.lang)
  const data = await getUserData()

  return (
    <section
      id="about"
      className="min-h-screen pb-0 xl:pb-6 pl-0 xl:pl-6 ml-0 xl:ml-60 xl:border-b xl:border-l border-green-800/60 dark:border-neutral-600"
    >
      <div className="flex h-screen pt-48 pb-32 px-8 items-center justify-center bg-info">
        <div className="flex flex-col-reverse md:flex-row text-white animate-fade animate-duration-[2000ms]">
          <div className="flex w-full md:w-1/2 text-center md:text-left flex-col justify-center md:pl-12">
            <h1 className={`${anton.className} text-6xl md:text-8xl pb-6 text-shadow md:text-right`}>{t.info.title}</h1>
            <p className="text-lg pb-4 md:pb-2">
              <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="text-white/80 mr-2" />
              {t.info.description}
            </p>
            <p className="text-sm md:text-xs md:text-right">
              {data?.location}
              <FontAwesomeIcon icon={faLocationDot} size="xs" className="ml-2" />
            </p>
            <p className="text-sm md:text-xs md:text-right">
              {data?.company}
              <FontAwesomeIcon icon={faBuilding} size="xs" className="ml-2" />
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={data?.avatarUrl}
              width={252}
              height={252}
              alt={data?.name ?? ''}
              className="shadow-2xl mb-4 mx-auto md:mb-0 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
