<template>
  <div class="flex flex-col">
    <TopOffer />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
// @TODO REWRITE DEFAULT LAYOUT
import TopOffer from "@/components/layout/TopOffer.vue";
import Footer from "~/components/layout/Footer/index.vue";
export default {
  components: {
    TopOffer,
    Footer,
  },
};
</script>
