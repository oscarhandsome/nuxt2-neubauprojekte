<template>
  <nuxt-link v-if="link.route" :to="link.route"><slot></slot></nuxt-link>
  <a v-else :href="link.href"><slot></slot></a>
</template>

<script lang="ts">
import Vue from "vue";
import { NavLinkParam } from "types";

export default Vue.extend({
  props: {
    link: {
      type: Object as () => NavLinkParam,
      default: undefined,
    },
  },
});
</script>
