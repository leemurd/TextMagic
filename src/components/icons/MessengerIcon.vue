<template>
  <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 5.00002H15.8334V11.6667C15.8334 12.125 15.4584 12.5 15.0001 12.5H5.00008V13.3334C5.00008 14.25 5.75008 15 6.66675 15H15.0001L18.3334 18.3334V6.66669C18.3334 5.75002 17.5834 5.00002 16.6667 5.00002ZM14.1667 9.16669V3.33335C14.1667 2.41669 13.4167 1.66669 12.5001 1.66669H3.33341C2.41675 1.66669 1.66675 2.41669 1.66675 3.33335V14.1667L5.00008 10.8334H12.5001C13.4167 10.8334 14.1667 10.0834 14.1667 9.16669Z" :fill="color"/>
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
