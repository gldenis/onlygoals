<script setup>

import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  locked: {
    type: Boolean,
    default: false
  }
})
const dropdown = ref()

onClickOutside(dropdown, () => openedDropdown.value = false)

const openedDropdown = ref(false)
const toggleDropdown = () => {
  if (props.locked) return
  openedDropdown.value = !openedDropdown.value
}
</script>

<template>
  <div class="dropdown" ref="dropdown">
    <div class="dropdown__trigger" @click="toggleDropdown">
      <slot name="trigger"></slot>
    </div>
    <div class="dropdown__body"
         :class="{ 'dropdown__body--opened': openedDropdown}">
      <OverlayScrollbarsComponent defer
                                  :options="{
                                    overflow: {
                                      x: 'hidden',
                                    },
                                  }">
        <slot name="body"></slot>
      </OverlayScrollbarsComponent>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
