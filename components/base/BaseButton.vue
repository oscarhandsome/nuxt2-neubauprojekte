<template>
  <button
    class="
      base-button
      bg-green-darker
      text-white
      hover:bg-blend-darken hover:text-white
      inline-flex
      text-center
      w-auto
      py-2
      sm:py-4
      px-8
      rounded-full
      focus:outline-none
      leading-none
      remove-blue-highlight
      transition-all
    "
    :class="[
      { primaryLight },
      { primary },
      { light },
      { plain },
      { exclusive },
    ]"
    @click.stop="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    primaryLight: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    exclusive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(): void {
      this.$emit('onClick')
    },
  },
})
</script>

<!-- <script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  @Prop({ type: Boolean, default: false }) readonly light!: boolean
  @Prop({ type: Boolean, default: false }) readonly plain!: boolean
  @Prop({ type: Boolean, default: false }) readonly exclusive!: boolean

  onClick () {
    this.$emit('onClick')
  }
}
</script> -->

<style scoped>
.base-button.light {
  background-color: #ffffff;
  color: #79c20a;
  border: 1px solid #79c20a;
}
.base-button.light:hover {
  background-color: darken(#79c20a, 5%);
  color: #ffffff;
}
.base-button.plain {
  background-color: transparent;
  padding: 0;
}
.base-button.exclusive {
  background: #e6ab0b;
  border-radius: 9999px;
  color: #ffffff;
  --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
}

.base-button.primary {
  background: #79c20a;
  border-radius: 9999px;
  color: #ffffff;
  --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
}
.base-button.primaryLight {
  background: #ddfbb2;
  border-radius: 9999px;
  color: #374151;
  font-weight: 700;
  --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
}
</style>
