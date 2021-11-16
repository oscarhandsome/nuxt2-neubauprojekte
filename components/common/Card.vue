<template>
  <div class="card relative w-64 mr-4 rounded-2xl">
    <label
      v-if="item.new"
      class="
        absolute
        z-20
        -left-2
        top-4
        font-bold
        text-sm text-black
        uppercase
        bg-green-light
        py-1
        px-2
      "
      >NEU</label
    >
    <div class="rounded-2xl overflow-hidden mb-2 relative">
      <div v-if="item.status" class="locked">
        <div
          class="
            rounded-full
            h-24
            w-24
            flex
            items-center
            justify-center
            bg-secondary
          "
        >
          <img src="Lock.svg" alt="desc" class="w-12 h-12" />
        </div>
      </div>
      <img :src="item.image" alt="image_decr" class="h-64 object-cover" />
    </div>
    <p class="font-bold text-base mb-2">{{ item.title }}</p>
    <p class="flex">
      <img src="Position.svg" alt="pin" class="mr-2" />
      {{ item.address }}
    </p>
    <p class="text-secondary">{{ item.published }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '~/types'

export default Vue.extend({
  props: {
    item: {
      type: Object as () => Project,
      required: true,
    },
  },
})
</script>

<style scoped>
.locked {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(239, 211, 88, 0.8);
  border-radius: 10px;
}
</style>
