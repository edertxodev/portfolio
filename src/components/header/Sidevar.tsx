'use client'

import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { routes } from '@/lib/routes'
import { useState } from 'react'
import Link from 'next/link'
import LocaleToggle from '@/components/header/LocaleToggle'
import ThemeToggle from '@/components/header/ThemeToggle'
import useTranslation from '@/lib/hooks/useTranslation'

export default function Sidevar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex lg:hidden" asChild>
        <Button variant="ghost">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col min-h-screen px-0">
        <SheetHeader className="!block !text-left px-4 pb-4">
          <ThemeToggle />
        </SheetHeader>
        <div className="flex flex-col">
          {routes.map((route) =>
            !['home'].includes(route.name) ? (
              <Link
                key={route.name}
                href={route.path}
                className="py-4 px-8 hover:bg-neutral-100/80 hover:dark:bg-neutral-800"
                onClick={() => setOpen(false)}
              >
                {t(`header.link.${route.name}`)}
              </Link>
            ) : null
          )}
        </div>
        <div className="mt-auto px-8">
          <LocaleToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
