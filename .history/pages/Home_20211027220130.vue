<template>
  <div>
    <div
      class="
        flex flex-col
        text-primary
        overflow-hidden
        bg-beige-600
        m-h-640
        bg-heroMobile bg-bottom bg-no-repeat
        md:bg-hero md:bg-center md:bg-cover
      "
    >
      <Navbar />

      <Header :item="headData" :services="services" :default-cta="true">
        <template #cta>
          <nuxt-link
            :to="consultationLink"
            class="
              hidden
              sm:inline-block
              bg-red-500
              text-white text-xl text-center
              font-medium
              rounded-lg
              py-2
              px-6
              mb-12
              md:mb-0
              self-start
              cursor-pointer
            "
          >
            Start a FREE consultation
            <ArrowNarrowRightIcon class="inline ml-3 h-14 w-18" />
          </nuxt-link>
        </template>
      </Header>
    </div>

    <main class="relative">
      <div class="container mx-auto">
        <AdvantagesSection />
      </div>

      <section class="px-5 md:px-0 py-10">
        <div class="container mx-auto">
          <div class="grid grid-cols-2 gap-x-8">
            <CardPill v-for="(item, id) in pills" :key="id" :item="item" />
          </div>
        </div>
      </section>

      <section
        class="bg-monochromatic-grey text-primary py-12 px-6 md:px-20 pb-9"
      >
        <div class="container mx-auto">
          <div class="md:px-6 py-4 pb-2">
            <h3
              class="
                font-bold
                text-4xl
                md:text-5xl
                dark:text-white
                mb-3
                md:mb-9
              "
            >
              Healthcare that works for you
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-3 md:mb-9">
              With RocketRX you have the freedom to access safe, FDA-approved
              medication on your terms. No more waiting in line — get genuine
              prescription treatments delivered straight to your door, quickly
              and discreetly.
              <nuxt-link
                :to="{
                  name: 'how-it-works',
                }"
                class="text-red-500"
                >See how we can help you</nuxt-link
              >
            </p>

            <span v-for="(concern, i) in concerns" :key="i">
              <nuxt-link
                v-if="concern.route"
                :class="[
                  i === activeConcern ? activeBadge : inActiveBadge,
                  'inline-block rounded-full text-xs px-4 py-1 font-medium mr-1 my-2',
                ]"
                :to="concern.route"
                >{{ concern.title }}</nuxt-link
              >
              <span
                v-else
                :class="[
                  i === activeConcern ? activeBadge : inActiveBadge,
                  'inline-block rounded-full text-xs px-4 py-1 font-medium mr-1 my-2',
                ]"
                >{{ concern.title }}</span
              >
            </span>

            <div class="mb-3 mt-9 md:mb-9">
              <h4 class="font-bold mb-3">Most popular treatments</h4>
              <ul class="flex">
                <li v-for="(treatment, i) in mostPopularTreatments" :key="i">
                  <nuxt-link :to="treatment.route">
                    {{ treatment.title }}
                  </nuxt-link>
                  {{ i === mostPopularTreatments.length - 1 ? "" : "/" }}&nbsp;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="relative px-5 md:px-20 gradient-bg">
        <div class="relative">
          <div class="max-w-3xl mx-auto">
            <img
              :src="require('@/assets/images/products/bottles.png')"
              alt="pills"
              class="rounded-2xl w-full object-cover select-none"
            />
          </div>
        </div>
      </section>

      <section
        class="
          bg-monochromatic-blue
          text-white
          px-6
          md:px-0
          pb-12
          md:pb-32 md:pt-32
        "
      >
        <Steps :item="steps" />
      </section>

      <TeamSection />

      <section class="bg-monochromatic-grey text-blue-500 pt-16">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
            <div class="relative">
              <img
                class="
                  object-contain
                  h-auto
                  md:h-[568px]
                  w-full
                  transform
                  -rotate-30
                  -mb-56
                  ml-24
                  md:ml-0
                "
                :src="require('@/assets/images/products/bottle-cialis.png')"
                alt="pill"
              />
              <img
                class="
                  object-contain
                  absolute
                  top-0
                  max-w-1/2
                  md:top-5/100 md:right-12/100
                "
                :src="require('@/assets/images/products/two-pills.png')"
                alt=""
              />
            </div>
            <div
              class="
                flex flex-col
                justify-center
                align-middle
                order-first
                md:order-last
                mt-6
                md:mt-0
                px-6
                md:px-0
              "
            >
              <h5 class="text-blue-500 text-4xl md:text-5xl font-bold mb-9">
                Take control of your health today.
              </h5>
              <Button class="mb-4 md:mb-0 self-start"
                >Start with 10% off now</Button
              >
            </div>
          </div>
        </div>
      </section>
    </main>
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
