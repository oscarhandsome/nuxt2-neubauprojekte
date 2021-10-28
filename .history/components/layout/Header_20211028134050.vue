<template>
  <div>
    <Slider>
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="swiper-slide relative"
      >
        <Card :item="project" />
        <img class="object-cover h-496 w-full" :src="project.image" />
      </div>
    </Slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Slider from '@/components/common/Slider.vue'

export default Vue.extend({
  components: { Slider },
  computed: {},
})
</script>
