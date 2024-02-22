<script setup>

import IconMacross from '@/components/icons/IconMacross.vue'
import IconPlusInCircle from '@/components/icons/IconPlusInCircle.vue'
import IconBoltFilled from '@/components/icons/IconBoltFilled.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import BaseSwitch from '@/components/ui/BaseSwitch.vue'
import { useMacrosStore } from '@/stores/macros.js'

const macrosStore = useMacrosStore()

const createMacros = () => {
  macrosStore.createModalIsOpened = true
  macrosStore.viewModalIsOpened = false
}

const viewMacros = () => {
  macrosStore.viewModalIsOpened = false
  macrosStore.viewItemModalIsOpened = true
}
</script>

<template>
<div class="macros">
  <div class="macros__head">
    <div class="macros__head-part">
      <IconMacross width="32" height="32" />
      <div class="macros__title">Макросы</div>
      <button class="btn btn--small macros-create__btn" @click="createMacros">
        <IconPlusInCircle />
        Новый макрос
      </button>
    </div>
    <div class="macros__head-part">
      <div class="header-points">
        <IconBoltFilled />
        31
        <div class="header-points__btn">
          <IconPlus />
        </div>
      </div>
    </div>
  </div>
  <div class="macros-list">
    <div v-for="macros of 4" class="macros-list__item">
      <div class="macros-list__title" @click="viewMacros">Имя макроса</div>
      <div class="macros-list__condition">Шанс на гол > 4</div>
      <div class="macros-list__progress">
        <div class="progress">
          <div class="progress__value" style="width: 50%; background: #6F63FF;"></div>
        </div>
        <div class="macros-list__percent">65%</div>
      </div>
      <BaseSwitch checked />
      <div class="macros-list__cost">5 баллов
        в день <IconBoltFilled width="12" height="12" />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
