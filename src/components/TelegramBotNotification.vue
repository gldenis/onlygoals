<script setup>

import IconTelegramFilled from '@/components/icons/IconTelegramFilled.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['cancel'])
</script>

<template>
<div class="telegram-bot-notification">
  <div class="telegram-bot-notification__overlay" @click="emit('cancel')"></div>
  <div class="telegram-bot-notification__inner">
    <IconTelegramFilled class="telegram-bot-notification__icon" />
    <div class="telegram-bot-notification__text">Подключите уведомления по оплате и акциям в Телеграм боте</div>
    <div class="telegram-bot-notification__buttons">
      <button class="btn btn--secondary">Подключить [Название бота]</button>
      <button class="btn btn--gray" @click="emit('cancel')">Позже</button>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.telegram-bot-notification {
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &__overlay {
    background: rgba(22, 29, 36, 0.8);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 12;
  }

  &__inner {
    max-width: rem(400);
    padding: rem(52) rem(32) rem(32);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(32);
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    z-index: 12;
  }

  &__icon {
    width: rem(80);
    height: rem(80);
  }

  &__text {
    color: #E9EAEC;
    text-align: center;
    font-size: rem(32);
    font-weight: 800;
    line-height: 132%; /* 42.24px */
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: rem(16);
  }
}
</style>
