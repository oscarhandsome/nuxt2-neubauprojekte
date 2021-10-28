<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 px-5 xl:px-0">
      <div class="flex flex-col justify-center pt-6 pb-12">
        <h1
          class="font-bold text-4xl md:text-5xl mb-4"
          v-html="dataItem.title"
        ></h1>
        <slot name="rating"></slot>

        <p class="text-xl font-medium md:mb-6">
          {{ item.subTitle }}
        </p>

        <slot name="cta"></slot>
        <slot name="bottomText"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { HeaderItem } from "types";

export default Vue.extend({
  components: {},
  props: {
    item: {
      type: Object as () => HeaderItem,
      required: true,
    },
    services: {
      type: Array,
      required: false,
      default: () => [],
    },
    defaultCta: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dataItem(): HeaderItem {
      return this.item;
    },
  },
});
</script>
