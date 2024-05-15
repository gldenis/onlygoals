<script setup>
import { useRoute } from 'vue-router'
import BaseModal from '@/components/BaseModal.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useMacrosStore } from '@/stores/macros.js'
import MacrosCreate from '@/components/MacrosCreate.vue'
import MacrosEdit from '@/components/MacrosEdit.vue'
import MacrosView from '@/components/MacrosView.vue'
import MacrosViewItem from '@/components/MacrosViewItem.vue'
import { useGuideStore } from '@/stores/guide.js'
import GuideItem from '@/components/GuideItem.vue'
import RestorePasswordForm from '@/components/forms/RestorePasswordForm.vue'
import ModalPayment from '@/components/ModalPayment.vue'
import { useModalStore } from '@/stores/modal.js'
import { computed, defineAsyncComponent } from 'vue'
import AgreementModal from '@/components/AgreementModal.vue'
import BaseToast from '@/components/BaseToast.vue'

const authStore = useAuthStore()
const macrosStore = useMacrosStore()
const guideStore = useGuideStore()
const modalStore = useModalStore()

const defaultLayout = defineAsyncComponent(() =>
  import('@/layouts/default.vue')
)

const emptyLayout = defineAsyncComponent(() =>
  import('@/layouts/empty.vue')
)

const layouts = {
  default: defaultLayout,
  empty: emptyLayout
}

const route = useRoute()
const layout = computed(() => layouts[route.meta?.layout] || defaultLayout)

import { useToastStore } from '@/stores/toast.js'
const { toasts } = useToastStore()

</script>

<template>
  <component :is="layout" />

  <div class="toast__list">
    <TransitionGroup name="toast">
      <BaseToast v-for="toast of toasts"
                 :key="toast.title"
                 :title="toast.title"
                 :description="toast.description"
      />
    </TransitionGroup>
  </div>

  <teleport to="#modal">
    <BaseModal :opened="authStore.loginFormIsOpened" @close="authStore.loginFormIsOpened = false">
      <LoginForm />
    </BaseModal>
  </teleport>
  <teleport to="#modal">
    <BaseModal :opened="authStore.restorePasswordFormIsOpened"
               @close="authStore.restorePasswordFormIsOpened = false"
               @cancel="authStore.restorePasswordFormIsOpened = false; authStore.loginFormIsOpened = true;"
               :show-again-btn="true"
    >
      <RestorePasswordForm />
    </BaseModal>
  </teleport>
  <teleport to="#modal">
    <BaseModal :opened="authStore.registrationFormIsOpened" @close="authStore.registrationFormIsOpened = false">
      <RegistrationForm />
    </BaseModal>
  </teleport>
  <teleport to="#modal">
    <BaseModal :opened="authStore.agreementIsOpened"
               @close="authStore.agreementIsOpened = false"
               @cancel="authStore.agreementIsOpened = false; authStore.registrationFormIsOpened = true;"
    >
      <AgreementModal />
    </BaseModal>
  </teleport>

  <teleport to="#modal">
    <BaseModal class="modal--macros" :opened="macrosStore.createModalIsOpened"  @close="macrosStore.createModalIsOpened = false">
      <MacrosCreate @cancel="macrosStore.createModalIsOpened = false" />
    </BaseModal>
  </teleport>
  <teleport to="#modal">
    <BaseModal class="modal--macros" :opened="macrosStore.editModalIsOpened"  @close="macrosStore.editModalIsOpened = false">
      <MacrosEdit @cancel="macrosStore.editModalIsOpened = false;macrosStore.viewItemModalIsOpened = true" />
    </BaseModal>
  </teleport>
  <teleport to="#modal">
    <BaseModal class="modal--macros" :opened="macrosStore.viewModalIsOpened" @close="macrosStore.viewModalIsOpened = false">
      <MacrosView />
    </BaseModal>
  </teleport>
  <teleport to="#modal">
    <BaseModal class="modal--macros" :opened="macrosStore.viewItemModalIsOpened"  @close="macrosStore.viewItemModalIsOpened = false">
      <MacrosViewItem />
    </BaseModal>
  </teleport>
  <teleport to="#modal">
    <BaseModal class="modal--macros" :opened="guideStore.guideModalIsOpened" @close="guideStore.guideModalIsOpened = false">
      <GuideItem @close="guideStore.guideModalIsOpened = false"/>
    </BaseModal>
  </teleport>
  <teleport to="#modal">
    <BaseModal :opened="modalStore.paymentModalIsOpened" @close="modalStore.paymentModalIsOpened = false">
      <ModalPayment />
    </BaseModal>
  </teleport>
</template>

<style scoped lang="scss">
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
