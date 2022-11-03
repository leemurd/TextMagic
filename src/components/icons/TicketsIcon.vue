<template>
  <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 3.33331H3.33341C2.41675 3.33331 1.67508 4.08331 1.67508 4.99998L1.66675 15C1.66675 15.9166 2.41675 16.6666 3.33341 16.6666H16.6667C17.5834 16.6666 18.3334 15.9166 18.3334 15V4.99998C18.3334 4.08331 17.5834 3.33331 16.6667 3.33331ZM16.3334 6.87498L10.4417 10.5583C10.1751 10.725 9.82508 10.725 9.55841 10.5583L3.66675 6.87498C3.45841 6.74165 3.33341 6.51665 3.33341 6.27498C3.33341 5.71665 3.94175 5.38331 4.41675 5.67498L10.0001 9.16665L15.5834 5.67498C16.0584 5.38331 16.6667 5.71665 16.6667 6.27498C16.6667 6.51665 16.5417 6.74165 16.3334 6.87498Z" :fill="color"/>
  </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent ({
  props: {
    width: {
      type: String,
      default: "20"
    },
    height: {
      type: String,
      default: "20"
    },
    color: {
      type: String,
      default: "#A0A3BD"
    },
  }
})
</script>

<style scoped>

</style>
