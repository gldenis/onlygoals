<script setup>

import IconCharts from '@/components/icons/hero/IconCharts.vue'
</script>

<template>
  <main>
    <section class="hero">
      <div class="container hero__container">
        <div class="hero__left">
          <h1 class="hero__title">Атомы футбола</h1>
          <p class="hero__slogan">Высокоточные статистические данные, стратегические обзоры
            и моментальные обновления всех футбольных матчей</p>
          <div class="hero__buttons">
            <button class="btn btn--primary">Регистрация</button>
            <button class="btn btn--accent">Институт голов</button>
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
            <IconCharts />
            <div class="hero-tiles__title">Быстрый
              доступ</div>
          </div>
          <div class="hero-tiles__item hero-tiles__item--wide">
            <div class="hero-tiles__title">Обновление данных каждые</div>
            <div class="hero-tiles__value">10 <span>сек</span></div>
          </div>
          <div class="hero-tiles__item">
            <IconCharts />
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
  </main>
</template>

<style lang="scss" scoped>
.hero-tiles {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 416px;

  &__item {
    border-radius: 8px;
    padding: 16px 8px;
    width: 100px;
    height: 100px;
    backdrop-filter: blur(8px);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.16) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &--wide {
      width: 200px;
      flex-direction: row;
    }
  }

  &__icon {

  }

  &__title {
    font-weight: 700;
    font-size: 13px;
    line-height: 132%;
    text-align: center;
    color: var(--neutral-1);
  }

  &__value {
    font-weight: 900;
    font-size: 32px;
    line-height: 132%;
    text-transform: uppercase;
    text-align: right;
    color: var(--neutral-1);
    white-space: nowrap;

    span {
      font-weight: 800;
      font-size: 16px;
      line-height: 128%;
    }
  }
}
</style>
