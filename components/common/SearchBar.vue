<template>
  <div class="bg-green-light md:rounded-2xl p-8">
    <h3 class="text-base mb-2">
      Realisiere Deinen Traum vom
      <span
        class="
          inline-block
          bg-hero bg-8 bg-no-repeat
          font-bold
          w-28
          p-2
          text-center
        "
        >Eigenheim</span
      >
    </h3>
    <h2 class="text-4xl font-bold mb-2">Das Portal für <br />neues Wohnen</h2>
    <h4 class="text-base mb-8">
      Inklusive Neubauprojekte in Planung, im <br />Aufbau und bezugsfertig.
    </h4>
    <SearchInput />

    <div class="mb-11">
      <div class="mb-11">
        <label>Umkreis</label>
        <vue-slider ref="slider" v-model="radius"></vue-slider>
      </div>
    </div>

    <div class="mb-11">
      <label>Räume</label>
      <vue-slider ref="slider" v-model="room"></vue-slider>
    </div>

    <p class="text-xs mb-5">Letzte Suche: Zürich, 8046</p>

    <nuxt-link
      to="/search"
      class="
        inline-block
        button button-primary
        font-bold
        text-base text-center text-white
        bg-green
        hover:opacity-80
        focus:opacity-80
        transition-all
        rounded-full
        w-full
        py-4
        mb-8
        shadow-buttom
      "
    >
      2’199 Treffer gefunden!
    </nuxt-link>

    <p class="text-gray-900">
      Suchst Du etwas zur Miete? Besuche
      <a href="erstbezug.ch" class="font-bold">erstbezug.ch</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import VueSlider from 'vue-slider-component'
// import BaseButton from '../base/BaseButton.vue'
// import BaseSlider from '../base/BaseSlider.vue'
import SearchInput from '~/components/common/SearchInput.vue'

export default Vue.extend({
  components: { SearchInput },
  data() {
    return {
      radius: 0,
      room: [0, 7.5],
      umkreisOptions: {
        min: 0,
        max: 15,
        enableCross: false,
        tooltipMerge: false,
      },
    }
  },
  methods: {
    umkreisChange(val: any) {},
  },
})
</script>

<style scoped></style>
