<script setup>

import IconHat from '@/components/icons/IconHat.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconCompleted from '@/components/icons/IconCompleted.vue'
import { ref } from 'vue'
import IconTime from '@/components/icons/IconTime.vue'
import IconLesson from '@/components/icons/IconLesson.vue'

const openedSteps = ref([])
const toggleStep = step => {
  if (openedSteps.value.includes(step)) {
    openedSteps.value = openedSteps.value.filter(mdiSitemap => mdiSitemap !== step)
  } else {
    openedSteps.value.push(step)
  }
}
</script>

<template>
  <div class="guide">
    <div class="guide__head">
      <div class="guide__title">Обучение</div>
      <div class="guide__steps">
        <IconHat />
        1 / 6
      </div>
    </div>
    <div class="guide__progress">
      <div class="guide__progress-value"></div>
    </div>
    <div class="guide-steps">
      <div class="guide-steps__item">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(1) }"
             @click="toggleStep(1)">
          <div class="guide-steps__icon">
            <IconCompleted />
          </div>
          <div class="guide-steps__title">Регистрация</div>
          <IconArrowDown />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(1) }">
          <div class="guide-steps__text">Description</div>
          <button class="btn btn--small guide-steps__btn">Подробнее</button>
        </div>
      </div>
      <div class="guide-steps__item">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(2) }"
             @click="toggleStep(2)">
          <div class="guide-steps__icon">
            <IconTime />
          </div>
          <div class="guide-steps__title">Регистрация</div>
          <IconArrowDown />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(2) }">
          <div class="guide-steps__text">Description</div>
          <button class="btn btn--small guide-steps__btn">Подробнее</button>
        </div>
      </div>
      <div class="guide-steps__item">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(3) }"
             @click="toggleStep(3)">
          <div class="guide-steps__icon">
            <IconLesson />
          </div>
          <div class="guide-steps__title">Регистрация</div>
          <IconArrowDown />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(3) }">
          <div class="guide-steps__text">Description</div>
          <button class="btn btn--small guide-steps__btn">Подробнее</button>
        </div>
      </div>
      <div class="guide-steps__item">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(4) }"
             @click="toggleStep(4)">
          <div class="guide-steps__icon">
            <IconLesson />
          </div>
          <div class="guide-steps__title">Регистрация</div>
          <IconArrowDown />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(4) }">
          <div class="guide-steps__text">Description</div>
          <button class="btn btn--small guide-steps__btn">Подробнее</button>
        </div>
      </div>
      <div class="guide-steps__item">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(5) }"
             @click="toggleStep(5)">
          <div class="guide-steps__icon">
            <IconLesson />
          </div>
          <div class="guide-steps__title">Регистрация</div>
          <IconArrowDown />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(5) }">
          <div class="guide-steps__text">Description</div>
          <button class="btn btn--small guide-steps__btn">Подробнее</button>
        </div>
      </div>
      <div class="guide-steps__item">
        <div class="guide-steps__head"
             :class="{ 'guide-steps__head--opened': openedSteps.includes(1) }"
             @click="toggleStep(6)">
          <div class="guide-steps__icon">
            <IconLesson />
          </div>
          <div class="guide-steps__title">Регистрация</div>
          <IconArrowDown />
        </div>
        <div class="guide-steps__content" :class="{ 'guide-steps__content--opened': openedSteps.includes(6) }">
          <div class="guide-steps__text">Description</div>
          <button class="btn btn--small guide-steps__btn">Подробнее</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.guide-steps {
  border-radius: toRem(8);
  background: var(--neutral-right-32, rgba(25, 27, 34, 0.32));
  padding: var(--8, 8px) 0;
  margin-top: 36px;

  &__item {
    display: flex;
    padding: 4px 16px;
    flex-direction: column;
    border-bottom: toRem(1) solid rgba(25, 27, 34, 0.32);

    &:last-child {
      border-bottom: none;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: toRem(16);
    cursor: pointer;
    padding: toRem(10) 0;

  }

  &__icon {
    width: 20px;
    height: 20px;
  }

  &__title {
    flex-grow: 1;
    color: var(--neutral-left-68, rgba(255, 255, 255, 0.68));
    font-size: toRem(16);
    font-weight: 500;
    line-height: 128%; /* 20.48px */
  }

  &__content {
    padding-left: 36px;
    display: none;
    flex-direction: column;
    gap: toRem(8);
    align-items: flex-start;
    padding-bottom: 8px;

    &--opened {
      display: flex;
    }
  }

  &__text {
    color: var(--neutral-left-32, rgba(255, 255, 255, 0.32));
    font-size: toRem(12);
    font-weight: 500;
    line-height: 128%; /* 15.36px */
  }

  &__btn {
    color: var(--Yellow-5, var(--Yellow, #E3861A));
    height: 30px;
    text-align: center;
    font-size: toRem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    border-radius: var(--20, 20px);
    background: var(--yellow-other-12, rgba(227, 134, 26, 0.12));
  }
}

.guide {
  border-radius: toRem(8);
  background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  box-shadow: -toRem(20) toRem(20) toRem(60) -toRem(16) rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  padding: toRem(16);

  &__progress {
    border-radius: toRem(8);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    height: 12px;
    margin-top: 20px;

    &-value {
      border-radius: var(--8, 8px) 0px 0px var(--8, 8px);
      background: var(--Green-5, #099853);
      height: 100%;
      width: 30%;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__steps {
    display: flex;
    align-items: center;
    gap: toRem(8);
  }

  &__title {
    color: #FFF;
    font-size: toRem(24);
    font-weight: 800;
    line-height: 132%; /* 31.68px */
  }
}
</style>
