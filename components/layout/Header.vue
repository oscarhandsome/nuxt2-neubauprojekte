<template>
  <div class="relative z-10">
    <div v-if="projects.length === 0" class="contaner py-10">
      <div class="flex justify-center items-center">
        <Spinner />
      </div>
    </div>

    <SearchBar
      v-if="projects.length !== 0"
      class="
        smd:absolute
        smd:z-20
        smd:left-8
        smd:top-1/2
        smd:transform
        smd:-translate-y-1/2
      "
    />

    <Slider v-if="projects" class="relative z-10">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="swiper-slide relative"
      >
        <SliderNavigation :item="project" />
        <img class="object-cover h-496 w-full" :src="project.image" />
      </div>
    </Slider>
  </div>
</template>

<script>
import Vue from 'vue'
// import { Projects, Project } from 'types'

import SliderNavigation from '~/components/common/SliderNavigation.vue'
import Spinner from '@/components/common/Spinner.vue'
import Slider from '@/components/common/Slider.vue'
import SearchBar from '@/components/common/SearchBar.vue'

export default Vue.extend({
  components: { SliderNavigation, Spinner, Slider, SearchBar },
  // @TODO CHECK WHY NOT WORK
  // async asyncData({ $axios }) {
  //   const params = {
  //     latitude: '47.463561700000',
  //     longitude: '9.047909700000',
  //   }

  //   const { projects } = await $axios.$post(
  //     'https://dev.neubauprojekte.ch/index.php/wp-json/ajax/frontpageslider',
  //     { params }
  //   )

  //   return { projects }
  // },
  data() {
    return {
      projects: [],
    }
  },
  computed: {},
  async mounted() {
    const response = await this.$axios.$post(
      'https://dev.neubauprojekte.ch/index.php/wp-json/ajax/frontpageslider'
    )

    this.projects = response.projects

    // Returning Values from Async Functions
    const getPosition = function () {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }

    try {
      // Geolocation
      const pos = await getPosition()
      const { latitude: lat, longitude: lng } = pos.coords
      // console.log('pos', pos)

      const params = {
        // latitude: '47.463561700000',
        // longitude: '9.047909700000',
        latitude: lat,
        longitude: lng,
      }

      const response = await this.$axios.$post(
        'https://dev.neubauprojekte.ch/index.php/wp-json/ajax/frontpageslider',
        { params }
      )

      this.projects = response.projects
    } catch (err) {
      // console.error(`${err} 💥`)
    }
  },
})
</script>

<style scoped>
.h-496 {
  height: 49.6rem;
}
</style>
