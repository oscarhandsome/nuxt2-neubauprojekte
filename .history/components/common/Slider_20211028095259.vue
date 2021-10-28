<template>
  <div v-swiper="swiperOption" class="w-full" :loadtheme="false">
    <div class="swiper-wrapper">
      <!-- <div v-for="(item, id) in teammatesData" :key="id" class="swiper-slide"> -->
      <!-- Render original HTML in server, render Swiper in browser (client) -->
      <!-- <img class="h-64 w-64" :src="`@/assets/images/products/${banner}`" /> -->
      <!-- </div> -->
      <!-- <slot></slot> -->
      <div
        class="swiper-slide relative h-96"
        :key="banner"
        v-for="banner in banners"
      >
        <Card />
        <img class="object-cover h-48 w-full" :src="banner" />
      </div>
    </div>
    <!-- <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div> -->
    <div slot="pagination" class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { directive } from 'vue-awesome-swiper'
import Card from '@/components/common/Card.vue'

export default Vue.extend({
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  components: { Card },
  data() {
    return {
      banners: [
        'https://www.neubauprojekte.ch/wp-content/uploads/2021/08/6410_Riedmatt_Oberrohrdorf_Innen_HA-1414x1000.jpg',
        'https://www.neubauprojekte.ch/wp-content/uploads/2021/08/Attika-Maisonettewohnung-neubauprojekte-1.jpg',
        'https://www.neubauprojekte.ch/wp-content/uploads/2021/06/5066939_01-2000x1000.jpg',
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: true,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
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
      // teammatesData: [
      //   {
      //     img: "user-1.png",
      //     label: "PharmD",
      //     name: "Dr. Phillip Ryan Whitman",
      //     position: "Clinical Pharmacist",
      //     license: "Licence: PS56867",
      //   },
      //   {
      //     img: "user-2.png",
      //     label: "ARPN",
      //     name: "Laurie Lowe Nelson",
      //     position: "Family Nurse Practitioner",
      //     license: "NPI number: 1467595330",
      //   },
      //   {
      //     img: "user-3.png",
      //     label: "MD",
      //     name: "Dr. Keri McFarlane Bentley",
      //     position: "Family Physician",
      //     license: "NPI number: 1588688998",
      //   },
      // ],
    }
  },
  computed: {
    // teammates(): Array<Object> {
    //   return this.teammatesData;
    // },
  },
})
</script>
