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
    <IconMacross class="dropdown__trigger-icon" />
    <span class="max-phablet" >Макросы</span>
    <IconArrowDown class="max-phablet dropdown__trigger-arrow" />
  </div>
  <div class="macros-dropdown__body" :class="{ 'macros-dropdown__body--opened': openedDropdown}">
    <button class="btn btn--small btn--gray" @click="macrosStore.viewModalIsOpened = true">
      <IconAnalytics />
      Аналитика
    </button>
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
    gap: rem(8);
    border-radius: rem(24);
    padding: rem(10) rem(16);
    background: var(--neutral-left-12);
    font-weight: 700;
    font-size: rem(13);
    line-height: 132%;
    cursor: pointer;
    color: var(--neutral-right-68);
    background: var(--neutral-left-84);
  }

  &__body {
    position: absolute;
    top: - rem(8);
    border-radius: rem(8);
    border: rem(1) solid rgba(255, 255, 255, 0.12);
    background:  rgba(25, 27, 34, 0.84);
    width: rem(160);
    /* Dropdown */
    box-shadow: - rem(20) rem(20) rem(60) (- rem(16)) rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    left: 50%;
    transform: translateX(-50%);
    display: none;
    padding: rem(8);
    z-index: 2;

    &--opened {
      display: flex;
      flex-direction: column;
      gap: rem(8);
    }

    &:before {
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: '';
      backdrop-filter: blur(20px);
      z-index: -1;
    }
  }
}

.dropdown-macros {

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.84);
    font-size: rem(14);
    font-weight: 400;
    line-height: 150%; /* 21px */
    cursor: pointer;
    padding: rem(8) 0;
    border-top: rem(1) solid rgba(255, 255, 255, 0.12);
    border-bottom: rem(1) solid transparent;
    position: relative;

    &:last-child {
      border-bottom: rem(1) solid rgba(255, 255, 255, 0.12);
    }

    &:hover:before{
      content: "";
      position: absolute;
      width: calc(100% + 16px);
      left: 0;
      top: 0;
      margin-left: - rem(8);
      inset: 0;
      padding: rem(1);
      background: linear-gradient(to right, #3F45CE, #3F45CE 25%, #EF6F38 50%, #7841BD 75%, #7841BD);
      -webkit-mask: linear-gradient(to right, #3F45CE, #EF6F38, #7841BD) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    span {
      color:  rgba(255, 255, 255, 0.32);
      font-size: rem(12);
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
    height: rem(31);
    padding: rem(7) rem(12);
    justify-content: center;
    align-items: center;
    gap: rem(8);
    border-radius: rem(20);
    background: rgba(31, 168, 78, 0.16);
    color: #099853;
    text-align: center;
    font-size: rem(13);
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }
}

@media screen and (max-width: $phablet) {
  .macros-dropdown {
    &__trigger {
      padding: 4px;
      width: rem(40);
      height: rem(40);
    }
  }
}
</style>
