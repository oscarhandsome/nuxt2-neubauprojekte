<template>
  <div
    class="
      relative
      rounded-3xl
      bg-primary
      mb-16
      md:mb-24
      h-[150px]
      sm:h-[182px]
      md:h-[238px]
    "
  >
    <div class="flex flex-col h-full">
      <div class="flex md:flex-grow text-black px-3 pt-3 pb-1 md:p-6">
        <h5
          class="
            text-white text-lg
            sm:text-lg
            md:text-xl
            lg:text-2xl
            xl:text-4xl
            font-bold
          "
          v-html="item.text"
        ></h5>
      </div>
      <div
        class="rounded-b-3xl px-3 pt-0 pb-3 md:p-6"
        :class="item.route ? '' : 'md:bg-blue-800'"
      >
        <nuxt-link
          v-if="item.route"
          :to="item.route"
          class="flex text-red-500 font-medium"
        >
          <span class="hidden md:inline">Learn more</span>
          <img
            src="@/assets/images/svg/arrow-right-red.svg"
            alt="arrow-right"
            width="18"
            height="14"
            class="hidden md:inline ml-3"
          />
          <div class="md:hidden p-4 bg-red-500 rounded-lg">
            <img
              src="@/assets/images/svg/arrow-right.svg"
              alt="arrow-right"
              width="24"
              height="24"
            />
          </div>
        </nuxt-link>
        <div
          v-else
          class="text-beige-500 text-sm md:text-xl font-medium leading-normal"
        >
          Launching soon
        </div>
      </div>
    </div>
    <div
      class="
        absolute
        right-0
        -bottom-14
        sm:-bottom-24
        md:-bottom-26
        xl:-bottom-28
        w-1/2
        lg:w-4/12
        max-w-[200px]
      "
    >
      <img
        class="image w-full object-cover select-none"
        :alt="item.text"
        :src="item.img"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
});
</script>
