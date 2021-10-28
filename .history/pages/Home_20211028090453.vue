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

export default Vue.extend({
  components: {
    Navbar,
    Header,
  },

  data() {
    return {}
  },

  // FOR SEO
  // head(): any {
  //   return {
  //     ...this.currentPage,
  //   };
  // },
  computed: {},
})
</script>

<style scoped></style>
