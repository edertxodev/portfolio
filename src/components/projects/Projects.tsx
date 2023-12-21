'use client'

import { Separator } from '@/components/ui/separator'
import { anton } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import ImageSlider, { ImageSlide } from '@/components/ui/image-slider'
import ProjectCard from '@/components/projects/ProjectCard'
import useIsVisibleComponent from '@/lib/hooks/useIsVisibleComponent'
import useTranslation from '@/lib/hooks/useTranslation'

import feelFreeImage from '@/components/projects/screenshots/feelfree.png'
import fisifyImage from '@/components/projects/screenshots/fisify.png'
import rvwImage from '@/components/projects/screenshots/rvw.png'
import txogitxuImage from '@/components/projects/screenshots/txogitxu.png'

export default function Projects() {
  const { t } = useTranslation()

  /** Animation refs */
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const titleIsVisible = useIsVisibleComponent(titleRef)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const contentIsVisible = useIsVisibleComponent(contentRef)

  const sliderItems: ImageSlide[] = [
    {
      id: 'fisify',
      content: <ProjectCard title="Fisify" imageSrc={fisifyImage} url="https://www.fisify.com/" />,
    },
    {
      id: 'feelfree',
      content: <ProjectCard title="Feel Free Rentals" imageSrc={feelFreeImage} url="https://feelfreerentals.com/es/" />,
    },
    {
      id: 'txogitxu',
      content: <ProjectCard title="Txogitxu" imageSrc={txogitxuImage} url="https://www.txogitxu.com/" />,
    },
    {
      id: 'rvw',
      content: <ProjectCard title="Recambios vía web" imageSrc={rvwImage} url="https://www.recambiosviaweb.com/" />,
    },
  ]

  return (
    <section id="projects" className="py-0 2xl:py-6 2xl:border-y border-green-800/60 dark:border-neutral-600">
      <div className="flex flex-col py-14 2xl:flex-row-reverse items-center bg-info px-2 md:px-8">
        <h2
          ref={titleRef}
          className={cn(
            `${anton.className} invisible text-6xl md:text-7xl 2xl:text-8xl md:px-16 text-white text-center`,
            {
              'animate-fade-left !visible': titleIsVisible,
            }
          )}
        >
          {t('projects.title')}
        </h2>
        <Separator
          className={cn('invisible my-12 2xl:hidden bg-white/60', { 'animate-flip-up !visible': titleIsVisible })}
        />
        <div
          ref={contentRef}
          className={cn('flex flex-1 justify-center 2xl:px-16 2xl:border-r border-white/60', {
            'animate-fade-right !visible': contentIsVisible,
          })}
        >
          <ImageSlider items={sliderItems} className="max-w-[100vw] w-[80%] 2xl:w-[100%]" />
        </div>
      </div>
    </section>
  )
}
