import { AptitudeTechnologyType } from '@/lib/types'
import { type ClassValue, clsx } from 'clsx'
import { Moment } from 'moment'
import { twMerge } from 'tailwind-merge'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/eder-ferreira/'
export const GITHUB_URL = 'https://github.com/edertxodev'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToElement(id: string) {
  const element = document.getElementById(id) as HTMLElement
  if (!element) return

  element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}

export function getFormatedMonthAndYear(date: Moment) {
  return `${capitalizeWord(date.format('MMMM'))} ${date.format('YYYY')}`
}

export function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function getAptitudeBadgetVariant(type: AptitudeTechnologyType) {
  switch (type) {
    case 'back':
      return 'destructive'
    case 'front':
      return 'informative'
    case 'fullstack':
      return 'secondary'
    case 'test':
      return 'warning'
    default:
      return 'default'
  }
}
