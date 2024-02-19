<script setup>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { ref } from 'vue'
import IconSwiperNext from '@/components/icons/IconSwiperNext.vue'
import IconSwiperPrev from '@/components/icons/IconSwiperPrev.vue'
import IconStoriesTrigger from '@/components/icons/IconStoriesTrigger.vue'
import IconStarFilled from '@/components/icons/IconStarFilled.vue'
import IconShareBtn from '@/components/icons/IconShareBtn.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconClose from '@/components/icons/IconClose.vue'
import IconPlay from '@/components/icons/IconPlay.vue'

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

const storyModalIsOpened = ref(false)
const openStory = () => {
  storyModalIsOpened.value  = true
}

const closeStory = () => {
  storyModalIsOpened.value  = false
}
</script>

<template>
  <section class="stories">
    <div class="container">
      <template v-if="!storiesOpened">
        <div class="stories-line">
          <div class="stories-line__item"></div>
          <div class="stories-line__item"></div>
          <div class="stories-line__item"></div>
          <div v-for="item of 11" :key="item" class="stories-line__item stories-line__item--watched"></div>

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
              slidesPerView="auto"
              space-between="4px"
              :navigation="{
                nextEl: next,
                prevEl: prev,
              }"
      >
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <div class="stories__favorite-btn">
              <IconStarFilled />
            </div>
            <img class="stories__poster"
                 src="@/assets/img/stories/story-1.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <div class="stories__favorite-btn">
              <IconStarFilled />
            </div>
            <img class="stories__poster"
                 src="@/assets/img/stories/story-2.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-3.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-4.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-5.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-6.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-7.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-8.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-9.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-10.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-11.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-1.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-2.png"
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

      <Teleport to="body" >
        <div v-show="storyModalIsOpened" class="modal" >
          <div class="modal__overlay"></div>
          <div class="modal__content">
            <button class="btn btn--icon modal__close" @click="closeStory">
              <IconClose />
            </button>
            <div class="story-modal">
              <div class="story-modal__favorite">
                <button class="btn btn--icon btn--gray">
                  <IconStar width="20" height="20"/>
                </button>
                999
              </div>
              <button class="btn btn--icon story-modal__share" @click="navigator?.share($route.fullPath)">
                <IconShareBtn />
              </button>
              <button class="btn btn--small btn--gray story-modal__control">
                <IconPlay />
              </button>
              <img src="@/assets/img/stories/story-modal.png" alt="">
            </div>
          </div>
        </div>
      </Teleport>
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

.swiper-slide {
  width: 100px;
  height: 100px;
}

.stories {

  &__favorite-btn {
    width: 20px;
    height: 20px;
    border-radius: var(--24, 24px);
    background: var(--neutral-left-84, rgba(255, 255, 255, 0.84));
    position: absolute;
    top: 4px;
    left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
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

.story-modal {
  position: relative;
  max-width: 100%;

  &__control {
    border-radius: 40px;
    background: var(--dark-neutral-968, rgba(19, 24, 32, 0.68));
    display: flex;
    width: 80px;
    height: 80px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50%;
      padding: 2px;
      background: linear-gradient(30deg, #3F45CE, #3F45CE 25%, #EF6F38 50%, #7841BD 75%, #7841BD);
      -webkit-mask: linear-gradient(30deg, #3F45CE, #EF6F38, #7841BD) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }

  &__favorite {
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 24px;
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    color: #FFF;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    display: flex;
    align-items: center;
    padding-right: 16px;
    gap: 8px;
  }

  &__share {
    position: absolute;
    top: 80px;
    left: 20px;
    border-radius: 24px;
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }

  img {
    max-width: 100%;
  }
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 40px 0;


  &__overlay {
    background: var(--Dark-9, rgba(22, 29, 36, 0.80));
    backdrop-filter: blur(4px);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &__content {
    z-index: 2;
    position: relative;
    max-width: 100%;
  }

  &__close {
    cursor: pointer;
    border-radius: var(--24, 24px);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
  }


}

@media screen and (max-width: $phablet) {
  .swiper-slide {
    width: 80px;
    height: 80px;
  }
}
</style>
