<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 2.33331H2.33341C1.69175 2.33331 1.17258 2.85831 1.17258 3.49998L1.16675 10.5C1.16675 11.1416 1.69175 11.6666 2.33341 11.6666H11.6667C12.3084 11.6666 12.8334 11.1416 12.8334 10.5V3.49998C12.8334 2.85831 12.3084 2.33331 11.6667 2.33331ZM11.4334 4.81248L7.30925 7.39081C7.12258 7.50748 6.87758 7.50748 6.69091 7.39081L2.56675 4.81248C2.42091 4.71915 2.33341 4.56165 2.33341 4.39248C2.33341 4.00165 2.75925 3.76831 3.09175 3.97248L7.00008 6.41665L10.9084 3.97248C11.2409 3.76831 11.6667 4.00165 11.6667 4.39248C11.6667 4.56165 11.5792 4.71915 11.4334 4.81248Z" :fill="color"/>
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
