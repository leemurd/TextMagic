<template>
  <svg :width="width" :height="height" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 8.00002C9.47334 8.00002 10.6667 6.80669 10.6667 5.33335C10.6667 3.86002 9.47334 2.66669 8.00001 2.66669C6.52667 2.66669 5.33334 3.86002 5.33334 5.33335C5.33334 6.80669 6.52667 8.00002 8.00001 8.00002ZM8 9.33335C6.22 9.33335 2.66667 10.2267 2.66667 12V12.6667C2.66667 13.0334 2.96667 13.3334 3.33334 13.3334H12.6667C13.0333 13.3334 13.3333 13.0334 13.3333 12.6667V12C13.3333 10.2267 9.78 9.33335 8 9.33335Z" :fill="color"/>
  </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent ({
  props: {
    width: {
      type: String,
      default: "16"
    },
    height: {
      type: String,
      default: "16"
    },
    color: {
      type: String,
      default: "#5E6875"
    },
  }
})
</script>

<style scoped>

</style>
