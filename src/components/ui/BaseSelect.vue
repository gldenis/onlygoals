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
  color: #fff;
  text-overflow: ellipsis;
  font-size: rem(13);
  font-weight: 700;
  line-height: 132%; /* 17.16px */

  &__trigger {
    cursor: pointer;
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.12);
    display: flex;
    height: rem(40);
    padding: rem(10) rem(16);
    justify-content: flex-start;
    align-items: center;
    gap: rem(8);
    overflow: hidden;

    &--small {
      height: rem(30);
    }
  }

  &__arrow {
    margin-left: auto;
    width: rem(20);
    height: rem(20);
  }

  &__list {
    width: 100%;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    border-radius: rem(8);
    background: rgba(255, 255, 255, 0.12);
    background: rgba(25, 27, 34, 0.84);
    padding: rem(4);

    /* Dropdown */
    box-shadow: - rem(20) rem(20) rem(60) (- rem(16)) rgba(24, 24, 41, 0.52);
    overflow: hidden;
    z-index: 1;

    &:before {
      position: absolute;
      content: '';
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      backdrop-filter: blur(20px);

    }
  }

  &__option {
    cursor: pointer;
    height: rem(40);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: rem(1) solid rgba(255, 255, 255, 0.12);
    box-sizing: border-box;
    position: relative;
    padding: 0 rem(5);

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
