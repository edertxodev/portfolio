'use client'

import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { routes } from '@/lib/routes'
import Link from 'next/link'
import ThemeToggle from '@/components/header/ThemeToggle'

export default function Sidevar() {
  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden" asChild>
        <Button variant="ghost">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col min-h-screen">
        <SheetHeader className="!block !text-left">
          <ThemeToggle />
        </SheetHeader>
        <div className="flex flex-col">
          {routes.map((route) =>
            !['login', 'profile'].includes(route.name) ? (
              <Link
                key={route.name}
                href={route.path}
                className="py-4 px-2 hover:bg-slate-100/80 hover:dark:bg-slate-800 rounded-lg"
              >
                {route.name}
              </Link>
            ) : null
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
