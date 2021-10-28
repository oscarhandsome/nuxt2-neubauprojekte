<template>
  <div class="flex flex-col">
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
// @TODO REWRITE DEFAULT LAYOUT
import Footer from '~/components/layout/Footer/index.vue'
export default {
  components: {
    Footer,
  },
}
</script>
