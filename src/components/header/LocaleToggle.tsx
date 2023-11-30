'use client'

import { HeaderItemProps } from '@/components/header/Header'
import { Locale, i18n } from '../../../i18n-config'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { getRouteByName } from '@/lib/routes'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LocaleToggle({ scrolled }: HeaderItemProps) {
  const pathname = usePathname()

  function redirectedPathname(locale: Locale) {
    if (!pathname) return getRouteByName('home').path
    const segments = pathname.split('/')
    segments[1] = locale

    return segments.join('/')
  }

  return (
    <NavigationMenu className="flex">
      <NavigationMenuList>
        {i18n.locales.map((locale) => (
          <NavigationMenuItem key={locale}>
            <Link href={redirectedPathname(locale)} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(`${navigationMenuTriggerStyle()} !px-2`, {
                  underline: pathname.includes(locale),
                  '!text-white': !scrolled,
                })}
              >
                {locale}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
