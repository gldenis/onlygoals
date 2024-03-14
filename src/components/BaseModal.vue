<script setup>
import { ref, watch } from 'vue'

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
const modal = ref()
const modalContent = ref()
onClickOutside(modalContent, () => emit('close'))

watch(() => props.opened, (value, prevValue) => {
  const body = document.querySelector('body')
  const paddingOffset = `${(window.innerWidth - body.offsetWidth)}px`;
  console.log(value)
  if (value) {
    body.style.overflowY = 'hidden'
    body.style.paddingRight = paddingOffset
    modal.value.style.paddingRight = paddingOffset
  } else {
    body.style.overflowY = 'auto'
    body.style.paddingRight = '0'
    modal.value.style.paddingRight = paddingOffset
  }
})
</script>

<template>
  <transition name="fade">
    <div class="modal" ref="modal" v-show="opened">
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
  </transition>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>

