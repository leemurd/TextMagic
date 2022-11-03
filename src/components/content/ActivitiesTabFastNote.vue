<template>
  <div class="fast-note">
    <img src="@/assets/imgs/avatar_fast_note.png" alt="avatar_fast_note">
    <div class="fast-note-content">
      <div class="fast-note-content__tabs">
        <div
          v-for="tab in tabList"
          :key="tab.label"
          :class="[
            'fast-note-content__tabs-item',
            {'fast-note-content__tabs-item--active': tab.isActive},
          ]"
        >{{ tab.label }}</div>
      </div>
      <textarea class="fast-note-content__input" placeholder="Click to add note"></textarea>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

const tabs = [
  {label: "Internal note", isActive: true},
  {label: "Task", isActive: false},
  {label: "Deal", isActive: false},
  {label: "Ticket", isActive: false},
  {label: "Reminder", isActive: false},
]

export default defineComponent({
  setup() {
    const tabList = ref(tabs)
    return {
      tabList
    }
  }
})
</script>

<style lang="scss" scoped>
.fast-note {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.fast-note-content {
  flex-grow: 1;
}

.fast-note-content__tabs {
  display: flex;
  gap: 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #6E7191;
}

.fast-note-content__tabs-item {
  padding-bottom: 10px;
  cursor: pointer;
}
.fast-note-content__tabs-item--active {
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

.fast-note-content__input {
  background: #FFF7DB;
  border: 1px solid #F4E8BE;
  border-radius: 4px;
  resize: none;
  width: 100%;
  padding: 10px 14px;
  box-sizing: border-box;
  min-height: 48px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #A0A3BD;
  }
}
</style>
