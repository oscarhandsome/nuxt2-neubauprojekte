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
      <div>
        <select
          id="geolocation_distance"
          name="geolocation_distance"
          class="form-element select"
          disabled=""
        >
          <option value="" disabled="" selected="" hidden="">Umkreis</option>
          <option value="0">0 KM</option>
          <option value="5">5 KM</option>
          <option value="10">10 KM</option>
          <option value="20">20 KM</option>
        </select>
      </div>
      <div>
        <select
          id="projekt_buy_rent"
          name="projekt_buy_rent"
          class="form-element select"
        >
          <option value="2" selected="">Miete + Eigentum</option>
          <option value="0">Miete</option>
          <option value="1">Eigentum</option>
          <option value="3">Noch offen</option>
        </select>
      </div>
      <div>
        <button>Senden</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
