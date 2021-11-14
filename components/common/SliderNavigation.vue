<template>
  <div
    class="flex items-center bg-gray-100 p-8 mx-auto absolute bottom-0 right-0"
  >
    <div class="mr-4">
      <a
        href="https://www.neubauprojekte.ch/aargau/zurzach/tegerfelden/weinberg-tegerfelden/"
        class="font-bold"
        rel="1792"
        data-client="23720"
        data-zip="5306"
        >{{ item.title }}</a
      >
      <p>Eines von 2557 Projekten zum Mieten oder Kaufen</p>
    </div>

    <a :href="item.realtorUrl" :title="item.realtorTitle">
      <img class="h-12" :src="item.realtorImage" :alt="item.realtorTitle" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from 'types'

export default Vue.extend({
  props: {
    item: {
      type: Object as () => Project,
      required: true,
    },
  },
})
</script>

<style scoped></style>
