<template>
  <section class="bg-gray-200">
    <div class="container mx-auto">
      <div class="py-5">
        <h2 class="text-center text-lg">
          Jetzt Traumhaus sichern! <br />neubauprojekte.ch listet alle
          akltuellen sowie zukünftigen Neubauprojekte in der Schweiz.
        </h2>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>unveröffentlichte und recherchierte Neubauten</div>
        <div>Immobillienobjekte aus verschiedenen Quellen</div>
        <div>Partner vermarkten ihre Neubauten zuerst über uns</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // components: { Logo },

  data() {
    return {
    }
  },
  computed: {
    darkMode() {
      return this.mode === 'dark'
    },
  },
})
</script>
</script>

