<template>
  <div class="tag">
    <slot/>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({

})
</script>

<style scoped>
.tag {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #6E7191;
  padding: 2px 6px;
  background: #EBEEF5;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
}
</style>
