<script setup>
import { computed, ref } from 'vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    default: null
  },
  placeholder: {
    type: String,
    default: 'choose'
  },
  error: {
    type: String
  },
  size: {
    default: 'normal'
  }
})

const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const mappedSelectedOption = computed(() => {
  return (selectedOption.value?.name || selectedOption.value) || props.placeholder
})

const selectedOption = ref(props.modelValue)
const toggleOptionSelect = option => {
  console.log(option)
  selectedOption.value = option
  emit('update:modelValue', option)
  open.value = false
}

const select = ref()
onClickOutside(select, () => open.value = false)
</script>

<template>
  <div class="custom-select" ref="select">
    <div class="custom-select__trigger" :class="[`custom-select__trigger--${props.size}`]" @click="open = !open">
      <slot name="icon"></slot>
      {{ mappedSelectedOption }}
      <IconArrowDown class="custom-select__arrow" width="20" height="20" />
    </div>
    <div v-show="open" class="custom-select__list">
      <slot></slot>
      <div
        v-for="(option, i) of options"
        class="custom-select__option"
        :key="i"
        @click="toggleOptionSelect(option)"
      >
        {{ option.name || option }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
