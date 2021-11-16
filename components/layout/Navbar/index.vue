<template>
  <div class="sticky top-0 z-20 bg-white w-full shadow shadow-topbar">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <nav class="w-full">
          <div>
            <div class="flex items-center justify-end">
              <Logo />

              <div class="mr-0 flex lg:hidden order-last">
                <!-- Mobile menu button -->
                <button
                  class="
                    inline-flex
                    items-center
                    justify-center
                    p-2
                    ml-2
                    rounded-md
                    focus:outline-none focus:bg-gray-100
                  "
                  @click="toggleSidebar"
                >
                  <img
                    :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                    src="Menu.svg"
                    alt=""
                  />
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
                <!--<div class="flex-shrink-0">
                   <nuxt-link to="/">
                     <Logo
                    class="mx-auto md:mr-24"
                    :class="{
                      'text-blue-500': !darkMode,
                      'text-white': darkMode,
                    }"
                  /> 
                  </nuxt-link> 
                </div>-->
                <div class="hidden lg:block">
                  <div class="flex items-baseline relative">
                    <div
                      v-for="(item, idx) in navigation"
                      :key="idx"
                      class="
                        nav-link
                        flex
                        mr-2
                        xl:mr-6
                        font-light
                        text-base text-black
                        focus:text-green
                        border-b-4 border-transparent
                        focus:border-green
                        hover:border-green
                        transition-all
                      "
                      :exact="item.current"
                      exact-active-class="active"
                    >
                      <a :href="item.href">{{ item.text }}</a>

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

                      <div
                        v-if="item.childrens"
                        class="absolute top-full dropdown bg-white px-5"
                      >
                        <div class="flex flex-col items-baseline">
                          <a
                            v-for="(itemCh, chIdx) in item.childrens"
                            :key="chIdx"
                            :href="itemCh.href"
                            class="
                              flex
                              mr-2
                              xl:mr-6
                              font-light
                              text-base text-black
                              focus:text-green
                              border-b-4 border-transparent
                              py-5
                              focus:border-green
                              hover:border-green
                              transition-all
                              whitespace-nowrap
                              w-full
                            "
                            :exact="itemCh.current"
                            exact-active-class="active"
                            >{{ itemCh.text }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ml-auto">
                <div class="flex items-center md:ml-6">
                  <!-- Profile dropdown -->
                  <div class="relative">
                    <div class="flex">
                      <button
                        class="
                          flex
                          items-center
                          text-sm text-black
                          ml-auto
                          mr-2
                          rounded-full
                          sm:px-4 sm:py-2
                          hover:bg-green hover:text-white
                          focus:bg-green focus:text-white
                          transition-all
                        "
                        @click="loginFormVisibility = !loginFormVisibility"
                      >
                        <span class="hidden md:block mr-2">Merkliste</span>

                        <img
                          src="heart-nav.svg"
                          width="22"
                          heigth="22"
                          alt="login"
                        />
                      </button>

                      <button
                        class="
                          flex
                          items-center
                          text-sm
                          ml-auto
                          mr-0
                          rounded-full
                          bg-green-light
                          sm:px-4 sm:py-2
                          hover:bg-green hover:text-white
                          focus:bg-green focus:text-white
                          transition-all
                        "
                        @click="loginFormVisibility = !loginFormVisibility"
                      >
                        <span class="hidden md:block mr-2">Anmelden</span>

                        <img
                          src="User.svg"
                          width="22"
                          heigth="22"
                          alt="login"
                        />
                      </button>
                    </div>

                    <div
                      v-if="loginFormVisibility"
                      id="login"
                      class="
                        flex flex-col
                        absolute
                        right-0
                        top-16
                        bg-white
                        z-20
                        px-8
                        pt-4
                        pb-10
                        shadow-full
                      "
                      :class="{ 'login-form': !loggedMenu }"
                      role="login"
                    >
                      <div v-if="!loggedMenu">
                        <div
                          class="
                            login-header
                            flex
                            justify-between
                            items-center
                            mb-9
                          "
                        >
                          <h5 class="font-bold text-2xl">Anmelden</h5>
                          <a
                            href="https://www.neubauprojekte.ch/mein-konto/lost-password/"
                            class="forgot-password text-green"
                            >Passwort vergessen?</a
                          >
                        </div>

                        <LoginForm @logged-in-submitted="loginConfirmed" />

                        <hr class="text-gray-100 mb-5" />

                        <div class="register-now-box flex flex-col">
                          <h5 class="font-semibold text-base mb-2">
                            Noch nicht registriert?
                          </h5>
                          <a class="text-green" href="#"
                            >Kostenloss Suchprofile erstellen</a
                          >
                        </div>
                      </div>

                      <login-menu v-if="loggedMenu"></login-menu>
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
                  text-sm
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

    <Sidebar
      :open="open"
      :navigation="navigation"
      @closeSidebar="open = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavLinkParam } from 'types'

import Logo from '@/components/layout/Logo.vue'
import LoginForm from '@/components/layout/Navbar/LoginForm.vue'
import LoginMenu from '@/components/layout/Navbar/LoginMenu.vue'
import Sidebar from '~/components/layout/Sidebar.vue'

const navigation: Array<NavLinkParam> = [
  {
    text: 'Kaufen',
    href: 'https://www.neubauprojekte.ch/objektsuche/',
    current: true,
  },
  {
    text: 'Mieten',
    href: 'https://www.neubauprojekte.ch/anbieter-liste',
    current: false,
  },
  {
    text: 'Anbieter',
    href: 'https://www.neubauprojekte.ch/neubauinfo',
    current: false,
  },
  {
    text: 'Blog',
    href: 'https://www.neubauprojekte.ch/bautrends',
    current: false,
  },
  {
    text: 'Premium-Abo',
    href: 'https://www.neubauprojekte.ch/immobilienmarketing',
    current: false,
  },
  {
    text: 'Inserieren',
    href: 'https://www.neubauprojekte.ch/inserieren',
    current: false,
  },
  {
    text: 'Mehr..',
    href: '',
    current: false,
    childrens: [
      {
        text: 'Testimonials & Referenzen',
        href: 'https://www.neubauprojekte.ch/information-neubauinfoservice',
        current: false,
      },
      {
        text: 'First Caution',
        href: 'https://www.neubauprojekte.ch/firstcaution',
        current: false,
      },
      {
        text: 'Newsletter anmelden',
        href: 'https://www.neubauprojekte.ch/newsletter-anmelden',
        current: false,
      },
    ],
  },
]

declare module 'vue/types/vue' {
  interface Vue {
    isOpen: boolean
    loginFormVisibility: boolean
    loggedMenu: boolean
    open: boolean
    loginConfirmed: () => void
    toggleSidebar: () => void
  }
}

export default Vue.extend({
  components: { Logo, LoginForm, LoginMenu, Sidebar },
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
      isOpen: false as boolean,
      loginFormVisibility: false as boolean,
      loggedMenu: false as boolean,
      open: false as boolean,
    }
  },
  computed: {
    darkMode() {
      return this.mode === 'dark'
    },
  },
  methods: {
    loginConfirmed(): void {
      this.loggedMenu = true
    },
    toggleSidebar(): void {
      this.open = !this.open
    },
  },
})
</script>

<style scoped>
.login-form {
  width: 395px;
}

.dropdown {
  display: none;
}

.nav-link:hover .dropdown,
.nav-link:active .dropdown {
  display: block;
}
</style>
