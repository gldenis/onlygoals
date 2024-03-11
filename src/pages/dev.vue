<script setup>
import { createConfirmDialog } from 'vuejs-confirm-dialog'
import BaseConfirm from '@/components/ui/BaseConfirm.vue'
import TelegramBotNotification from '@/components/TelegramBotNotification.vue'


const openConfirm = severity => {
  const { reveal } = createConfirmDialog(BaseConfirm, {
    title: 'Callout title',
    description: 'Callout text',
    severity
  })

  reveal()
}

const openTelegramBotNotification = () => {
  const { reveal } = createConfirmDialog(TelegramBotNotification)

  reveal()
}
</script>

<template>
  <main>
    <div class="container">
      <DialogsWrapper />

      <div class="buttons buttons-group">
        <button class="btn btn--primary" @click="openConfirm('default')">Default</button>
        <button class="btn btn--primary" @click="openConfirm('success')">Success</button>
        <button class="btn btn--primary" @click="openConfirm('danger')">Danger</button>
        <button class="btn btn--primary" @click="openConfirm('warning')">Warning</button>
      </div>

      <div class="buttons buttons-group">
        <button class="btn btn--primary" @click="openTelegramBotNotification">telegram bot notification</button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 60px 0;
}

.buttons {
  display: flex;
  align-items: flex-start;
  gap: rem(20);
  flex-wrap: wrap;

  &-group {
    margin-bottom: rem(80);
  }
}
</style>
