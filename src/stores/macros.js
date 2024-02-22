import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMacrosStore = defineStore('macros', () => {
  const createModalIsOpened = ref(false)
  const editModalIsOpened = ref(false)
  const viewModalIsOpened = ref(true)
  const viewItemModalIsOpened = ref(false)

  return {
    createModalIsOpened,
    editModalIsOpened,
    viewModalIsOpened,
    viewItemModalIsOpened
  }
})
