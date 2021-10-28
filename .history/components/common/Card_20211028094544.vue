<template>
  <div
    class="
      card
      flex flex-col
      items-center
      text-center
      bg-white
      rounded-2xl
      p-10
      max-w-sm
      mx-auto
      absolute
      top-20
      left-1/2
      transform
      -translate-x-1/2
    "
  >
    <a
      class="mb-6"
      href="https://www.neubauprojekte.ch/anbieter/walde-immobilien-ag/"
      title="Walde Immobilien AG Logo"
    >
      <img
        src="https://www.neubauprojekte.ch/wp-content/uploads/2021/02/289_20210129_11133176480700-300x64.jpg"
        width="160"
        height="50"
        alt="neubauprojekte"
      />
    </a>
    <a
      href="https://www.neubauprojekte.ch/aargau/zurzach/tegerfelden/weinberg-tegerfelden/"
      class="text-4xl font-bold mb-11"
      rel="1792"
      data-client="23720"
      data-zip="5306"
      >Weinberg - Tegerfelden</a
    >
    <p class="text-2xl mb-11">
      Eines von 2557 Projekten zum Mieten oder Kaufen
    </p>
    <a
      class="
        w-full
        p-5
        font-semibold
        text-center text-white
        capitalize
        bg-green-light
        rounded-full
      "
      href="https://www.neubauprojekte.ch/aargau/zurzach/tegerfelden/weinberg-tegerfelden/"
      rel="1792"
      data-client="23720"
      data-zip="5306"
      >Projektdetails anzeigen</a
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
})
</script>
