<template>
  <div
    class="
      card
      flex flex-col
      items-center
      text-center
      bg-white
      rounded-2xl
      p-8
      mx-auto
      absolute
      top-20
      left-1/2
      transform
      -translate-x-1/2
    "
  >
    <a class="mb-6" :href="item.realtorUrl" :title="item.realtorTitle">
      <img
        :src="item.realtorImage"
        width="160"
        height="50"
        :alt="item.realtorTitle"
      />
    </a>
    <a
      href="https://www.neubauprojekte.ch/aargau/zurzach/tegerfelden/weinberg-tegerfelden/"
      class="text-4xl font-bold mb-11"
      rel="1792"
      data-client="23720"
      data-zip="5306"
      >{{ item.title }}</a
    >
    <p class="text-2xl mb-11">
      Eines von 2557 Projekten zum Mieten oder Kaufen
    </p>
    <a
      class="
        w-full
        p-5
        font-semibold
        text-base text-center text-white
        uppercase
        bg-green
        hover:opacity-80
        focus:opacity-80
        transition-all
        rounded-full
      "
      :href="item.url"
      rel="1792"
      data-client="23720"
      data-zip="5306"
      >Projektdetails anzeigen</a
    >
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

<style scoped>
.card {
  width: 406px;
}
</style>
