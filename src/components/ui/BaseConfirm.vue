<script setup>
import { onClickOutside } from '@vueuse/core'
import { defineProps, defineEmits, ref, computed } from 'vue'
import IconToastInfo from '@/components/icons/IconToastInfo.vue'
import IconToastSuccess from '@/components/icons/IconToastSuccess.vue'
import IconToastDanger from '@/components/icons/IconToastDanger.vue'
import IconToastWarning from '@/components/icons/IconToastWarning.vue'

const props = defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  },
  severity: {
    type: String,
    default: 'info'
  }
})
const emit = defineEmits(['confirm', 'cancel'])
const content = ref()
onClickOutside(content, () => emit('cancel'))

const className = computed(() => `confirm__body--${props.severity}`)
</script>

<template>
  <div class="confirm__container">
    <div class="confirm__body" :class="[className]" ref="content">
      <IconToastSuccess v-if="severity === 'success'" class="confirm__icon"/>
      <IconToastDanger v-else-if="severity === 'danger'" class="confirm__icon"/>
      <IconToastWarning v-else-if="severity === 'warning'" class="confirm__icon"/>
      <IconToastInfo v-else class="confirm__icon"/>
      <div class="confirm__content">
        <h4 class="confirm__title">{{ title }}</h4>
        <p class="confirm__description">{{ description }}</p>
        <div class="confirm__action">
          <button class="btn btn--small btn--outlined confirm__btn" @click="emit('confirm')">Button 1</button>
          <button class="btn btn--small btn--gray confirm__btn" @click="emit('cancel')">Button 2</button>
        </div>
      </div>
      <span class="confirm__close" @click="emit('cancel')">🗙</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.confirm {
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    background: rgba(22, 29, 36, 0.8);
    backdrop-filter: blur(4px);
  }

  &__body {
    display: flex;
    max-width: toRem(480);
    width: 100%;
    padding: toRem(20);
    align-items: flex-start;
    justify-content: space-between;
    gap: toRem(20);
    border-radius: toRem(8);
    background: #4D5057;
    box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    position: relative;

    &--success {
      background: #1FA84E;
    }
    &--warning {
      background: #E3861A;
    }
    &--danger {
      background: #D84626;
    }
  }

  &__content {
    flex-grow: 1;
  }

  &__title {
    color: #E9EAEC;
    font-size: toRem(16);
    font-weight: 700;
    line-height: 128%; /* 20.48px */
  }

  &__description {
    color: #E9EAEC;
    font-size: toRem(14);
    font-weight: 700;
    line-height: 140%; /* 20.48px */
    margin-top: toRem(4);
  }

  &__action {
    display: flex;
    gap: toRem(12);
    margin-top: toRem(16);
  }

  &__close {
    cursor: pointer;
  }
}


</style>
