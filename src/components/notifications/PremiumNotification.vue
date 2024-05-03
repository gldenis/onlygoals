<script setup>

import IconPremiumNotification from '@/components/icons/IconPremiumNotification.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import { onUnmounted, ref } from 'vue'
import IconStoriesTrigger from '@/components/icons/IconStoriesTrigger.vue'

const notificationIsShowed = ref(true)
const notificationIsShowedManual = ref(true)
const hideNotification = () => {
  notificationIsShowed.value = false
  notificationIsShowedManual.value = false
}
const showNotification = () => {
  notificationIsShowed.value = true
  notificationIsShowedManual.value = true
}

const scrollHandler = e => {
  const windowHeight = window.innerHeight
  const fullHeight = document.body.offsetHeight
  const scrollTop = window.scrollY
  const windowWidth = window.innerWidth

  if (!notificationIsShowedManual.value) return

  if (scrollTop + windowHeight + 60 >= fullHeight && windowWidth <= 640) {
    notificationIsShowed.value = false
  } else {
    notificationIsShowed.value = true
  }
}

document.addEventListener('scroll', scrollHandler)

onUnmounted(() => {
  document.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <div class="premium-notification" :class="{ 'premium-notification--hidden': !notificationIsShowed }">
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
      <IconStoriesTrigger class="premium-notification__trigger min-phablet" @click="hideNotification"/>
    </template>
    <div v-else class="premium-notification__days">
      <IconArrowDown class="premium-notification__trigger" @click="showNotification"/>
      <span>9</span>
    </div>
  </div>
</template>

