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
import { useRoute } from 'vue-router'

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

const route = useRoute()
const share = async () => {
  console.log(navigator)
  await navigator?.share({
    url: route.fullPath,
  })
}

const media = ref()
const isPlayed = ref(false)
const playPause = () => {
  media.value.focus()
  isPlayed.value ? media.value.pause() : media.value.play()
  isPlayed.value = !isPlayed.value
}
</script>

<template>
  <section class="stories">
    <div class="container">
      <Swiper class="stories__list"
              :class="{ 'stories__list--short': !storiesOpened }"
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
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-4.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-5.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-6.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-7.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-8.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-9.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-10.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-11.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
            <img class="stories__poster"
                 src="@/assets/img/stories/story-1.png"
                 alt=""
                 loading="lazy"
                 width="100"
                 height="100">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="stories__item stories__item--watched" @click="openStory">
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
        <div class="stories__trigger" :class="{ 'stories__trigger--opened': storiesOpened }" @click="toggleStories">
          <IconStoriesTrigger />
        </div>
      </Swiper>

      <Teleport to="#modal" >
        <transition name="fade">
          <div v-show="storyModalIsOpened" class="modal" >
          <div class="modal__overlay" @click="closeStory"></div>
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
              <button class="btn btn--icon story-modal__share" @click="share">
                <IconShareBtn />
              </button>
              <button class="btn btn--small btn--gray story-modal__control">
                <IconPlay />
              </button>
              <video
                src="@/assets/video/video.mp4"
                tabindex="1"
                ref="media"
                poster="@/assets/img/stories/story-modal.png"
                @click="playPause"
                @keydown.space="playPause"
              />
<!--              <img src="@/assets/img/stories/story-modal.png" alt="">-->
            </div>
          </div>
        </div>
        </transition>
      </Teleport>
    </div>
  </section>
</template>

<style lang="scss">

.swiper-slide {
  width: rem(100);
  height: rem(100);
}

.stories {
  position: relative;
  z-index: 0;

  &__trigger {
    width: rem(20);
    height: rem(20);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.12);
    cursor: pointer;
    z-index: 3;

    &--opened {
      transform: rotate(180deg);
    }
  }

  &__favorite-btn {
    width: rem(20);
    height: rem(20);
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.84);
    position: absolute;
    top: rem(4);
    left: rem(4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__list {
    position: relative;
    border-radius: rem(4);
    background: rgba(19, 25, 31, 0.80);
    backdrop-filter: blur(4px);
    padding: rem(8);
    user-select: none;

    &--short {
      border-radius: rem(8);

      .swiper-slide {
        height: rem(2);
      }

      .stories__poster {
        display: none;
      }

      .stories__item {
        background: linear-gradient(to right, #3F45CE, #3F45CE 25%, #EF6F38 50%, #7841BD 75%, #7841BD);
        height: rem(3);

        &--watched {
          height: 1px;
          background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.32) 50%, transparent 50%, transparent 100%);
          background-size: rem(4) rem(1);
        }
      }
    }
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
    border-radius: rem(4);
  }

  &__btn {
    position: absolute;
    top: 0;
    z-index: 2;
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(80);
    height: rem(116);
    border-radius: rem(8);


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
  max-height: calc(100vh - rem(200));
  overflow: hidden;

  &__control {
    border-radius: rem(40);
    background: rgba(19, 24, 32, 0.68);
    display: flex;
    width: rem(80);
    height: rem(80);
    padding: rem(4);
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50%;
      padding: rem(2);
      background: linear-gradient(30deg, #3F45CE, #3F45CE 25%, #EF6F38 50%, #7841BD 75%, #7841BD);
      -webkit-mask: linear-gradient(30deg, #3F45CE, #EF6F38, #7841BD) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }

  &:hover &__control {
    opacity: 1;
  }

  &__favorite {
    position: absolute;
    top: rem(20);
    left: rem(20);
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.12);
    color: #FFF;
    text-align: center;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    display: flex;
    align-items: center;
    padding-right: rem(16);
    gap: rem(8);
  }

  &__share {
    position: absolute;
    top: rem(80);
    left: rem(20);
    border-radius: rem(24);
    background: rgba(255, 255, 255, 0.12);
  }

  img, video {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    outline: none;
    border: none;
  }
}

@media screen and (max-width: $phablet) {
  .swiper-slide {
    width: rem(80);
    height: rem(80);
  }
}
</style>
