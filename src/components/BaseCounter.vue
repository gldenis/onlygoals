<script setup>
import { ref } from 'vue'

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
    <button class="counter__btn" @click="decrement">-</button>
    {{ counterValue }} месяц
    <button class="counter__btn" @click="increment">+</button>
  </div>
</template>

<style scoped lang="scss">
.counter {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--neutral-left-68, rgba(255, 255, 255, 0.68));
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 700;
  line-height: 128%; /* 19.2px */

  &__btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.12);
    border: none;
    outline: none;
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
