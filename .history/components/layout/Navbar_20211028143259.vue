<template>
  <div class="container mx-auto relative">
    <div class="flex items-center justify-between sticky top-0">
      <nav class="w-full">
        <div>
          <div class="flex items-center justify-between h-16">
            <nuxt-link class="mr-auto" to="https://www.neubauprojekte.ch">
              <img
                :src="require('@/assets/images/logo.svg')"
                width="240"
                height="70"
                alt="neubauprojekte"
              />
            </nuxt-link>

            <div class="mr-auto flex md:hidden">
              <!-- Mobile menu button -->
              <button
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                  focus:outline-none focus:bg-gray-700 focus:text-white
                "
                @click="isOpen = !isOpen"
              >
                <svg
                  :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <svg
                  :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="flex items-center justify-center">
              <div class="flex-shrink-0">
                <nuxt-link to="/">
                  <!-- <Logo
                    class="mx-auto md:mr-24"
                    :class="{
                      'text-blue-500': !darkMode,
                      'text-white': darkMode,
                    }"
                  /> -->
                </nuxt-link>
              </div>
              <div class="hidden md:block">
                <div class="flex items-baseline">
                  <a
                    v-for="(item, idx) in navigation"
                    :key="idx"
                    :href="item.href"
                    class="
                      flex
                      mr-2
                      xl:mr-6
                      font-semibold
                      text-sm
                      uppercase
                      border-b-4 border-transparent
                      py-3
                      focus:border-green-light
                      hover:border-green-light
                    "
                    :class="{
                      'text-blue-500 bg-transparent focus:outline-none focus:text-green-light focus:bg-white hover:outline-none hover:text-green-light hover:bg-white':
                        !darkMode,
                      'text-white bg-transparent focus:outline-none focus:text-blue-500 focus:bg-white hover:text-blue-500 hover:bg-white':
                        darkMode,
                      'md:hidden': item.hiddenOnDesktop,
                    }"
                    :exact="item.current"
                    exact-active-class="active"
                    >{{ item.name }}

                    <img
                      v-if="item.childrens"
                      class="ml-2"
                      :src="
                        require('@/assets/images/svg/arrow-down-medium-dark.svg')
                      "
                      width="8"
                      heigth="8"
                      alt="img_desc"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="ml-auto">
              <div class="flex items-center md:ml-6">
                <!-- Profile dropdown -->
                <div class="relative">
                  <div>
                    <a
                      class="
                        flex
                        items-center
                        text-sm
                        ml-auto
                        mr-0
                        rounded-full
                        bg-gray-100
                        px-4
                        py-2
                      "
                      :class="{
                        'text-black': !darkMode,
                        'text-white': darkMode,
                      }"
                      href="/login-choose"
                    >
                      <!-- <svg
                        class="md:mr-3"
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.121 15.804C5.21942 14.6179 7.58958 13.9963 10 14C12.5 14 14.847 14.655 16.879 15.804M13 8C13 8.79565 12.6839 9.55871 12.1213 10.1213C11.5587 10.6839 10.7956 11 10 11C9.20435 11 8.44129 10.6839 7.87868 10.1213C7.31607 9.55871 7 8.79565 7 8C7 7.20435 7.31607 6.44129 7.87868 5.87868C8.44129 5.31607 9.20435 5 10 5C10.7956 5 11.5587 5.31607 12.1213 5.87868C12.6839 6.44129 13 7.20435 13 8ZM19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg> -->
                      <span class="hidden md:block mr-2">Anmelden</span>

                      <img
                        :src="
                          require('@/assets/images/svg/arrow-down-medium-light.svg')
                        "
                        width="5"
                        heigth="5"
                        alt="login"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
          <div class="bg-white">
            <nuxt-link
              v-for="(item, idx) in navigation"
              :key="idx"
              :to="item.href"
              class="
                block
                font-medium
                text-sm text-primary
                hover:text-primary hover:bg-gray-100
                focus:outline-none focus:text-white focus:bg-gray-100
              "
              :exact="item.current"
              exact-active-class="active"
              >{{ item.name }}</nuxt-link
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Logo from '@/components/layout/Logo.vue'

const navigation = [
  {
    name: 'Log in',
    href: '/login-choose',
    current: false,
    hiddenOnDesktop: true,
  },
  {
    name: 'Objekte',
    href: 'https://www.neubauprojekte.ch/objektsuche/',
    current: true,
  },
  {
    name: 'Anbieter',
    href: 'https://www.neubauprojekte.ch/anbieter-liste',
    current: false,
  },
  {
    name: 'NeubauInfo',
    href: 'https://www.neubauprojekte.ch/neubauinfo',
    current: false,
  },
  {
    name: 'Bautrends',
    href: 'https://www.neubauprojekte.ch/bautrends',
    current: false,
  },
  {
    name: 'Marketing',
    href: 'https://www.neubauprojekte.ch/immobilienmarketing',
    current: false,
  },
  {
    name: 'Blog',
    href: 'https://www.neubauprojekte.ch/blog',
    current: false,
  },
  {
    name: 'Mehr..',
    href: '',
    current: false,
    childrens: [
      {
        name: 'NeubauInfoService',
        href: 'https://www.neubauprojekte.ch/information-neubauinfoservice',
        current: false,
      },
      {
        name: 'FirstCaution',
        href: 'https://www.neubauprojekte.ch/firstcaution',
        current: false,
      },
      {
        name: 'Newsletter Anmelden',
        href: 'https://www.neubauprojekte.ch/newsletter-anmelden',
        current: false,
      },
      {
        name: 'Inserieren',
        href: 'https://www.neubauprojekte.ch/inserieren',
        current: false,
      },
    ],
  },
]

export default Vue.extend({
  // components: { Logo },
  props: {
    mode: {
      type: String,
      required: false,
      default: 'light',
    },
  },
  data() {
    return {
      navigation,
      isOpen: false,
    }
  },
  computed: {
    darkMode() {
      return this.mode === 'dark'
    },
  },
})
</script>
