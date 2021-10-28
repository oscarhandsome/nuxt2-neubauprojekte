<template>
  <div>
    <div
      class="
        text-base
        font-bold
        leading-10
        py-2
        md:text-xl
        md:leading-8
        md:py-0
        md:mb-2
        cursor-pointer
        md:cursor-default
      "
      @click="columnOpen = !columnOpen"
    >
      {{ heading }}
      <ChevronDownIcon class="md:hidden w-6 h-6 float-right mt-2" :class="columnOpen ? 'rotate-180' : ''" />
    </div>
    <div
      class="pb-4 md:pb-0"
      :class="{
        'hidden md:block': !columnOpen
      }"
    >
      <div v-for="(link, i) in navLinks" :key="i" :class="i > 0 ? 'mt-2' : ''">
        <nav-link :link="link"
          >{{ link.text }}
          <span
            v-if="link.badge"
            class="
              rounded-full
              inline-block
              ml-2
              text-xs
              bg-validation-neutral
              px-2
              py-1
              font-medium
            "
            >{{ link.badge }}</span
          >
        </nav-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ChevronDownIcon } from "@vue-hero-icons/solid";
import { NavLinkParam } from "types";
import NavLink from "@/components/layout/NavLink.vue";

export default {
  components: {
    NavLink,
    ChevronDownIcon
  },
   props: {
    heading: {
      type: String,
      default: "",
    },
    navLinks: {
      type: Array as () => NavLinkParam[],
      default: () => [],
    },
  },
  data() {
    return {
      columnOpen: false
    }
  },
}
</script>
