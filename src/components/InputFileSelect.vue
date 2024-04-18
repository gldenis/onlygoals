<script setup>

import IconUpload from '@/components/icons/IconUpload.vue'
import IconRemove from '@/components/icons/IconRemove.vue'
import { ref } from 'vue'

const inputFile = ref()
const file = ref()
const changeFile = (event) => {
  file.value = event.target.files[0]
  console.log(file.value)
}

const removeFile = () => {
  file.value = null
}
</script>

<template>
  <div class="custom-select__option custom-select__option-file" @click="inputFile.click()">
    <input type="file" hidden="hidden" ref="inputFile" class="payment-check__input" @change="changeFile"/>
    <IconUpload />
    <div>Загрузить файл <span>(макс. 100 кб)</span></div>
  </div>
  <div v-if="file" class="custom-select__option custom-select__option-file custom-select__option-file--remove" @click="removeFile">
    <IconRemove />
    <div class="custom-select__option-file-name">{{ file.name }}</div>
  </div>
</template>

<style scoped lang="scss">
.custom-select__option-file {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(8);max-width: rem(220);

  span {
    color: rgba(255, 255, 255, 0.32);
    font-size: rem(12);
  }

  &-name {
    white-space: normal;
    width: calc(100% - rem(20));
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &--remove {
    svg {
      color: rgba(255, 255, 255, .32)
    }

    &:hover svg {
      color: red;
    }
  }
}
</style>
