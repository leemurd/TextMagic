<template>
  <svg :width="width" :height="height" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3335 2.66666H2.66683C1.92683 2.66666 1.34016 3.25999 1.34016 3.99999L1.3335 12C1.3335 12.74 1.92683 13.3333 2.66683 13.3333H13.3335C14.0735 13.3333 14.6668 12.74 14.6668 12V3.99999C14.6668 3.25999 14.0735 2.66666 13.3335 2.66666ZM12.6668 12H3.3335C2.96683 12 2.66683 11.7 2.66683 11.3333V7.99999H13.3335V11.3333C13.3335 11.7 13.0335 12 12.6668 12ZM13.3335 5.33332H2.66683V3.99999H13.3335V5.33332Z" :fill="color"/>
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
      default: "#A0A3BD"
    },
  }
})
</script>

<style scoped>

</style>
