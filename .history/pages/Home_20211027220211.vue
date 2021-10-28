<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Navbar from "@/components/layout/Navbar.vue";
import Header from "~/components/layout/Header.vue";

import { homePage } from "@/assets/ts/seoCommonPages";

export default Vue.extend({
  components: {
    Navbar,
    Header,
  },

  data() {
    return {
      currentPage: homePage,
      activeConcern: 0,
      headData: {
        title: "Men’s health? <br>We’ve got it covered.",
        subTitle: "Super fast. Super discreet. Get your treatment now.",
      },
      services: [
        {
          img: "ok.svg",
          text: "FDA approved treatments",
        },
        {
          img: "ok.svg",
          text: "Real US medical team",
        },
        {
          img: "ok.svg",
          text: "Discreet delivery in 48 hours",
        },
      ],
      pills: [
        {
          img: require("~/assets/images/products/bottle-viagra.png"),
          text: "Erectile<br>Dysfunction",
          route: {
            name: "clinics-erectile-dysfunction",
          },
        },
        {
          img: require("~/assets/images/products/bottle-2.png"),
          text: "Hairloss",
        },
        {
          img: require("~/assets/images/products/bottle-1.png"),
          text: "Premature<br>ejaculation",
        },
        {
          img: require("~/assets/images/products/bottle-3.png"),
          text: "Testosterone",
        },
      ],
      concerns: [
        {
          title: "Erectile dysfunction",
          route: {
            name: "clinics-erectile-dysfunction",
          },
        },
        {
          title: "Hairloss",
        },
        {
          title: "Premature ejaculation",
        },
        {
          title: "Testosterone support",
        },
      ],
      mostPopularTreatments: [
        {
          title: "Sildenafil",
          route: {
            name: "clinics-erectile-dysfunction-productSlug",
            params: {
              productSlug: "generic-sildenafil",
            },
          },
        },
        {
          title: "Tadalafil",
          route: {
            name: "clinics-erectile-dysfunction-productSlug",
            params: {
              productSlug: "generic-tadalafil",
            },
          },
        },
        {
          title: "Tadalafil Daily",
          route: {
            name: "clinics-erectile-dysfunction-productSlug",
            params: {
              productSlug: "tadalafil-daily",
            },
          },
        },
      ],
      stepsData: {
        title: "It’s simple.",
        img: require("@/assets/images/products/package.png"),
        steps: [
          {
            id: 1,
            text: "Online consultation",
            subText:
              "Answer our quick health questions: it only takes 2 minutes.",
          },
          {
            id: 2,
            text: "Genuine prescription",
            subText: "Get a fast prescription from our real US medical team.* ",
          },
          {
            id: 3,
            text: "Discreet delivery",
            subText:
              "We send your treatment in discreet packaging within 48 hours. *if eligible",
          },
        ],
      },
    };
  },

  // FOR SEO
  // head(): any {
  //   return {
  //     ...this.currentPage,
  //   };
  // },
  computed: {

  },
});
</script>

<stylescoped>
</style>
