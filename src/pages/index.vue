<script setup>

import AppStories from '@/components/AppStories.vue'
import PremiumNotification from '@/components/PremiumNotification.vue'
import SupportModal from '@/components/SupportModal.vue'
import HomeHero from '@/components/HomeHero.vue'
import GameCard from '@/components/GameCard.vue'
import GameCardSliced from '@/components/GameCardSliced.vue'
import BaseToast from '@/components/BaseToast.vue'
import { useToastStore } from '@/stores/toast.js'
import { onMounted } from 'vue'

const { toasts, addToast } = useToastStore()

onMounted(() => {
  addToast({
    title: 'Заголовок события',
    description: 'Краткие детали события',
  })
})
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
<!--    <TelegramNotification />-->
    <SupportModal />
    <TransitionGroup name="toast">
      <div class="toast__list">
        <BaseToast v-for="toast of toasts"
                   :key="toast.title"
                   :title="toast.title"
                   :description="toast.description"
        />
      </div>
    </TransitionGroup>
  </main>
</template>

<style lang="scss" scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}


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
