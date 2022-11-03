<template>
<!--  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">-->
  <svg :width="width" :height="height" :viewBox="`0 0 6 10`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.52596 0.586311C5.18863 0.24898 4.64371 0.24898 4.30638 0.586311L0.33625 4.55644C-0.00108083 4.89377 -0.00108083 5.43869 0.33625 5.77602L4.30638 9.74615C4.64371 10.0835 5.18863 10.0835 5.52596 9.74615C5.86329 9.40882 5.86329 8.8639 5.52596 8.52657L2.16995 5.1619L5.52596 1.80589C5.86329 1.46856 5.85464 0.914993 5.52596 0.586311Z" :fill="color"/>
  </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    width: {
      type: String,
      default: "6"
    },
    height: {
      type: String,
      default: "10"
    },
    color: {
      type: String,
      default: "#6E7191"
    },
  }
})
</script>
