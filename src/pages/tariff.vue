<script setup>

import IconCheck from '@/components/icons/IconCheck.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import AppGuide from '@/components/AppGuide.vue'
import BaseCounter from '@/components/BaseCounter.vue'
import IconBoltFilled from '@/components/icons/IconBoltFilled.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import ReferralBanner from '@/components/ReferralBanner.vue'
import { useModalStore } from '@/stores/modal.js'

const modalStore = useModalStore()
</script>

<template>
  <main>
    <div class="container">
      <div class="tariff__list">
        <div class="tariff__item tariff__item--base">
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
              <button class="btn btn--primary btn--small" @click="modalStore.paymentModalIsOpened = true">Купить</button>
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
    <ReferralBanner class="referral-banner--fixed-bottom" />
  </main>
</template>

<style scoped lang="scss">
main {
  padding-top: rem(40);
}
</style>
