<script setup>

import IconSnackMessage from '@/components/icons/IconSnackMessage.vue'
import { onClickOutside } from '@vueuse/core'
import { defineEmits, ref } from 'vue'
import IconSnackError from '@/components/icons/IconSnackError.vue'
import IconSnackExit from '@/components/icons/IconSnackExit.vue'

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
        <IconSnackExit class="snack__icon" />
        <div class="snack__title">Выход</div>
      </div>
      <div class="snack__actions">
        <button class="btn btn--light btn--small" @click="emit('confirm')">Выйти</button>
        <button class="btn btn--gray btn--small" @click="emit('cancel')">Отмена</button>
      </div>
    </div>
  </div>
</template>

