<script setup>

import IconChartRise from '@/components/icons/IconChartRise.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const content = ref()
onClickOutside(content, (e) => {
  content.value.closest('.info-score__item').classList.remove('info-score__item--hovered')
  content.value.closest('.game-card').classList.remove('game-card--hovered')

})
</script>

<template>
  <div class="average-liga__wrapper">
    <div class="average-liga" ref="content">
      <div class="average-liga__head">
        <div class="average-liga__title">Средний показатель по лиге</div>
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
  </div>
</template>

<style scoped lang="scss">

</style>
