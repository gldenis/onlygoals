<script setup>

import AppStories from '@/components/AppStories.vue'
import PremiumNotification from '@/components/notifications/PremiumNotification.vue'
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

<style lang="scss">
.games {
  position: relative;

  &__container {
    display: flex;
    flex-direction: column;
    gap: rem(20);
  }
}

.page-auth__stories {
  margin-bottom: rem(40);
  margin-top: rem(40);
}
</style>
