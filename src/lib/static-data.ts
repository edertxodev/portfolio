import { Aptitude, Experience } from '@/lib/types'
import moment from 'moment'

export const APTITUDES: { [key: string]: Aptitude } = {
  react: { name: 'React', technologyType: 'front' },
  angular: { name: 'Angular', technologyType: 'front' },
  typescript: { name: 'Typescript', technologyType: 'other' },
  threejs: { name: 'ThreeJS', technologyType: 'front' },
  jest: { name: 'Jest', technologyType: 'test' },
  symfony: { name: 'Symfony', technologyType: 'fullstack' },
  laravel: { name: 'Laravel', technologyType: 'fullstack' },
  gcloud: { name: 'Google Cloud', technologyType: 'other' },
  java: { name: 'Java', technologyType: 'back' },
  csharp: { name: 'C#', technologyType: 'back' },
  nodejs: { name: 'NodeJS', technologyType: 'back' },
  nextjs: { name: 'NextJS', technologyType: 'front' },
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'fisify',
    position: 'experiences.position.fullstackDeveloper',
    company: 'Fisify',
    description: 'experiences.company.description.fisify',
    dateFrom: moment('2022-12-01'),
    aptitudes: [APTITUDES.react, APTITUDES.typescript, APTITUDES.jest, APTITUDES.nodejs, APTITUDES.nextjs],
  },
  {
    id: 'titanium',
    position: 'experiences.position.frontendDeveloper',
    company: 'Titanium Industrial Security',
    description: 'experiences.company.description.titanium',
    dateFrom: moment('2022-05-01'),
    dateTo: moment('2023-12-01'),
    aptitudes: [APTITUDES.react, APTITUDES.typescript, APTITUDES.jest, APTITUDES.threejs],
  },
  {
    id: 'izertis',
    position: 'experiences.position.fullstackDeveloper',
    company: 'Izertis',
    description: 'experiences.company.description.izertis',
    dateFrom: moment('2021-07-01'),
    dateTo: moment('2022-04-01'),
    aptitudes: [APTITUDES.react, APTITUDES.symfony],
  },
  {
    id: 'wegetit',
    position: 'experiences.position.fullstackDeveloper',
    company: 'Wegetit',
    description: 'experiences.company.description.wegetit',
    dateFrom: moment('2020-04-01'),
    dateTo: moment('2021-07-01'),
    aptitudes: [APTITUDES.react, APTITUDES.laravel, APTITUDES.gcloud],
  },
  {
    id: 'feelfree',
    position: 'experiences.position.fullstackDeveloper',
    company: 'FeelFree Rentals',
    description: 'experiences.company.description.feelfree',
    dateFrom: moment('2018-03-01'),
    dateTo: moment('2020-04-01'),
    aptitudes: [APTITUDES.angular, APTITUDES.symfony],
  },
  {
    id: 'dinycon',
    position: 'experiences.position.investigationDeveloper',
    company: 'Dinycon Sistemas',
    description: 'experiences.company.description.dinycon',
    dateFrom: moment('2017-12-01'),
    dateTo: moment('2018-03-01'),
    aptitudes: [APTITUDES.java, APTITUDES.csharp],
  },
  {
    id: 'diversius',
    position: 'experiences.position.fullstackDeveloper',
    company: 'Diversius',
    description: 'experiences.company.description.diversius',
    dateFrom: moment('2017-07-01'),
    dateTo: moment('2017-11-01'),
    aptitudes: [APTITUDES.symfony],
  },
  {
    id: 'dinycon-practice',
    position: 'experiences.position.investigationDeveloper',
    company: 'Dinycon Sistemas',
    description: 'experiences.company.description.dinycon-practice',
    dateFrom: moment('2017-03-01'),
    dateTo: moment('2017-05-01'),
    aptitudes: [APTITUDES.nodejs, APTITUDES.csharp],
  },
]
