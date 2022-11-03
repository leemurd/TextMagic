<template>
  <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82496 3.82501C8.50829 3.50834 8.08329 3.33334 7.64163 3.33334H3.33329C2.41663 3.33334 1.67496 4.08334 1.67496 5.00001L1.66663 15C1.66663 15.9167 2.41663 16.6667 3.33329 16.6667H16.6666C17.5833 16.6667 18.3333 15.9167 18.3333 15V6.66668C18.3333 5.75001 17.5833 5.00001 16.6666 5.00001H9.99996L8.82496 3.82501Z" :fill="color"/>
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
