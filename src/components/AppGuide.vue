<script setup>

import IconHat from '@/components/icons/IconHat.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconCompleted from '@/components/icons/IconCompleted.vue'
import { ref } from 'vue'
import IconTime from '@/components/icons/IconTime.vue'
import IconLesson from '@/components/icons/IconLesson.vue'
import IconClose from '@/components/icons/IconClose.vue'

const openedSteps = ref([])
const toggleStep = step => {
  if (openedSteps.value.includes(step)) {
    openedSteps.value = openedSteps.value.filter(mdiSitemap => mdiSitemap !== step)
  } else {
    openedSteps.value = [step]
  }
}

const props = defineProps({
  showCloseBtn: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])
</script>

<template>
  <div class="guide">
    <div class="guide__top">
      <div class="guide__head">
        <div class="guide__title">Обучение</div>
        <div class="guide__steps">
          <IconHat />
          1 / 6
        </div>
        <div v-if="showCloseBtn" class="guide__close btn btn--icon" @click="emit('close')">
          <IconClose width="16" height="16" />
        </div>
      </div>
      <div class="guide__progress">
        <div class="guide__progress-value"></div>
      </div>
    </div>
    <div class="guide-steps">
      <div class="guide-steps__item" :class="{ 'guide-steps__item--opened': openedSteps.includes(1) }">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(1) }"
             @click="toggleStep(1)">
          <div class="guide-steps__icon">
            <IconCompleted />
          </div>
          <div class="guide-steps__title">Регистрация</div>
          <IconArrowDown class="guide-steps__head-arrow" />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(1) }">
          <div class="guide-steps__text">Description</div>
          <div class="guide-steps__buttons">
            <button class="btn btn--small guide-steps__btn">Подробнее</button>
            <div class="guide-steps__price">
              <div class="coins">
                <img src="@/assets/img/bitcoin.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
                <img src="@/assets/img/usdt.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
              </div>
              <button class="btn btn--outlined-gradient btn--small guide-steps__price-btn">35 USDT</button>
            </div>
          </div>
        </div>
      </div>
      <div class="guide-steps__item" :class="{ 'guide-steps__item--opened': openedSteps.includes(2) }">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(2) }"
             @click="toggleStep(2)">
          <div class="guide-steps__icon">
            <IconTime />
          </div>
          <div class="guide-steps__title">Тактика и возможности</div>
          <IconArrowDown class="guide-steps__head-arrow" />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(2) }">
          <div class="guide-steps__text">Раскрывает основные принципы тактической игры в футбол, помогая понять
            эффективные стратегии и принимать осмысленные решения на поле
          </div>
          <div class="guide-steps__buttons">
            <button class="btn btn--small guide-steps__btn">Подробнее</button>
            <div class="guide-steps__price">
              <div class="coins">
                <img src="@/assets/img/bitcoin.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
                <img src="@/assets/img/usdt.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
              </div>
              <button class="btn btn--outlined-gradient btn--small guide-steps__price-btn">35 USDT</button>
            </div>
          </div>
        </div>
      </div>
      <div class="guide-steps__item" :class="{ 'guide-steps__item--opened': openedSteps.includes(3) }">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(3) }"
             @click="toggleStep(3)">
          <div class="guide-steps__icon">
            <IconLesson />
          </div>
          <div class="guide-steps__title">Анализ игр 1</div>
          <IconArrowDown class="guide-steps__head-arrow" />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(3) }">
          <div class="guide-steps__text">Description</div>
          <div class="guide-steps__buttons">
            <button class="btn btn--small guide-steps__btn">Подробнее</button>
            <div class="guide-steps__price">
              <div class="coins">
                <img src="@/assets/img/bitcoin.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
                <img src="@/assets/img/usdt.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
              </div>
              <button class="btn btn--outlined-gradient btn--small guide-steps__price-btn">35 USDT</button>
            </div>
          </div>
        </div>
      </div>
      <div class="guide-steps__item" :class="{ 'guide-steps__item--opened': openedSteps.includes(4) }">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(4) }"
             @click="toggleStep(4)">
          <div class="guide-steps__icon">
            <IconLesson />
          </div>
          <div class="guide-steps__title">Анализ игр 2</div>
          <IconArrowDown class="guide-steps__head-arrow" />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(4) }">
          <div class="guide-steps__text">Description</div>
          <div class="guide-steps__buttons">
            <button class="btn btn--small guide-steps__btn">Подробнее</button>
            <div class="guide-steps__price">
              <div class="coins">
                <img src="@/assets/img/bitcoin.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
                <img src="@/assets/img/usdt.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
              </div>
              <button class="btn btn--outlined-gradient btn--small guide-steps__price-btn">35 USDT</button>
            </div>
          </div>
        </div>
      </div>
      <div class="guide-steps__item" :class="{ 'guide-steps__item--opened': openedSteps.includes(5) }">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(5) }"
             @click="toggleStep(5)">
          <div class="guide-steps__icon">
            <IconLesson />
          </div>
          <div class="guide-steps__title">Показатели</div>
          <IconArrowDown class="guide-steps__head-arrow" />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(5) }">
          <div class="guide-steps__text">Description</div>
          <div class="guide-steps__buttons">
            <button class="btn btn--small guide-steps__btn">Подробнее</button>
            <div class="guide-steps__price">
              <div class="coins">
                <img src="@/assets/img/bitcoin.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
                <img src="@/assets/img/usdt.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
              </div>
              <button class="btn btn--outlined-gradient btn--small guide-steps__price-btn">35 USDT</button>
            </div>
          </div>
        </div>
      </div>
      <div class="guide-steps__item" :class="{ 'guide-steps__item--opened': openedSteps.includes(6) }">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(1) }"
             @click="toggleStep(6)">
          <div class="guide-steps__icon">
            <IconLesson />
          </div>
          <div class="guide-steps__title">Уведомления</div>
          <IconArrowDown class="guide-steps__head-arrow" />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(6) }">
          <div class="guide-steps__text">Description</div>
          <div class="guide-steps__buttons">
            <button class="btn btn--small guide-steps__btn">Подробнее</button>
            <div class="guide-steps__price">
              <div class="coins">
                <img src="@/assets/img/bitcoin.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
                <img src="@/assets/img/usdt.png" alt="" class="coins__item" loading="lazy" width="12" height="12">
              </div>
              <button class="btn btn--outlined-gradient btn--small guide-steps__price-btn">35 USDT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.guide-steps {
  border-radius: rem(8);
  background: rgba(25, 27, 34, 0.32);
  padding: rem(8) 0;

  &__item {
    display: flex;
    padding: rem(4) rem(16);
    flex-direction: column;
    border-bottom: rem(1) solid rgba(25, 27, 34, 0.32);
    border-left: 2px solid transparent;

    &--opened {
      border-left: 2px solid rgba(255, 255, 255, 0.84);
    }

    &:last-child {
      border-bottom: none;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(16);
    cursor: pointer;
    padding: rem(10) 0;
    color: rgba(255, 255, 255, 0.68);

    &--opened {
      color: #E9EAEC;

      .guide-steps__head-arrow {
        transform: rotate(180deg);
      }
    }
  }

  &__arrow {
    width: rem(20);
    height: rem(20);
  }

  &__icon {
    width: rem(20);
    height: rem(20);
  }

  &__title {
    flex-grow: 1;

    font-size: rem(16);
    font-weight: 500;
    line-height: 128%; /* 20.48px */
  }

  &__content {
    padding-left: rem(36);
    display: none;
    flex-direction: column;
    gap: rem(8);
    align-items: flex-start;
    padding-bottom: rem(8);

    &--opened {
      display: flex;
    }
  }

  &__text {
    color: rgba(255, 255, 255, 0.32);
    font-size: rem(12);
    font-weight: 500;
    line-height: 128%; /* 15.36px */
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: rem(16);
    justify-content: space-between;
    width: 100%;
  }

  &__btn {
    color: #E3861A;
    height: rem(30);
    text-align: center;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    border-radius: rem(20);
    background: rgba(227, 134, 26, 0.12);
    padding: rem(7) rem(12);
  }

  &__price {
    display: flex;
    align-items: center;
    gap: rem(8);
  }

  &__price-btn {
    height: rem(30);
  }
}

.coins {
  display: flex;
  flex-direction: column;
  gap: rem(4);

  &__item {
    width: rem(12);
    height: rem(12);
  }
}

.guide {
  border-radius: rem(8);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: - rem(20) rem(20) rem(60) (- rem(16)) rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  padding: rem(16);
  display: flex;
  flex-direction: column;
  gap: rem(32);
  flex-grow: 1;

  &__close {
    width: rem(24);
    height: rem(24);
    border-radius: 50%;
    background:  rgba(255, 255, 255, 0.12);
    cursor: pointer;

    svg {
      width: rem(12);
      height: rem(12);
    }
  }

  &__progress {
    border-radius: rem(8);
    background: rgba(255, 255, 255, 0.12);
    height: rem(12);
    margin-top: rem(20);

    &-value {
      border-radius: rem(8) 0 0 rem(8);
      background: #099853;
      height: 100%;
      width: 30%;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(8);
  }

  &__steps {
    display: flex;
    align-items: center;
    gap: rem(8);
    font-size: rem(12);
    font-weight: 600;
    margin-left: auto;
  }

  &__title {
    color: #FFF;
    font-size: rem(24);
    font-weight: 800;
    line-height: 132%; /* 31.68px */
  }
}
</style>
