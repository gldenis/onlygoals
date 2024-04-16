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
</script>

<template>
  <div class="game-card">
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
          <div class="info-score__item info-score__item--large info-score__item--friendly">3</div>
          :
          <div class="info-score__item info-score__item--large info-score__item--friendly">2</div>
        </div>
        <div class="game-meta__part game-meta__part--revert">
          <div class="game-meta__logo">
            <img src="@/assets/img/content/manchester.png" alt="">
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
            <div class="game-info__add">+3</div>
            <div class="info-score__lock">
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

      <div class="game-info">
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
      <div class="game-info">
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
      <div class="game-info">
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
              <div class="game-card__action-item game-card__action-item--active">
                <IconLive />
              </div>
              <div class="game-card__action-item">
                <IconBell />
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
          <div class="game-info__content-loading">
            Обновление данных..
          </div>
          <div class="goal-scale">
            <div class="goal-scale__label goal-scale__label--disabled">2333</div>
            <div class="goal-scale__value goal-scale__value--disabled">
              <div class="goal-scale__value-label goal-scale__value-label--disabled">
                <IconFire />
                <span>43%</span>
              </div>
            </div>
          </div>
          <div class="correlation correlation--disabled">
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
