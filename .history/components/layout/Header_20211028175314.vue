<template>
  <div class="relative">
    <div v-if="projects.length === 0" class="contaner py-10">
      <div class="flex justify-center items-center">
        <Spinner />
      </div>
    </div>
    <Slider v-if="projects" class="relative z-10">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="swiper-slide relative"
      >
        <Card :item="project" />
        <img class="object-cover h-496 w-full" :src="project.image" />
      </div>
    </Slider>
    <SearchBar
      v-if="projects.length !== 0"
      class="absolute bottom-10 z-20 left-1/2 transform -translate-x-1/2"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Card from '@/components/common/Card.vue'
import Spinner from '@/components/common/Spinner.vue'
import Slider from '@/components/common/Slider.vue'
import SearchBar from '@/components/common/SearchBar.vue'

export default Vue.extend({
  components: { Card, Spinner, Slider, SearchBar },
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
      console.log('pos', pos)
      localStorage.setItem('pos', JSON.stringify(pos))

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

      // // Reverse geocoding
      // const resGeo = await fetch(
      //   `https://geocode.xyz/${lat},${lng}?geoit=json`
      // )
      // if (!resGeo.ok) throw new Error('Problem getting location data')
      // const dataGeo = await resGeo.json()

      // // Country data
      // const res = await fetch(
      //   `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
      // )
      // if (!resGeo.ok) throw new Error('Problem getting country')
      // const data = await res.json()

      // return `You are in ${dataGeo.city}, ${dataGeo.country}`
    } catch (err) {
      console.error(`${err} 💥`)

      // Reject promise returned from async function
      throw err
    }

    // console.log('1: Will get location')
    // const city = whereAmI()
    // const { lat, lng } = whereAmI()
    // console.log(city)
  },
})
</script>

<style scoped>
.h-496 {
  height: 49.6rem;
}
</style>
