<template>
  <section class="bg-gray-200">
    <div class="container mx-auto py-5">
      <div class="">
        <h2 class="text-center text-lg">
          Jetzt Traumhaus sichern! <br />neubauprojekte.ch listet alle
          akltuellen sowie zukünftigen Neubauprojekte in der Schweiz.
        </h2>
      </div>
      <div v-if="stats" class="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div class="flex p-5">
            <div class="block text-3xl font-bold mr-5">{{ stats.countExclusive }}</div> 
            <p>
                <span class="text-green-light">unveröffentlichte</span> und <br>recherchierte Neubauten
            </p>    
        </div>
        <div class="p-5">{{ stats.countNonExclusive}} Immobillienobjekte aus verschiedenen Quellen</div>
        <div class="p-5">{{ stats.countRealto }} Partner vermarkten ihre Neubauten zuerst über uns</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Stats } from "types";

export default Vue.extend({

  data() {
    return {
        stats: {}
    }
  },
  computed: {

  },
  async mounted() {

    const stats: Stats = await this.$axios.$post(
      'https://dev.neubauprojekte.ch/index.php/wp-json/ajax/getstats'
    )

    this.stats = stats
  },
})
</script>
</script>

