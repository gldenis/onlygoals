<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import BaseModal from '@/components/BaseModal.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useMacrosStore } from '@/stores/macros.js'
import MacrosCreate from '@/components/MacrosCreate.vue'
import MacrosEdit from '@/components/MacrosEdit.vue'
import MacrosView from '@/components/MacrosView.vue'
import MacrosViewItem from '@/components/MacrosViewItem.vue'
import { useGuideStore } from '@/stores/guide.js'
import GuideItem from '@/components/GuideItem.vue'
import RestorePasswordForm from '@/components/RestorePasswordForm.vue'

const authStore = useAuthStore()
const macrosStore = useMacrosStore()
const guideStore = useGuideStore()
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
    <BaseModal v-if="authStore.restorePasswordFormIsOpened"
               @close="authStore.restorePasswordFormIsOpened = false"
               @cancel="authStore.restorePasswordFormIsOpened = false; authStore.loginFormIsOpened = true;"
               :show-again-btn="true"
    >
      <RestorePasswordForm />
    </BaseModal>
  </teleport>
  <teleport to="body">
    <BaseModal v-if="authStore.registrationFormIsOpened" @close="authStore.registrationFormIsOpened = false">
      <RegistrationForm />
    </BaseModal>
  </teleport>
  <teleport to="body">
    <BaseModal class="modal--macros" v-if="macrosStore.createModalIsOpened" @close="macrosStore.createModalIsOpened = false">
      <MacrosCreate @cancel="macrosStore.createModalIsOpened = false" />
    </BaseModal>
  </teleport>
  <teleport to="body">
    <BaseModal class="modal--macros" v-if="macrosStore.editModalIsOpened" @close="macrosStore.editModalIsOpened = false">
      <MacrosEdit @cancel="macrosStore.editModalIsOpened = false;macrosStore.viewItemModalIsOpened = true" />
    </BaseModal>
  </teleport>
  <teleport to="body">
    <BaseModal class="modal--macros" v-if="macrosStore.viewModalIsOpened" @close="macrosStore.viewModalIsOpened = false">
      <MacrosView />
    </BaseModal>
  </teleport>
  <teleport to="body">
    <BaseModal class="modal--macros" v-if="macrosStore.viewItemModalIsOpened" @close="macrosStore.viewItemModalIsOpened = false">
      <MacrosViewItem />
    </BaseModal>
  </teleport>
  <teleport to="body">
    <BaseModal class="modal--macros" v-if="guideStore.guideModalIsOpened" @close="guideStore.guideModalIsOpened = false">
      <GuideItem @close="guideStore.guideModalIsOpened = false"/>
    </BaseModal>
  </teleport>

</template>

<style scoped lang="scss">

</style>
