import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const paymentModalIsOpened = ref(false)

  return {
    paymentModalIsOpened,
  }
})
