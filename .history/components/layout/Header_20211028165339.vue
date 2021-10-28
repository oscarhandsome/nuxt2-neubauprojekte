<template>
  <div class="relative">
    <Slider />
    <SearchBar class="absolute bottom-0 z-10" />
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
