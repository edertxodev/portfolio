'use client'

import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderItemProps } from '@/components/header/Header'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { cn, scrollToElement } from '@/lib/utils'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { routes } from '@/lib/routes'
import { useState } from 'react'
import LocaleToggle from '@/components/header/LocaleToggle'
import ThemeToggle from '@/components/header/ThemeToggle'
import useTranslation from '@/lib/hooks/useTranslation'

export default function Sidevar({ scrolled }: HeaderItemProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex 2xl:hidden" asChild>
        <Button variant="link">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className={cn('text-white', { 'text-neutral-950 dark:text-white': scrolled })}
          />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col min-h-screen px-0 bg-green-800 dark:bg-neutral-800 border-none shadow-md">
        <SheetHeader className="!block !text-left px-4 pb-4">
          <ThemeToggle setOpenedSidevar={setOpen} />
          <div className="flex justify-end">
            <LocaleToggle />
          </div>
        </SheetHeader>
        <div className="flex flex-col">
          {routes.map((route) =>
            !['home'].includes(route.name) ? (
              <span
                key={route.name}
                className="py-4 px-8 hover:bg-green-800 hover:dark:bg-neutral-900 !text-white transition-colors ease-in-out delay-75 hover:cursor-pointer"
                onClick={() => {
                  setOpen(false)
                  scrollToElement(route.path)
                }}
              >
                {t(`header.link.${route.name}`)}
              </span>
            ) : null
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
