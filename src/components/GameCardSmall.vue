<script setup>

import IconStar from '@/components/icons/IconStar.vue'
import IconShield from '@/components/icons/IconShield.vue'
import IconFire from '@/components/icons/IconFire.vue'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import IconLive from '@/components/icons/IconLive.vue'
import IconAtack from '@/components/icons/IconAtack.vue'
import IconBell from '@/components/icons/IconBell.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import IconBallEvent from '@/components/icons/IconBallEvent.vue'
import IconLock from '@/components/icons/IconLock.vue'
import LastGameTooltip from '@/components/LastGameTooltip.vue'
</script>

<template>
  <div class="game-card game-card--small">
    <div class="game-card__column game-card__column--wide game-card__main">
      <div class="game-timeline">
        <div class="game-timeline__item">
          <div class="game-timeline__value" style="width: 100%;"></div>
          <div class="game-timeline__goal game-timeline__goal--team-1" style="left: 10%;">
            <div class="game-timeline-event">
              <div class="game-timeline-event__icon game-timeline-event__icon--team-1">
                <IconBallEvent />
              </div>
              <div class="game-timeline-event__time">13:26</div>
              <div class="game-timeline-event__author">
                <img src="../assets/img/event1.png"
                     class="game-timeline-event__author-pic"
                     alt=""
                     loading="lazy"
                     width="16"
                     height="16">
                <div class="game-timeline-event__author-name">Jude Bellingham</div>
              </div>
            </div>
          </div>
          <div class="game-timeline__goal game-timeline__goal--team-2" style="left: 30%;">
            <div class="game-timeline-event">
              <div class="game-timeline-event__icon game-timeline-event__icon--team-2">
                <IconBallEvent />
              </div>
              <div class="game-timeline-event__time">13:26</div>
              <div class="game-timeline-event__author">
                <img src="../assets/img/event1.png"
                     class="game-timeline-event__author-pic"
                     alt=""
                     loading="lazy"
                     width="16"
                     height="16">
                <div class="game-timeline-event__author-name">Jude Bellingham</div>
              </div>
            </div>
          </div>
          <div class="game-timeline__goal game-timeline__goal--team-1" style="left: 50%;">
            <div class="game-timeline-event">
              <div class="game-timeline-event__icon game-timeline-event__icon--team-1">
                <IconBallEvent />
              </div>
              <div class="game-timeline-event__time">13:26</div>
              <div class="game-timeline-event__author">
                <img src="../assets/img/event1.png"
                     class="game-timeline-event__author-pic"
                     alt=""
                     loading="lazy"
                     width="16"
                     height="16">
                <div class="game-timeline-event__author-name">Jude Bellingham</div>
              </div>
            </div>
          </div>
        </div>
        <div class="game-timeline__item">
          <div class="game-timeline__fall game-timeline__fall--team-2" style="left: 10%;">
            <div class="game-timeline-event">
              <div class="game-timeline-event__icon game-timeline-event__icon--team-2">
                <IconBallEvent />
              </div>
              <div class="game-timeline-event__time">13:26</div>
              <div class="game-timeline-event__author">
                <img src="../assets/img/event1.png"
                     class="game-timeline-event__author-pic"
                     alt=""
                     loading="lazy"
                     width="16"
                     height="16">
                <div class="game-timeline-event__author-name">Jude Bellingham</div>
              </div>
            </div>
          </div>
          <div class="game-timeline__fall game-timeline__fall--team-1" style="left: 30%;">
            <div class="game-timeline-event">
              <div class="game-timeline-event__icon game-timeline-event__icon--team-2">
                <IconBallEvent />
              </div>
              <div class="game-timeline-event__time">13:26</div>
              <div class="game-timeline-event__author">
                <img src="../assets/img/event1.png"
                     class="game-timeline-event__author-pic"
                     alt=""
                     loading="lazy"
                     width="16"
                     height="16">
                <div class="game-timeline-event__author-name">Jude Bellingham</div>
              </div>
            </div>
          </div>
          <div class="game-timeline__value game-timeline__value--current" style="width: 50%;"></div>
          <div class="game-timeline__current-time"></div>
        </div>
        <div class="game-timeline__game-time">99:99</div>
      </div>
      <div class="game-meta">
        <div class="game-meta__part">
          <div class="game-meta__logo">
            <img src="@/assets/img/content/real-madrid.png" alt="">
          </div>
          <div class="game-meta__inner">
            <div class="game-meta__name">Real Madrid</div>
            <div class="game-meta__last-games-status last-games-status__list">
              <div class="last-games-status__item last-games-status__item--lose">
              </div>
              <div class="last-games-status__item last-games-status__item--win">
              </div>
              <div class="last-games-status__item last-games-status__item--draw">
              </div>
              <div class="last-games-status__item last-games-status__item--win">
              </div>
              <div class="last-games-status__item last-games-status__item--win">
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
            <img src="@/assets/img/content/manchester.png" alt="">
          </div>
          <div class="game-meta__inner">
            <div class="game-meta__name">Manchester United</div>
            <div class="game-meta__last-games-status last-games-status__list">
              <div class="last-games-status__item last-games-status__item--lose">
              </div>
              <div class="last-games-status__item last-games-status__item--win">
              </div>
              <div class="last-games-status__item last-games-status__item--draw">
              </div>
              <div class="last-games-status__item last-games-status__item--win">
              </div>
              <div class="last-games-status__item last-games-status__item--win">
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
            <div class="game-info__add">+3</div>
            <div class="info-score__lock">
              <IconLock />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="game-card__column game-card__add">
      <div class="game-info">
        <div class="game-info__title">Прессинг</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
      <div class="game-info">
        <div class="game-info__title">Забивных матчей</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
      <div class="game-info">
        <div class="game-info__title">Кол-во матчей в месяц</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>

      <div class="game-info">
        <div class="game-info__title">Забив после 80/90 мин</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
      <div class="game-info">
        <div class="game-info__title">Шанс контратаки</div>
        <div class="info-score">
          <div class="info-score__item">9</div>
          :
          <div class="info-score__item">9</div>
        </div>
      </div>
      <div class="game-info">
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
              <div class="game-card__action-item">
                <IconStar />
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
.game-card--small {
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
        "main "
        "add"
        "charts"
;



}

.game-info--chart {

  width: calc((100% - rem(4)) / 2);
}

.game-card__charts {
  flex-direction: row;
}

@media screen and (max-width: $laptop-small) {
  .game-card--small {
    grid-template-areas:
        "main charts"
        "add charts"
  ;
  }

  .game-card__charts {
    flex-direction: column;
    height: 100%;
  }

  .game-info--chart {
    width: 100%;
    height: rem(92);
  }
}


@media screen and (max-width: $phablet) {
  .game-card--small {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "main "
      "chance"
      "add"
      "charts";
  }

  .game-card__charts {
    flex-direction: row;
    height: 100%;
  }

  .game-info--chart {
    width: calc((100% - rem(2)) / 2);
    height: rem(67);
  }
}


</style>
