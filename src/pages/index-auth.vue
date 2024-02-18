<script setup>

import IconCharts from '@/components/icons/hero/IconCharts.vue'
import IconStar from '@/components/icons/IconStar.vue'
import AppStories from '@/components/AppStories.vue'
import IconCardLock from '@/components/icons/IconCardLock.vue'
import PremiumNotification from '@/components/PremiumNotification.vue'
import SupportModal from '@/components/SupportModal.vue'
import GameCard from '@/components/GameCard.vue'
</script>

<template>
  <main>
    <AppStories class="page-auth__stories"/>


    <section class="games">
      <div class="container">
        <GameCard />
      </div>
    </section>
    <div class="container">
      <h2 class="section-title">В ближайшие 2 часа</h2>
    </div>

    <section class="games">
      <div class="container games__container">
        <div class="game-card">
          <div class="game-card__column game-card__column--wide">
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
              <div class="game-meta__current-score current-score">
                <div class="current-score__item">3</div>
                :
                <div class="current-score__item">2</div>
              </div>
              <div class="game-meta__part game-meta__part--revert">
                <div class="game-meta__logo">
                  <img src="@/assets/img/content/real-madrid.png" alt="">
                </div>
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
                  голов:</div>
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
              </div>
            </div>

            <div class="game-chance">
              <div class="game-info game-info--chance">
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
                  <div class="info-score__item">9</div>
                  :
                  <div class="info-score__item">9</div>
                </div>
              </div>
              <div class="game-info game-info--chance">
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
                  <div class="info-score__item">9</div>
                  :
                  <div class="info-score__item">9</div>
                </div>
              </div>
            </div>
          </div>
          <div class="game-card__column">
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

            <div class="game-info">
              <div class="game-info__title">Интенсивность</div>
              <div class="info-score">
                <div class="info-score__item">9</div>
                :
                <div class="info-score__item">9</div>
              </div>
            </div>
            <div class="game-info">
              <div class="game-info__title">Удары в створ ворот</div>
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
          </div>
          <div class="game-card__column game-card__column--charts">
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
        </div>
        <div class="game-card game-card--sliced">
          <div class="game-card__column game-card__column--wide">
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
              <div class="game-meta__current-score current-score">
                <div class="current-score__item">3</div>
                :
                <div class="current-score__item">2</div>
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
                  голов:</div>
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
              </div>
            </div>
          </div>
          <div class="game-card__column">
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
          <div class="game-card__column game-card__column--charts">
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
        </div>
        <div class="game-card game-card--sliced">
          <div class="game-card__column game-card__column--wide">
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
              <div class="game-meta__current-score current-score">
                <div class="current-score__item">3</div>
                :
                <div class="current-score__item">2</div>
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
                  голов:</div>
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
              </div>
            </div>
          </div>
          <div class="game-card__column">
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
          <div class="game-card__column game-card__column--charts">
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
        </div>
        <div class="game-card game-card--sliced">
          <div class="game-card__column game-card__column--wide">
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
              <div class="game-meta__current-score current-score">
                <div class="current-score__item">3</div>
                :
                <div class="current-score__item">2</div>
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
                  голов:</div>
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
              </div>
            </div>
          </div>
          <div class="game-card__column">
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
          <div class="game-card__column game-card__column--charts">
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
        </div>
        <div class="game-card game-card--sliced">
          <div class="game-card__column game-card__column--wide">
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
              <div class="game-meta__current-score current-score">
                <div class="current-score__item">3</div>
                :
                <div class="current-score__item">2</div>
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
                  голов:</div>
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
              </div>
            </div>
          </div>
          <div class="game-card__column">
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
          <div class="game-card__column game-card__column--charts">
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
        </div>
        <div class="game-card game-card--sliced">
          <div class="game-card__column game-card__column--wide">
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
              <div class="game-meta__current-score current-score">
                <div class="current-score__item">3</div>
                :
                <div class="current-score__item">2</div>
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
                  голов:</div>
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
              </div>
            </div>
          </div>
          <div class="game-card__column">
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
          <div class="game-card__column game-card__column--charts">
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
        </div>
        <div class="game-card game-card--sliced">
          <div class="game-card__column game-card__column--wide">
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
              <div class="game-meta__current-score current-score">
                <div class="current-score__item">3</div>
                :
                <div class="current-score__item">2</div>
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
                  голов:</div>
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
              </div>
            </div>
          </div>
          <div class="game-card__column">
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
          <div class="game-card__column game-card__column--charts">
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
        </div>
        <div class="game-card game-card--sliced">
          <div class="game-card__column game-card__column--wide">
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
              <div class="game-meta__current-score current-score">
                <div class="current-score__item">3</div>
                :
                <div class="current-score__item">2</div>
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
                  голов:</div>
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
              </div>
            </div>
          </div>
          <div class="game-card__column">
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
          <div class="game-card__column game-card__column--charts">
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
        </div>
      </div>
    </section>
    <PremiumNotification />
    <SupportModal />
  </main>
</template>

<style lang="scss" scoped>
.page-auth__stories {
  margin-top: 12px;
}

.section-title {
  color: var(--Neutral-1, #E9EAEC);
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 128%;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 20px 0;

  &:before, &:after {
    display: block;
    content: '';
    height: 1px;
    flex-grow: 1;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.32) 50%, transparent 50%, transparent 100%);
    background-size: 4px 1px;
  }
}

.games {
  margin-top: 20px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.game-card--sliced {
  .game-info--chart {
    height: 44px;
    align-items: center;

    .info-score__item {
      height: 17px;
    }
  }
}
</style>
