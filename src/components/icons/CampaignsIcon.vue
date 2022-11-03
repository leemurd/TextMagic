<template>
  <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37603 5.75155C2.43195 5.75155 1.66663 6.51688 1.66663 7.46096V10.8798C1.66663 11.8238 2.43195 12.5892 3.37603 12.5892H4.23073V16.008C4.23073 16.48 4.61339 16.8627 5.08543 16.8627H6.79483C7.26687 16.8627 7.64953 16.48 7.64953 16.008V12.5892H10.2136L12.8624 14.7082C13.5172 15.232 14.4871 14.7658 14.4871 13.9273V4.41338C14.4871 3.57487 13.5172 3.1087 12.8624 3.63251L10.2136 5.75155H3.37603ZM18.3333 9.17036C18.3333 10.5164 17.5135 11.5066 16.8895 12.0654C16.6021 12.3228 16.1965 12.1047 16.1965 11.7189V6.6218C16.1965 6.23597 16.6021 6.01795 16.8895 6.27534C17.5135 6.83411 18.3333 7.82432 18.3333 9.17036Z" :fill="color"/>
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
