<script setup>

import IconCheck from '@/components/icons/IconCheck.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import AppGuide from '@/components/AppGuide.vue'
import BaseCounter from '@/components/BaseCounter.vue'
import IconBoltFilled from '@/components/icons/IconBoltFilled.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="tariff__list">
        <div class="tariff__item">
          <div class="tariff__title">Бесплатный тариф</div>
          <div class="tariff__info">
            <div class="tariff__info-top">
              <div class="tariff__price">$0</div>
              <div class="tariff__status">
                <IconCheck />
                Активен
              </div>
            </div>
          </div>
          <div class="tariff-features">
            <div class="tariff-features__item">
              Доступ к 100+ матчам в сутки
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Доступ ко всем основным показателям
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Индивидуальные уведомления о матчах
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Доступ к премиум показателям
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Поиск и фильтрация
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Неограниченное количество макросов
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Неограниченное количество целей
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Приоритетная поддержка
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              <div>
                Два параметра работающие через покупку
                <div class="tariff-features__item-info">Доступен если активировано больше 10 дней</div>
              </div>
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Приоритетная поддержка
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Доступ к курсам по анализу игровых матчей
              <IconCheck />
            </div>
          </div>
        </div>
        <div class="tariff__item tariff__item--premium">
          <div class="tariff__discount">Активна до 24 января 2024 года</div>
          <div class="tariff__title">Премиум подписка</div>
          <div class="tariff__info">
            <div class="tariff__info-top">
              <div class="tariff__price">$90</div>
              <BaseCounter />

              <div class="tariff__coins">
                <img src="@/assets/img/bitcoin.png" alt="" class="tariff__coins-item" loading="lazy" width="16" height="16">
                <img src="@/assets/img/usdt.png" alt="" class="tariff__coins-item" loading="lazy" width="16" height="16">
              </div>
              <button class="btn btn--primary btn--small">Купить</button>
            </div>
            <div class="tariff__info-bottom">
              <div class="tariff__add">
                <div>
                  <IconBoltFilled /> 31
                </div>
                <div class="tariff__add-btn">
                  <IconPlus width="16" height="16" />
                </div>
              </div>
              <div class="tariff__notice">Активировать 10 дней</div>
            </div>
          </div>
          <div class="tariff-features">
            <div class="tariff-features__item">
              Доступ к 100+ матчам в сутки
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Доступ ко всем основным показателям
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Индивидуальные уведомления о матчах
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Доступ к премиум показателям
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Поиск и фильтрация
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Неограниченное количество макросов
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Неограниченное количество целей
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Приоритетная поддержка
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              <div>
                Два параметра работающие через покупку
                <div class="tariff-features__item-info">Доступен если активировано больше 10 дней</div>
              </div>
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Приоритетная поддержка
              <IconCheck />
            </div>
            <div class="tariff-features__item">
              Доступ к курсам по анализу игровых матчей
              <IconCheck />
            </div>
          </div>
        </div>
        <div class="tariff__course">
          <AppGuide />
          <div class="course-banner">
            <div class="course-banner__title">Курсы по анализу футбольных матчей</div>
            <button class="btn btn--small course-banner__btn">
              Подробнее
              <IconArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

main {
  padding-top: toRem(40);
}

.course-banner {
  border-radius: toRem(8);
  background: url("@/assets/img/course-banner.jpg") -60.176px -585.702px / 171.351% 601.44% no-repeat, linear-gradient(106deg, rgba(60, 71, 169, 0.80) 22.57%, rgba(57, 172, 165, 0.80) 77.43%);
  background-blend-mode: overlay, normal;
  height: 120px;
  padding: toRem(16);
  position: relative;
  width: 100%;
  margin-top: toRem(32);

  &__title {
    color: #FFF;
    font-size: toRem(16);
    font-weight: 700;
    line-height: 128%; /* 20.48px */
    width: toRem(160);
  }

  &__btn {
    border-radius: toRem(24);
    background: rgba(255, 255, 255, 0.84);
    color: rgba(25, 27, 34, 0.68);
    font-size: toRem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    position: absolute;
    bottom: toRem(16);
    right: toRem(16);
  }
}

.tariff {
  &__add {
    border-radius: toRem(24);
    border: toRem(1) solid rgba(255, 255, 255, 0.12);
    display: flex;
    height: toRem(40);
    padding: toRem(10) toRem(4) toRem(10) toRem(8);
    justify-content: center;
    align-items: center;
    gap: toRem(8);
    color: #FFF;
    font-size: toRem(16);
    font-style: normal;
    font-weight: 800;
    line-height: 128%; /* 20.48px */
  }

  &__add-btn {
    border-radius: toRem(20);
    background: rgba(31, 168, 78, 0.16);
    display: flex;
    width: toRem(32);
    height: toRem(32);
    min-width: toRem(32);
    justify-content: center;
    align-items: center;
    font-size: toRem(24);
    color: #099853;
  }

  &__notice {
    color: #099853;
    text-align: center;
    font-size: toRem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    border-radius: toRem(24);
    background: rgba(31, 168, 78, 0.16);
    height: toRem(40);
    min-width: toRem(40);
    padding: toRem(10) toRem(16);
    justify-content: center;
    align-items: center;
  }
  &__coins {
    display: flex;
    flex-direction: column;
    gap: toRem(4);
    margin-left: auto;
  }
  &__discount {
    color: #E9EAEC;
    text-align: center;
    font-size: toRem(14);
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    position: absolute;
    height: toRem(28);
    display: flex;
    align-items: center;
    justify-content: center;
    top: - toRem(28);
    left: 0;
    width: 100%;
  }
  &__list {
    display: flex;
    gap: toRem(32);
    align-items: flex-start;
    padding: 0 toRem(28);
  }

  &__item {
    max-width: toRem(378);
    padding: toRem(24);
    display: flex;
    flex-direction: column;
    gap: toRem(24);
    border-radius: toRem(8);
    border: toRem(1) solid rgba(31, 168, 78, 0.32);
    background: #24262D;
    position: relative;

    &--premium {
      & > * {
        z-index: 1;
      }

      &:before {
        display: block;
        content: '';
        top: - toRem(28);
        right: 0;
        bottom: 0;
        left: 0;
        padding: toRem(28) toRem(1) toRem(1);
        position: absolute;
        background: linear-gradient(90deg, #2C47F0 23.96%, #FC8641 48.96%, #B93BEB 77.6%);
        -webkit-mask: linear-gradient(to right, #3F45CE, #EF6F38, #7841BD) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        border-radius: toRem(8);
      }
    }
  }

  &__course {
    flex-grow: 1;
  }

  &__title {
    color: #FFF;
    font-size: toRem(24);
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 31.68px */
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: toRem(132);
    gap: toRem(24);

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: toRem(12);
      width: 100%;
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: toRem(12);
      width: 100%;
    }
  }

  &__price {
    color: #E9EAEC;
    font-size: toRem(32);
    font-weight: 900;
    line-height: 132%; /* 42.24px */
    text-transform: uppercase;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: toRem(8);
    color: #099853;
    font-size: toRem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }
}

.tariff-features {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: toRem(56);
    border-top: toRem(1) solid rgba(255, 255, 255, 0.12);
    color: #E9EAEC;
    font-size: toRem(14);
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    padding: toRem(10) 0;

    svg {
      margin: toRem(10) toRem(10) toRem(10) 0;
      flex-shrink: 0;
    }

    &-info {
      border-radius: toRem(4);
      padding: toRem(4);
      background: rgba(31, 168, 78, 0.16);
      color: #099853;
      font-size: toRem(11);
      font-weight: 600;
      line-height: 140%; /* 15.4px */
      margin-top: toRem(8);
      display: inline-block;
    }
  }
}

@media screen and (max-width: $laptop) {
  .tariff {
    &__list {
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
    }

    &__course {
      max-width: toRem(324);
    }

    &__item {
      width: calc((100% - 32px) / 2);
      max-width: 100%;
    }
  }
}

@media screen and (max-width: $laptop) {
  .tariff {
    &__item {
      max-width: toRem(378);
      width: 100%;

      &--premium {
        margin-top: toRem(28);
      }
    }

    &__info {
      min-height: 0;
    }

    &__course {
      max-width: toRem(378);
    }
  }
}
</style>
