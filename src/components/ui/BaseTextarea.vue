<script setup>
defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  error: {
    type: String
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
</script>

<template>
  <label class="form-field">
    <textarea
           class="form-field__input"
           :placeholder="placeholder"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           v-bind="$attrs"
    ></textarea>
    <span v-if="error" class="form-field__error">{{ error }}</span>
  </label>
</template>

<style scoped lang="scss">
.form-field__input {
  resize: none;
  padding: rem(18) rem(20);
  height: rem(112);
}
</style>
