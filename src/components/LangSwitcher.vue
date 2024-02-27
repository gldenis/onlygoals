<script setup>

import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const opened = ref(false)
const switcher = ref()
onClickOutside(switcher, () => opened.value = false)

const selectLang = (lang) => {
  opened.value = false
  currentLocale.value = lang
}

import { useI18n } from 'vue-i18n'

const getFlagByLocales = locale => {
  return new URL(`../assets/img/flag/${locale}.png`, import.meta.url).href
}

const { locale: currentLocale } = useI18n()
</script>

<template>
  <div class="lang-switcher" ref="switcher">
    <div class="lang-switcher__trigger" @click="opened = !opened">
      {{ $t(`shortLanguages.${currentLocale}`) }}
      <IconArrowDown class="dropdown__trigger-arrow" />
    </div>
    <div v-show="opened" class="lang-switcher__body">
      <div v-for="locale in $i18n.availableLocales" :key="locale" class="lang-switcher__item" @click="selectLang(locale)">
        <img :src="getFlagByLocales(locale)" alt="" loading="lazy" width="16" height="16">
        {{ $t(`languages.${locale}`) }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
