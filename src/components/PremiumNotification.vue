<script setup>

import IconPremiumNotification from '@/components/icons/IconPremiumNotification.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
</script>

<template>
  <div class="premium-notification">
    <div class="premium-notification__left">
      <IconPremiumNotification />
      <IconArrowDown />
    </div>
    <div class="premium-notification__text">
      Заканчивается премиум <br>
      Осталось: 9 дней
    </div>
    <button class="btn premium-notification__btn">Купить еще</button>
  </div>
</template>

<style scoped lang="scss">
.premium-notification {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px 8px 0px 0px;
  background: var(--neutral-left-68, rgba(255, 255, 255, 0.68));
  box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
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
    width: 100px;
    height: 100px;
    z-index: -1;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    color: #191B22;
  }

  &__text {
    color: var(--Neutral-9, #191B22);
    font-size: 11px;
    font-weight: 600;
    line-height: 140%; /* 15.4px */
  }

  &__btn {
    padding: 7px 12px;
    height: 32px;
    border-radius: var(--24, 24px);
    background: var(--neutral-left-84, rgba(255, 255, 255, 0.84));
    color: var(--neutral-right-68, rgba(25, 27, 34, 0.68));
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }
}
</style>
