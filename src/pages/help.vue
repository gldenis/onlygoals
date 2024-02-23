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
.help-recommended {
  &__title {
    color: var(--White, #FFF);
    font-size: toRem(24);
    font-weight: 800;
    line-height: 132%; /* 31.68px */
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: toRem(12);
    margin-top: toRem(20);
  }

  &__link {
    border-radius: toRem(24);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    min-width: toRem(40);
    padding: toRem(10) toRem(16);
    color: var(--Neutral-1, #FFF);
    text-align: center;
    font-size: toRem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

}

main {
  padding-top: toRem(40);
}

.help-item {
  padding: toRem(20);
  border-radius: toRem(8);
  background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  box-shadow: - toRem(20) toRem(20) toRem(60) - toRem(16) rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  gap: toRem(20);

  &__trigger {
    border-radius: toRem(24);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: var(--Neutral-1, #E9EAEC);
    font-size: toRem(24);
    font-weight: 800;
    line-height: 132%; /* 31.68px */
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: toRem(20);
    color: var(--Neutral-1, #E9EAEC);
    font-size: toRem(16);
    font-weight: 500;
    line-height: 150%; /* 24px */

    img {
      border-radius: toRem(8);
      opacity: 0.9;
      width: 100%;
      height: auto;
    }
  }
}

.help-content {
  display: flex;
  flex-direction: column;
  gap: toRem(8);
  flex-grow: 1;
}

.help__wrapper {
  display: flex;
  margin-top: toRem(40);
  gap: toRem(40);
  align-items: flex-start;
}

.help-nav {
  border-radius: toRem(8);
  border: toRem(1) solid var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  background: var(--neutral-right-32, rgba(25, 27, 34, 0.32));
  width: toRem(292);
  flex-shrink: 0;
  position: sticky;
  top: toRem(112);

  &__item {
    padding: toRem(16);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: toRem(1) solid rgba(255, 255, 255, 0.12);
    border-left: toRem(2) solid transparent;
    margin-left: - toRem(1);
    color: rgba(255, 255, 255, 0.68);
    font-size: toRem(16);
    font-weight: 500;
    line-height: 128%; /* 20.48px */
    cursor: pointer;

    svg {
      //fill-opacity: 0.68;
    }

    &--current {
      border-left: toRem(2) solid var(--neutral-left-84, rgba(255, 255, 255, 0.84));
      color: var(--Neutral-1, #E9EAEC);
    }
  }
}

@media screen and (max-width: $laptop){
  .help-nav {
    display: none;
  }
}
</style>
