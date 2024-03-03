<script setup>

import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="page-head">
        <h1 class="title page-head__title">Помощь</h1>
        <div class="page-head__separator"></div>
        <div class="btn btn--small">
          Overgoals поддержка
        </div>
      </div>
      <div class="help__wrapper">
        <div class="help-nav">
          <div class="help-nav__item">
            Регистрация
            <IconArrowRight />
          </div>
          <div class="help-nav__item help-nav__item--current">
            Возможности
            <IconArrowRight />
          </div>
          <div class="help-nav__item">
            Анализ игр 1
            <IconArrowRight />
          </div>
          <div class="help-nav__item">
            Анализ игр 2
            <IconArrowRight />
          </div>
          <div class="help-nav__item">
            Показатели
            <IconArrowRight />
          </div>
          <div class="help-nav__item">
            Уведомления
            <IconArrowRight />
          </div>
        </div>
        <div class="help-content">
          <div class="help-item">
            <div class="help-item__head">
              <div class="help-item__title">Заголовок статьи</div>
              <button class="btn btn--small help-item__trigger">
                Подробнее
                <IconArrowDown />
              </button>
            </div>
            <div class="help-item__content">
              <p>Футбол – это не просто спорт, это настоящая эмоциональная симфония, в которой каждая нота наполнена страстью и соперничеством. Когда игроки выходят на поле, они несут с собой не только навыки и стратегии, но и частичку своего сердца. Зеленое поле превращается в арену сражения, где каждый удар по мячу – это возможность создать нечто великолепное. Взгляды болельщиков, напряженные моменты и волнующие голы создают неповторимую атмосферу, в которой время замирает, а сердце бьется в унисон с каждым происходящим на поле событием.</p>
              <img src="@/assets/img/help-item.png" alt="" loading="lazy" width="828" height="460">
              <p>На газоне, пропитанном запахом свежей травы, разыгрывается настоящая драма. Мяч летит от ноги к ноге, словно путешественник, оставляющий свой след на карте борьбы и страсти. Взгляды игроков – это яркие молнии на темном небе соревновательности. В каждом движении таится искусство, словно художественная картина, созданная кистью мастера.</p>

              <div class="help-recommended">
                <div class="help-recommended__title">Рекомендуем к чтению</div>
                <div class="help-recommended__list">
                  <a v-for="link of 5" href="#" class="help-recommended__link">Ссылка {{ link }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding-top: rem(40);
}
</style>
