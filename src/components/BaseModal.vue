<script setup>
const props = defineProps({
  showAgainBtn: {
    type: Boolean,
    default: false
  }
})
import IconClose from '@/components/icons/IconClose.vue'
import IconAgain from '@/components/icons/IconAgain.vue'
</script>

<template>
<div class="modal">
  <div class="modal__overlay" @click="$emit('close')"></div>
  <div class="modal__content">
    <div v-if="showAgainBtn" class="modal__again btn btn--icon" @click="$emit('cancel')">
      <IconAgain width="16" height="16" />
    </div>
    <div class="modal__close btn btn--icon" @click="$emit('close')">
      <IconClose width="16" height="16" />
    </div>
    <slot></slot>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
