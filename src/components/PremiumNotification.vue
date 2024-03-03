<script setup>

import IconPremiumNotification from '@/components/icons/IconPremiumNotification.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import { ref } from 'vue'

const notificationIsShowed = ref(true)
const hideNotification = () => {
  notificationIsShowed.value = false
}
const showNotification = () => {
  notificationIsShowed.value = true
}
</script>

<template>
  <div class="premium-notification">
    <template v-if="notificationIsShowed">
      <div class="premium-notification__left">
        <IconPremiumNotification />
        <IconArrowDown class="premium-notification__trigger max-phablet" @click="hideNotification"/>
      </div>
      <div class="premium-notification__text">
        Заканчивается премиум <br>
        Осталось: 9 дней
      </div>
      <RouterLink to="/tariff" class="btn premium-notification__btn">Купить еще</RouterLink>
      <IconArrowDown class="premium-notification__trigger min-phablet" @click="hideNotification"/>
    </template>
    <div v-else class="premium-notification__days">
      <IconArrowDown class="premium-notification__trigger" @click="showNotification"/>
      9
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
  background: rgba(255, 255, 255, 0.68);
  box-shadow: - rem(20) rem(20) rem(60) (- rem(16)) rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  overflow: hidden;

  :before {
    content: '';
    display: block;
    background: conic-gradient(from 0deg at 50% 50%, #3073FA 0.9259677026420832deg, #EF8641 121.87499642372131deg, #C4648F 232.49999284744263deg, #933CEA 333.9734101295471deg);
    opacity: 0.8;
    filter: blur(15px);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    width: rem(100);
    height: rem(100);
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
    color: #191B22;
    font-size: rem(11);
    font-weight: 600;
    line-height: 140%; /* 15.4px */
  }

  &__btn {
    padding: rem(7) rem(12);
    height: rem(32);
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.84);
    color: rgba(25, 27, 34, 0.68);
    text-align: center;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__days {
    color: #191B22;
    font-size: rem(11);
    font-weight: 600;
    line-height: 140%; /* 15.4px */
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
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

    &__trigger {
      transform: rotate(-90deg);
    }

    &__days {
      flex-direction: row;
      font-size: rem(15);
      font-weight: 700;
      line-height: 128%; /* 19.2px */

      svg {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
