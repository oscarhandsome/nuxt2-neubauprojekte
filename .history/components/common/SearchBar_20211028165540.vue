<template>
  <div class="container mx-auto">
    <div class="grid md:grid-cols-5 grid-cols-1 bg-white">
      <div>
        <select
          id="this_type"
          name="this_type"
          class="form-element select most-left"
        >
          <option value="projects">Projekte &amp; Überbauungen</option>
          <option value="objects">Objekte</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          class="tagzy_tag ui-autocomplete-input"
          autocomplete="off"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
