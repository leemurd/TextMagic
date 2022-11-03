<template>
  <div class="content-search">
    <InputUi placeholder="Search this contact" />
    <ButtonUi type="transparent">
      <img src="@/assets/imgs/icons/arrow_up_down.svg" alt=""/>
    </ButtonUi>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import InputUi from "@/components/ui/InputUi.vue";
import ButtonUi from "@/components/ui/ButtonUi.vue";

export default defineComponent({
  components: {ButtonUi, InputUi}
})
</script>

<style lang="scss" scoped>
.content-search {
  display: flex;
  gap: 8px;
}
</style>
