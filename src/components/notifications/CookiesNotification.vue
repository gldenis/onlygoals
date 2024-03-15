<script setup>

import IconCookies from '@/components/icons/IconCookies.vue'
import IconQuestion from '@/components/icons/IconQuestion.vue'

const emit = defineEmits(['accept'])
const setCookies = () => {
  emit('accept')
}
</script>

<template>
    <div class="cookies-notification">
      <IconCookies class="cookies-notification__icon" />
      <div class="cookies-notification__text">Мы используем файлы cookie, чтобы вам было удобнее пользоваться этим сайтом.</div>
      <div class="cookies-notification__actions">
        <button class="btn btn--icon btn--extra-small btn--gray">
          <IconQuestion />
        </button>
        <button class="btn btn--extra-small btn--light" @click="setCookies">Принять</button>
      </div>
    </div>
</template>

