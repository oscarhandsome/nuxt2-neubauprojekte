<template>
  <div v-swiper="swiperOption" class="w-full" :loadtheme="false">
    <div v-if="projects.length === 0" class="contaner py-10">
      <div class="flex justify-center items-center">
        <Spinner />
      </div>
    </div>
    <div v-if="projects" class="swiper-wrapper">
      <!-- <div v-for="(item, id) in teammatesData" :key="id" class="swiper-slide"> -->
      <!-- Render original HTML in server, render Swiper in browser (client) -->
      <!-- <img class="h-64 w-64" :src="`@/assets/images/products/${banner}`" /> -->
      <!-- </div> -->
      <!-- <slot></slot> -->

      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="swiper-slide relative"
      >
        <Card :item="project" />
        <img class="object-cover h-496 w-full" :src="project.image" />
      </div>
    </div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
    <!-- <div slot="pagination" class="swiper-pagination"></div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { directive } from 'vue-awesome-swiper'
import Card from '@/components/common/Card.vue'
import Spinner from '@/components/common/Spinner.vue'

export default Vue.extend({
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  components: { Card, Spinner },
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
  created() {
    // Returning Values from Async Functions
    const getPosition = function () {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }

    const whereAmI = async function () {
      try {
        // Geolocation
        const pos = await getPosition()
        const { latitude: lat, longitude: lng } = pos.coords
        console.log('pos', pos)

        // Reverse geocoding
        const resGeo = await fetch(
          `https://geocode.xyz/${lat},${lng}?geoit=json`
        )
        if (!resGeo.ok) throw new Error('Problem getting location data')
        const dataGeo = await resGeo.json()

        // Country data
        const res = await fetch(
          `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
        )
        if (!resGeo.ok) throw new Error('Problem getting country')
        const data = await res.json()

        return `You are in ${dataGeo.city}, ${dataGeo.country}`
      } catch (err) {
        console.error(`${err} 💥`)

        // Reject promise returned from async function
        throw err
      }
    }

    console.log('1: Will get location')
    const city = whereAmI()
    console.log(city)
  },
  data() {
    return {
      projects: [],
      // banners: [
      //   'https://www.neubauprojekte.ch/wp-content/uploads/2021/08/6410_Riedmatt_Oberrohrdorf_Innen_HA-1414x1000.jpg',
      //   'https://www.neubauprojekte.ch/wp-content/uploads/2021/08/Attika-Maisonettewohnung-neubauprojekte-1.jpg',
      //   'https://www.neubauprojekte.ch/wp-content/uploads/2021/06/5066939_01-2000x1000.jpg',
      // ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: false,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          },
        },
      },
    }
  },
  computed: {},
  async mounted() {
    const params = {
      latitude: '47.463561700000',
      longitude: '9.047909700000',
    }

    const response = await this.$axios.$post(
      'https://dev.neubauprojekte.ch/index.php/wp-json/ajax/frontpageslider',
      { params }
    )

    this.projects = response.projects
  },
})
</script>

<style scoped>
.h-496 {
  height: 49.6rem;
}
</style>
