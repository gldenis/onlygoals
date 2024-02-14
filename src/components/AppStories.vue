<script setup>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { nextTick, ref } from 'vue'
import IconSwiperNext from '@/components/icons/IconSwiperNext.vue'
import IconSwiperPrev from '@/components/icons/IconSwiperPrev.vue'

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
</script>

<template>
  <section class="stories">
    <div class="container">
      <Swiper class="stories__list"
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
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.stories {

  &__list {
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
