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
  }
})

const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const mappedSelectedOption = computed(() => {
  return (selectedOption.value?.name || selectedOption.value) || props.placeholder
})

const selectedOption = ref(null)
const toggleOptionSelect = option => {
  selectedOption.value = option
  emit('update:modelValue', option)
  open.value = false
}

const select = ref()
onClickOutside(select, () => open.value = false)
</script>

<template>
  <div class="custom-select" ref="select">
    <div class="custom-select__trigger" @click="open = !open">
      {{ mappedSelectedOption }}
      <IconArrowDown width="20" height="20" />
    </div>
    <div v-show="open" class="custom-select__list">
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
.custom-select {
  user-select: none;
  position: relative;
  color: var(--Neutral-1, #FFF);
  text-overflow: ellipsis;
  font-size: 13px;
  font-weight: 700;
  line-height: 132%; /* 17.16px */

  &__trigger {
    cursor: pointer;
    border-radius: var(--24, 24px);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    display: flex;
    height: 40px;
    padding: 10px 16px;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    overflow: hidden;
  }

  &__list {
    width: 100%;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    border-radius: 8px;
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    padding: 4px;

    /* Dropdown */
    box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    overflow: hidden;
  }

  &__option {
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    box-sizing: border-box;
    position: relative;

    &:hover {
      &:before {
        position: absolute;
        content: '';
        top: 0;
        left: -4px;
        right: -4px;
        bottom: 0;
        opacity: 0.1;
        background: linear-gradient(90deg, #3073FA -1.05%, #F2883C 49.68%, #933CEA 101.97%);
      }
    }

    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>
