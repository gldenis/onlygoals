<script setup>

import IconSnackMessage from '@/components/icons/IconSnackMessage.vue'
import { onClickOutside } from '@vueuse/core'
import { defineEmits, ref } from 'vue'
import IconSnackSuccess from '@/components/icons/IconSnackSuccess.vue'

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
        <IconSnackSuccess class="snack__icon" />
        <div class="snack__title">Заголово об успехе</div>
        <div class="snack__description">Description</div>
      </div>

      <button class="btn btn--light btn--small" @click="emit('cancel')">Закрыть</button>
    </div>
  </div>
</template>
