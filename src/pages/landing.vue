<script setup>

import IconHat from '@/components/icons/hero/IconHat.vue'
import IconCharts from '@/components/icons/hero/IconCharts.vue'
import IconAcces from '@/components/icons/hero/IconAcces.vue'
import AppStories from '@/components/AppStories.vue'
import vueRecaptcha from 'vue3-recaptcha2'
import GameCardSmall from '@/components/GameCardSmall.vue'
import GameCardSmallSliced from '@/components/GameCardSmallSliced.vue'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

const recaptchaVerified = (response) => {
}
const recaptchaExpired = () => {
  vueRecaptchaEl.reset();
}
const recaptchaFailed = () => {

}
const recaptchaError = (reason) => {

}
</script>

<template>
  <main>
    <div class="container landing__container">
      <div class="landing__left">
        <OverlayScrollbarsComponent>
          <div class="landing__left-wrapper">
            <RouterLink to="/" class="landing__logo">
              <img src="../assets/img/logo-landing.png" alt="" loading="lazy" width="199" height="40">
            </RouterLink>
            <div class="hero__text">
              <h1 class="hero__title">Атомы футбола</h1>
              <div class="hero__slogan">Высокоточные статистические данные, стратегические обзоры
                и моментальные обновления всех футбольных матчей</div>
            </div>
            <div class="hero-tiles hero-tiles--row">
              <div class="hero-tiles__item hero-tiles__item--wide">
                <div class="hero-tiles__title">Параметров
                  анализа</div>
                <div class="hero-tiles__value">100+</div>
              </div>
              <div class="hero-tiles__item hero-tiles__item--wide">
                <div class="hero-tiles__title">Обновление данных каждые</div>
                <div class="hero-tiles__value">10 <span>сек</span></div>
              </div>
              <div class="hero-tiles__item">
                <IconCharts />
                <div class="hero-tiles__title">Наглядные графики</div>
              </div>
              <div class="hero-tiles__item">
                <IconAcces />
                <div class="hero-tiles__title">Быстрый
                  доступ</div>
              </div>
              <div class="hero-tiles__item">
                <IconHat />
                <div class="hero-tiles__title">Обучение по анализу</div>
              </div>
              <div class="hero-tiles__item">
                <IconCharts />
                <div class="hero-tiles__title">О нас за
                  60 минут</div>
              </div>
            </div>
            <form class="landing-form" @submit.prevent>
              <div class="landing-form__top">
                <div class="landing-form__pic">
                  <img src="../assets/img/landing-form.png" class="landing-form__img" alt="" loading="lazy" width="103" height="138">
                </div>
                <div class="landing-form__content">
                  <div class="landing-form__title">Гол в один клик</div>
                  <div class="landing-form__recaptcha">
                    <vue-recaptcha v-show="true" sitekey="6Lf6QIIpAAAAAKpMIil4K90wrJE9uxDB1LqKb-cl"
                                   size="normal"
                                   theme="light"
                                   hl="ru"
                                   :loading-timeout="30000 "
                                   @verify="recaptchaVerified"
                                   @expire="recaptchaExpired"
                                   @fail="recaptchaFailed"
                                   @error="recaptchaError"
                                   ref="vueRecaptchaEl">
                    </vue-recaptcha>
                  </div>
                </div>
              </div>
              <div class="landing-form__bottom">
                <div class="landing-form__text">
                  3 дня премиум <br>
                  при регистрации
                </div>
                <button class="btn btn--primary landing-form__btn">
                  Зарегистрироваться
                </button>
              </div>
            </form>
            <AppStories class="stories__left" />
          </div>
        </OverlayScrollbarsComponent>
      </div>
      <div class="landing__right">
        <h2 class="last-games__title">Последние игры</h2>
        <div class="games-container">
          <GameCardSmall />
          <AppStories class="stories__right" />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
          <GameCardSmall />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 0;
}

.last-games__title {
  display: none;
}

.stories {
  &__right {
    display: none;
  }
}

.hero-tiles__item--wide {
  &:nth-of-type(2) {
    display: none;
  }
}

.landing {


  &__container {
    padding-top: rem(40);
    height: 100vh;
    gap: rem(32);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__left {
    max-width: rem(640);
    height: calc(100vh - (rem(80)));

    flex-shrink: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: rem(40);
    }
  }

  &__logo {
    width: rem(199);
    height: rem(40);
    margin-left: - rem(25);

    img {
      width: 100%;
      height: auto;
    }
  }

  &__right {
    width: rem(400);

  }
}

.games-container {
  padding: rem(8);
  border-radius: rem(8) rem(8) 0 0;
  background: linear-gradient(180deg, rgba(104, 109, 122, 0.24) 0.01%, rgba(41, 43, 51, 0.60) 100%);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  gap: rem(8);
  flex-shrink: 0;
  height: calc(100vh - (rem(40)));
  overflow-y: auto;
  scrollbar-width: none;
  overscroll-behavior: none;
  position: sticky;
  top: 40px;
  max-height: rem(800);

  &::-webkit-scrollbar {
    display: none;
  }
}

:deep(.stories .container) {
  padding: 0;
}

.landing-form {
  display: flex;
  flex-direction: column;
  gap: rem(32);

  &__title {
    color: #EBEBEB;
    font-size: rem(32);
    font-weight: 800;
    line-height: 132%; /* 42.24px */
  }

  &__pic {
    padding-left: rem(28);
  }

  &__img {
    width: rem(103);
    height: rem(138);
  }

  &__top, &__bottom {
    display: grid;
    grid-template-columns: rem(208) 1fr;
    gap: 20px;
  }

  &__text {
    color: #57C57C;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    width: max-content;
    margin: auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: rem(20);
  }
}

@media screen and (max-width: $desktop) {
  .landing {
    &__left {
      max-width: calc(100% - rem(432));
    }
  }

  .hero__slogan {
    display: flex;
  }

  .landing-form {
    &__pic {
      padding-left: 0;
    }

    &__top,
    &__bottom {
      grid-template-columns: rem(120) 1fr;
    }

    &__btn {
      width: max-content;
    }
  }

  .hero-tiles {
    max-width: 100%;

    &__item {
      width: rem(100);
      &--wide {
        width: rem(208);

        &:nth-of-type(2) {
          display: flex;
        }
      }
    }
  }
}

@media screen and (max-width: $laptop) {
  .landing {
    &__container {
      flex-direction: column;
      gap: rem(32);
      height: max-content;
    }


    &__left {
      max-width: 100%;
      gap: rem(32);
      justify-content: flex-start;
      height: max-content;
    }
    &__right {
      width: 100%;
    }
  }

  .landing-form__recaptcha {
    transform:scale(0.77);
    transform-origin:0 0;
  }

  .landing-form {
    gap: rem(20);

    &__top {

    }

    &__title {
      font-size: rem(24);
    }

    &__btn {
      font-size: rem(15);
    }
  }

  .games-container {
    max-height: max-content;
    height: max-content;
  }
}

@media screen and (max-width: $laptop) and (min-width: $phablet) {
  .hero-tiles__item {
    width: calc((100% - (rem(16))) / 3);
    &--wide {
      &:nth-of-type(1) {
        display: flex;
      }
      &:nth-of-type(2) {
        display: flex;
      }
    }
  }
}

@media screen and (max-width: $phablet) {
  .landing {
    &__left {
      max-width: 100%;
    }

    &__right {
      width: 100%;
    }
  }

  .landing-form__top {
    overflow-x: hidden;
  }

  .games-container {
    background: none;
    padding: 0;
    gap: rem(20);
  }

  .stories {
    &__left {
      display: none;
    }
    &__right {
      display: block;
    }
  }

  .hero-tiles {
    flex-wrap: wrap;
    gap: rem(4);

    &__item {
      width: calc((100% - rem(12) ) / 4);
      &--wide {
        display: flex;
        width: calc((100% - rem(4) ) / 2);

        &:nth-of-type(2) {
          display: flex;
        }
      }
    }
  }

  .last-games__title {

  }

}
</style>
