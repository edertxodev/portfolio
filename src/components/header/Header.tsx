'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GITHUB_URL, LINKEDIN_URL, cn, scrollToElement } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { routes } from '@/lib/routes'
import { useEffect, useState } from 'react'
import ExternalLink from '@/components/ui/external-link'
import LocaleToggle from '@/components/header/LocaleToggle'
import Sidevar from '@/components/header/Sidevar'
import ThemeToggle from '@/components/header/ThemeToggle'
import useScroll from '@/lib/hooks/useScroll'
import useTranslation from '@/lib/hooks/useTranslation'

const SCROLL_MIN_VALUE = 50

export type HeaderItemProps = {
  scrolled?: boolean
  className?: string
}

export default function Header() {
  const { t } = useTranslation()
  const { y: scrollY } = useScroll()
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    setScrolled(scrollY > SCROLL_MIN_VALUE)
  }, [scrollY])

  useEffect(() => {
    setScrolled(window.scrollY > SCROLL_MIN_VALUE)
  }, [])

  return (
    <header
      className={cn('fixed inset-x-0 top-0 z-50 default-transition', {
        'shadow bg-white/95 dark:bg-neutral-900/95': !!scrolled,
      })}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          {/* <Link href={getRouteByName('home').path} className="-m-1.5 p-1.5">
            <span
              className={cn(`${anton.className} text-4xl font-bold text-white xl:text-neutral-950 xl:dark:text-white`, {
                'text-neutral-950 dark:text-white': scrolled,
              })}
            >
              Eder Ferreira
            </span> 
          </Link>*/}
        </div>
        <Sidevar scrolled={scrolled} />
        <NavigationMenu className="hidden 2xl:flex">
          <NavigationMenuList>
            {routes.map((route, index) =>
              !['home'].includes(route.name) ? (
                <NavigationMenuItem
                  key={route.name}
                  className={`${
                    index !== routes.length - 1
                      ? `border-r ${scrolled ? 'border-r-neutral-400' : 'border-r-white'} dark:border-r-white`
                      : ''
                  }`}
                >
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), {
                      '!text-neutral-900 dark:!text-white': scrolled,
                      '!text-white': !scrolled,
                    })}
                    onClick={() => scrollToElement(route.path)}
                  >
                    {t(`header.link.${route.name}`)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : null
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden 2xl:flex 2xl:flex-1 2xl:justify-end">
          <div className="flex flex-row justify-center pt-2 space-x-4 mr-4">
            <ExternalLink href={LINKEDIN_URL} className={cn('hover:opacity-70', { '!text-white': !scrolled })}>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </ExternalLink>
            <ExternalLink href={GITHUB_URL} className={cn('hover:opacity-70', { '!text-white': !scrolled })}>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </ExternalLink>
          </div>
          <LocaleToggle scrolled={scrolled} />
          <ThemeToggle className="mr-2 hover:opacity-80" scrolled={scrolled} />
        </div>
      </nav>
    </header>
  )
}
