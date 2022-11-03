<template>
  <div class="wrap">
    <Sidebar class="sidebar" />

    <section class="main">

      <Header />
      <MainWrap />

    </section>
  </div>

</template>

<script>
import Sidebar from "@/components/base/Sidebar.vue";
import Header from "@/components/base/Header.vue";
import MainWrap from "@/components/base/MainWrap.vue";
export default {
  components: {MainWrap, Header, Sidebar}
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  min-height: 100vh;
}

.main {
  flex-grow: 1;
}

.sidebar {
  flex-shrink: 0;
}
</style>
