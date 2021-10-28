<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '@/components/layout/Navbar.vue'
import Header from '~/components/layout/Header.vue'

const homePage: SeoHead = {
  title: 'Rocket Rx - US Online Doctor',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Rocket Rx is a US Online Doctor offering express treatment online for a range of health conditions. Safe, Convenient, Fast and Affordable.',
    },
  ],
}

export default Vue.extend({
  components: {
    Navbar,
    Header,
  },

  data() {
    return {
      currentPage: homePage,
    }
  },

  // FOR SEO
  head(): any {
    return {
      ...this.currentPage,
    }
  },
  computed: {},
})
</script>

<style scoped></style>
