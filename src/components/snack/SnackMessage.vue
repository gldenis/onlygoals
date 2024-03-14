<script setup>

import IconSnackMessage from '@/components/icons/IconSnackMessage.vue'
import { onClickOutside } from '@vueuse/core'
import { defineEmits, ref } from 'vue'

const snack = ref()
const emit = defineEmits(['cancel'])
onClickOutside(snack, () => {
  emit('cancel')
})
</script>

<template>
  <div class="snack">
    <div class="snack__inner" ref="snack">
      <div class="snack__content">
        <IconSnackMessage class="snack__icon" />
        <div class="snack__title">Ваше сообщение отправлено</div>
      </div>

      <button class="btn btn--light btn--small" @click="emit('cancel')">Закрыть</button>
    </div>
  </div>
</template>

<style lang="scss">
.snack {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__inner {
    border-radius: rem(16);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    display: flex;
    max-width: rem(280);
    padding: rem(52) rem(32) rem(32);

    flex-direction: column;
    gap: 32px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: rem(12);
  }

  &__icon {
    margin-left: auto;
    margin-right: auto;
    width: rem(200);
    height: rem(160);
  }

  &__title {
    color: #E9EAEC;
    text-align: center;
    font-size: rem(24);
    font-weight: 700;
    line-height: 132%; /* 31.68px */
  }

  &__description {
    color: rgba(255, 255, 255, 0.60);
    text-align: center;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: rem(12);
  }
}
</style>
