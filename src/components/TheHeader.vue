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
import BaseDropdown from '@/components/ui/BaseDropdown.vue'
import MacrosDropdown from '@/components/MacrosDropdown.vue'
import { ref } from 'vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import LangSwitcher from '@/components/LangSwitcher.vue'

const openedFilter = ref(false)
const sortOption = [{ name: 'По дате', value: 'date' }, { name: 'Другая сортировка', value: 'other' }]
const selectedSort = ref(sortOption[0])
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <RouterLink to="/" class="logo header__logo">
          <picture>
            <source media="(max-width: 640px)" srcset="@/assets/img/logo-mobile.svg">
            <img src="@/assets/img/logo.svg" alt="" width="44" height="44">
          </picture>
        </RouterLink>
        <div class="header__left-wrapper">
          <div class="logo-text">
            <img src="@/assets/img/only-goals.png" alt="" width="122" height="24">
          </div>
          <div class="header__left-inner">
            <div class="header-games">
              <IconBall />
              375 (21)
            </div>
          </div>
        </div>
        <MacrosDropdown />
        <button class="dropdown__trigger dropdown__trigger--icon header__settings" :class="{ 'header__settings--opened': openedFilter }" @click="openedFilter = !openedFilter">
          <IconSettings />
        </button>
      </div>


      <div class="header__separator"></div>

      <div class="header__center header-filter" :class="{ 'header-filter--opened': openedFilter }">
        <BaseDropdown>
          <template v-slot:trigger>
            <IconLock class="dropdown__trigger-icon" />
            Категории
            <IconArrowDown class="dropdown__trigger-arrow"/>
          </template>
          <template v-slot:body>
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
          </template>
        </BaseDropdown>
        <BaseDropdown locked>
          <template v-slot:trigger>
            <IconLock class="dropdown__trigger-icon" />
            Все лиги
            <IconArrowDown class="dropdown__trigger-arrow"/>
          </template>
          <template v-slot:body>
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
          </template>
        </BaseDropdown>
        <BaseDropdown locked>
          <template v-slot:trigger>
            <IconLock class="dropdown__trigger-icon" />
            Показатели
            <IconArrowDown class="dropdown__trigger-arrow"/>
          </template>
          <template v-slot:body>
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
          </template>
        </BaseDropdown>
        <BaseDropdown locked>
          <template v-slot:trigger>
            <IconLock class="dropdown__trigger-icon" />
            История
            <IconArrowDown class="dropdown__trigger-arrow"/>
          </template>
          <template v-slot:body>
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
          </template>
        </BaseDropdown>
        <BaseDropdown trigger-class="dropdown__trigger--icon header__sort--desktop">
          <template v-slot:trigger>
            <IconSort />
          </template>
          <template v-slot:body>
            <div class="dropdown-list">
              <div class="dropdown-list__item">
                По дате
              </div>
              <div class="dropdown-list__item">
                Другая сортировка
              </div>
            </div>
          </template>
        </BaseDropdown>

        <div class="sort__wrapper max-phablet">
          <BaseSelect :options="sortOption" v-model="selectedSort">
            <template #icon>
              <IconSort />
            </template>
          </BaseSelect>
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
