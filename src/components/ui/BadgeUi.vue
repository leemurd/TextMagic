<template>
  <div
    :class="[
      'badge',
      {'badge-success': type === 'success'},
      {'badge-info': type === 'info'},
      {'badge-secondary': type === 'secondary'},
      {'badge-success-light': type === 'success-light'},
    ]"
  >
    <slot/>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: '',
    }
  }

})
</script>

<style scoped>
.badge {
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 20px;
  padding: 3px 8px;
  display: inline-block;
}
.badge-success {
  color: #6D9F4F;
  border-color: #BFE0B8;
  background: #F8FCF7;
}
.badge-info {
  color: #746197;
  border-color: #C7BBDD;
  background: #F7F5FA;
}
.badge-secondary {
  color: #6A7686;
  border-color: #D3DAE4;
  background: #F6F7F8;
}
.badge-success-light {
  color: #5F999B;
  border-color: #BADEDF;
  background: #F5FAFA;
}
</style>
