import { SeoHead } from 'types'

/*
 * Titles and descriptions for common pages without Product pages
 */

// @TODO Rewrite to common object or class

const homePage: SeoHead = {
  title: 'Title',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'description',
    },
  ],
}

const howItWorksPage: SeoHead = {
  title: 'title',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'description',
    },
  ],
}

const faqPage: SeoHead = {
  title: 'title',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'description',
    },
  ],
}

export { homePage, howItWorksPage, faqPage }
