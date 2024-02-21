import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('loginForm', () => {
  const loginFormIsOpened = ref(false)
  const registrationFormIsOpened = ref(false)

  return { loginFormIsOpened, registrationFormIsOpened }
})
