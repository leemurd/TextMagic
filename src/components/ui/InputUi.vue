<template>
  <div class="input-container">
    <div class="input-icon">
      <SearchIcon />
    </div>
    <input
      :class="[
        'input-field',
        {'input-field-white': color === 'white'},
        {'input-field-gray': color === 'gray'},
      ]"
      type="text"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
import {defineComponent, reactive} from "vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";

export default defineComponent({
  components: {SearchIcon},
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "#F7F7FC"
    },
    color: {
      type: String,
      default: "white"
    }
  },
})
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  position: relative;
  width: 100%;
}

.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translate(0%, -50%);
}

.input-field {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: $text-color-dark;
  border: 0;
  padding: 8px 12px 8px 36px;
  //position: relative;
  //z-index: 1;
  width: 100%;
  transition: background-color 0.5s;
  border-radius: 4px;
  &:focus, &:active {
    border: 0;
    outline: none;
    box-shadow: none;
    background-color: #eee!important;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #A0A3BD;
  }
  &.input-field-white {
    background-color: #ffffff;
  }
  &.input-field-gray {
    background-color: #F7F7FC;
  }
}
</style>
