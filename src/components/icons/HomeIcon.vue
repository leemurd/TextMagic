<template>
  <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33342 15.8333V11.6666H11.6667V15.8333C11.6667 16.2916 12.0417 16.6666 12.5001 16.6666H15.0001C15.4584 16.6666 15.8334 16.2916 15.8334 15.8333V9.99998H17.2501C17.6334 9.99998 17.8168 9.52498 17.5251 9.27498L10.5584 2.99998C10.2418 2.71664 9.75842 2.71664 9.44175 2.99998L2.47508 9.27498C2.19175 9.52498 2.36675 9.99998 2.75008 9.99998H4.16675V15.8333C4.16675 16.2916 4.54175 16.6666 5.00008 16.6666H7.50008C7.95842 16.6666 8.33342 16.2916 8.33342 15.8333Z" :fill="color"/>
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
