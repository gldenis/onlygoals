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
  margin-top: toRem(40);

  &__again {
    border-radius: toRem(24);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }

  &__btn {
    border-radius: toRem(24);
    background: var(--neutral-left-84, rgba(255, 255, 255, 0.84));
    color: var(--neutral-right-68, rgba(25, 27, 34, 0.68));
    text-align: center;
    font-size: toRem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }
}
.games {
  display: flex;
  flex-direction: column;
  gap: toRem(20);
  margin-top: toRem(40);

  &__btn {
    display: block;
    margin-top: toRem(60);
    margin-left: auto;
    margin-right: auto;
    border-radius: toRem(24);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }

  &__bonus {
    color: var(--neutral-left-68, rgba(255, 255, 255, 0.68));
    font-size: toRem(12);
    font-style: normal;
    font-weight: 500;
    line-height: 128%; /* 15.36px */
    width: toRem(55);
  }
}

.page-head {
  &__info {
    display: flex;
    height: toRem(48);
    padding: 8px var(--12, 12px);
    align-items: center;
    gap: toRem(4);
    border-radius: toRem(8);
    border: toRem(1) solid var(--neutral-left-12, rgba(255, 255, 255, 0.12));
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
