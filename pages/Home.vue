<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <Advertisement />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SeoHead } from 'types'
import Navbar from '@/components/layout/Navbar/index.vue'
import Header from '@/components/layout/Header.vue'
import Advertisement from '@/components/common/Advertisement.vue'

const homePage: SeoHead = {
  title: 'Neubauprojekte.ch  Das Portal für neues Wohnen.',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Über 2557 aktuelle Neubauprojekte mit Erstbezug und Baulandangeboten zum Kaufen oder Mieten. Sie sind auf der Suche nach einem Neubau? Finden Sie das passende Neubauobjekt mit Erstbezug auf unserer Spezial-Plattform.',
    },
  ],
}

export default Vue.extend({
  components: {
    Navbar,
    Header,
    Advertisement,
  },

  data() {
    return {
      currentPage: homePage,
    }
  },

  // FOR SEO
  head(): any {
    return {
      ...this.currentPage,
    }
  },
  computed: {},
})
</script>

<style scoped>
.test {
  height: 30px;
}
</style>
