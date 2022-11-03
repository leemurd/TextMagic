<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33326 7.33332H7.8066L7.61993 7.15332C8.41993 6.21999 8.83326 4.94666 8.6066 3.59332C8.29326 1.73999 6.7466 0.25999 4.87993 0.0333231C2.05993 -0.313343 -0.313405 2.05999 0.0332621 4.87999C0.259929 6.74666 1.73993 8.29332 3.59326 8.60666C4.9466 8.83332 6.21993 8.41999 7.15326 7.61999L7.33326 7.80666V8.33332L10.1666 11.1667C10.4399 11.44 10.8866 11.44 11.1599 11.1667C11.4333 10.8933 11.4333 10.4467 11.1599 10.1733L8.33326 7.33332ZM4.33326 7.33332C2.67326 7.33332 1.33326 5.99332 1.33326 4.33332C1.33326 2.67332 2.67326 1.33332 4.33326 1.33332C5.99326 1.33332 7.33326 2.67332 7.33326 4.33332C7.33326 5.99332 5.99326 7.33332 4.33326 7.33332Z" :fill="color"/>
  </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent ({
  props: {
    width: {
      type: String,
      default: "12"
    },
    height: {
      type: String,
      default: "12"
    },
    color: {
      type: String,
      default: "#6E7191"
    },
  }
})
</script>

<style scoped>

</style>
