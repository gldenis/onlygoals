<script setup>

import IconStar from '@/components/icons/IconStar.vue'
import IconCardLock from '@/components/icons/IconCardLock.vue'

const favorite = ref()

defineProps({
  unavailable: {
    type: Boolean
  },
  chartLight: {
    type: String,
    default: ''
  },
  chartState: {type: String},
})

import { useAuthStore } from '@/stores/auth.js'
import IconGameInfo from '@/components/icons/IconGameInfo.vue'
import IconStarFilled from '@/components/icons/IconStarFilled.vue'
import IconBell from '@/components/icons/IconBell.vue'
import IconShield from '@/components/icons/IconShield.vue'
import IconAtack from '@/components/icons/IconAtack.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import IconLive from '@/components/icons/IconLive.vue'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import IconFire from '@/components/icons/IconFire.vue'
import { ref } from 'vue'

const authStore = useAuthStore()

const isOpenedGameCardNotification = ref(false)
const isOpenedGameCardNotificationDropdown = ref(false)
const toggleGameCardNotification = () => {
  isOpenedGameCardNotification.value = !isOpenedGameCardNotification.value
  isOpenedGameCardNotificationDropdown.value = !!isOpenedGameCardNotification.value
}
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
          <div class="info-score__item info-score__item--large info-score__item--women">3</div>
          :
          <div class="info-score__item info-score__item--large info-score__item--women">2</div>
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
          <div class="game-info__row">
            <div class="game-info__title">Голосование</div>
            <div class="game-card__actions">
              <div class="game-card__action-item game-card__action-item--live">
                <IconLive />
              </div>
              <div class="game-card__action-item" :class="{ 'game-card__action-item--active': isOpenedGameCardNotification }" @click="toggleGameCardNotification">
                <IconBell />
                <div ref="dropdown" class="dropdown__body" :class="{ 'dropdown__body--opened': isOpenedGameCardNotificationDropdown }">
                  <OverlayScrollbarsComponent defer
                                              :options="{
                                    overflow: {
                                      x: 'hidden',
                                    },
                                  }">
                    <div class="dropdown-list">
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                      <div class="dropdown-list__item">
                        <BaseCheckbox label="title" />
                      </div>
                    </div>
                  </OverlayScrollbarsComponent>

                </div>
              </div>
              <div class="game-card__action-item" :class="{ 'game-card__action-item--active': favorite }">
                <IconStar @click="favorite = !favorite"/>
              </div>
            </div>
          </div>
          <div class="correlation">
            <div class="correlation__item">
              35%
            </div>
            <div class="correlation-scale__wrapper">
              <div class="correlation-scale correlation-scale--team-2"></div>
              <div class="correlation-scale"></div>
            </div>
            <div class="correlation__item">
              65%
            </div>
          </div>
        </div>
      </div>
      <div class="game-info game-info--chart">
        <div class="game-info__content game-info__content--fetching">
          <div v-if="chartState === 'loading'" class="game-info__content-loading">
            Обновление данных..
          </div>
          <div class="goal-scale">
            <div class="goal-scale__label" :class="{ 'goal-scale__label--disabled': chartState === 'loading' }">2333</div>
            <div class="goal-scale__value"
                 :class="{
                          'goal-scale__value--disabled': chartState === 'loading',
                          'goal-scale__value--second': chartLight === 'second',
                          'goal-scale__value--thirty': chartLight === 'thirty',
                  }"
            >
              <div class="goal-scale__value-label" :class="{ 'goal-scale__value-label--disabled': chartState === 'loading' }">
                <IconFire />
                <span>43%</span>
              </div>
            </div>
          </div>
          <div class="correlation" :class="{ 'correlation--disabled': chartState === 'loading' }">
            <div class="correlation__item">
              <IconShield />
            </div>
            <div class="correlation-scale__wrapper">
              <div class="correlation-scale correlation-scale--protection"></div>
              <div class="correlation-scale correlation-scale--attack"></div>
            </div>
            <div class="correlation__item">
              <IconAtack />
            </div>
          </div>
        </div>
      </div>
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
