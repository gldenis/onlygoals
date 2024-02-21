import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMacrosStore = defineStore('macros', () => {
  const createModalIsOpened = ref(false)

  return { createModalIsOpened }
})
