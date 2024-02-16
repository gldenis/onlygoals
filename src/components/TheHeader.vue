<script setup>

import IconProfile from '@/components/icons/IconProfile.vue'
import IconBolt from '@/components/icons/IconBolt.vue'
import IconLock from '@/components/icons/IconLock.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconSort from '@/components/icons/IconSort.vue'
import IconMacross from '@/components/icons/IconMacross.vue'
import IconBall from '@/components/icons/IconBall.vue'
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <RouterLink to="/" class="logo">
          <img src="@/assets/img/logo.svg" alt="">
        </RouterLink>
        <div class="header__left-wrapper">
          <div class="logo-text">OnlyGoals</div>
          <div class="header__left-inner">
            <div class="lang-switcher">
              <div class="lang-switcher__trigger">
                Ру
                <IconArrowDown />
              </div>
            </div>
            <div class="header-games">
              <IconBall />
              375 (21)
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div class="dropdown__trigger dropdown__trigger--available">
          <IconMacross />
          Макросы
          <IconArrowDown />
        </div>
      </div>

      <div class="header__separator"></div>

      <div class="dropdown">
        <div class="dropdown__trigger">
          <IconLock />
          Категории
          <IconArrowDown />
        </div>
      </div>
      <div class="dropdown">
        <div class="dropdown__trigger">
          <IconLock />
          Все лиги
          <IconArrowDown />
        </div>
      </div>
      <div class="dropdown">
        <div class="dropdown__trigger">
          <IconLock />
          Показатели
          <IconArrowDown />
        </div>
      </div>
      <div class="dropdown">
        <div class="dropdown__trigger">
          <IconLock />
          История
          <IconArrowDown />
        </div>
      </div>
      <div class="dropdown">
        <div class="dropdown__trigger dropdown__trigger--icon">
          <IconSort />
        </div>
      </div>

      <div class="header__separator"></div>

      <RouterLink to="/tariff" class="header__bolt">
        <IconBolt />
        Функции
      </RouterLink>
      <RouterLink to="/profile" class="header__profile-link">
        <IconProfile />
      </RouterLink>
    </div>
  </header>
</template>

<style scoped lang="scss">

</style>
