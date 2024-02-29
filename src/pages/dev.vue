<script setup>
import { createConfirmDialog } from 'vuejs-confirm-dialog'
import BaseConfirm from '@/components/ui/BaseConfirm.vue'


const openConfirm = severity => {
  const { reveal } = createConfirmDialog(BaseConfirm, {
    title: 'Callout title',
    description: 'Callout text',
    severity
  })

  reveal()
}
</script>

<template>
  <main>
    <div class="container">
      <DialogsWrapper />

      <div class="buttons">
        <button class="btn btn--primary" @click="openConfirm('default')">Default</button>
        <button class="btn btn--primary" @click="openConfirm('success')">Success</button>
        <button class="btn btn--primary" @click="openConfirm('danger')">Danger</button>
        <button class="btn btn--primary" @click="openConfirm('warning')">Warning</button>
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
  flex-direction: column;
  align-items: flex-start;
  gap: toRem(20);
}
</style>
