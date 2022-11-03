<template>
  <header class="header">

    <div class="header-left">

      <ButtonUi type="primary" class="header-left__btn">
        Create
        <template v-slot:toggle>
          <HeaderCreateList/>
        </template>
      </ButtonUi>

      <InputUi placeholder="Search TextMagic workspace" class="header__search-input" color="gray" />
    </div>

    <div class="header-right">

      <HeaderOnline/>

      <ButtonUi type="transparent">
        <EventIcon />
      </ButtonUi>
      <ButtonUi type="transparent">
        <NotifyIcon />
      </ButtonUi>
      <ButtonUi type="transparent">
        <SettingsIcon />
      </ButtonUi>
      <ButtonUi type="outline" content-right>
        TextMagic
        <img class="header-right__avatar" src="/src/assets/imgs/avatar.png" alt="avatar">
        <template v-slot:toggle>
          <HeaderAccount/>
        </template>
      </ButtonUi>
    </div>

  </header>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import InputUi from "@/components/ui/InputUi.vue";
import ButtonUi from "@/components/ui/ButtonUi.vue";
import EventIcon from "@/components/icons/EventIcon.vue";
import NotifyIcon from "@/components/icons/NotifyIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import HeaderCreateList from "@/components/header/HeaderCreateList.vue";
import RadioUi from "@/components/ui/RadioUi.vue";
import HeaderAccount from "@/components/header/HeaderAccount.vue";
import HeaderOnline from "@/components/header/HeaderOnline.vue";


export default defineComponent ({
  components: {
    HeaderOnline,
    HeaderAccount,
    HeaderCreateList,
    SettingsIcon, NotifyIcon, EventIcon, ButtonUi, InputUi,
    RadioUi,
  },
  setup() {
    const isAcceptCalls = ref(true)
    const isAcceptChats = ref(true)
    const status = ref("Online")
    const changeStatus = (val) => status.value = val
    const statusOnline = computed(() => {
      if (status.value === "Online") {
        if (isAcceptCalls.value && isAcceptChats.value) return "header-right__online-circle-online"
        else if (isAcceptCalls.value || isAcceptChats.value) return "header-right__online-circle-online-half"
        else return "header-right__online-circle-online-empty"
      } else return false
    })
    return {
      isAcceptCalls,
      isAcceptChats,
      changeStatus,
      status,
      statusOnline,
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  padding: 8px 32px;
  background-color: #fff;
  display: flex;
}

.header-left {
  display: flex;
}

.header-left__btn {
  margin-right: 10px;
}

.header__search-input {
  width: 360px;
}

.header-right {
  margin-left: auto;
  display: flex;
  gap: 1px;
}


</style>
