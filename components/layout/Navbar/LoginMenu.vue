<template>
  <ul>
    <li v-for="(item, idx) in menu" :key="idx">
      <a
        class="
          flex
          items-center
          text-sm
          ml-auto
          mr-0
          rounded-full
          sm:px-4 sm:py-2
          text-black
          hover:bg-green hover:text-white
          focus:bg-green focus:text-white
          transition-all
        "
        :href="item.link"
      >
        <img :src="item.icon" width="22" heigth="22" alt="login" class="mr-5" />
        {{ item.name }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

const menu: Object[] = [
  {
    link: '#1',
    name: 'Mein Konto',
    icon: 'User.svg',
  },
  {
    link: '#2',
    name: 'Meine Suchprofile',
    icon: 'SearchGrey.svg',
  },
  {
    link: '#3',
    name: 'Einstellungen',
    icon: 'Tools.svg',
  },
  {
    link: '#4',
    name: 'Premium Abonnement',
    icon: 'RocketOrange.svg',
  },
  {
    link: '#5',
    name: 'Hilfebereich',
    icon: 'Headphones.svg',
  },
  {
    link: '#6',
    name: 'Logout',
    icon: 'Door.svg',
  },
]

export default Vue.extend({
  data() {
    return {
      menu,
    }
  },
})
</script>
