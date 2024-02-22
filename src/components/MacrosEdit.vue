<script setup>
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { ref } from 'vue'
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
const emit = defineEmits(['cancel'])
</script>

<template>
<div class="macros">
  <div class="macros__head">
    <div class="macros__title">Редактирование макроса</div>
    <div class="macros__actions">
      <button class="btn btn--small btn--gray" @click="emit('cancel')">Cancel</button>
      <button class="btn btn--small btn--primary" @click="emit('cancel')">Save</button>
    </div>
  </div>
  <div class="macros-data">
    <input type="text" class="macros-data__name" placeholder="Имя макроса..">
    <div class="macros-data__separator"></div>
    <div class="macros-data__params">
      <BaseSelect :options="tasks" v-model="selectedTask" class="macros-data__task" placeholder="Задача к макросу"/>
      <input type="text" class="macros-data__count" placeholder="Кол-во">
    </div>
  </div>
  <MacrosParams editable />
</div>
</template>

<style scoped lang="scss">

</style>
