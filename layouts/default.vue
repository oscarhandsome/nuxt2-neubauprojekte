<template>
  <div class="flex flex-col">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/layout/Navbar/index.vue'
import Footer from '~/components/layout/Footer/index.vue'

export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {}
  },
})
</script>
