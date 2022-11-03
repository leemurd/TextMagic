<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L3.5646 3.5646C4.26577 2.86153 5.09897 2.30395 6.01631 1.9239C6.93365 1.54384 7.91704 1.34881 8.90999 1.35H9.08999C11.095 1.35 13.0179 2.1465 14.4357 3.56427C15.8535 4.98205 16.65 6.90496 16.65 8.91V9.09C16.6513 10.083 16.4564 11.0665 16.0765 11.9839C15.6965 12.9014 15.139 13.7347 14.436 14.436L3.5646 3.5646C2.86153 4.26578 2.30395 5.09897 1.9239 6.01631C1.54384 6.93365 1.34881 7.91705 1.35 8.91V9.09C1.35 11.095 2.1465 13.018 3.56427 14.4357C4.98204 15.8535 6.90496 16.65 8.90999 16.65H9.08999C10.083 16.6513 11.0665 16.4564 11.9839 16.0765C12.9014 15.6965 13.7347 15.139 14.436 14.436L18 18V0H0Z" :fill="color"/>
  </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent ({
  props: {
    width: {
      type: String,
      default: "18"
    },
    height: {
      type: String,
      default: "18"
    },
    color: {
      type: String,
      default: "#008CFF"
    },
  }
})
</script>

<style scoped>

</style>
