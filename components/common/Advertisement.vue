<template>
  <section class="bg-gray-200">
    <div class="container mx-auto py-5">
      <div class="">
        <h2 class="text-center text-3xl">
          Jetzt Traumhaus sichern! <br />neubauprojekte.ch listet alle
          akltuellen sowie zukünftigen Neubauprojekte in der Schweiz.
        </h2>
      </div>
      <div v-if="stats" class="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div class="flex p-5">
            <div class="block text-4xl font-bold mr-5">{{ stats.countExclusive }}</div> 
            <p>
                <span class="text-green">unveröffentlichte</span> und <br>recherchierte Neubauten
            </p>    
        </div>
        <div class="flex p-5">
            <div class="block text-4xl font-bold mr-5">{{ stats.countNonExclusive }}</div> 
            <p>
                Immobillienobjekte aus <br>verschiedenen Quellen
            </p>    
        </div>
        <div class="flex p-5">
            <div class="block text-4xl font-bold mr-5">{{ stats.countRealtors ? stats.countRealtors + '+' : '' }}</div> 
            <p>
                Partner vermarkten ihre <br> Neubauten zuerst über uns
            </p>    
        </div>
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

