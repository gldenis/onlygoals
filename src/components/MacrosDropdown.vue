<script setup>

import IconMacross from '@/components/icons/IconMacross.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import IconAnalytics from '@/components/icons/IconAnalytics.vue'
import { useMacrosStore } from '@/stores/macros.js'

const dropdown = ref()

onClickOutside(dropdown, () => openedDropdown.value = false)

const openedDropdown = ref(false)
const toggleDropdown = () => {
  openedDropdown.value = !openedDropdown.value
}

const macrosStore = useMacrosStore()
</script>

<template>
<div class="macros-dropdown" ref="dropdown">
  <div class="macros-dropdown__trigger" @click="toggleDropdown">
    <IconMacross />
    <span class="max-phablet" >Макросы</span>
    <IconArrowDown class="max-phablet" />
  </div>
  <div class="macros-dropdown__body" :class="{ 'macros-dropdown__body--opened': openedDropdown}">
    <RouterLink to="/macros" class="btn btn--small btn--gray" @click="openedDropdown = false">
      <IconAnalytics />
      Аналитика
    </RouterLink>
    <div class="dropdown-macros__list">
      <div class="dropdown-macros__item">
        Макрос 1
        <span>2</span>
      </div>
      <div class="dropdown-macros__item">
        Макрос 2
        <span>99</span>
      </div>
      <div class="dropdown-macros__item">
        Макрос 3
        <span>99</span>
      </div>
    </div>
    <button class="btn macros__btn" @click="macrosStore.createModalIsOpened = true">Создать макрос</button>
  </div>
</div>
</template>

<style scoped lang="scss">
.macros-dropdown {
  position: relative;

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: toRem(8);
    border-radius: toRem(24);
    padding: toRem(10) toRem(16);
    background: var(--neutral-left-12);
    font-weight: 700;
    font-size: toRem(13);
    line-height: 132%;
    cursor: pointer;
    color: var(--neutral-right-68);
    background: var(--neutral-left-84);
  }

  &__body {
    position: absolute;
    top: - toRem(8);
    border-radius: toRem(8);
    border: toRem(1) solid var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    background: var(--neutral-right-84, rgba(25, 27, 34, 0.84));
    width: toRem(160);
    /* Dropdown */
    box-shadow: - toRem(20) toRem(20) toRem(60) - toRem(16) rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    left: 50%;
    transform: translateX(-50%);
    display: none;
    padding: toRem(8);

    &--opened {
      display: flex;
      flex-direction: column;
      gap: toRem(8);
    }
  }
}

.dropdown-macros {

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--neutral-left-84, rgba(255, 255, 255, 0.84));
    font-size: toRem(14);
    font-weight: 400;
    line-height: 150%; /* 21px */
    cursor: pointer;
    padding: toRem(8) 0;
    border-top: toRem(1) solid rgba(255, 255, 255, 0.12);
    border-bottom: toRem(1) solid transparent;
    position: relative;

    &:last-child {
      border-bottom: toRem(1) solid rgba(255, 255, 255, 0.12);
    }

    &:hover:before{
      content: "";
      position: absolute;
      width: calc(100% + 16px);
      left: 0;
      top: 0;
      margin-left: - toRem(8);
      inset: 0;
      padding: toRem(1);
      background: linear-gradient(to right, #3F45CE, #3F45CE 25%, #EF6F38 50%, #7841BD 75%, #7841BD);
      -webkit-mask: linear-gradient(to right, #3F45CE, #EF6F38, #7841BD) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    span {
      color: var(--neutral-left-32, rgba(255, 255, 255, 0.32));
      font-size: toRem(12);
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    &:before {

    }
  }
}
.macros {
  &__btn {
    display: flex;
    height: toRem(31);
    padding: toRem(7) toRem(12);
    justify-content: center;
    align-items: center;
    gap: toRem(8);
    border-radius: toRem(20);
    background: var(--green-other-12, rgba(31, 168, 78, 0.16));
    color: var(--Green-5, #099853);
    text-align: center;
    font-size: toRem(13);
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }
}
</style>
