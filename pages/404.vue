<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <p
      class="
        flex flex-col
        justify-center
        items-center
        text-5xl
        font-bold
        text-monochromatic-blue
      "
    >
      404
      <span class="text-2xl">Page not found</span>
    </p>
    <nuxt-link
      to="/"
      class="
        border border-blue-500
        rounded-xl
        hover:text-white hover:bg-blue-500
        focus:text-white focus:bg-blue-500
        py-2
        px-4
        mt-4
      "
      >Back to main page</nuxt-link
    >
  </div>
</template>

<script>
export default {
  layout: "empty",
};
</script>
