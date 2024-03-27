<script setup>

import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import { useToastStore } from '@/stores/toast.js'

const props = defineProps({
  title: {
    type: String
  },
  description: {
    type: String
  },
  delay: {
    default: 10000
  }
})

const { clearToast } = useToastStore()
</script>

<template>
  <div class="toast">
    <div class="toast__picture">
      <img src="@/assets/img/content/manchester.png" alt="" width="44" height="44">
    </div>
    <div class="toast__content">
      <div class="toast__title">{{ title }}</div>
      <div class="toast__description" v-if="description">{{ description }}</div>
    </div>
    <IconArrowRight class="toast__trigger" @click="clearToast(title)" />
  </div>
</template>

<style lang="scss">
.toast {
  &__list {
    position: fixed;
    top: rem(90);
    right: rem(20);
    width: max-content;
    z-index: 4;
    display: flex;
    flex-direction: column;
    gap: rem(16);
  }

  display: flex;
  max-width: rem(388);
  padding: rem(16);
  align-items: center;
  gap: rem(16);
  border-radius: rem(16);
  background: #E9EAEC;
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(40px);
  transition: right 2s;

  &__picture {
    width: rem(44);
    height: rem(44);

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__content {
    color: #191B22;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    display: flex;
    flex-direction: column;
    gap: rem(4);
  }

  &__title {
    font-size: rem(16);
  }

  &__description {
    font-size: rem(14);
  }

  &__trigger {
    color: #191B22;
    cursor: pointer;
  }

}
</style>
