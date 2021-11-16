<template>
  <form @submit.prevent="submitForm">
    <div class="form-elements mb-4 text-gray-700">
      <label
        class="form-element label text-sm leading-5 font-medium text-gray-700"
        for="email"
        >Benutzername oder E-Mail-Adresse</label
      >
      <input
        id="email"
        v-model.trim="form.email"
        type="email"
        name="log"
        class="
          form-element
          text
          h-10
          border border-gray-300
          rounded-sm
          w-full
          shadow-input
        "
        size="20"
      />
    </div>
    <div class="form-elements mb-4 text-gray-700">
      <label
        class="form-element label text-sm leading-5 font-medium text-gray-700"
        for="pass"
        >Passwort</label
      >
      <input
        id="pass"
        v-model.trim="form.pwd"
        type="password"
        name="pwd"
        class="
          form-element
          text
          h-10
          border border-gray-300
          rounded-sm
          w-full
          shadow-input
        "
        size="20"
      />
    </div>

    <div
      class="
        form-elements
        remember-me
        text-sm
        leading-5
        font-medium
        text-gray-700
        mb-8
      "
    >
      <label class="form-element label">
        <input
          id="remember_me"
          name="rememberme"
          type="checkbox"
          value="forever"
          class="mr-3"
        />
        Angemeldet bleiben</label
      >
    </div>
    <div class="form-elements submit active mb-9">
      <base-button primaryLight>Anmelden</base-button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'

const initForm = () => ({
  email: '',
  pwd: '',
})

export default Vue.extend({
  components: { BaseButton },
  data() {
    return {
      form: initForm(),
    }
  },
  methods: {
    submitForm() {
      //   console.log(this.form)
      this.$emit('logged-in-submitted')
    },
  },
})
</script>
