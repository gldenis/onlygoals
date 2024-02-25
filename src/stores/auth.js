import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('loginForm', () => {
  const loginFormIsOpened = ref(false)
  const registrationFormIsOpened = ref(false)
  const restorePasswordFormIsOpened = ref(false)
  const verificationFormIsOpened = ref(false)
  const changeEmailFormIsOpened = ref(false)
  const changePasswordFormIsOpened = ref(false)
  const referralFormIsOpened = ref(false)

  return {
    loginFormIsOpened,
    registrationFormIsOpened,
    restorePasswordFormIsOpened,
    verificationFormIsOpened,
    changeEmailFormIsOpened,
    changePasswordFormIsOpened,
    referralFormIsOpened
  }
})
