<script setup>

import IconChartRise from '@/components/icons/IconChartRise.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import BaseModal from '@/components/BaseModal.vue'
import { ref } from 'vue'
const openedInfo = ref(false)
</script>

<template>
  <div class="average-liga" ref="content">
    <div class="average-liga__head">
      <div class="average-liga__title">
        Средний показатель по лиге
        <IconInfo class="average-liga__info-icon" @click="openedInfo = true"/>
        <Teleport to="#modal">
          <BaseModal :opened="openedInfo" @close="openedInfo = false">
            <div class="modal__content--default">

            </div>
          </BaseModal>
        </Teleport>
      </div>
    </div>
    <div class="average-liga__content">
      <div class="game-meta__logo">
        <img src="@/assets/img/content/real-madrid.png" alt="">
      </div>
      <div class="average-liga__value">99,9</div>
      <IconChartRise class="average-liga__chart" />
      <div class="average-liga__changes">+12%</div>
    </div>
  </div>
</template>

<style lang="scss">
.modal__content--default {
  border-radius: rem(24);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  width: 100%;
  min-width: rem(300);
  max-width: rem(800);
  min-height: rem(300);
}
</style>
