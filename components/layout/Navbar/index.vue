<template>
  <div class="sticky top-0 z-20 bg-white w-full">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <nav class="w-full">
          <div>
            <div class="flex items-center justify-between h-16">
              <nuxt-link class="mr-auto" to="https://www.neubauprojekte.ch">
                <img
                  :src="require('@/assets/images/logo.svg')"
                  width="285"
                  height="50"
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
                  <div class="flex items-baseline relative">
                    <a
                      v-for="(item, idx) in navigation"
                      :key="idx"
                      :href="item.href"
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

                      <div
                        v-if="item.childrens"
                        class="
                          absolute
                          top-full
                          dropdown
                          bg-white
                          p-5
                          border-r-4
                        "
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
                    </a>
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
                          mr-0
                          rounded-full
                          bg-gray-100
                          px-4
                          py-2
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
                          px-4
                          py-2
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
                        login-form
                        absolute
                        right-0
                        top-full
                        bg-white
                        z-20
                      "
                      role="login"
                    >
                      <div class="login-header p-5">
                        <i class="fa fa-times close-login-box"></i>
                        <!-- <a href="https://www.neubauprojekte.ch/registrierung/">Noch kein Konto?</a> -->
                        <h5 class="font-bold text-2xl">Anmelden</h5>
                      </div>

                      <div
                        id="loginform"
                        class="p-5"
                        name="loginform"
                        action="https://www.neubauprojekte.ch/logging/"
                        method="post"
                      >
                        <p class="form-elements">
                          <label
                            class="form-element label font-semibold"
                            for="user"
                            >Benutzername oder E-Mail-Adresse</label
                          >
                          <input
                            id="user"
                            type="text"
                            name="log"
                            class="
                              form-element
                              text
                              h-10
                              border border-gray-300
                              rounded-sm
                              w-full
                            "
                            value=""
                            size="20"
                          />
                        </p>
                        <p class="form-elements">
                          <label
                            class="form-element label font-semibold"
                            for="pass"
                            >Passwort</label
                          >
                          <input
                            id="pass"
                            type="password"
                            name="pwd"
                            class="
                              form-element
                              text
                              h-10
                              border border-gray-300
                              rounded-sm
                              w-full
                            "
                            value=""
                            size="20"
                          />
                        </p>

                        <p class="form-elements active">
                          <a
                            href="https://www.neubauprojekte.ch/mein-konto/lost-password/"
                            class="forgot-password text-green mb-4"
                            >Passwort vergessen?</a
                          >
                        </p>
                        <p class="form-elements remember-me active mb-4">
                          <label class="form-element label"
                            ><input
                              id="remember_me"
                              name="rememberme"
                              type="checkbox"
                              value="forever"
                            />
                            Angemeldet bleiben</label
                          >
                        </p>
                        <p class="form-elements submit active text-center">
                          <button
                            id="wp-submit"
                            type="submit"
                            name="wp-submit"
                            class="
                              button button-primary
                              w-full
                              p-4
                              font-semibold
                              text-base text-center text-white
                              uppercase
                              bg-green
                              hover:opacity-80
                              focus:opacity-80
                              transition-all
                              rounded-full
                            "
                          >
                            Anmelden
                          </button>
                          <input
                            type="hidden"
                            name="redirect_to"
                            value="https://www.neubauprojekte.ch/"
                          />
                        </p>
                      </div>
                      <div class="register-now-box p-5 flex flex-col">
                        <h5>Jetzt registrieren</h5>
                        <a
                          class="text-green"
                          href="https://www.neubauprojekte.ch/logging/?action=register"
                          >Für die Immobiliensuche</a
                        >
                        <a
                          class="text-green"
                          href="https://cockpit.neubauprojekte.ch/"
                          >Als Immobilien-Anbieter</a
                        >
                      </div>
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
    }
  },
  computed: {
    darkMode() {
      return this.mode === 'dark'
    },
  },
})
</script>

<style scoped>
.login-form {
  width: 395px;
}
</style>
