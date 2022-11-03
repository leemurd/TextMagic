<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2175 8.90169L9.73586 8.73253C9.38002 8.69169 9.03002 8.81419 8.77919 9.06503L7.70586 10.1384C6.05502 9.29836 4.70169 7.95086 3.86169 6.29419L4.94086 5.21503C5.19169 4.96419 5.31419 4.61419 5.27336 4.25836L5.10419 2.78836C5.03419 2.19919 4.53836 1.75586 3.94336 1.75586H2.93419C2.27502 1.75586 1.72669 2.30419 1.76752 2.96336C2.07669 7.94503 6.06086 11.9234 11.0367 12.2325C11.6959 12.2734 12.2442 11.725 12.2442 11.0659V10.0567C12.25 9.46753 11.8067 8.97169 11.2175 8.90169Z" :fill="color"/>
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
