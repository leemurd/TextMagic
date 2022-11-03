<template>
  <div class="content-left">
    <ActivitiesTabSearch />
    <ActivitiesTabFastNote />
    <PostsWall/>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import InputUi from "@/components/ui/InputUi.vue";
import ButtonUi from "@/components/ui/ButtonUi.vue";
import ActivitiesTabSearch from "@/components/content/ActivitiesTabSearch.vue";
import ActivitiesTabFastNote from "@/components/content/ActivitiesTabFastNote.vue";
import PostsWall from "@/components/content/WallPosts.vue";

export default defineComponent({
  components: {PostsWall, ActivitiesTabFastNote, ActivitiesTabSearch, ButtonUi, InputUi}
})
</script>

<style lang="scss" scoped>
.content-search {
  display: flex;
  gap: 8px;
}
</style>
