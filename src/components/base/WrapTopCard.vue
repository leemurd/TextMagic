<template>
  <div class="wrap-top">
    <div class="wrap-top__user">
      <img src="@/assets/imgs/avatar_user.png" alt="avatar_user" class="wrap-top__user-img">
      <div class="wrap-top__user-info">
        <div class="wrap-top__user-name">
          Jennifer Crowford
        </div>
        <div class="wrap-top__user-text">
          Sunflower Limited
          <img src="@/assets/imgs/icons/breadcrumbs_arrow.svg" alt="breadcrumbs_arrow">
        </div>
      </div>
    </div>

    <div class="wrap-top-footer">

      <slot/>

      <div class="wrap-top-footer__btns">
        <ButtonUi
          type="transparent"
          v-for="btn in cardBtns"
          :key="btn.label"
        >
          <Component :is="btn.icon" class="wrap-top-footer__btns-icon"/>
          {{ btn.label }}
        </ButtonUi>
      </div>
    </div>

  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import ButtonUi from "@/components/ui/ButtonUi.vue";
import CallIcon from "@/components/icons/CallIcon.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import MoreOptionsIcon from "@/components/icons/MoreOptionsIcon.vue";

const cardBtns = [
  {label: "Call", icon: CallIcon},
  {label: "Email", icon: MailIcon},
  {label: "Text", icon: MessageIcon},
  {label: "Edit", icon: EditIcon},
  {label: "More", icon: MoreOptionsIcon},
]

export default defineComponent({
  components: {MoreOptionsIcon, EditIcon, MailIcon, MessageIcon, CallIcon, ButtonUi},
  setup() {
    return {
      cardBtns,
    }
  }

})
</script>

<style lang="scss" scoped>
.wrap-top {
  border-radius: 8px;
  background-image: url("/src/assets/imgs/background-card.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 32px 32px 0 32px;
}

.wrap-top__user {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
}

.wrap-top__user-img {
  margin-right: 16px;
}

.wrap-top__user-name {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: $text-color-dark;
  margin-bottom: 4px;
}
.wrap-top__user-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: $text-color-dark;
}

.wrap-top-footer {
  display: flex;
}

.wrap-top-footer__btns {
  margin-left: auto;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.wrap-top-footer__btns-icon {
  margin-right: 7px;
}

</style>
