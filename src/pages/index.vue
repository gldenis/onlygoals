<script setup>

import AppStories from '@/components/AppStories.vue'
import PremiumNotification from '@/components/notifications/PremiumNotification.vue'
import SupportModal from '@/components/SupportModal.vue'
import HomeHero from '@/components/HomeHero.vue'
import GameCard from '@/components/GameCard.vue'
import GameCardSliced from '@/components/GameCardSliced.vue'
import { useToastStore } from '@/stores/toast.js'
import { onMounted } from 'vue'
import { createConfirmDialog } from 'vuejs-confirm-dialog'
import TelegramBotNotification from '@/components/notifications/TelegramBotNotification.vue'

const { addToast } = useToastStore()

onMounted(() => {
  addToast({
    title: 'Заголовок события',
    description: 'Краткие детали события',
    delay: 10000
  })
})

const openTelegramBotNotification = () => {
  const { reveal } = createConfirmDialog(TelegramBotNotification)

  reveal()
}
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
        <GameCard type="friendly"/>
        <GameCard type="friendly" :kind="2" :schemaBoolean="false"/>
        <GameCard type="women" chart-state="loading" />
        <GameCard chart-light="second" />
        <GameCard chart-light="thirty" />
        <GameCardSliced />
        <GameCardSliced unavailable />
      </div>
    </section>
    <div class="buttons buttons-group">
      <button class="btn btn--primary" @click="openTelegramBotNotification">telegram bot notification</button>
    </div>
    <PremiumNotification />
<!--    <TelegramNotification />-->
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
