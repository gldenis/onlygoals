<script setup>

import IconAgain from '@/components/icons/IconAgain.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import GameCardSliced from '@/components/GameCardSliced.vue'
import IconBoltFilled from '@/components/icons/IconBoltFilled.vue'
import BaseSwitch from '@/components/ui/BaseSwitch.vue'
import IconAnalytics from '@/components/icons/IconAnalytics.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="page-head">
        <div class="page-head__left">
          <div class="btn btn--icon btn--small page-head__again">
            <IconAgain />
          </div>
          <h1 class="title page-head__title">Имя макроса</h1>
          <div class="page-head__info">Цель счёт > 0, НТ</div>
        </div>
        <div class="page-head__separator"></div>
        <div class="page-head__left">
          <IconEdit />
          <BaseSwitch />
          <div class="games__bonus">
            5 баллов
            в день <IconBoltFilled width="12" height="12"/>
          </div>
          <button class="btn btn--small page-head__btn">
            <IconAnalytics />
            Аналитика
          </button>
        </div>
      </div>
      <div class="games">
        <GameCardSliced />
        <GameCardSliced />
        <GameCardSliced />
        <GameCardSliced />
      </div>
      <button class="btn btn--small games__btn">Показать больше</button>
    </div>
  </main>
</template>

<style scoped lang="scss">
.page-head {
  margin-top: 40px;

  &__again {
    border-radius: var(--24, 24px);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }

  &__btn {
    border-radius: var(--24, 24px);
    background: var(--neutral-left-84, rgba(255, 255, 255, 0.84));
    color: var(--neutral-right-68, rgba(25, 27, 34, 0.68));
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }
}
.games {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;

  &__btn {
    display: block;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    border-radius: var(--24, 24px);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }

  &__bonus {
    color: var(--neutral-left-68, rgba(255, 255, 255, 0.68));
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 128%; /* 15.36px */
    width: 55px;
  }
}

.page-head {
  &__info {
    display: flex;
    height: 48px;
    padding: var(--8, 8px) var(--12, 12px);
    align-items: center;
    gap: 4px;
    border-radius: var(--8, 8px);
    border: 1px solid var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }
}

@media screen and (max-width: $laptop) {
  .page-head {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: $phablet) {
  .page-head {
    &__left {
      flex-wrap: wrap;
    }
  }
}
</style>
