<script setup>

import IconLock from '@/components/icons/IconLock.vue'
const props = defineProps({
  value: {
    type: String, Number,
    required: true
  },
  locked: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <div class="info-score__item" :class="{'info-score__item--null': value === '0'}">
    {{ value }}
    <div v-if="locked" class="info-score__lock" >
      <IconLock />
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>
