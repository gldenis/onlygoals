<script setup>

import IconPremiumNotification from '@/components/icons/IconPremiumNotification.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import { ref } from 'vue'
import IconTelegramFilled from '@/components/icons/IconTelegramFilled.vue'

const notificationIsShowed = ref(true)
const hideNotification = () => {
  notificationIsShowed.value = false
}
const showNotification = () => {
  notificationIsShowed.value = true
}
</script>

<template>
  <div class="premium-notification premium-notification--telegram" :class="{ 'premium-notification--hidden': !notificationIsShowed }">
    <template v-if="notificationIsShowed">
      <div class="premium-notification__left">
        <IconTelegramFilled />
        <IconArrowDown class="premium-notification__trigger max-phablet" @click="hideNotification"/>
      </div>
      <div class="premium-notification__text">
        Подключите уведомление <br> макросов в телеграм
      </div>
      <button class="btn premium-notification__btn">Подключить</button>
      <IconArrowDown class="premium-notification__trigger min-phablet" @click="hideNotification"/>
    </template>
    <div v-else class="premium-notification__days">
      <IconArrowDown class="premium-notification__trigger" @click="showNotification"/>
      <IconTelegramFilled class="premium-notification__icon"  @click="showNotification" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.premium-notification {
  display: flex;
  gap: rem(8);
  align-items: center;
  padding: 8px 12px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: rem(8) rem(8) 0 0;
  background: rgba(224, 239, 255, 0.40);
  box-shadow: - rem(20) rem(20) rem(60) (- rem(16)) rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  overflow: hidden;
  z-index: 3;

  &--hidden {
    width: rem(40);
    height: rem(40);
    padding: 0;
    justify-content: center;

    svg {
      width: rem(24);
      height: rem(24);
    }

    .premium-notification__trigger {
      display: none;
    }
  }

  :before {
    content: '';
    display: block;
    background: #5298E4;
    opacity: 0.4;
    filter: blur(30px);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    width: rem(200);
    height: rem(200);
    z-index: -1;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: rem(4);
    align-items: center;
    color: #191B22;
  }

  &__text {
    color: #E9EAEC;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__btn {
    padding: rem(7) rem(12);
    height: rem(32);
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.84);
    text-align: center;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    background: #408DCD;
    color: #E9EAEC;
  }

  &__days {
    color: #191B22;
    font-size: rem(11);
    font-weight: 600;
    line-height: 140%; /* 15.4px */
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    svg:not(.premium-notification__icon) {
      transform: rotate(180deg);
    }
  }

  &__trigger {
    cursor: pointer;
    color: rgba(25, 27, 34, 0.68);
  }
}

@media screen and (max-width: $phablet) {
  .premium-notification {
    bottom: rem(106);
    right: 0;
    left: auto;
    transform: none;
    width: max-content;
    border-radius: rem(8) 0 0 rem(8);
    overflow: hidden;


    &--hidden {
      width: rem(40);
      height: rem(40);
    }

    &__trigger {
      transform: rotate(-90deg);
    }

    &__days {
      flex-direction: row;
      font-size: rem(15);
      font-weight: 700;
      line-height: 128%; /* 19.2px */

      svg:not(.premium-notification__icon) {
        transform: rotate(90deg);
      }
    }

  }
}
</style>
