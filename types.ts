import type { Location } from 'vue-router'

export interface NavLinkParam {
  text: string
  badge?: string
  href?: string
  route?: Location
  current?: boolean
  childrens?: Array<NavLinkParam>
}

interface Project {
  image?: string | null
  realtorId?: string | number
  realtorImage?: string
  realtorTitle?: string
  realtorUrl?: string
  id: string | number
  title?: string
  address?: string
  uid?: string | number
  url?: string
  zip?: string | number
  status?: boolean
  new?: boolean
  published?: string
}

interface Projects {
  projects: Array<Project>
  totalCount?: number
}

interface Coords {
  accuracy?: number
  altitude?: null | number | string
  altitudeAccuracy?: null | number | string
  heading?: null | number | string
  latitude: number
  longitude: number
  speed?: null | number | string
}

interface Position {
  coords: Coords
  timestamp?: number
}

interface Stats {
  countExclusive: number
  countNonExclusive: number
  countRealtors: number
}

interface Product {
  id: number
  url?: string
  timings: string
  name: string
  price: number
  label: string
  description: string
  worksIn: string | null
  lasts: string
  dosage?: Array<string> | Object | null
  rating?: number
  seo?: {
    titleTag: string
    metaDescription: string
  }
}

interface Badge {
  id: number
  active?: boolean
  href?: string
  name: string
  class: string
  size: string
}

interface Pill {
  id: number
  img: string
  text: string
  link: string
}

interface Question {
  id: number
  question: string
  answer: string
}

interface SvgLogo {
  class: string
  width: string
  height: string
  viewBox: string
  fill: string
}

interface HeaderItem {
  title: string
  subTitle: string
  imgs?: string[]
  img?: string
}

interface Steps {
  title: string
  img: string
  steps: Array<Object>
}

interface Tag {
  id: number
  active: boolean
  name: string
}

interface TeammateType {
  img: string
  label: string
  name: string
  position: string
  license: string
}

interface SeoHeadMeta {
  hid: string
  name: string
  content: string
}

interface SeoHead {
  title: string
  meta: Array<SeoHeadMeta>
}

export {
  Product,
  Project,
  Projects,
  Coords,
  Position,
  Stats,
  Badge,
  Pill,
  Question,
  SvgLogo,
  HeaderItem,
  Steps,
  Tag,
  TeammateType,
  SeoHead,
}
