<template>
  <div class="account">
    <div class="account-header">
      <div class="account-header__img">
        <img class="account-header__img" src="@/assets/imgs/avatar_big.png" alt="" />
      </div>
      <div class="account-header__name">Robert Overrit</div>
      <div class="account-header__mail">robert.overrit@textmagic.com</div>
      <a class="account-header__link">Manage account</a>
    </div>
    <div class="account-center">
      <div class="account-center__img">
        <img src="@/assets/imgs/tm.png" alt="">
      </div>
      <div class="account-center__text">
        <div class="account-center__text-name">TextMagic</div>
        <div class="account-center__text-site">textmagic.touchpoint.com</div>
      </div>
      <ArrowLeftIcon class="account-center__arrow" />
    </div>
    <div class="account-links">
      <div class="account-links__item">
        <SettingsIcon width="16" height="16" color="#6E7191"/>
        Settings
      </div>
      <div class="account-links__item">
        <OrganizationIcon width="16" height="16" color="#6E7191"/>
        Workspace
      </div>
      <div class="account-links__item">
        <ContactsIcon width="16" height="16" color="#6E7191"/>
        Users
      </div>
      <div class="account-links__item">
        <CreditCardIcon  width="16" height="16" color="#6E7191"/>
        Billing
      </div>
      <div class="account-links__item">
        <HelpIcon  width="16" height="16" color="#6E7191"/>
        Help center
      </div>
      <div class="account-links__item">
        <LogOutIcon  width="16" height="16" color="#6E7191"/>
        Log out
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import OrganizationIcon from "@/components/icons/OrganizationIcon.vue";
import ContactsIcon from "@/components/icons/ContactsIcon.vue";
import CreditCardIcon from "@/components/icons/CreditCardIcon.vue";
import HelpIcon from "@/components/icons/HelpIcon.vue";
import LogOutIcon from "@/components/icons/LogOutIcon.vue";

export default defineComponent({
  components: {LogOutIcon, HelpIcon, CreditCardIcon, ContactsIcon, OrganizationIcon, SettingsIcon, ArrowLeftIcon}
})
</script>

<style lang="scss" scoped>
.account {
  width: 300px;
}
.account-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  background-image: url("src/assets/imgs/account_bg.jpg");
  background-size: cover;
  background-position: center;
}

.account-header__img {
  position: relative;
  &:before {
    width: 16px;
    height: 16px;
    content: "";
    position: absolute;
    right: 1px;
    bottom: 1px;
    display: block;
    background: #69BC35;
    border: 2px solid #F2E5F5;
    border-radius: 19.2px;
    z-index: 1;
  }
}

.account-header__name {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: $text-color-dark;
  margin-top: 6px;
}
.account-header__mail {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: $text-color-dark;
}
.account-header__link {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #008CFF;
  display: inline-block;
  margin-top: 2px;
}

.account-center {
  display: flex;
  padding: 13px 16px;
  align-items: center;
  border-bottom: 1px solid #E6E9F1;
  &:hover {
    background: #F7F7FC;
  }
}

.account-center__text {
  text-align: left;
  margin-left: 10px;
}

.account-center__text-name {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: $text-color-dark;
}
.account-center__text-site {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #6E7191;
}

.account-center__arrow {
  transform: rotate(180deg);
  margin-left: auto;
}

.account-links {
  display: flex;
  flex-direction: column;
  //align-items: flex-start;
  text-align: left;
}
.account-links__item {
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background: #F7F7FC;
  }
  &:last-of-type {
    border-top: 1px solid #E6E9F1;
  }
}
</style>
