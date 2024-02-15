<script setup>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { nextTick, ref } from 'vue'
import IconSwiperNext from '@/components/icons/IconSwiperNext.vue'
import IconSwiperPrev from '@/components/icons/IconSwiperPrev.vue'
import IconStoriesTrigger from '@/components/icons/IconStoriesTrigger.vue'

const modules = [Navigation]
const prev = ref(null)
const next = ref(null)

const swiperInstance = ref()
const isEnd = ref(false)
const isStart = ref(true)
const onSwiper = swiper => {
  swiperInstance.value = swiper
}

const onSlideChange = swiper => {
  isEnd.value = swiper.isEnd
  isStart.value = swiper.activeIndex === 0
  swiperInstance.value = swiper
}

const storiesOpened = ref(true)
const toggleStories = () => {
  storiesOpened.value = !storiesOpened.value
}
</script>

<template>
  <section class="stories">
    <div class="container">
      <template v-if="storiesOpened">
        <div class="stories-line">
          <div class="stories-line__item"></div>
          <div class="stories-line__item"></div>
          <div class="stories-line__item"></div>
          <div v-for="item of 11" class="stories-line__item stories-line__item--watched"></div>

          <div class="stories-line__trigger" @click="toggleStories">
            <IconStoriesTrigger />
          </div>
        </div>
      </template>
      <Swiper v-else class="stories__list"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :modules="modules"
              :loop="false"
              slides-per-view="11.5"
              space-between="4px"
              :navigation="{
                nextEl: next,
                prevEl: prev,
              }"
      >
        <SwiperSlide v-for="story of 20" :key="story">
          <div class="stories__item">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-1.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <div class="swiper-navigation">
          <div ref="prev" v-show="!isStart" class="stories__btn stories__btn--prev">
            <IconSwiperPrev />
          </div>
          <div ref="next" v-show="!isEnd" class="stories__btn stories__btn--next">
            <IconSwiperNext />
          </div>
        </div>
        <div class="stories-line__trigger stories-line__trigger--opened" @click="toggleStories">
          <IconStoriesTrigger />
        </div>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.stories-line {
  border-radius: 10px;
  background: rgba(19, 25, 31, 0.80);
  backdrop-filter: blur(4px);
  height: 20px;
  padding: 4px var(--8, 8px);
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;

  &__trigger {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    cursor: pointer;
    z-index: 3;

    &--opened {
      transform: rotate(180deg);
    }
  }

  &__item {
    height: 3px;
    width: 80px;
    border-radius: 3px;
    background: linear-gradient(to right, #3F45CE, #3F45CE 25%, #EF6F38 50%, #7841BD 75%, #7841BD);

    &--watched {
      height: 1px;
      background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.32) 50%, transparent 50%, transparent 100%);
      background-size: 4px 1px;
    }
  }
}

.stories {

  &__list {
    position: relative;
    border-radius: 4px;
    background: rgba(19, 25, 31, 0.80);
    backdrop-filter: blur(4px);
    padding: 8px;
    position: relative;
    user-select: none;
  }

  &__item {
    overflow: hidden;
  }

  &__poster {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  &__btn {
    position: absolute;
    top: 0;
    z-index: 2;
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 116px;
    border-radius: 8px;


    &--next {
      right: 0;
      background: linear-gradient(270deg, #1D1F26 -0.6%, rgba(29, 31, 38, 0.00) 99.4%);
    }

    &--prev {
      left: 0;
      background: linear-gradient(270deg, rgba(29, 31, 38, 0.00) -0.6%, #1D1F26 99.4%);
    }
  }
}
</style>
