<template>
  <h2 class="text-2xl font-bold">{{ title }}</h2>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
