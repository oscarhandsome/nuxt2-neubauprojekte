<template>
  <div class="flex-shrink flex mb-4">
    <div
      class="
        search-button
        flex
        align-center
        justify-between
        sidebar-search
        bg-white
        p-4
        rounded-full
        w-full
        remove-blue-highlight
        shadow-bottom
      "
    >
      <span>
        <img src="Search.svg" alt="search icon" />
      </span>
      <input
        v-model.trim="value"
        class="
          text-md
          open-sans-300
          w-2/3
          focus:border-transparent focus:outline-none
          hover:border-transparent hover:outline-none
        "
        placeholder="Wo suchst Du?"
      />
      <span class="cursor hover:bg-green" @click="searchAddress">
        <img src="Crosshair.svg" alt="search icon" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      value: '',
      results: [],
    }
  },
  methods: {
    async searchAddress() {
      console.log('value', this.value)

      const formData: any = new FormData()
      formData.append('query', this.value)

      const response = await this.$axios.$post(
        'https://dev.neubauprojekte.ch/index.php/wp-json/ajax/autocomplete',
        formData
      )

      this.results = response
      console.log('searchAddress', this.results)

      this.search()
      // this.$router.push('/search')
    },
    async search() {
      const id: string = 'Egg b. Zürich'

      const formData: any = new FormData()
      // formData.append('query', this.value)
      formData.append('type', 'all')
      formData.append('sort', 'date_created')
      formData.append('order', 'desc')
      formData.append('address', id)
      formData.append('addressType', 'plz')
      formData.append('page', '1')
      formData.append('count', '10')
      formData.append('exclusive', false)
      formData.append('latitude', '47.463561700000')
      formData.append('longitude', '9.047909700000')
      formData.append('radius', '20')
      formData.append('priceMin', '200000')
      formData.append('priceMax', '500000')
      formData.append('roomsMin', '3')
      formData.append('roomsMax', '5')

      const response: any = await this.$axios.$post(
        'https://dev.neubauprojekte.ch/index.php/wp-json/ajax/lookup',
        formData
      )

      this.results = response
      console.log('searchAddress', this.results)
    },
  },
})
</script>
