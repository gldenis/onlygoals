<script setup>

import IconClose from '@/components/icons/IconClose.vue'
</script>

<template>
<div class="modal">
  <div class="modal__overlay" @click="$emit('close')"></div>
  <div class="modal__content">
    <div class="modal__close btn btn--icon" @click="$emit('close')">
      <IconClose width="16" height="16" />
    </div>
    <slot></slot>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
