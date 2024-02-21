import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMacrosStore = defineStore('macros', () => {
  const createModalIsOpened = ref(true)

  return { createModalIsOpened }
})
