<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 10.185V11.9583C1.75 12.1217 1.87833 12.25 2.04167 12.25H3.815C3.89083 12.25 3.96667 12.2208 4.01917 12.1625L10.3892 5.79833L8.20167 3.61083L1.8375 9.97499C1.77917 10.0333 1.75 10.1033 1.75 10.185ZM12.0808 4.10666C12.3083 3.87916 12.3083 3.51166 12.0808 3.28416L10.7158 1.91916C10.4883 1.69166 10.1208 1.69166 9.89333 1.91916L8.82583 2.98666L11.0133 5.17416L12.0808 4.10666Z" :fill="color"/>
  </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    width: {
      type: String,
      default: "14"
    },
    height: {
      type: String,
      default: "14"
    },
    color: {
      type: String,
      default: "#6E7191"
    },
  }
})
</script>
