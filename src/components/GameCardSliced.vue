<script setup>

import IconStar from '@/components/icons/IconStar.vue'
import IconCardLock from '@/components/icons/IconCardLock.vue'

defineProps({
  unavailable: {
    type: Boolean
  }
})

import { useAuthStore } from '@/stores/auth.js'
import IconGameInfo from '@/components/icons/IconGameInfo.vue'

const authStore = useAuthStore()
</script>

<template>
  <div class="game-card game-card--sliced" :class="[unavailable ? 'game-card--unavailable' : '']">
    <div class="game-card__column game-card__main game-card__column--wide">
      <div class="game-timeline">
        <div class="game-timeline__item">
          <div class="game-timeline__value" style="width: 100%;"></div>
          <div class="game-timeline__goal game-timeline__goal--team-1" style="left: 10%;"></div>
          <div class="game-timeline__goal game-timeline__goal--team-2" style="left: 30%;"></div>
          <div class="game-timeline__goal game-timeline__goal--team-1" style="left: 50%;"></div>
        </div>
        <div class="game-timeline__item">
          <div class="game-timeline__value game-timeline__value--current" style="width: 50%;"></div>
          <div class="game-timeline__current-time"></div>
        </div>
      </div>
      <div class="game-meta">
        <div class="game-meta__part">
          <div class="game-meta__logo">
            <img src="@/assets/img/content/real-madrid.png" alt="">
          </div>
          <div class="game-meta__inner">
            <div class="game-meta__name">Real Madrid</div>
            <div class="game-meta__last-games-status last-games-status__list">
              <div class="last-games-status__item last-games-status__item--lose"></div>
              <div class="last-games-status__item last-games-status__item--win"></div>
              <div class="last-games-status__item last-games-status__item--draw"></div>
              <div class="last-games-status__item last-games-status__item--win"></div>
              <div class="last-games-status__item last-games-status__item--win"></div>
            </div>
          </div>
        </div>
        <div class="info-score info-score--large">
          <div class="info-score__item info-score__item--large">3</div>
          :
          <div class="info-score__item info-score__item--large">2</div>
        </div>
        <div class="game-meta__part game-meta__part--revert">

          <div class="game-meta__inner">
            <div class="game-meta__name">Manchester United</div>
            <div class="game-meta__last-games-status last-games-status__list">
              <div class="last-games-status__item last-games-status__item--lose"></div>
              <div class="last-games-status__item last-games-status__item--win"></div>
              <div class="last-games-status__item last-games-status__item--draw"></div>
              <div class="last-games-status__item last-games-status__item--win"></div>
              <div class="last-games-status__item last-games-status__item--win"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="game-data">
        <div class="game-info game-info--goals">
          <div class="info-score">
            <div class="info-score__item">9</div>
            :
            <div class="info-score__item">9</div>
          </div>

          <div class="game-info__title">Авторы
            голов:
          </div>
          <div class="game-goals">
            <div class="game-goals__item">
              <div class="game-goals__team game-goals__team--team-1"></div>
              <div class="game-goals__author">Jude Bellingham</div>
            </div>
            <div class="game-goals__item">
              <div class="game-goals__team game-goals__team--team-2"></div>
              <div class="game-goals__author">Radek Vitek</div>
            </div>
          </div>
          <div class="info-score">
            <div class="info-score__item">F</div>
            :
            <div class="info-score__item">4</div>
          </div>
        </div>
        <div class="game-info game-info--schema">
          <div class="game-info__title">Схема</div>
          <div class="game-goals">
            <div class="game-goals__item">
              <div class="game-goals__team game-goals__team--team-1"></div>
              <div class="game-goals__author">9-9-9-9</div>
            </div>
            <div class="game-goals__item">
              <div class="game-goals__team game-goals__team--team-2"></div>
              <div class="game-goals__author">9-9-9-9</div>
            </div>
          </div>
          <div class="game-info__add">+3</div>
        </div>
      </div>
    </div>
    <div class="game-card__column game-card__add">
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Прессинг</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Забивных матчей</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Кол-во матчей в месяц</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>

      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Забив после 80/90 мин</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Шанс контратаки</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Характер</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
    </div>
    <div class="game-card__column game-card__charts game-card__column--charts">
      <div class="game-info game-info--chart">
        <div class="game-info__content">
          <div class="game-info__title">Голосование</div>
          <div class="info-score">
            <div class="info-score__item">35%</div>
            :
            <div class="info-score__item">35%</div>
          </div>
        </div>
        <div class="game-chart">
          <div class="game-chart__item">
            <div class="game-chart__value game-chart__value--team-1"></div>
          </div>
          <div class="game-chart__item">
            <div class="game-chart__value game-chart__value--team-2"></div>
          </div>
        </div>
      </div>
      <div class="game-info game-info--chart">
        <div class="game-info__content">
          <div class="game-info__title">Голосование</div>
          <div class="info-score">
            <div class="info-score__item">35%</div>
            :
            <div class="info-score__item">35%</div>
          </div>
        </div>
        <div class="game-info__chart">

        </div>
      </div>
    </div>
    <div class="game-card__favorite">
      <IconStar />
    </div>

    <div v-if="unavailable" class="unavailable-card">
      <div class="unavailable-card__icon">
        <IconCardLock />
      </div>
      <div class="unavailable-card__content">
        <div class="unavailable-card__title">Функции разблокируются
          после регистрации
        </div>
        <button class="btn btn--primary unavailable-card__btn" @click="authStore.registrationFormIsOpened = true">
          Зарегистрироваться
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
