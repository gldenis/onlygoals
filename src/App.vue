<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import BaseModal from '@/components/BaseModal.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useMacrosStore } from '@/stores/macros.js'
import MacrosCreate from '@/components/MacrosCreate.vue'

const authStore = useAuthStore()
const macrosStore = useMacrosStore()
</script>

<template>
  <TheHeader />
  <RouterView />
  <teleport to="body">
    <BaseModal v-if="authStore.loginFormIsOpened" @close="authStore.loginFormIsOpened = false">
      <LoginForm />
    </BaseModal>
  </teleport>
  <teleport to="body">
    <BaseModal v-if="authStore.registrationFormIsOpened" @close="authStore.registrationFormIsOpened = false">
      <RegistrationForm />
    </BaseModal>
  </teleport>
  <teleport to="body">
    <BaseModal class="modal--macros" v-if="macrosStore.createModalIsOpened" @close="macrosStore.createModalIsOpened = false">
      <MacrosCreate />
    </BaseModal>
  </teleport>

</template>

<style scoped lang="scss">

</style>
