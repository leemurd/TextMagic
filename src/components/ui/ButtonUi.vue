<template>
  <button
    :class="[
      'button-ui',
      `${type}`
    ]"
    ref="$btn"
    @blur="isOpened = false"
    @click="isOpened = true"
  >
    <slot/>

    <div
      v-if="hasSlotContent($slots.toggle)"
      v-show="isOpened"
      :class="['button-ui-toggle', {'button-ui-toggle-content-right': contentRight}]"
    >
      <slot name="toggle"/>
    </div>
  </button>
</template>

<script>
import {defineComponent, ref} from "vue";
import {hasSlotContent} from "@/utils/hasSlotContent";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    contentRight: Boolean,
  },
  setup(props) {
    const type = props.type
    const contentRight = props.contentRight
    const isOpened = ref(false)
    return {
      type,
      isOpened,
      contentRight,
      hasSlotContent,
    }
  },
})
</script>

<style lang="scss" scoped>
.button-ui-toggle {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background: #FFFFFF;
  box-shadow: 0px 6.25px 16px rgba(0, 0, 0, 0.085);
  border-radius: 4px;
  color: $text-color-dark;
}

.button-ui-toggle-content-right {
  left: auto;
  right: 0;
}

.button-ui {
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  padding: 7px 15px;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  &.primary {
    background: #008CFF;
    &:hover, &:focus, &:active {
      background: #0069c2;
    }
  }
  &.secondary {
    background: #F7F7FC;
    color: #6E7191;
    &:hover, &:focus, &:active {
      background: #e5e5e8;
    }
  }
  &.transparent {
    background: #ffffff;
    color: #6E7191;
    &:hover, &:focus, &:active {
      background: #e5e5e8;
    }
  }
  &.outline {
    background: #ffffff;
    color: #6E7191;
    border: 1px solid #E6E9F1;
    border-radius: 4px;
    &:hover, &:focus, &:active {
      background: #e5e5e8;
    }
  }
}

</style>
