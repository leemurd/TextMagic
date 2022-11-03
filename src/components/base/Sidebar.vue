<template>
  <aside
    :class="['sidebar', {'sidebar--opened': isOpened}]"
  >

    <div class="sidebar-fixed">

      <div class="sidebar-logo">
        <LogoIcon class="sidebar-logo__icon"/>
        <img
          src="/src/assets/imgs/icons/logo_title.svg"
          :class="['sidebar-logo__title', {'sidebar-logo__title--shown': isOpened}]"
          alt="logo"
        />
      </div>
      <nav class="sidebar-nav">
        <ul class="sidebar-nav-ul">
          <li
            v-for="item in sidebarNav"
            :key="item.label"
            class="sidebar-nav-ul__item"
          >
            <a
              class="sidebar-nav-ul__link"
              :class="[
              'sidebar-nav-ul__link',
              {'sidebar-nav-ul__link--active': item.isActive}
            ]"
              href="#"
            >
              <Component
                :is="item.icon"
                class="sidebar-nav-ul__link-icon"
                :color="item.isActive ? '#ffffff' : '#A0A3BD'"
              />
              <span :class="['sidebar-nav-ul__link-text', {'sidebar-nav-ul__link-text--shown': isOpened}]">
              {{ item.label }}
            </span>
            <span class="sidebar-nav-ul__link-missed" v-if="item.missed">{{item.missed}}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="sidebar-burger" @click="isOpened = !isOpened">
        <BurgerIcon class="sidebar-burger__icon"/>
        <span :class="['sidebar-burger__text', {'sidebar-burger__text--shown': isOpened}]">Minimize menu</span>
      </div>

    </div>

  </aside>
</template>

<script>
import {defineComponent, ref} from "vue";
import BurgerIcon from "@/components/icons/BurgerIcon.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import sidebarNav from "@/constants/sidebarNav";

export default defineComponent({
  components: {
    BurgerIcon,
    LogoIcon,
  },
  setup() {
    const isOpened = ref(false)
    return {
      sidebarNav,
      isOpened,
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  width: 70px;
  background: #2F2F44;
  transition: width 0.3s;
}

.sidebar--opened {
  width: 200px;
  & .sidebar-nav-ul__link-missed {
    top: 17px;
  }
}

.sidebar-fixed {
  box-sizing: border-box;
  padding: 25px 8px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: inherit;
  position: fixed;
  left: 0;
  top: 0;
}

.sidebar-logo {
  padding: 0 16px;
  position: relative;
  margin-bottom: 17px;
}

.sidebar-logo__icon {

}
.sidebar-logo__title {
  position: absolute;
  left: 52px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}

.sidebar-logo__title--shown {
  transition-delay: 0.3s;
  opacity: 1;
  visibility: visible;
}

.sidebar-nav-ul {
  list-style: none;
  margin-bottom: 20px;
}

.sidebar-nav-ul__item {
  display: flex;
  flex-direction: column;
  //background-color: red;
}

.sidebar-nav-ul__link {
  color: #A0A3BD;
  text-decoration: none;
  padding: 15px 18px;
  //display: inline-block;
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.sidebar-nav-ul__link--active {
  color: #FFFFFF;
}

.sidebar-nav-ul__link-icon {
  flex-shrink: 0;
}

.sidebar-nav-ul__link-text {
  position: absolute;
  left: 52px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}

.sidebar-nav-ul__link-text--shown {
  transition-delay: 0.3s;
  opacity: 1;
  visibility: visible;
}

.sidebar-nav-ul__link-missed {
  background: #ED6A61;
  border-radius: 12px;
  padding: 0 5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
  position: absolute;
  right: 8px;
  top: 7px;
  transition: top 0.3s;
}

.sidebar-burger {
  margin-top: auto;
  text-decoration: none;
  padding: 15px 18px;
  display: block;
  border-radius: 4px;
  color: #A0A3BD;
  cursor: pointer;
  position: relative;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.sidebar-burger__icon {
  margin-right: 17px;
}

.sidebar-burger__text {
  position: absolute;
  left: 52px;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.sidebar-burger__text--shown {
  transition-delay: 0.3s;
  opacity: 1;
  visibility: visible;
}

</style>
