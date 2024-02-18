<script setup>

import IconCheck from '@/components/icons/IconCheck.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import AppGuide from '@/components/AppGuide.vue'
import BaseCounter from '@/components/BaseCounter.vue'
import IconBoltFilled from '@/components/icons/IconBoltFilled.vue'
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
                <div class="tariff__add-btn">+</div>
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
  padding-top: 40px;
}

.course-banner {
  border-radius: var(--8, 8px);
  background: url("@/assets/img/course-banner.jpg") -60.176px -585.702px / 171.351% 601.44% no-repeat, linear-gradient(106deg, rgba(60, 71, 169, 0.80) 22.57%, rgba(57, 172, 165, 0.80) 77.43%);
  background-blend-mode: overlay, normal;
  height: 120px;
  padding: 16px;
  position: relative;
  width: 100%;
  margin-top: 32px;

  &__title {
    color: #FFF;
    font-size: 16px;
    font-weight: 800;
    line-height: 128%; /* 20.48px */
    width: 160px;
  }

  &__btn {
    border-radius: var(--24, 24px);
    background: var(--neutral-left-84, rgba(255, 255, 255, 0.84));
    color: var(--neutral-right-68, rgba(25, 27, 34, 0.68));
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
}

.tariff {
  &__add {
    border-radius: var(--24, 24px);
    border: 1px solid var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    display: flex;
    height: 40px;
    padding: 10px 4px 10px var(--8, 8px);
    justify-content: center;
    align-items: center;
    gap: var(--8, 8px);
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 128%; /* 20.48px */
  }

  &__add-btn {
    border-radius: var(--20, 20px);
    background: var(--green-other-12, rgba(31, 168, 78, 0.16));
    display: flex;
    width: 32px;
    height: 32px;
    min-width: 32px;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #099853;
  }

  &__notice {
    color: var(--Green-5, #099853);
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    border-radius: var(--24, 24px);
    background: var(--green-other-12, rgba(31, 168, 78, 0.16));
    height: 40px;
    min-width: 40px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
  }
  &__coins {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-left: auto;
  }
  &__discount {
    color: var(--Neutral-1, #E9EAEC);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    position: absolute;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -28px;
    left: 0;
    width: 100%;
  }
  &__list {
    display: flex;
    gap: 32px;
    align-items: flex-start;
  }

  &__item {
    max-width: 378px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 8px;
    border: 1px solid var(--green-other-32, rgba(31, 168, 78, 0.32));
    background: var(--Neutral-8, #24262D);
    position: relative;

    &--premium {
      & > * {
        z-index: 1;
      }

      &:before {
        display: block;
        content: '';
        top: -28px;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 28px 1px 1px;
        position: absolute;
        background: linear-gradient(90deg, #2C47F0 23.96%, #FC8641 48.96%, #B93BEB 77.6%);
        -webkit-mask: linear-gradient(to right, #3F45CE, #EF6F38, #7841BD) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        border-radius: 8px;
      }
    }
  }

  &__course {
    flex-grow: 1;
  }

  &__title {
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 132%; /* 31.68px */
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 132px;
    gap: 24px;

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
    }
  }

  &__price {
    color: var(--Neutral-1, #E9EAEC);
    font-size: 32px;
    font-weight: 900;
    line-height: 132%; /* 42.24px */
    text-transform: uppercase;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--Green-5, #099853);
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }
}

.tariff-features {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--Neutral-1, #E9EAEC);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    padding: 8px 0;

    svg {
      margin: 10px 10px 10px 0;
      flex-shrink: 0;
    }

    &-info {
      border-radius: 4px;
      padding: 4px;
      background: var(--green-other-12, rgba(31, 168, 78, 0.16));
      color: var(--Green-5, #099853);
      font-size: 11px;
      font-weight: 600;
      line-height: 140%; /* 15.4px */
      margin-top: 8px;
      display: inline-block;
    }
  }
}

@media screen and (max-width: $laptop) {
  .tariff {
    &__list {
      flex-wrap: wrap;
      justify-content: center;
    }

    &__course {
      max-width: 324px;
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
      max-width: 378px;
      width: 100%;

      &--premium {
        margin-top: 28px;
      }
    }

    &__info {
      min-height: 0;
    }

    &__course {
      max-width: 378px;
    }
  }
}
</style>
