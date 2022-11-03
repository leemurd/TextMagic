<template>
  <div class="breadcrumbs">
    <a class="breadcrumbs__back" href="#">
      <ArrowLeftIcon />
    </a>
    <a class="breadcrumbs__item" href="">Contacts</a>
    <ArrowLeftIcon class="breadcrumbs__little-arrow" width="4" height="7" />
    <a class="breadcrumbs__item" href="">Jennifer Crowford</a>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";

export default defineComponent({
  components: {ArrowLeftIcon}
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
  height: 28px;
  display: flex;
  gap: 12px;
  margin: 9px 0;
}

.breadcrumbs__back {
  padding: 0 11px;
  background: #EBEEF5;
  border-radius: 4px;
}

.breadcrumbs__little-arrow {
  transform: rotate(180deg);
  align-self: center;
}

.breadcrumbs__item {
  font-weight: 600;
  font-size: 14px;
  //line-height: 20px;
  color: #6E7191;
  text-decoration: none;
  align-self: center;
}
</style>
