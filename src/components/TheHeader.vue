<script setup>
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";


import IconProfile from '@/components/icons/IconProfile.vue'
import IconBolt from '@/components/icons/IconBolt.vue'
import IconLock from '@/components/icons/IconLock.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconSort from '@/components/icons/IconSort.vue'
import IconMacross from '@/components/icons/IconMacross.vue'
import IconBall from '@/components/icons/IconBall.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import { ref } from 'vue'

const openedDropdown = ref(false)
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <RouterLink to="/" class="logo header__logo">
          <picture>
            <source media="(max-width: 640px)" srcset="@/assets/img/logo-mobile.svg">
            <img src="@/assets/img/logo.svg" alt="">
          </picture>
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
        <div class="dropdown">
          <div class="dropdown__trigger dropdown__trigger--available header__macros">
            <IconMacross />
            <span class="max-phablet" >Макросы</span>
            <IconArrowDown class="max-phablet" />
          </div>
        </div>
        <button class="dropdown__trigger dropdown__trigger--icon header__settings">
          <IconSettings />
        </button>
      </div>


      <div class="header__separator"></div>

      <div class="header__center">
        <div class="dropdown">
          <div class="dropdown__trigger" @click="openedDropdown = true">
            <IconLock />
            Категории
            <IconArrowDown />
          </div>
          <div class="dropdown__body" :class="{ 'dropdown__body--opened': openedDropdown}" tabindex="1"
               @blur="openedDropdown = false">
            <OverlayScrollbarsComponent defer :options="{
                                                          overflow: {
                                                            x: 'hidden',
                                                          },
                                                        }">
              <div class="dropdown-list">
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
              </div>
            </OverlayScrollbarsComponent>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropdown__trigger">
            <IconLock />
            Все лиги
            <IconArrowDown />
          </div>
          <div class="dropdown__body">
            <OverlayScrollbarsComponent defer :options="{
                                                          overflow: {
                                                            x: 'hidden',
                                                          },
                                                        }">
              <div class="dropdown-list">
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
                <div class="dropdown-list__item">
                  <BaseCheckbox label="title" />
                </div>
              </div>
            </OverlayScrollbarsComponent>
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
      </div>

      <div class="header__separator"></div>

      <div class="header__right">
        <RouterLink to="/tariff" class="header__bolt">
          <IconBolt />
          <span>Функции</span>
        </RouterLink>
        <RouterLink to="/profile" class="header__profile-link">
          <IconProfile />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.os-scrollbar {
  --os-handle-bg: rgba(255, 255, 255, 0.12);
  --os-handle-bg-hover: rgba(255, 255, 255, 0.68);
  --os-handle-bg-active: rgba(255, 255, 255, 0.68);

  --os-handle-perpendicular-size: 4px;
  --os-handle-perpendicular-size-hover: 6px;
  --os-handle-perpendicular-size-active: 6px;
  --os-handle-interactive-area-offset: 0;
}
</style>
