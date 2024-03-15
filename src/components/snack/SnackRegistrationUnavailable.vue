<script setup>

import IconSnackMessage from '@/components/icons/IconSnackMessage.vue'
import { onClickOutside } from '@vueuse/core'
import { defineEmits, ref } from 'vue'
import IconSnackError from '@/components/icons/IconSnackError.vue'

const snack = ref()
const emit = defineEmits(['cancel', 'confirm'])
onClickOutside(snack, () => {
  emit('cancel')
})
</script>

<template>
  <div class="snack">
    <div class="snack__inner" ref="snack">
      <div class="snack__content">
        <IconSnackError class="snack__icon" />
        <div class="snack__title">Временно недоступная регистрация</div>
        <div class="snack__description">Извините, регистрация в вашем регионе временно недоступна. Мы работаем над расширением географии обслуживания. Следите за обновлениями!</div>
      </div>
      <div class="snack__actions">
        <button class="btn btn--secondary btn--small" @click="emit('confirm')">Следить в Телеграм</button>
        <button class="btn btn--light btn--small" @click="emit('confirm')">Закрыть</button>
      </div>
    </div>
  </div>
</template>

