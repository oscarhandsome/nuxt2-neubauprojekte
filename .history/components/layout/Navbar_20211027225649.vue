<template>
  <div class="container">
    <div class="flex p-5">
      <a href="https://www.neubauprojekte.ch">Neubauprojekte</a>
      <nav role="navigation"></nav>
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
  { name: 'How it works', href: '/how-it-works', current: true },
  { name: 'FAQs', href: '/faq', current: false },
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
