<script setup>
defineProps({
  label: {
    type: String
  }
})
</script>

<template>
  <label class="custom-checkbox">
    <input type="checkbox" class="custom-checkbox__input">
    <span class="custom-checkbox__box"></span>
    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  user-select: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */

  &__input {
    display: none;
  }

  &__box {
    border: 1.5px solid #C1C3C6;
    width: 14px;
    height: 14px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border: 1.5px solid #E9EAEC;
    }
  }

  &__input:checked + &__box {
    background: #099853;
    border: 1.5px solid #099853;

    &:hover {
      background: #32B760;
      border: 1.5px solid #32B760;
    }

    &:before {
      content: '✔';
      display: block;
      width: 8px;
      height: 8px;
      font-size: 10px;
      color: #E9EAEC;
      line-height: 1;
    }
  }

}
</style>
