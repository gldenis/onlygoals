<script setup>

import { reactive } from 'vue'

const props = defineProps({
  editable: {
    type: Boolean,
    default: false
  }
})

const selectedParams = reactive({
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
})
</script>

<template>
  <div>
    <div class="macros-params__list">
      <div v-for="param of 9" class="macros-params__item">
        <div class="macros-params__title">Время игры</div>
        <div class="macros-params__cells-list">
          <label v-for="cell of 9"
                 class="macros-cell"
                 :class="{ 'macros-cell--selected': selectedParams[param] === cell && editable }"
          >
            <input v-if="editable" class="custom-radio__input" type="radio" :name="param" :value="cell" v-model="selectedParams[param]" >
            <span v-if="editable" class="custom-radio__box"></span>
            <span class="macros-cell__progress"></span>
            <span class="macros-cell__value">1</span>
            <span v-if="!editable" class="macros-cell__efficiency">79%</span>
            <span class="macros-cell__proportion">5/5</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-radio {
  &__input {
    display: none;
  }

  &__box {
    width: rem(16);
    height: rem(16);
    border-radius: 50%;
    border: rem(2) solid #C2C2C2;
    position: absolute;
    top: rem(6);
    right: rem(6);
  }

  &__input:checked + &__box {
    border: rem(5) solid #099853;
    background: #fff;
  }
}
</style>
