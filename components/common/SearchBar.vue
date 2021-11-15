<template>
  <div class="bg-green-light rounded-2xl p-8">
    <h3 class="text-lg font-semibold mb-2">
      Realisiere Deinen Traum vom Eigenheim
    </h3>
    <h2 class="text-4xl font-bold mb-2">Das Portal für <br />neues Wohnen</h2>
    <h4 class="text-base mb-8">
      Inklusive Neubauprojekte in Planung, im <br />Aufbau und bezugsfertig.
    </h4>
    <SearchInput />
    <!-- 
    <label>Umkreis</label>
    <vue-slider ref="slider" v-model="radius"></vue-slider> -->

    <!-- <label>Räume</label>
    <vue-slider ref="slider" v-model="room"></vue-slider> -->

    <button
      type="submit"
      class="
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
      "
    >
      2’199 Treffer gefunden!
    </button>

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
import BaseButton from '../base/BaseButton.vue'

export default Vue.extend({
  components: { SearchInput, BaseButton },
  data() {
    return {
      radius: 0,
      room: [0, 7.5],
    }
  },
})
</script>

<style scoped></style>
