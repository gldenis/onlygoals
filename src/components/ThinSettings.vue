<script setup>

import IconLock from '@/components/icons/IconLock.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import IconGear from '@/components/icons/IconGear.vue'
import BaseSwitch from '@/components/ui/BaseSwitch.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { ref } from 'vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import IconUpload from '@/components/icons/IconUpload.vue'
import IconVolume from '@/components/icons/IconVolume.vue'
import IconRemove from '@/components/icons/IconRemove.vue'
import InputFileSelect from '@/components/InputFileSelect.vue'

const selectedSettingsGroup = ref( { name: 'Подборка 1',  value: 1})
const selectedOption = ref({ name: 'Jump',  value: 'jump'})

const props = defineProps({
  locked: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['togglePro'])
</script>

<template>
<div class="thin-settings">
  <div class="thin-settings__decor"></div>
  <div class="thin-settings__title">Тонкая настройка <div v-if="props.locked" class="thin-settings__pro-label" @click="emit('togglePro')">PRO</div></div>
  <div v-if="props.locked" class="thin-settings__subtitle">Разблокируйте индивидуальные функции с Pr</div>
  <div class="thin-settings__list">
    <template v-if="props.locked">
      <div class="thin-settings__item thin-settings__item--lock">
        <div class="thin-settings__head">
          <div class="thin-settings__item-part">
            <IconLock class="thin-settings__lock-icon" />
            <div class="thin-settings__name">Title</div>
          </div>
          <IconInfo class="thin-settings__info-icon" />
        </div>
      </div>
      <div class="thin-settings__item thin-settings__item--lock">
        <div class="thin-settings__head">
          <div class="thin-settings__item-part">
            <IconLock class="thin-settings__lock-icon" />
            <div class="thin-settings__name">Title</div>
          </div>
          <IconInfo class="thin-settings__info-icon" />
        </div>
      </div>
      <div class="thin-settings__item thin-settings__item--lock">
        <div class="thin-settings__head">
          <div class="thin-settings__item-part">
            <IconLock class="thin-settings__lock-icon" />
            <div class="thin-settings__name">Title</div>
          </div>
          <IconInfo class="thin-settings__info-icon" />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="thin-settings__item">
        <div class="thin-settings__head">
          <div class="thin-settings__name">Title</div>
          <div class="thin-settings__item-part">
            <IconGear class="thin-settings__gear-icon"/>
            <BaseSwitch />
          </div>
        </div>
<!--        <div class="thin-settings__group">-->
<!--          Настройка-->
<!--          <BaseSelect :options="[-->
<!--          { name: 'Подборка 1',  value: 1},-->
<!--          { name: 'Подборка 22',  value: 2},-->
<!--          ]"-->
<!--                      size="small"-->
<!--                      v-model="selectedSettingsGroup"-->
<!--          />-->
<!--        </div>-->
        <div class="thin-settings__body">
          <div class="settings__item">
            Цели
<!--            <BaseCheckbox label="Цели" />-->
            <div class="settings__item-actions">
              <div class="settings__actions">
                <IconUpload class="settings__actions-icon" />
              </div>
              <div class="settings__actions">
                <IconVolume class="settings__actions-icon" />
              </div>
              <BaseSelect :options="[
               { name: 'Jump',  value: 'jump'},
               { name: 'Bubble',  value: 'Bubble'},
               { name: 'Crystal',  value: 'Crystal'},
               { name: 'Breeze',  value: 'Breeze'},
               { name: 'Funky',  value: 'Funky'},
              ]"
                          v-model="selectedOption"
                          size="small"
              >
                <InputFileSelect />
              </BaseSelect>
            </div>
          </div>
          <div class="settings__item">
            Подать мяч
<!--            <BaseCheckbox label="Подать мяч" />-->
            <div class="settings__item-actions">
              <div class="settings__actions">
                <IconUpload class="settings__actions-icon" />
              </div>
              <div class="settings__actions">
                <IconVolume class="settings__actions-icon" />
              </div>
              <BaseSelect :options="[
               { name: 'Jump',  value: 'jump'},
               { name: 'Bubble',  value: 'Bubble'},
               { name: 'Crystal',  value: 'Crystal'},
               { name: 'Breeze',  value: 'Breeze'},
               { name: 'Funky',  value: 'Funky'},
              ]"
                          v-model="selectedOption"
                          size="small"
              />
            </div>
          </div>
          <div class="settings__item">
            Красные карточки
<!--            <BaseCheckbox label="Красные карточки" />-->
            <div class="settings__item-actions">
              <div class="settings__actions">
                <IconUpload class="settings__actions-icon" />
              </div>
              <div class="settings__actions">
                <IconVolume class="settings__actions-icon" />
              </div>
              <BaseSelect :options="[
               { name: 'Jump',  value: 'jump'},
               { name: 'Bubble',  value: 'Bubble'},
               { name: 'Crystal',  value: 'Crystal'},
               { name: 'Breeze',  value: 'Breeze'},
               { name: 'Funky',  value: 'Funky'},
              ]"
                          v-model="selectedOption"
                          size="small"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</div>
</template>

<style scoped lang="scss">

.thin-settings {
  width: rem(320);
  padding: rem(12);
  border-radius: rem(8);
  backdrop-filter: blur(40px);
  box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
  background: rgba(255, 255, 255, 0.12);
  position: relative;

  &__decor {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: rem(160);
    max-height: 100%;
    z-index: -1;
    border-radius: rem(8);

    &:before {
      position: absolute;
      left: 0;
      top: - rem(80);
      content:  '';
      display: block;
      background: linear-gradient(89deg, #3F45CE 23.96%, #EF6F38 48.96%, #7841BD 77.6%);
      width: rem(160);
      height: rem(160);
      opacity: 0.5;
      filter: blur(rem(64));
    }
  }

  &__list {
    margin-top: rem(12);
    display: flex;
    flex-direction: column;
    gap: rem(4);
  }
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #EEE;
    font-size: rem(15);
    font-weight: 700;
    line-height: 128%; /* 19.2px */
  }

  &__subtitle {
    color: rgba(255, 255, 255, 0.68);
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    max-width: calc(100% - rem(52));
  }

  &__pro-label {
    background: linear-gradient(90deg, #3073FA -1.05%, #F2883C 49.68%, #933CEA 101.97%);
    border-radius: rem(24);
    padding: rem(7) rem(12);
    width: rem(52);
    height: rem(32);
  }

  &__item {
    border-radius: rem(8);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);

    &--lock {
      background: rgba(25, 27, 34, 0.12);
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(12);
  }

  &__item-part {
    display: flex;
    align-items: center;
    gap: rem(8);
  }

  &__name {
    color: #EEE;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__lock-icon {
    width: rem(20);
    height: rem(20);
  }

  &__info-icon {
    width: rem(16);
    height: rem(16);
    fill: #fff;
    fill-opacity: 0.32;
  }

  &__gear-icon {
    width: rem(16);
    height: rem(16);
    opacity: 0.32;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  &__group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(12);
    background: rgba(25, 27, 34, 0.32);
  }
}

.settings__item {
  padding: rem(12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: rem(14);

  &-actions {
    display: flex;
    align-items: center;
  }
}

.settings {
  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(24);
    height: rem(24);
  }

  &__actions-icon {
    color: rgba(255,255,255, .32)
  }
}

.custom-checkbox {
  font-size: rem(14);
}

@media screen and (max-width: $phablet) {
  .thin-settings {
    width: 100%;
  }
}
</style>
