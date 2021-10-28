<template>
  <div>
    <nav id="navigation" class="navigation" role="navigation">
      <div class="title outline-title">Main Navigation</div>
      <div class="wrap">
        <div class="navigation-user">
          <ul class="toggles">
            <li class="toggle">
              <a class="toggle-link active" href="#login">Anmelden</a>
              <!-- login -->
            </li>
          </ul>
          <!-- 	      <form class="form" method="post" action="">
	        <select class="form-element select">
	          <option>DE</option>
	          <option>FR</option>
	          <option>IT</option>
	        </select>
	        <input class="form-element submit" type="submit" value="OK">
	      </form> -->
        </div>

        <div class="navigation-page">
          <ul
            id="menu-header-menu-deutsch"
            class="navigation-items navigation-primary"
          >
            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/objektsuche/"
                class="navigation-link"
                >Objekte</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/neubauprojekte"
                class="navigation-link has-submenu"
                >Projekte</a
              >

              <ul class="sub-menu">
                <li class="navigation-item">
                  <a
                    href="https://www.neubauprojekte.ch/anbieter-liste"
                    class="navigation-link"
                    >Anbieter</a
                  >
                </li>
              </ul>
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/neubauinfo"
                class="navigation-link"
                >NeubauInfo</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/bautrends/"
                class="navigation-link"
                >Bautrends</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/immobilienmarketing"
                class="navigation-link"
                >Marketing</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/blog/"
                class="navigation-link"
                >Blog</a
              >
            </li>

            <li class="navigation-item">
              <a href="#" class="navigation-link has-submenu hover-only"
                >Mehr..</a
              >

              <ul class="sub-menu">
                <li class="navigation-item">
                  <a
                    href="https://www.neubauprojekte.ch/information-neubauinfoservice/"
                    class="navigation-link"
                    >NeubauInfoService</a
                  >
                </li>

                <li class="navigation-item">
                  <a
                    href="https://www.neubauprojekte.ch/firstcaution/"
                    class="navigation-link"
                    >FirstCaution</a
                  >
                </li>

                <li class="navigation-item">
                  <a
                    href="https://www.neubauprojekte.ch/newsletter-anmelden/"
                    class="navigation-link"
                    >Newsletter Anmelden</a
                  >
                </li>

                <li class="navigation-item">
                  <a
                    href="https://www.neubauprojekte.ch/inserieren/"
                    class="navigation-link"
                    >Inserieren</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul
            id="menu-footer-menu-deutsch"
            class="navigation-items navigation-primary mobile-only"
          >
            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/kontakt/"
                class="navigation-link"
                >Kontakt</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/ueber-uns/"
                class="navigation-link"
                >Über uns</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/werbung/"
                class="navigation-link"
                >Werbung</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/agb/"
                class="navigation-link"
                >AGB</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/datenschutzbestimmungen/"
                class="navigation-link"
                >Datenschutzbestimmungen</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/impressum/"
                class="navigation-link"
                >Impressum</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/registrierung/"
                class="navigation-link"
                >Registrieren</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.facebook.com/pages/neubauprojektech-Immobilien-mit-Erstbezug/281235605289"
                class="navigation-link"
                target="_blank"
                >Facebook</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/linkeintraege/"
                class="navigation-link"
                >Linkeinträge</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/testimonials-und-referenzen/"
                class="navigation-link"
                >Testimonials und Referenzen</a
              >
            </li>

            <li class="navigation-item">
              <a
                href="https://www.neubauprojekte.ch/inserieren/"
                class="navigation-link"
                >Inserieren</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/layout/Logo.vue'

const navigation = [
  {
    name: 'Log in',
    href: '/login-choose',
    current: false,
    hiddenOnDesktop: true,
  },
  { name: 'How it works', href: '/how-it-works', current: true },
  { name: 'FAQs', href: '/faq', current: false },
]

export default Vue.extend({
  components: { Logo },
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
