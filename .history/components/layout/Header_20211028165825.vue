<template>
  <div class="relative">
    <Slider class="relative z-10" />
    <SearchBar
      class="absolute bottom-5 z-20 left-1/2 transform -translate-x-1/2"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Slider from '@/components/common/Slider.vue'
import SearchBar from '@/components/common/SearchBar.vue'

export default Vue.extend({
  components: { Slider, SearchBar },
  computed: {},
})
</script>
