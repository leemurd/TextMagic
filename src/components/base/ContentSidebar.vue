<template>
  <div class="content-sidebar">
    <div class="content-sidebar__header">
      <div class="content-sidebar__header-title">Contact details</div>
      <ButtonUi type="transparent"><SettingsIcon/></ButtonUi>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Assigned to</div>
      <div class="content-sidebar__row-content">Franklin Strickland</div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Status</div>
      <div class="content-sidebar__row-content">
        <BadgeUi type="success">lead</BadgeUi>
      </div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Email (Work)</div>
      <div class="content-sidebar__row-content">kenzilaw@textmagic.com</div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Phone (Mobile)</div>
      <div class="content-sidebar__row-content">
        (850) 678-9080 <img src="@/assets/imgs/icons/stop.svg" alt="stop">
      </div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Phone (Home)</div>
      <div class="content-sidebar__row-content">(990) 338-9983</div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Country</div>
      <div class="content-sidebar__row-content">Oregon, USA</div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Time</div>
      <div class="content-sidebar__row-content">4:24 pm (UTC-4)</div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Tags</div>
      <div class="content-sidebar__row-content">
        <Tag>Sales</Tag> <Tag>United States</Tag>
      </div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Lists</div>
      <div class="content-sidebar__row-content">
        <Tag>Key account</Tag> <Tag>Important</Tag>
      </div>
    </div>

    <div class="content-sidebar__row">
      <div class="content-sidebar__row-title">Followers</div>
      <div class="content-sidebar__row-content">4 followers </div>
    </div>

  </div>
</template>

<script>
import {defineComponent} from "vue";
import ButtonUi from "@/components/ui/ButtonUi.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import Tag from "@/components/ui/TagUi.vue";
import BadgeUi from "@/components/ui/BadgeUi.vue";

export default defineComponent({
  components: {BadgeUi, Tag, SettingsIcon, ButtonUi}
})
</script>

<style lang="scss" scoped>
.content-sidebar {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.content-sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-sidebar__header-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: $text-color-dark;
}
.content-sidebar__row-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #6E7191;
  margin-bottom: 7px;
}
.content-sidebar__row-content {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: $text-color-dark;
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
