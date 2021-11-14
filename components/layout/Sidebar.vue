<template>
  <div
    class="
      sidebar
      flex flex-col flex-1
      h-auto
      bg-white
      w-72
      fixed
      top-16
      right-0
      bottom-0
      z-10
      ease-out
      duration-300
      p-8
      justify-between
      md:hidden
    "
    :class="{ 'transform translate-x-full': !open }"
  >
    <SearchInput />

    <nav class="flex flex-1 flex-col pt-5 pb-4 overflow-y-auto">
      <ul class="">
        <!-- <li class="text-md mb-4 cursor-pointer font-light" @click="goTo('/')">
          PROJEKTE
        </li> -->
        <li
          v-for="(item, idx) in navigation"
          :key="idx"
          class="text-md mb-4 cursor-pointer font-light"
        >
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
    <nav class="mb-4">
      <ul>
        <li class="text-xs underline cursor-pointer open-sans-300">Werbung</li>
        <li class="text-xs underline cursor-pointer open-sans-300">
          Testimonials / Referenzen
        </li>
        <li class="text-xs underline cursor-pointer open-sans-300">AGB</li>
      </ul>
    </nav>
    <div class="flex-shrink flex">
      <BaseButton
        class="sidebar-cta w-full justify-center bg-green text-base font-bold"
      >
        Jetzt Anmelden!
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavLinkParam } from 'types'

import SearchInput from '~/components/common/SearchInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

export default Vue.extend({
  components: { SearchInput, BaseButton },
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
    navigation: {
      type: Array,
      required: true,
      default: () => [] as Array<NavLinkParam>,
    },
  },
  data() {
    return {}
  },
  methods: {
    closeSidebar() {
      this.$emit('closeSidebar')
    },
    goTo(route: string) {
      this.$router.push(route)
      this.closeSidebar()
    },
  },
})

// import { Vue, Component, Prop } from 'nuxt-property-decorator'

// @Component
// export default class Navigation extends Vue {
//   @Prop(Boolean) readonly open!: boolean

//   navigation: Object[] = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', count: 3, current: false },
//     { name: 'Projects', href: '#', count: 4, current: false },
//     { name: 'Calendar', href: '#', current: false },
//     { name: 'Documents', href: '#', count: 12, current: false },
//     { name: 'Reports', href: '#', current: false }
//   ]

//   closeSidebar () {
//     this.$emit('closeSidebar')
//   }

//   goTo (route: string) {
//     this.$router.push(route)
//     this.closeSidebar()
//   }
// }
</script>

<style>
.sidebar {
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.15);
}

.sidebarul li,
.sidebar.sidebar-search {
  font-family: 'OpenS-thin';
}
.sidebar.sidebar-search {
  border: 1px solid #dcdcdc;
}
.sidebar-cta,
.sidebar .sidebar-search {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
