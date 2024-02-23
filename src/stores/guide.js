import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGuideStore = defineStore('guide', () => {
  const guideModalIsOpened = ref(false)

  return {
    guideModalIsOpened,
  }
})
