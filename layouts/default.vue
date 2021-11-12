<template>
  <div class="flex flex-col">
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/layout/Footer/index.vue'

export default Vue.extend({
  components: {
    Footer,
  },
})
</script>
