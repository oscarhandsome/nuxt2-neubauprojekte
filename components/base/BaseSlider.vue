<template>
  <div>BaseSlider</div>
  <!-- <div>
    <label v-if="label" class="text-sm mb-6">{{ label }}</label>
    <VueSlider
      class="base-slider content-around"
      style="padding: 1rem 0.65rem; height: 6px"
      :value="value"
      :min="options.min"
      :max="options.max"
      :dot-size="16"
      :tooltip="'active'"
      :interval="interval"
      :format="format"
      :lazy="true"
      @change="changed"
    />
    <div class="results">
        <div v-if="typeof value === 'object'" class="flex w-full justify-between">
          <span
            class="bg-gray-banner py-1 px-2 text-xs font-semibold"
          >{{ unitOne }}
            {{ value[0] && formatPrice ? formatValue(value[0]) : value[0] }}</span>
          <span
            class="bg-gray-banner py-1 px-2 text-xs font-bold"
          >{{ value[1] && formatPrice ? formatValue(value[1]) : value[1] }}
            {{ unitTwo }}</span>
        </div>
        <div v-else class="flex w-full justify-end">
          <span
            class="bg-gray-banner py-1 px-2 text-xs"
          >{{ value }} {{ unit }}</span>
        </div>
      </div> 
    </div>
  </div>-->
</template>

<script lang="ts">
import Vue from 'vue'
// import VueSlider from 'vue-slider-component'

export default Vue.extend({
  // components: { VueSlider },
  data() {
    return {
      value: 0,
      options: [],
      interval: 0,
      unitTwo: '',
      unitOne: '',
      unit: '',
      labelPosition: '',
      label: '',
      format: '',
      formatPrice: false,
    }
  },
  methods: {
    changed(val: object) {
      this.$emit('changed', val)
    },
    formatValue(val: any) {
      return parseInt(val, 10)
        .toLocaleString('en-US', {
          minimumFractionDigits: 2,
        })
        .replace(',', "'")
    },
  },
})
</script>

<style>
.base-slider {
  position: relative;
}

.base-slider:hover .vue-slider-rail {
  background-color: #ececec;
  border: 0;
}

.base-slider .vue-slider-rail {
  background-color: #ececec;
  border: 1px solid #ececec;
  height: 5px;
}

.base-slider .vue-slider-process {
  background-color: #c1ed7f;
  height: 5px;
}

.base-slider.vue-slider-dot {
  width: 20px;
  height: 20px;
}

.base-slider.vue-slider-dot-handle {
  background-color: #c1ed7f;
  box-shadow: none;
  border: 1px solid #c1ed7f;
}

.base-slider .vue-slider-dot-tooltip-inner:after {
  border-top-color: #79c20a;
}

.base-slider .vue-slider-dot-tooltip-inner {
  background-color: #79c20a;
}
</style>
