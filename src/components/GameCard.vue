<script setup>

import IconBallEvent from '@/components/icons/IconBallEvent.vue'
import IconChartRise from '@/components/icons/IconChartRise.vue'
import IconGameInfo from '@/components/icons/IconGameInfo.vue'
import IconLock from '@/components/icons/IconLock.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import IconStarFilled from '@/components/icons/IconStarFilled.vue'
import AverageLiga from '@/components/AverageLiga.vue'
import LastGameTooltip from '@/components/LastGameTooltip.vue'
import InfoValue from '@/components/InfoValue.vue'
import IconLive from '@/components/icons/IconLive.vue'
import IconBell from '@/components/icons/IconBell.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconShield from '@/components/icons/IconShield.vue'
import IconAtack from '@/components/icons/IconAtack.vue'
import IconFire from '@/components/icons/IconFire.vue'
import { ref } from 'vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import { onClickOutside } from '@vueuse/core'
import GameTimeline from '@/components/GameTimeline.vue'
import IconBolt from '@/components/icons/IconBolt.vue'

const isOpenedGameCardNotification = ref(false)
const isOpenedGameCardNotificationDropdown = ref(false)
const toggleGameCardNotification = () => {
  isOpenedGameCardNotification.value = !isOpenedGameCardNotification.value
  isOpenedGameCardNotificationDropdown.value = !!isOpenedGameCardNotification.value
}
const dropdown = ref()
onClickOutside(dropdown, () => isOpenedGameCardNotificationDropdown.value = false)

const props = defineProps({
  type: {
    type: String
  },
  kind: {
    type: Number,
    default: 1
  },
  chartState: {type: String},
  chartLight: {
    type: String,
    default: ''
  },
  schemaBoolean: {
    type: Boolean,
    default: true
  }
})

const favorite = ref()
</script>

<template>
  <div class="game-card">
    <div class="game-card__column game-card__column--wide game-card__main">
      <GameTimeline />
      <div class="game-meta">
        <div class="game-meta__part">
          <div class="game-meta__logo">
            <img src="@/assets/img/content/real-madrid.png" alt="" height="28" width="28">
          </div>
          <div class="game-meta__inner">
            <div class="game-meta__name">Real Madrid</div>
            <div class="game-meta__last-games-status last-games-status__list">
              <div class="last-games-status__item last-games-status__item--lose">
                <LastGameTooltip />
              </div>
              <div class="last-games-status__item last-games-status__item--win">
                <LastGameTooltip />
              </div>
              <div class="last-games-status__item last-games-status__item--draw">
                <LastGameTooltip />
              </div>
              <div class="last-games-status__item last-games-status__item--win">
                <LastGameTooltip />
              </div>
              <div class="last-games-status__item last-games-status__item--win">
                <LastGameTooltip />
              </div>
            </div>
          </div>
          <div class="team-rate team-rate--top">
            2
          </div>
        </div>
        <div class="game-meta__current-score info-score info-score--large">
          <div class="info-score__item info-score__item--large" :class="[ type ? 'info-score__item--' + type : '']">3</div>
          :
          <div class="info-score__item info-score__item--large" :class="[ type ? 'info-score__item--' + type : '']">2</div>
        </div>
        <div class="game-meta__part game-meta__part--revert">
          <div class="game-meta__logo">
            <img src="@/assets/img/content/manchester.png" alt="" height="28" width="28">
          </div>
          <div class="game-meta__inner">
            <div class="game-meta__name">Manchester United</div>
            <div class="game-meta__last-games-status last-games-status__list">
              <div class="last-games-status__item last-games-status__item--lose">
                <LastGameTooltip />
              </div>
              <div class="last-games-status__item last-games-status__item--win">
                <LastGameTooltip />
              </div>
              <div class="last-games-status__item last-games-status__item--draw">
                <LastGameTooltip />
              </div>
              <div class="last-games-status__item last-games-status__item--win">
                <LastGameTooltip />
              </div>
              <div class="last-games-status__item last-games-status__item--win">
                <LastGameTooltip />
              </div>
            </div>
          </div>
          <div class="team-rate team-rate--middle">
            4
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
            <div class="info-score__item">
              4
              <div class="info-score__lock">
                <IconLock />
              </div>
            </div>
          </div>
        </div>
        <div class="game-info game-info--schema">
          <div class="game-info__title">Схема</div>
          <div class="game-info--schema__wrapper">
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
            <div class="game-info__add" :class="schemaBoolean ? '' : 'game-info__add--negative'">-3</div>
<!--            v-if only for demonstration -->
            <div v-if="schemaBoolean" class="info-score__lock">
              <IconLock />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="game-chance game-card__chance">
      <div class="game-info game-info--chance">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Шанс на гол</div>
        <div class="game-info__chance">
          <div class="progress">
            <div class="progress__value progress__value--team-1"></div>
          </div>
          <div class="progress">
            <div class="progress__value progress__value--team-2"></div>
          </div>
        </div>
        <div class="info-score">
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
          :
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
        </div>
      </div>
      <div class="game-info game-info--chance">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Ш. Промах</div>
        <div class="game-info__chance">
          <div class="progress">
            <div class="progress__value progress__value--team-1"></div>
          </div>
          <div class="progress">
            <div class="progress__value progress__value--team-2"></div>
          </div>
        </div>
        <div class="info-score">
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
          :
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
        </div>
      </div>
    </div>
    <div class="game-card__column game-card__add">
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Прессинг</div>
        <div class="info-score">
          <InfoValue value="9" locked>
            <div class="average-liga-lock">
              <IconLock />
              <div class="average-liga-lock__content">
                <div class="average-liga-lock__text">Средний показатель</div>
                <div class="average-liga-lock__btn">Подробнее</div>
              </div>
            </div>
          </InfoValue>
          :
          <InfoValue value="9" locked>
            <div class="average-liga-lock">
              <IconLock />
              <div class="average-liga-lock__content">
                <div class="average-liga-lock__text">Средний показатель</div>
                <div class="average-liga-lock__btn">Подробнее</div>
              </div>
            </div>
          </InfoValue>
        </div>
      </div>
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Забивных матчей</div>
        <div class="info-score">
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
          :
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
        </div>
      </div>
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Кол-во матчей в месяц</div>
        <div class="info-score">
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
          :
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
        </div>
      </div>

        <div class="game-info" :class="{ 'game-info--hidden':  props.kind !== 1  }">
          <IconGameInfo class="game-info__icon" />
          <div class="game-info__title">Забив после 80/90 мин</div>
          <div class="info-score">
            <InfoValue value="9">
              <AverageLiga />
            </InfoValue>
            :
            <InfoValue value="9">
              <AverageLiga />
            </InfoValue>
          </div>
        </div>
        <div class="game-info" :class="{ 'game-info--hidden':  props.kind !== 1  }">
          <IconGameInfo class="game-info__icon" />
          <div class="game-info__title">Шанс контратаки</div>
          <div class="info-score">
            <div class="info-score__item">
              9
              <AverageLiga />
            </div>
            :
            <div class="info-score__item">
              9
              <AverageLiga />
            </div>
          </div>
        </div>
        <div class="game-info" :class="{ 'game-info--hidden':  props.kind !== 1  }">
          <IconGameInfo class="game-info__icon" />
          <div class="game-info__title">Характер</div>
          <div class="info-score">
            <InfoValue value="9">
              <AverageLiga />
            </InfoValue>
            :
            <InfoValue value="9">
              <AverageLiga />
            </InfoValue>
          </div>
        </div>

      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Интенсивность</div>
        <div class="info-score">
          <InfoValue value="0">
            <AverageLiga />
          </InfoValue>
          :
          <InfoValue value="0">
            <AverageLiga />
          </InfoValue>
        </div>
      </div>
      <div class="game-info">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Удары в створ ворот</div>
        <div class="info-score">
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
          :
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
        </div>
      </div>
      <div class="game-info game-info--locked">
        <IconGameInfo class="game-info__icon" />
        <div class="game-info__title">Кол-во матчей в месяц</div>
        <div class="info-score">
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
          :
          <InfoValue value="9">
            <AverageLiga />
          </InfoValue>
        </div>

        <div class="game-info__lock">
          <IconLock />
          <span>Вне игры</span>
          <IconInfo class="game-info__lock-btn" />
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
  </div>
</template>

<style scoped lang="scss">

</style>
