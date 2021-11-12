<template>
  <div class="sticky top-0 z-20 bg-white w-full">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <nav class="w-full">
          <div>
            <div class="flex items-center justify-between shadow-bottom">
              <nuxt-link class="mr-auto" to="https://www.neubauprojekte.ch">
                <img
                  :src="require('@/assets/images/logo.svg')"
                  width="285"
                  height="50"
                  alt="neubauprojekte"
                />
              </nuxt-link>

              <div class="mr-auto flex md:hidden order-last">
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
                        text-base
                        border-b-4 border-transparent
                        focus:border-green
                        hover:border-green
                        py-5
                        transition-all
                      "
                      :class="{
                        'text-blue-500 bg-transparent focus:outline-none focus:text-green focus:bg-white hover:outline-none hover:text-green hover:bg-white':
                          !darkMode,
                        'text-white bg-transparent focus:outline-none focus:text-blue-500 focus:bg-white hover:text-blue-500 hover:bg-white':
                          darkMode,
                        'md:hidden': item.hiddenOnDesktop,
                      }"
                      :exact="item.current"
                      exact-active-class="active"
                    >
                      <a :href="item.href">{{ item.name }}</a>

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
                              text-base
                              border-b-4 border-transparent
                              py-5
                              focus:border-green
                              hover:border-green
                              transition-all
                              whitespace-nowrap
                              w-full
                            "
                            :class="{
                              'text-blue-500 bg-transparent focus:outline-none focus:text-green focus:bg-white hover:outline-none hover:text-green hover:bg-white':
                                !darkMode,
                              'text-white bg-transparent focus:outline-none focus:text-blue-500 focus:bg-white hover:text-blue-500 hover:bg-white':
                                darkMode,
                              'md:hidden': item.hiddenOnDesktop,
                            }"
                            :exact="itemCh.current"
                            exact-active-class="active"
                            >{{ itemCh.name }}
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
                          text-sm
                          ml-auto
                          mr-2
                          rounded-full
                          sm:px-4 sm:py-2
                          hover:bg-green hover:text-white
                          focus:bg-green focus:text-white
                          transition-all
                        "
                        :class="{
                          'text-black': !darkMode,
                          'text-white': darkMode,
                        }"
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
                        :class="{
                          'text-black': !darkMode,
                          'text-white': darkMode,
                        }"
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
                        top-full
                        bg-white
                        z-20
                        px-8
                        pt-4
                        pb-10
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Logo from '@/components/layout/Logo.vue'
import LoginForm from '@/components/layout/Navbar/LoginForm.vue'
import LoginMenu from '@/components/layout/Navbar/LoginMenu.vue'

const initialNavigation = () => [
  {
    name: 'Kaufen',
    href: 'https://www.neubauprojekte.ch/objektsuche/',
    current: true,
  },
  {
    name: 'Mieten',
    href: 'https://www.neubauprojekte.ch/anbieter-liste',
    current: false,
  },
  {
    name: 'Anbieter',
    href: 'https://www.neubauprojekte.ch/neubauinfo',
    current: false,
  },
  {
    name: 'Blog',
    href: 'https://www.neubauprojekte.ch/bautrends',
    current: false,
  },
  {
    name: 'Premium-Abo',
    href: 'https://www.neubauprojekte.ch/immobilienmarketing',
    current: false,
  },
  {
    name: 'Inserieren',
    href: 'https://www.neubauprojekte.ch/inserieren',
    current: false,
  },
  {
    name: 'Mehr..',
    href: '',
    current: false,
    childrens: [
      {
        name: 'Testimonials & Referenzen',
        href: 'https://www.neubauprojekte.ch/information-neubauinfoservice',
        current: false,
      },
      {
        name: 'First Caution',
        href: 'https://www.neubauprojekte.ch/firstcaution',
        current: false,
      },
      {
        name: 'Newsletter anmelden',
        href: 'https://www.neubauprojekte.ch/newsletter-anmelden',
        current: false,
      },
    ],
  },
]

export default Vue.extend({
  // components: { Logo },
  components: { LoginForm, LoginMenu },
  props: {
    mode: {
      type: String,
      required: false,
      default: 'light',
    },
  },
  data() {
    return {
      navigation: initialNavigation(),
      isOpen: false,
      loginFormVisibility: false,
      loggedMenu: false,
    }
  },
  computed: {
    darkMode() {
      return this.mode === 'dark'
    },
  },
  methods: {
    loginConfirmed() {
      this.loggedMenu = true
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
