<script setup>

import BaseModal from '@/components/BaseModal.vue'
import { useAuthStore } from '@/stores/auth.js'
import VerificationForm from '@/components/VerificationForm.vue'

const authStore = useAuthStore()
</script>

<template>
<div class="banner-verification">
  <div class="banner-verification__text">Пройдите верификацию для активации функций</div>
  <button class="btn btn--light btn--small banner-verification__btn" @click="authStore.verificationFormIsOpened = true">Пройти верификацию</button>
  <img src="@/assets/img/banner-verification.png" alt="" class="banner-verification__img" width="192" height="192" loading="lazy">
</div>

  <teleport to="body">
    <BaseModal v-if="authStore.verificationFormIsOpened" @close="authStore.verificationFormIsOpened = false">
      <VerificationForm />
    </BaseModal>
  </teleport>
</template>

<style scoped lang="scss">
.banner-verification {
  position: fixed;
  right: 0;
  bottom: 0;
  padding-right: rem(16);
  display: flex;
  flex-direction: column;
  gap: rem(20);
  padding-bottom: rem(40);
  width: rem(344);

  &__text {
    color: #eee;
    font-size: rem(16);
    font-weight: 700;
    line-height: 128%; /* 20.48px */
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.32);
    box-shadow: - rem(20) rem(20) rem(60) (- rem(16)) rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    width: rem(200);
    padding: rem(16);
  }

  &__btn {
    width: rem(200);
  }

  &__img {
    width: rem(192);
    height: rem(192);
    position: absolute;
    bottom: 0;
    right: rem(16);
  }
}

@media screen and (max-width: $phablet) {
  .banner-verification {
    display: none;
  }
}

</style>
