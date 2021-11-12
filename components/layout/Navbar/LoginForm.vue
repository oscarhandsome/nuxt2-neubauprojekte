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
    <div class="form-elements submit active text-center mb-9">
      <button
        type="submit"
        class="
          button button-primary
          font-bold
          text-base text-center text-gray-700
          bg-green-light
          hover:opacity-80
          focus:opacity-80
          transition-all
          rounded-full
          w-full
          py-4
        "
      >
        Anmelden
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

const initForm = () => ({
  email: '',
  pwd: '',
})

export default Vue.extend({
  data() {
    return {
      form: initForm(),
    }
  },
  methods: {
    submitForm() {
      //   console.log(this.form)
    },
  },
})
</script>
