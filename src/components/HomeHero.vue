<script setup>

import IconCharts from '@/components/icons/hero/IconCharts.vue'
import IconAcces from '@/components/icons/hero/IconAcces.vue'
import IconHat from '@/components/icons/hero/IconHat.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useGuideStore } from '@/stores/guide.js'

const authStore = useAuthStore()
const guideStore = useGuideStore()
</script>

<template>
  <section class="hero">
    <div class="container hero__container">
      <div class="hero__left">
        <h1 class="hero__title">Атомы футбола</h1>
        <p class="hero__slogan">Высокоточные статистические данные, стратегические обзоры
          и моментальные обновления всех футбольных матчей</p>
        <div class="hero__buttons">
          <button class="btn btn--primary" @click="authStore.registrationFormIsOpened = true">Регистрация</button>
          <button class="btn btn--accent" @click="guideStore.guideModalIsOpened = true" ><IconHat width="20" height="20"/> Институт голов</button>
        </div>
      </div>
      <div class="hero__right hero-tiles">
        <div class="hero-tiles__item hero-tiles__item--wide">
          <div class="hero-tiles__title">Параметров
            анализа</div>
          <div class="hero-tiles__value">100+</div>
        </div>
        <div class="hero-tiles__item">
          <IconCharts />
          <div class="hero-tiles__title">Наглядные графики</div>
        </div>
        <div class="hero-tiles__item">
          <IconAcces />
          <div class="hero-tiles__title">Быстрый
            доступ</div>
        </div>
        <div class="hero-tiles__item hero-tiles__item--wide">
          <div class="hero-tiles__title">Обновление данных каждые</div>
          <div class="hero-tiles__value">10 <span>сек</span></div>
        </div>
        <div class="hero-tiles__item">
          <IconHat />
          <div class="hero-tiles__title">Обучение по анализу</div>
        </div>
        <div class="hero-tiles__item">
          <IconCharts />
          <div class="hero-tiles__title">О нас за
            60 минут</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
