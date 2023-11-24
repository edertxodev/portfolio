import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/eder-ferreira/'
export const GITHUB_URL = 'https://github.com/edertxodw'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
