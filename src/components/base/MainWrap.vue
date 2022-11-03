<template>
  <div class="container">
    <Breadcrumbs/>

    <WrapTopCard>
      <TabsUiNav
        :options="tabs"
        @change-tab="changeTab"
      />
    </WrapTopCard>

    <div class="content">
      <div class="content-wall">
        <Component :is="activeTab.content" />
      </div>
      <ContentSidebar class="content-sidebar" />
    </div>
  </div>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import Breadcrumbs from "@/components/base/Breadcrumbs.vue";
import WrapTopCard from "@/components/base/WrapTopCard.vue";
import ContentSidebar from "@/components/base/ContentSidebar.vue";
import TabsUiNav from "@/components/ui/TabsUiNav.vue";

import ActivitiesTab from "@/components/content/ActivitiesTab.vue";
import FilesTab from "@/components/content/FilesTab.vue";
import LogsTab from "@/components/content/LogsTab.vue";
import VisitesTab from "@/components/content/VisitesTab.vue";

const tabsData = [
  {label: "Activities", isActive: true, content: ActivitiesTab},
  {label: "Logs", isActive: false, content: LogsTab},
  {label: "Visits", isActive: false, content: VisitesTab},
  {label: "Files", isActive: false, content: FilesTab},
]

export default defineComponent({
  components: {
    VisitesTab,
    LogsTab,
    FilesTab,
    ActivitiesTab,
    TabsUiNav,
    ContentSidebar,
    WrapTopCard,
    Breadcrumbs,
  },
  setup() {
    const tabs = ref(tabsData)
    const activeTab = computed(() => tabs.value.find(item => item.isActive))
    const changeTab = (tab) => {
      tabs.value.forEach(item => item.isActive = false)
      tabs.value.find(item => item.label === tab.label).isActive = true
    }
    return {
      tabs,
      changeTab,
      activeTab,
    }
  }
})
</script>

<style lang="scss" scoped>

.container {
  width: 1100px;
  margin: 0 auto;
}

.content {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.content-wall {
  flex-grow: 1;
}

.content-sidebar {
  width: 390px;
  border-radius: 8px;
  background: #FFFFFF;
  padding: 32px;
}
</style>
