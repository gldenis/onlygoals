<script setup>

import IconPremiumNotification from '@/components/icons/IconPremiumNotification.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import { ref } from 'vue'
import IconStoriesTrigger from '@/components/icons/IconStoriesTrigger.vue'

const notificationIsShowed = ref(true)
const hideNotification = () => {
  notificationIsShowed.value = false
}
const showNotification = () => {
  notificationIsShowed.value = true
}
</script>

<template>
  <div class="premium-notification">
    <template v-if="notificationIsShowed">
      <div class="premium-notification__left">
        <IconPremiumNotification />
        <IconStoriesTrigger class="premium-notification__trigger max-phablet" @click="hideNotification" />
      </div>
      <div class="premium-notification__text">
        Заканчивается премиум <br>
        Осталось: 9 дней
      </div>
      <RouterLink to="/tariff" class="btn premium-notification__btn">Купить еще</RouterLink>
      <IconArrowDown class="premium-notification__trigger min-phablet" @click="hideNotification"/>
    </template>
    <div v-else class="premium-notification__days">
      <IconArrowDown class="premium-notification__trigger" @click="showNotification"/>
      9
    </div>
  </div>
</template>

