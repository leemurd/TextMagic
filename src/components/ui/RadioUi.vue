<template>
  <div
    @click="updateValue(!status)"
    :class="[
          'radiobox',
          {'radiobox--active': status}
        ]"
  ></div>
</template>

<script>
import {computed, defineComponent, ref} from "vue";

export default defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(props, {emit}) {
    const updateValue = (val) => emit('update:modelValue', val)
    let status = computed(() => props.modelValue)

    return {
      status,
      updateValue,
    }
  }
})
</script>

<style lang="scss" scoped>
.radiobox {
  width: 32px;
  height: 20px;
  background: #C6C8D7;
  border-radius: 14px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 2px;

  &:before {
    content: "";
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 14px;
    position: relative;
    display: inline-block;
    margin-left: 0;
    transition: margin-left 0.3s;
  }
}

.radiobox--active {
  background: #008CFF;

  &:before {
    margin-left: 13px;
  }
}
</style>
