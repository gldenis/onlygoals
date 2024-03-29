<script setup>

import BaseModal from '@/components/BaseModal.vue'
import { useAuthStore } from '@/stores/auth.js'
import ReferralForm from '@/components/forms/ReferralForm.vue'

const authStore = useAuthStore()
</script>

<template>
  <div class="referral-banner" v-bind="$attrs">
    <div class="referral-banner__text">Премиум +3 дня за каждого друга</div>
    <button class="btn btn--primary btn--small referral-banner__btn" @click.prevent="authStore.referralFormIsOpened = true">Пригласить</button>
    <img src="@/assets/img/referral-banner.png" alt="" class="referral-banner__img" loading="lazy" width="212" height="282">
  </div>

  <teleport to="body">
    <BaseModal :opened="authStore.referralFormIsOpened" @close="authStore.referralFormIsOpened = false">
      <ReferralForm />
    </BaseModal>
  </teleport>
</template>

<style scoped lang="scss">

</style>
