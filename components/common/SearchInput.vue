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
        class="
          text-md
          open-sans-300
          mr-auto
          ml-9
          focus:border-transparent focus:outline-none
          hover:border-transparent hover:outline-none
        "
        placeholder="Wo suchst Du?"
      />
      <span>
        <img src="Crosshair.svg" alt="search icon" />
      </span>
    </div>
  </div>
</template>
