<template>
  <ul class="wrap-top-footer__tabs">
    <li
      v-for="tab in tabs"
      :key="tab.label"
      :class="['wrap-top-footer__tabs-item', {'wrap-top-footer__tabs-item--active': tab.isActive}]"
      @click="changeTab(tab)"
    >
      {{tab.label}}
    </li>
  </ul>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    options: Array,
  },
  emits: ['changeTab'],
  setup(props, { emit }) {
    const tabs = props.options
    const changeTab = (tab) => {
      emit('changeTab', tab)
    }
    return {
      tabs,
      changeTab,
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap-top-footer__tabs {
  display: flex;
  list-style: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #6E7191;
  gap: 32px;
}

.wrap-top-footer__tabs-item {
  cursor: pointer;
  padding-top: 5px;
}

.wrap-top-footer__tabs-item--active {
  color: $text-color-dark;
  position: relative;
  &:after {
   width: 100%;
   height: 3px;
   content: "";
   background: #008CFF;
   position: absolute;
   bottom: 0;
   left: 0;
   border-radius: 3px 3px 0 0;
 }
}
</style>
