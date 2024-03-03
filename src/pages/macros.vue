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
  margin-top: rem(40);

  &__again {
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.12);
  }

  &__btn {
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.84);
    color: rgba(25, 27, 34, 0.68);
    text-align: center;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }
}
.games {
  display: flex;
  flex-direction: column;
  gap: rem(20);
  margin-top: rem(40);

  &__btn {
    display: block;
    margin-top: rem(60);
    margin-left: auto;
    margin-right: auto;
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.12);
  }

  &__bonus {
    color: rgba(255, 255, 255, 0.68);
    font-size: rem(12);
    font-style: normal;
    font-weight: 500;
    line-height: 128%; /* 15.36px */
    width: rem(55);
  }
}

.page-head {
  &__info {
    display: flex;
    height: rem(48);
    padding: rem(8) rem(12);
    align-items: center;
    gap: rem(4);
    border-radius: rem(8);
    border: rem(1) solid rgba(255, 255, 255, 0.12);
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
