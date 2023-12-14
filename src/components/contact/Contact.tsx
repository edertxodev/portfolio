'use client'

import { Separator } from '@/components/ui/separator'
import { anton } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import ContactForm from '@/components/contact/ContactForm'
import useIsVisibleComponent from '@/lib/hooks/useIsVisibleComponent'
import useTranslation from '@/lib/hooks/useTranslation'

export default function Contact() {
  const { t } = useTranslation()

  /** Animation refs */
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const titleIsVisible = useIsVisibleComponent(titleRef)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const contentIsVisible = useIsVisibleComponent(contentRef)

  return (
    <section id="contact" className="py-0 2xl:py-6 2xl:border-y border-green-800/60 dark:border-neutral-600">
      <div className="flex flex-col 2xl:flex-row-reverse 2xl:items-center bg-info px-8 py-24">
        <h2
          ref={titleRef}
          className={cn(
            `${anton.className} invisible text-6xl md:text-7xl 2xl:text-8xl md:px-16 text-white text-center`,
            { 'animate-fade-left !visible': titleIsVisible }
          )}
        >
          {t('contact.title')}
        </h2>
        <Separator
          className={cn('invisible my-12 2xl:hidden bg-white/60', { 'animate-flip-up !visible': titleIsVisible })}
        />
        <div
          ref={contentRef}
          className={cn('invisible flex-1 px-4 2xl:px-16 2xl:border-r border-white/60', {
            'animate-fade-right !visible': contentIsVisible,
          })}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
