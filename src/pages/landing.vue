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
              <img src="@/assets/img/landing-form1.png" class="landing-form__img" alt="" loading="lazy" width="103" height="138">
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
            <button class="btn btn--primary">
              Зарегистрироваться
            </button>
          </div>
        </form>
        <AppStories />
      </div>
      <div class="landing__right">
        <GameCardSmall />
        <GameCardSmallSliced />
        <GameCardSmallSliced />
        <GameCardSmallSliced />
        <GameCardSmallSliced />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.landing {
  #app {
    padding: 0;
  }
}
</style>

<style scoped lang="scss">
main {
  padding: toRem(40) 0;
}

.landing {
  &__container {
    height: calc(100vh - 155px);
    display: flex;
    justify-content: space-between;
  }

  &__left {
    width: toRem(640);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__right {
    width: toRem(400);
    padding: toRem(8);
    border-radius: toRem(8) toRem(8) 0 0;
    background: linear-gradient(180deg, rgba(104, 109, 122, 0.24) 0.01%, rgba(41, 43, 51, 0.60) 100%);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    gap: toRem(8);
  }
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
</style>
