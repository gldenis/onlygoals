<script setup>

import IconHat from '@/components/icons/hero/IconHat.vue'
import IconCharts from '@/components/icons/hero/IconCharts.vue'
import IconAcces from '@/components/icons/hero/IconAcces.vue'
import AppStories from '@/components/AppStories.vue'
import vueRecaptcha from 'vue3-recaptcha2'
import GameCardSmall from '@/components/GameCardSmall.vue'
import GameCardSmallSliced from '@/components/GameCardSmallSliced.vue'

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
        <RouterLink to="/" class="landing__logo">
          <img src="../assets/img/logo-landing1.png" alt="" loading="lazy" width="199" height="40">
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
      <div class="landing__right">
        <h2 class="last-games__title">Последние игры</h2>
        <div class="games-container">
          <GameCardSmall />
          <AppStories class="stories__right" />
          <GameCardSmallSliced />
          <GameCardSmallSliced />
          <GameCardSmallSliced />
          <GameCardSmallSliced />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.landing {
  overflow-x: hidden;
  width: 100%;
  #app {
    padding: 0;
  }
}
</style>

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
    padding-top: toRem(40);
    padding-bottom: toRem(40);
    min-height: 100vh;
    gap: toRem(32);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__left {
    max-width: toRem(640);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: toRem(65);
    flex-shrink: 1;
  }

  &__logo {
    width: toRem(199);
    height: toRem(40);
    margin-left: - toRem(25);

    img {
      width: 100%;
      height: auto;
    }
  }

  &__right {
    width: toRem(400);

  }
}

.games-container {
  padding: toRem(8);
  border-radius: toRem(8) toRem(8) 0 0;
  background: linear-gradient(180deg, rgba(104, 109, 122, 0.24) 0.01%, rgba(41, 43, 51, 0.60) 100%);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  gap: toRem(8);
  flex-shrink: 0;
}

:deep(.stories .container) {
  padding: 0;
}

.landing-form {
  display: flex;
  flex-direction: column;
  gap: toRem(32);

  &__title {
    color: #EBEBEB;
    font-size: toRem(32);
    font-weight: 800;
    line-height: 132%; /* 42.24px */
  }

  &__pic {
    padding-left: toRem(28);
  }

  &__img {
    width: toRem(103);
    height: toRem(138);
  }

  &__top, &__bottom {
    display: grid;
    grid-template-columns: toRem(208) 1fr;
    gap: 20px;
  }

  &__text {
    color: #57C57C;
    font-size: toRem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    width: max-content;
    margin: auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: toRem(20);
  }
}

@media screen and (max-width: $desktop) {
  .landing {
    &__left {
      max-width: calc(100% - toRem(432));
    }
  }

  .landing-form {
    &__pic {
      padding-left: 0;
    }

    &__top,
    &__bottom {
      grid-template-columns: toRem(120) 1fr;
    }

    &__btn {
      width: max-content;
    }
  }
}

@media screen and (max-width: $laptop-small) {
  .landing {
    &__container {
      flex-direction: column;
    }

    &__left {
      max-width: toRem(420);
    }
  }

  .landing-form__recaptcha {
    transform:scale(0.77);
    transform-origin:0 0;
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
    gap: toRem(20);
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

    &__item--wide {
      display: flex;
      width: calc((100% - toRem(4) ) / 2);

      &:nth-of-type(2) {
        display: flex;
      }
    }
  }

}
</style>
