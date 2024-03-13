import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', () => {
  const toasts = ref([])

  const addToast = (toast) => {
    toasts.value.push(toast)

    if (toast.delay) {
      setTimeout(() => {
        clearToast(toast.title)
      }, toast.delay)
    }
  }

  const clearToast = title => {
    const index = toasts.value.findIndex((toast) => toast.title === title); // find toast
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  return {
    toasts,
    addToast,
    clearToast
  }
})
