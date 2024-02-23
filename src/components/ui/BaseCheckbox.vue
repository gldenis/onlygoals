<script setup>
defineProps({
  label: {
    type: String
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <label class="custom-checkbox">
    <input type="checkbox" class="custom-checkbox__input" @change="$emit('update:modelValue', $event.target.value)" :value="modelValue" v-bind="$attrs">
    <span class="custom-checkbox__box"></span>
    <span v-if="label">{{ label }}</span>
    <slot></slot>
  </label>
</template>

<style lang="scss">
.custom-checkbox {
  display: flex;
  align-items: center;
  gap: toRem(8);


  &__input {
    display: none;
  }

  &__box {
    border: 1.5px solid #C1C3C6;
    width: 14px;
    height: 14px;
    border-radius: toRem(2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

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
