<script setup>

import IconStar from '@/components/icons/IconStar.vue'
import AppStories from '@/components/AppStories.vue'
import IconCardLock from '@/components/icons/IconCardLock.vue'
import PremiumNotification from '@/components/PremiumNotification.vue'
import SupportModal from '@/components/SupportModal.vue'
import HomeHero from '@/components/HomeHero.vue'
import GameCard from '@/components/GameCard.vue'
import GameCardSliced from '@/components/GameCardSliced.vue'
</script>

<template>
  <main>
    <HomeHero />
    <section class="games">
      <div class="container">
        <GameCard />
      </div>
    </section>
    <div class="container">
      <h2 class="section-title">В ближайшие 2 часа</h2>
    </div>
    <AppStories />
    <section class="games">
      <div class="container games__container">
        <GameCard />
        <GameCardSliced />
        <GameCardSliced unavailable />
      </div>
    </section>
    <PremiumNotification />
    <SupportModal />
  </main>
</template>

<style lang="scss" scoped>
.games {
  margin-top: rem(40);
  position: relative;

  &__container {
    display: flex;
    flex-direction: column;
    gap: rem(20);
  }
}

</style>
