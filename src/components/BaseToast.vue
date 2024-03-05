<script setup>

import IconArrowRight from '@/components/icons/IconArrowRight.vue'
</script>

<template>
  <div class="toast">
    <div class="toast__picture">
      <img src="@/assets/img/content/manchester.png" alt="" width="44" height="44">
    </div>
    <div class="toast__content">
      <div class="toast__title">Заголовок события</div>
      <div class="toast__description">Краткие детали события</div>
    </div>
    <IconArrowRight class="toast__trigger" />
  </div>
</template>

<style scoped lang="scss">
.toast {
  position: fixed;
  bottom: rem(200);
  right: rem(20);
  z-index: 4;
  display: flex;
  max-width: rem(388);
  padding: rem(16);
  align-items: center;
  gap: rem(16);
  border-radius: rem(16);
  background: #E9EAEC;
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(40px);

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
  }

}
</style>
