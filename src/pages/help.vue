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
    font-size: 24px;
    font-weight: 800;
    line-height: 132%; /* 31.68px */
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 20px;
  }

  &__link {
    border-radius: var(--24, 24px);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    min-width: 40px;
    padding: 10px 16px;
    color: var(--Neutral-1, #FFF);
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

}

main {
  padding-top: 40px;
}

.help-item {
  padding: 20px;
  border-radius: 8px;
  background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__trigger {
    border-radius: var(--24, 24px);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: var(--Neutral-1, #E9EAEC);
    font-size: 24px;
    font-weight: 800;
    line-height: 132%; /* 31.68px */
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--Neutral-1, #E9EAEC);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%; /* 24px */

    img {
      border-radius: var(--8, 8px);
      opacity: 0.9;
      width: 100%;
      height: auto;
    }
  }
}

.help-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
}

.help__wrapper {
  display: flex;
  margin-top: 40px;
  gap: 40px;
  align-items: flex-start;
}

.help-nav {
  border-radius: var(--8, 8px);
  border: 1px solid var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  background: var(--neutral-right-32, rgba(25, 27, 34, 0.32));
  width: 292px;
  flex-shrink: 0;
  position: sticky;
  top: 112px;

  &__item {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    border-left: 2px solid transparent;
    margin-left: -1px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 16px;
    font-weight: 500;
    line-height: 128%; /* 20.48px */
    cursor: pointer;

    svg {
      //fill-opacity: 0.68;
    }

    &--current {
      border-left: 2px solid var(--neutral-left-84, rgba(255, 255, 255, 0.84));
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
