import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderItemProps } from '@/components/header/Header'
import { cn } from '@/lib/utils'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle({ className, scrolled }: HeaderItemProps) {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  return (
    <Button variant="link" onClick={handleThemeChange} className={className}>
      <FontAwesomeIcon
        icon={theme === 'light' ? faMoon : faSun}
        className={cn('w-5 h-5 stroke-current md:h-6 md:w-6', {
          '!text-white': !scrolled,
          '!text-neutral-900 dark:!text-white': scrolled,
        })}
        size="xl"
      />
    </Button>
  )
}
