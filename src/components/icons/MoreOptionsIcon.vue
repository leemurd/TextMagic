<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00004 4.66665C7.64171 4.66665 8.16671 4.14165 8.16671 3.49998C8.16671 2.85831 7.64171 2.33331 7.00004 2.33331C6.35837 2.33331 5.83337 2.85831 5.83337 3.49998C5.83337 4.14165 6.35837 4.66665 7.00004 4.66665ZM7.00004 5.83331C6.35837 5.83331 5.83337 6.35831 5.83337 6.99998C5.83337 7.64165 6.35837 8.16665 7.00004 8.16665C7.64171 8.16665 8.16671 7.64165 8.16671 6.99998C8.16671 6.35831 7.64171 5.83331 7.00004 5.83331ZM7.00004 9.33331C6.35837 9.33331 5.83337 9.85831 5.83337 10.5C5.83337 11.1416 6.35837 11.6666 7.00004 11.6666C7.64171 11.6666 8.16671 11.1416 8.16671 10.5C8.16671 9.85831 7.64171 9.33331 7.00004 9.33331Z" :fill="color"/>
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
