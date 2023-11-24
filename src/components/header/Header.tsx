'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { getRouteByName, routes } from '@/lib/routes'
import { mPlusCode } from '@/lib/fonts'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Sidevar from '@/components/header/Sidevar'
import ThemeToggle from '@/components/header/ThemeToggle'
import useScroll from '@/lib/hooks/useScroll'

export default function Header() {
  const { y: scrollY } = useScroll()
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    setScrolled(scrollY > 0)
  }, [scrollY])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50', { 'shadow bg-white/80 dark:bg-neutral-900/80': !!scrolled })}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={getRouteByName('home').path} className="-m-1.5 p-1.5">
            <span className={`${mPlusCode.className} text-4xl font-bold`}>Eder Ferreira</span>
          </Link>
        </div>
        <Sidevar />
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {routes.map((route, index) =>
              !['home'].includes(route.name) ? (
                <NavigationMenuItem
                  key={route.name}
                  className={`${
                    index !== routes.length - 1 ? 'border-r border-r-neutral-400 dark:border-r-white' : ''
                  }`}
                >
                  <Link href={route.path} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{route.name}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ) : null
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle className="mr-2" />
        </div>
      </nav>
    </header>
  )
}
