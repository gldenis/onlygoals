<script setup>
import { ref } from 'vue'
import IconMinus from '@/components/icons/IconMinus.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

const counterValue = ref(1)

const increment = () => {
  counterValue.value += 1
}

const decrement = () => {
  if (counterValue.value === 1) return
  counterValue.value -= 1
}
</script>

<template>
  <div class="counter">
    <button class="counter__btn" @click="decrement">
      <IconMinus />
    </button>
    {{ counterValue }} месяц
    <button class="counter__btn" @click="increment">
      <IconPlus />
    </button>
  </div>
</template>

<style scoped lang="scss">
.counter {
  display: flex;
  align-items: center;
  gap: rem(4);
  color: rgba(255, 255, 255, 0.68);
  text-overflow: ellipsis;
  font-size: rem(15);
  font-weight: 700;
  line-height: 128%; /* 19.2px */

  &__btn {
    width: rem(20);
    height: rem(20);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.12);
    border: none;
    outline: none;
    transition: 0.1s;

    &:hover {
      background: rgba(255, 255, 255, 0.18);
    }
    &:active {
      transform: scale(0.9);
    }


    svg {
      width: rem(12);
      height: rem(12);
      color: #E9EAEC;

      fill: currentColor;

      path {
        fill: currentColor;
      }
    }
  }
}
input {
  border: none;
  outline: none;
  background: transparent;
  overflow: hidden;

  width: max-content;

}
</style>
