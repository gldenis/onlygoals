<script setup>
import { createConfirmDialog } from 'vuejs-confirm-dialog'
import BaseConfirm from '@/components/ui/BaseConfirm.vue'
import TelegramBotNotification from '@/components/notifications/TelegramBotNotification.vue'
import SnackMessage from '@/components/snack/SnackMessage.vue'
import SnackSuccess from '@/components/snack/SnackSuccess.vue'
import SnackError from '@/components/snack/SnackError.vue'
import SnackExit from '@/components/snack/SnackExit.vue'
import CookiesNotification from '@/components/notifications/CookiesNotification.vue'
import VerificationNotification from '@/components/notifications/VerificationNotification.vue'
import { ref } from 'vue'


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
const openSnackMessage = () => {
  const { reveal } = createConfirmDialog(SnackMessage)

  reveal()
}
const openSnackSuccess = () => {
  const { reveal } = createConfirmDialog(SnackSuccess)

  reveal()
}
const openSnackError = () => {
  const { reveal } = createConfirmDialog(SnackError)

  reveal()
}
const openSnackExit = () => {
  const { reveal } = createConfirmDialog(SnackExit)

  reveal()
}

const cookiesAccepted = ref(false)
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

      <div class="buttons buttons-group">
        <button class="btn btn--primary" @click="openSnackMessage">message</button>
        <button class="btn btn--primary" @click="openSnackSuccess">success</button>
        <button class="btn btn--primary" @click="openSnackError">error</button>
        <button class="btn btn--primary" @click="openSnackExit">exit</button>
      </div>
    </div>
    <Transition name="slide-fade">
      <CookiesNotification v-if="!cookiesAccepted" @accept="cookiesAccepted = true" />
    </Transition>
    <Transition name="slide-fade">
      <VerificationNotification  v-if="cookiesAccepted" e/>
    </Transition>

  </main>
</template>

<style scoped lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .5s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  bottom: - rem(50);
  opacity: 0;
}

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
