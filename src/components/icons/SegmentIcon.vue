<template>
  <svg :width="width" :height="height" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 2.11999V13.88C7.33333 14.3067 6.94 14.6267 6.52666 14.5333C3.54666 13.8667 1.33333 11.1933 1.33333 7.99999C1.33333 4.80666 3.54666 2.13332 6.52666 1.46666C6.94 1.37332 7.33333 1.69332 7.33333 2.11999ZM8.68666 2.11999V6.65999C8.68666 7.02666 8.98666 7.32666 9.35333 7.32666H13.88C14.3067 7.32666 14.6267 6.93332 14.5333 6.51332C13.9667 4.00666 12 2.03332 9.49999 1.46666C9.07999 1.37332 8.68666 1.69332 8.68666 2.11999ZM8.68666 9.33999V13.88C8.68666 14.3067 9.07999 14.6267 9.49999 14.5333C12.0067 13.9667 13.9733 11.9867 14.54 9.47999C14.6333 9.06666 14.3067 8.66666 13.8867 8.66666H9.35999C8.98666 8.67332 8.68666 8.97332 8.68666 9.33999Z" :fill="color"/>
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
