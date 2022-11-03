<template>
  <ButtonUi type="secondary">
    <div
      :class="[
            'header-right__online-circle',
            {'header-right__online-circle-online': status === 'Online'},
            {'header-right__online-circle-away': status === 'Away'},
            {'header-right__online-circle-disturb': status === 'Do not disturb'},
            {'header-right__online-circle-offline': status === 'Offline'},
            statusOnline,
          ]"
    ></div>
    {{ status }}
    <template v-slot:toggle>
      <div class="online">
        <div
          @click="changeStatus('Online')"
          :class="[
            'online__item online__item-online',
            {'online__item--active': status === 'Online'}
          ]"
        >Online</div>
        <div class="online__item-child" @click="isAcceptCalls = !isAcceptCalls">
          Accept calls
          <RadioUi :model-value="isAcceptCalls"/>
        </div>
        <div class="online__item-child" @click="isAcceptChats = !isAcceptChats">
          Accept chats
          <RadioUi :model-value="isAcceptChats"/>
        </div>
        <div
          @click="changeStatus('Away')"
          :class="[
            'online__item online__item-away',
            {'online__item--active': status === 'Away'}
          ]"
        >Away</div>
        <div
          @click="changeStatus('Do not disturb')"
          :class="[
            'online__item online__item-disturb',
            {'online__item--active': status === 'Do not disturb'}
          ]"
        >Do not disturb</div>
        <div
          @click="changeStatus('Offline')"
          :class="[
          'online__item online__item-offline',
          {'online__item--active': status === 'Offline'}
        ]"
        >Offline</div>
      </div>
    </template>
  </ButtonUi>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import RadioUi from "@/components/ui/RadioUi.vue";
import ButtonUi from "@/components/ui/ButtonUi.vue";

export default defineComponent({
  components: {RadioUi, ButtonUi},
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

<style lang="scss" scoped>.header-right__online-circle {
  width: 12px;
  height: 12px;
  border-radius: 12px;
  display: inline-block;
  margin-right: 3px;
  position: relative;
}

.header-right__online-circle-online {
  background: #69BC35;
}
.header-right__online-circle-online-half {
  &:before {
    width: 4px;
    height: 8px;
    background-color: #fff;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 0;
    content: "";
    position: absolute;
    right: 2px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.header-right__online-circle-online-empty {
  &:before {
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 4px;
    border-bottom: 0;
    content: "";
    position: absolute;
    right: 2px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.header-right__online-circle-away {
  background: #EDB63F;
}
.header-right__online-circle-disturb {
  background: #ED6A61;
}
.header-right__online-circle-offline {
  background: #E6E9F1;
  border: 1px solid #B9B9B9;
}

.header-right__avatar {
  margin-left: 8px;
}


.online {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 245px;
  padding: 4px 0;
}
.online__item {
  padding: 12px 16px 12px 32px;
  position: relative;
  &:hover {
    background: #F7F7FC;
  }
  &:before {
    position: absolute;
    left: 12px;
    bottom: 17px;
    height: 12px;
    width: 12px;
    border-radius: 100%;
    content: "";
  }
}
.online__item--active {
  background: #F7F7FC;
}
.online__item-online {
  &:before {
    background: #7DB94B;
  }
}
.online__item-offline {
  &:before {
    background: #E6E9F1;
    border: 1px solid #B9B9B9;
    border-radius: 16px;
    box-sizing: border-box;
  }
}
.online__item-away {
  &:before {
    background: #EDB63F;
  }
}
.online__item-disturb {
  &:before {
    background: #ED6A61;
  }
}

.online__item-child {
  padding: 4px 16px 4px 36px;
  display: flex;
  justify-content: space-between;
  &:hover {
    background: #F7F7FC;
  }
}
</style>
