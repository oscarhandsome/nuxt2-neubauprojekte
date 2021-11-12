<template>
  <footer class="bg-black-gray text-white py-14 px-6 md:pt-20 md:px-0 md:pb-6">
    <div class="container mx-auto">
      <h3 class="font-semibold mb-5">Neubau Portal AG</h3>
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          xl:grid-cols-[minmax(min-content,1fr),minmax(135px,1fr),minmax(460px,1fr),1fr]
          md:gap-4
          lg:gap-8
          xl:gap-12
          auto-cols-auto
          mb-10
          md:mb-20
        "
      >
        <div class="mb-10">
          <div class="flex flex-col">
            <ul>
              <li>Salzfassstrasse 10</li>
              <li>CH-6006 Luzern</li>
              <li>info@neubauprojekte.ch</li>
            </ul>
          </div>
        </div>
        <nav-col :nav-links="usefulLinks" />
        <nav-col :nav-links="conditions" />
        <!-- <nav-col heading="Registrieren" :nav-links="contactInfo" /> -->
        <div>
          <a href="#">Registrieren</a>
          <div class="flex mt-5">
            <a class="mr-2 bg-white rounded-full p-2" href="#">
              <img src="Facebook.svg" alt="facebook" width="24" height="24" />
            </a>
            <a class="bg-white rounded-full p-2" href="#">
              <img src="Instagram.svg" alt="instagram" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
      <div class="flex">
        <div>Copyright 2021 Neubau Portal AG. Alle Rechte vorbehalten.</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavLinkParam } from 'types'
import NavCol from './NavCol.vue'
// import Logo from '@/components/layout/Logo.vue'

const usefulLinks: NavLinkParam[] = [
  {
    text: 'Über uns',
    href: '#',
  },
  {
    text: 'Kontakt',
    href: '#',
  },
  {
    text: 'Werbung',
    href: '#',
  },
]

const conditions: NavLinkParam[] = [
  {
    text: 'AGB',
    href: '#',
  },
  {
    text: 'Datenschutzbestimmungen',
    href: '#',
  },
  {
    text: 'Impressum',
    href: '#',
  },
]

// const contactInfo = [
//   {
//     text: 'Phone: 844-947-1444',
//     href: '#',
//   },
//   {
//     text: 'Contact Customer Care',
//     href: '#',
//   },
//   {
//     text: 'Help Center',
//     href: '#',
//   },
// ]

export default Vue.extend({
  components: { NavCol },
  data() {
    return {
      usefulLinks,
      conditions,
      // contactInfo,
    }
  },
})
</script>
