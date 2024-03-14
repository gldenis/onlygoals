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
        <div class="snack__title">Необходимо пройти верификацию</div>
      </div>

      <button class="btn btn--light btn--small" @click="emit('confirm')">пройти верификацию</button>
    </div>
  </div>
</template>

