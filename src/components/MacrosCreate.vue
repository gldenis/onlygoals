<script setup>
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { ref } from 'vue'
import MacrosBannerPremium from '@/components/MacrosBannerPremium.vue'
import MacrosParams from '@/components/MacrosParams.vue'

const tasks = ref([
  {
    name: 'Задача 1',
    value: 1
  },
  {
    name: 'Задача 2',
    value: 2
  },
  {
    name: 'Задача 3',
    value: 3
  },
  {
    name: 'Задача 4',
    value: 4
  }
])

const selectedTask = ref(null)
</script>

<template>
<div class="macros">
  <div class="macros__head">
    <div class="macros__title">Создать макрос</div>
    <div class="macros__actions">
      <button class="btn btn--small btn--gray">Cancel</button>
      <button class="btn btn--small btn--primary">Save</button>
    </div>
  </div>
  <div class="macros-data">
    <input type="text" class="macros-data__name" placeholder="Имя макроса..">
    <div class="macros-data__separator"></div>
    <div class="macros-data__params">
      <BaseSelect :options="tasks" v-model="selectedTask" class="macros-data__task"/>
      <input type="text" class="macros-data__count" placeholder="Кол-во">
    </div>
  </div>
  <MacrosBannerPremium />
  <MacrosParams />
</div>
</template>

<style scoped lang="scss">
.macros {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 800px;
  border-radius: 24px;
  background: var(--Neutral-8, #24262D);
  box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  padding: 24px;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__actions {
    display: flex;
    gap: 20px;
  }
}

.macros-data {
  display: flex;
  justify-content: space-between;
  padding: var(--12, 12px) 16px 0px 16px;
  border-radius: 8px;
  gap: 16px;
  border-bottom: none;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 2px;
    background: linear-gradient(to top, rgba(255,255,255, 0), rgba(255,255,255, .12));
    -webkit-mask: linear-gradient(to top, #fff, #fff) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }


  &__name {
    border-radius: var(--24, 8px);
    background: var(--neutral-right-32, rgba(25, 27, 34, 0.32));
    height: 40px;
    padding: 10px 8px 10px var(--16, 16px);
    overflow: hidden;
    color: var(--Neutral-1, #E9EAEC);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;
    outline: none;
    flex-grow: 1;
  }

  &__separator {
    width: 1px;
    height: 40px;
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }

  &__params {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  &__task {
    width: 252px;
  }

  &__count {
    border-radius: var(--24, 24px);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    display: flex;
    width: 80px;
    height: 40px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: var(--Neutral-1, #FFF);
    text-overflow: ellipsis;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    border: none;
    outline: none;
  }
}
</style>
