<script setup>

import AppGuide from '@/components/AppGuide.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const supportWindowIsOpened = ref(false)
const content = ref()

onClickOutside(content, () => {
  supportWindowIsOpened.value = false
})
</script>

<template>
  <div class="support">
    <img class="support__trigger" src="@/assets/img/support.png" alt="" @click="supportWindowIsOpened = true">
    <div class="support__content" ref="content">
      <AppGuide v-if="supportWindowIsOpened">
        <button class="btn btn--small">Overgoals поддержка</button>
      </AppGuide>
    </div>
  </div>
</template>

<style scoped lang="scss">
.support {
  position: fixed;
  bottom: rem(40);
  right: rem(40);
  z-index: 3;

  &__trigger {
    cursor: pointer;
  }

  &__content {
    width: rem(324);
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
