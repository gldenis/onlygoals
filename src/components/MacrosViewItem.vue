<script setup>
import MacrosParams from '@/components/MacrosParams.vue'
import IconAgain from '@/components/icons/IconAgain.vue'
import IconHat from '@/components/icons/hero/IconHat.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconBoltFilled from '@/components/icons/IconBoltFilled.vue'
import BaseSwitch from '@/components/ui/BaseSwitch.vue'
import { useMacrosStore } from '@/stores/macros.js'

const emit = defineEmits(['cancel'])

const macrosStore = useMacrosStore()
const editMacros = () => {
  macrosStore.editModalIsOpened = true
  macrosStore.viewItemModalIsOpened = false
}
</script>

<template>
<div class="macros">
  <div class="macros__head">
    <div class="macros__head-part">
      <button class="btn btn--small btn--icon">
        <IconAgain />
      </button>
      <div class="macros__title">Имя макроса</div>
    </div>
    <div class="macros__head-part">
      <button class="btn btn btn--small btn--outlined-gradient">
        <IconHat width="20" height="20" />
        Доступен урок (15:43)
        <IconPlay width="12" height="12" />
      </button>
    </div>
  </div>
  <div class="macros__head">
    <div class="macros-data">Шанс на гол > 4</div>
    <div class="macros__head-part">
      <div class="macros-watcher">
        <div class="macros-watcher__text">
          5 баллов
          в день <IconBoltFilled  width="12" height="12" />
        </div>
        <BaseSwitch />
      </div>
      <IconEdit width="20" height="20" @click="editMacros" />
    </div>
  </div>
  <MacrosParams />
</div>
</template>

<style scoped lang="scss">
.macros-watcher {
  height: toRem(40);
  padding: 0 toRem(8);
  border-radius: toRem(8);
  background: rgba(31, 168, 78, 0.16);
  display: flex;
  align-items: center;
  gap: toRem(10);

  &__text {
    max-width: toRem(55);
    color: rgba(255, 255, 255, 0.68);
    font-size: toRem(12);
    font-style: normal;
    font-weight: 500;
    line-height: 128%; /* 15.36px */

    svg {
      margin-bottom: - toRem(3);
    }
  }
}

.macros-item__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.macros-condition {

}
</style>
