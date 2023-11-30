import { Locale } from '../../i18n-config'
import { Moment } from 'moment'

export type LocaleParams = {
  params: {
    lang: Locale
  }
}

export type AptitudeTechnologyType = 'front' | 'back' | 'test' | 'fullstack' | 'other'

export type Aptitude = {
  name: string
  technologyType: AptitudeTechnologyType
}

export type Experience = {
  id: string
  position: string
  company: string
  description: string
  dateFrom: Moment
  dateTo?: Moment
  aptitudes: Aptitude[]
}
