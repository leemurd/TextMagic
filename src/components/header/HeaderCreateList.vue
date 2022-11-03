<template>
  <div class="create">
    <div
      v-for="(list, key) in createList"
      :key="key"
      class="create__group"
    >
      <a
        v-for="item in list"
        class="create__item"
        href="#"
      >
        <Component :is="item.icon" width="14" height="14" color="#6E7191" />
        {{item.label}}
      </a>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import createList from "@/constants/createListData";

export default defineComponent({
  setup() {
    return {
      createList
    }
  }
})
</script>

<style lang="scss" scoped>
.create {
  display: flex;
  flex-direction: column;
  width: 188px;
  padding: 10px 0;
}

.create__group {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E6E9F1;
  &:last-of-type {
    border: 0;
  }
}

.create__item {
  text-align: left;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: $text-color-dark;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: #efefef;
  }
}
</style>
