<script setup>

import AppStories from '@/components/AppStories.vue'
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

<style lang="scss">

</style>
