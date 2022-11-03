<template>
  <div class="posts-item">
    <div class="posts-item__icon">
      <Component :is="icons[type]" width="16px" height="16px" />
    </div>

    <div class="posts-item__body">

      <div class="posts-item__header">
        <div class="posts-item__header-type">{{ type }}</div>
        <div class="posts-item__header-date">{{ date }}</div>
      </div>

      <div class="posts-item__title">{{ title }}</div>
      <div class="posts-item__text">{{ text }}</div>

      <div class="posts-item__footer">
        <BadgeUi
          v-if="badge"
          :type="badge.type"
        >{{ badge.label }}</BadgeUi>

        <div
          v-if="priority"
          class="posts-item__footer-priority"
        >
          <img v-if="priority === 'low'" src="@/assets/imgs/icons/priority_low.svg" alt="">
          <img v-else-if="priority === 'urgent'" src="@/assets/imgs/icons/priority_urgent.svg" alt="">
<!--          Баг при билде -->
<!--          <img :src="`@/assets/imgs/icons/priority_${priority}.svg`">-->
          {{ priority }}
        </div>

        <div v-if="price">{{ price }}</div>

        <div
          v-if="date_status"
          :class="[
            'posts-item__footer-time',
            {'posts-item__footer-time-overdue': date_status === 'overdue' }
          ]"
        >
          {{ checkDate }}
        </div>

        <img v-if="img" class="posts-item__footer-img" src="@/assets/imgs/avatar_post.png" alt="">

      </div>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import ButtonUi from "@/components/ui/ButtonUi.vue";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";
import BadgeUi from "@/components/ui/BadgeUi.vue";
// import iconsData from "@/constants/postIcons";
import icons from "@/constants/postIcons";

export default defineComponent({
  components: {
    BadgeUi,
    ArrowLeftIcon,
    ButtonUi,
  },
  props: ["post"],
  setup(props) {
    const post = props.post
    const {title, text, date, type, badge, priority, date_status, expired, price, img} = post
    // const icons = ref(iconsData)
    const checkDate = computed(() => date_status === 'overdue' ? 'Task overdue' : expired )

    return {
      post,
      title,
      text,
      date,
      type,
      badge,
      priority,
      icons,
      date_status,
      expired,
      checkDate,
      price,
      img,
    }
  }
})
</script>

<style lang="scss" scoped>

.posts-item{
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
  position: relative;
  &:before {
    content: "";
    width: 1px;
    height: calc(100% - 36px - 20px);
    position: absolute;
    bottom: 0;
    background-color: #E6E9F1;
    left: 18px;
  }
}

.posts-item__icon {
  margin-top: 10px;
  width: 36px;
  height: 36px;
  background: #FFFFFF;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.posts-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.posts-item__header-type {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #A0A3BD;
}
.posts-item__header-date {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6E7191;
}

.posts-item__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: $text-color-dark;
}

.posts-item__text {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: $text-color-dark;
  margin-top: 8px;
  margin-bottom: 12px;
}

.posts-item__body {
  background: #FFFFFF;
  border-radius: 4px;
  padding: 16px;
  flex-grow: 1;
}

.posts-item__footer {
  display: flex;
  gap: 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #6E7191;
}

.posts-item__footer-priority {
  display: flex;
  align-items: center;
  text-transform: capitalize;
}
.posts-item__footer-time {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #FF8C00;
}

.posts-item__footer-time-overdue {
  color: #ED6A61;
}

.posts-item__footer-img {
  margin-left: auto;
}

</style>
