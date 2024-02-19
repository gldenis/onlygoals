<script setup>
defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean
  }
})

defineEmits(['toggle'])
</script>

<template>
  <label class="form-switch">
    <input
      v-bind="$attrs"
      class="form-switch__input"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      :value="checked"
      @change="$emit('toggle', $event.target.checked)"
    />
    <span class="form-switch__box"></span>
    <span v-if="label" class="form-switch__label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
.form-switch__label {
  color: #ffffff;
  user-select: none;
}
.form-switch__input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.form-switch__box {
  --switch-trigger-off: rgba(255, 255, 255, 0.92);
  --switch-off: rgba(255, 255, 255, 0.2);
  --switch-on: #15995A;
  display: flex;
  align-items: center;
  position: relative;
  width: 42px;
  height: 28px;
  background-color: var(--switch-off);
  flex-shrink: 0;
  border-radius: 16px;
  transition: background-color 0.1s ease-in-out;
}
.form-switch__box::before {
  content: "";
  position: absolute;
  left: 4px;
  height: 20px;
  width: 20px;
  border-radius: 9999px;
  background-color: white;
  transition: transform 0.1s ease-in-out;
}
.form-switch__input:checked + .form-switch__box {
  background-color: var(--switch-on);
}
.form-switch__input:checked + .form-switch__box::before {
  transform: translateX(14px);
}
</style>
