<template>
  <svg :width="width" :height="height" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1133 8.66667H5.33333C4.96514 8.66667 4.66667 8.36819 4.66667 8C4.66667 7.63181 4.96514 7.33333 5.33333 7.33333H11.1133L9.86 6.08C9.59886 5.81886 9.59961 5.39523 9.86167 5.13501C10.1224 4.87608 10.5435 4.87683 10.8033 5.13667L12.9596 7.29289C13.3501 7.68342 13.3501 8.31658 12.9596 8.70711L10.8033 10.8633C10.5435 11.1232 10.1224 11.1239 9.86167 10.865C9.59961 10.6048 9.59886 10.1811 9.86 9.92L11.1133 8.66667ZM12.6667 2C13.403 2 14 2.59695 14 3.33333V6.44667L12.6667 5.11333V3.33333H3.33333V12.6667H12.6667V10.8867L14 9.55333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59333 14 2 13.4 2 12.6667V3.33333C2 2.59333 2.59333 2 3.33333 2H12.6667Z" :fill="color"/>
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
