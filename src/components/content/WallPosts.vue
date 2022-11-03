<template>
  <div class="posts">
    <div class="posts-header">
      <div class="posts-header__title">Open activities  4</div>
      <ButtonUi type="secondary">
        <ArrowLeftIcon width="6" height="12" class="posts-header__arrow"/>
      </ButtonUi>
    </div>

    <div class="posts-body">
      <WallPost v-for="(post, key) in posts" :key="key" :post="post" />
    </div>

  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import ButtonUi from "@/components/ui/ButtonUi.vue";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";
import TasksIcon from "@/components/icons/TasksIcon.vue";
import BadgeUi from "@/components/ui/BadgeUi.vue";
import WallPost from "@/components/content/WallPost.vue";
import postsData from "@/mocks/postsList";

export default defineComponent({
  components: {WallPost, BadgeUi, TasksIcon, ArrowLeftIcon, ButtonUi},
  setup() {
    const posts = ref(postsData)
    return {
      posts
    }
  }
})
</script>

<style lang="scss" scoped>
.posts {
  margin-top: 10px;
  margin-bottom: 32px;
}
.posts-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.posts-header__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: $text-color-dark;
}

.posts-header__arrow {
  transform: rotate(90deg);
}

.posts-body {
  padding-top: 16px;
}
</style>
