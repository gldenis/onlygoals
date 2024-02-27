<script setup>
import { ref } from 'vue'

const props = defineProps({
  showAgainBtn: {
    type: Boolean,
    default: false
  },
  opened: {
    type: Boolean,
    default: false
  }
})
import IconClose from '@/components/icons/IconClose.vue'
import IconAgain from '@/components/icons/IconAgain.vue'
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits(['close', 'cancel'])
const modalContent = ref()
onClickOutside(modalContent, () => emit('close'))
</script>

<template>
<div class="modal" :class="{ 'modal--opened': opened }">
  <div class="modal__content" ref="modalContent">
    <div v-if="showAgainBtn" class="modal__again btn btn--icon" @click="emit('cancel')">
      <IconAgain width="16" height="16" />
    </div>
    <div class="modal__close btn btn--icon" @click="emit('close')">
      <IconClose width="16" height="16" />
    </div>
    <slot></slot>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
