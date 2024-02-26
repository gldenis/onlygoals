<script setup>

import IconCharts from '@/components/icons/hero/IconCharts.vue'
import IconStar from '@/components/icons/IconStar.vue'
import AppStories from '@/components/AppStories.vue'
import IconCardLock from '@/components/icons/IconCardLock.vue'
import PremiumNotification from '@/components/PremiumNotification.vue'
import SupportModal from '@/components/SupportModal.vue'
import GameCard from '@/components/GameCard.vue'
import GameCardSliced from '@/components/GameCardSliced.vue'
</script>

<template>
  <main>
    <AppStories class="page-auth__stories"/>


    <section class="games">
      <div class="container">
        <GameCard />
      </div>
    </section>
    <div class="container">
      <h2 class="section-title">В ближайшие 2 часа</h2>
    </div>

    <section class="games">
      <div class="container games__container">
        <GameCard />
        <GameCardSliced />
        <GameCardSliced />
        <GameCardSliced />
        <GameCardSliced />
        <GameCardSliced />
        <GameCardSliced />
        <GameCardSliced />
        <GameCardSliced />
      </div>
    </section>
    <PremiumNotification />
    <SupportModal />
  </main>
</template>

<style lang="scss" scoped>
.page-auth__stories {
  margin-top: toRem(12);
}

.section-title {
  color: #E9EAEC;
  font-size: toRem(16);
  font-style: normal;
  font-weight: 800;
  line-height: 128%;
  text-align: center;
  display: flex;
  align-items: center;
  gap: toRem(16);
 margin: toRem(20) 0;

  &:before, &:after {
    display: block;
    content: '';
    height: toRem(1);
    flex-grow: 1;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.32) 50%, transparent 50%, transparent 100%);
    background-size: toRem(4) toRem(1);
  }
}

.games {
  margin-top: toRem(20);

  &__container {
    display: flex;
    flex-direction: column;
    gap: toRem(20);
  }
}

.game-card--sliced {
  .game-info--chart {
    height: toRem(44);
    align-items: center;

    .info-score__item {
      height: toRem(17);
    }
  }
}
</style>
