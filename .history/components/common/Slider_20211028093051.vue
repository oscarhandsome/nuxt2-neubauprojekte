<template>
  <div v-swiper="swiperOption" class="w-full" :loadtheme="false">
    <div class="swiper-wrapper">
      <!-- <div v-for="(item, id) in teammatesData" :key="id" class="swiper-slide"> -->
      <!-- Render original HTML in server, render Swiper in browser (client) -->
      <!-- <img class="h-64 w-64" :src="`@/assets/images/products/${banner}`" /> -->
      <!-- </div> -->
      <!-- <slot></slot> -->
      <div
        class="swiper-slide relative"
        :key="banner"
        v-for="banner in banners"
      >
        <div
          class="
            card
            bg-white
            rounded-full
            p-5
            mx-auto
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
          "
        >
          <a
            href="https://www.neubauprojekte.ch/anbieter/walde-immobilien-ag/"
            class="teaser-logo"
            style="
              background-image: url('https://www.neubauprojekte.ch/wp-content/uploads/2021/02/289_20210129_11133176480700-300x64.jpg');
            "
            title="Walde Immobilien AG Logo"
          >
          </a>
          <a
            href="https://www.neubauprojekte.ch/aargau/zurzach/tegerfelden/weinberg-tegerfelden/"
            class="front-page-teaser"
            rel="1792"
            data-client="23720"
            data-zip="5306"
            >Weinberg - Tegerfelden</a
          >
          <p class="slide-caption-text">
            Eines von 2557 Projekten zum Mieten oder Kaufen
          </p>
          <a
            class="button button-primary front-page-teaser"
            href="https://www.neubauprojekte.ch/aargau/zurzach/tegerfelden/weinberg-tegerfelden/"
            rel="1792"
            data-client="23720"
            data-zip="5306"
            >Projektdetails anzeigen</a
          >
        </div>
        <img :src="banner" />
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
// import Teammate from "@/components/common/Teammate.vue";

export default Vue.extend({
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  components: {},
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
