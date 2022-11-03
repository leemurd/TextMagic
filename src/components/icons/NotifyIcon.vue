<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.075 14.4083L15 13.3333V9.16665C15 6.60831 13.6334 4.46665 11.25 3.89998V3.33331C11.25 2.64165 10.6917 2.08331 10 2.08331C9.30838 2.08331 8.75004 2.64165 8.75004 3.33331V3.89998C6.35838 4.46665 5.00004 6.59998 5.00004 9.16665V13.3333L3.92504 14.4083C3.40004 14.9333 3.76671 15.8333 4.50838 15.8333H15.4834C16.2334 15.8333 16.6 14.9333 16.075 14.4083ZM13.3334 14.1666H6.66671V9.16665C6.66671 7.09998 7.92504 5.41665 10 5.41665C12.075 5.41665 13.3334 7.09998 13.3334 9.16665V14.1666ZM10 18.3333C10.9167 18.3333 11.6667 17.5833 11.6667 16.6666H8.33338C8.33338 17.5833 9.07504 18.3333 10 18.3333Z" :fill="color"/>
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
      default: "#6E7191"
    },
  }
})
</script>

<style scoped>

</style>
