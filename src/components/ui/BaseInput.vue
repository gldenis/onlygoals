<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
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
    <input :type="type"
           class="form-field__input"
           :placeholder="placeholder"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           v-bind="$attrs"
    >
    <span v-if="error" class="form-field__error">{{ error }}</span>
  </label>
</template>

<style scoped lang="scss">

</style>
