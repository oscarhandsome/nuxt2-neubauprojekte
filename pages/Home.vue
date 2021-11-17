<template>
  <div>
    <Header></Header>
    <Advertisement />
    <Projects />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SeoHead } from 'types'
import Header from '@/components/layout/Header.vue'
import Advertisement from '@/components/common/Advertisement.vue'
import Projects from '@/components/common/Projects.vue'

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
    Header,
    Advertisement,
    Projects,
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

<style scoped></style>
