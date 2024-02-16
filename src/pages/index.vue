<script setup>

import IconCharts from '@/components/icons/hero/IconCharts.vue'
import IconStar from '@/components/icons/IconStar.vue'
import AppStories from '@/components/AppStories.vue'
import IconCardLock from '@/components/icons/IconCardLock.vue'
import PremiumNotification from '@/components/PremiumNotification.vue'
import SupportModal from '@/components/SupportModal.vue'
import IconHat from '@/components/icons/IconHat.vue'
</script>

<template>
  <main>
    <section class="hero">
      <div class="container hero__container">
        <div class="hero__left">
          <h1 class="hero__title">Атомы футбола</h1>
          <p class="hero__slogan">Высокоточные статистические данные, стратегические обзоры
            и моментальные обновления всех футбольных матчей</p>
          <div class="hero__buttons">
            <button class="btn btn--primary">Регистрация</button>
            <button class="btn btn--accent"><IconHat width="20" height="20"/> Институт голов</button>
          </div>
        </div>
        <div class="hero__right hero-tiles">
          <div class="hero-tiles__item hero-tiles__item--wide">
            <div class="hero-tiles__title">Параметров
              анализа</div>
            <div class="hero-tiles__value">100+</div>
          </div>
          <div class="hero-tiles__item">
            <IconCharts />
            <div class="hero-tiles__title">Наглядные графики</div>
          </div>
          <div class="hero-tiles__item">
            <IconCharts />
            <div class="hero-tiles__title">Быстрый
              доступ</div>
          </div>
          <div class="hero-tiles__item hero-tiles__item--wide">
            <div class="hero-tiles__title">Обновление данных каждые</div>
            <div class="hero-tiles__value">10 <span>сек</span></div>
          </div>
          <div class="hero-tiles__item">
            <IconCharts />
            <div class="hero-tiles__title">Обучение по анализу</div>
          </div>
          <div class="hero-tiles__item">
            <IconCharts />
            <div class="hero-tiles__title">О нас за
              60 минут</div>
          </div>
        </div>
      </div>
    </section>
    <section class="games">
      <div class="container">
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
      </div>

    </section>
    <div class="container">
      <h2 class="section-title">В ближайшие 2 часа</h2>
    </div>
    <AppStories />
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
        <div class="game-card game-card--sliced game-card--unavailable">
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

          <div class="unavailable-card">
            <div class="unavailable-card__icon">
              <IconCardLock />
            </div>
            <div class="unavailable-card__content">
              <div class="unavailable-card__title">Функции разблокируются
                после регистрации</div>
              <button class="btn btn--primary unavailable-card__btn">Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>

    </section>
    <PremiumNotification />
    <SupportModal />
  </main>
</template>

<style lang="scss" scoped>
.unavailable-card {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__title {
    color: var(--Neutral-1, #E9EAEC);
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%;
    width: 192px;
  }

  &__btn {
    height: 32px;
    border-radius: var(--20, 20px);
    background: var(--Green-5, #099853);
    color: var(--Neutral-1, #E9EAEC);
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    padding: 7px 12px;
    width: max-content;
  }
}



.games {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
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

.game-chart {
  height: 100%;
  width: 100px;
  display: flex;
  gap: 8px;

  &__item {
    max-width: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__value {
    width: 100%;
    margin-top: auto;
    border-radius: 2px;
    opacity: 0.6;

    &--team-1 {
      background: linear-gradient(180deg, #49C79A 0%, rgba(73, 199, 154, 0.00) 100%);
      height: 20%;
    }

    &--team-2 {
      background: var(--Secondary-Other-D1, linear-gradient(180deg, #654CC8 0%, rgba(101, 76, 200, 0.00) 100%));
      height: 80%;
    }
  }
}

.progress {
  width: 53px;
  height: 4px;
  background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  border-radius: 2px;

  &__value {
    height: 100%;
    border-radius: 2px;

    &--team-1 {
      width: 33%;
      background: #49C79A;
    }

    &--team-2 {
      width: 66%;
      background: #6F63FF;
    }
  }
}

.game-chance {
  display: flex;
  gap: 2px;
}

.game-goals {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &__item {
    max-width: 86px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__team {
    width: 2px;
    height: 16px;

    &--team-1 {
      background: var(--2, #49C79A);
    }

    &--team-2 {
      background: var(--Secondary-5, #6F63FF);
    }

  }

  &__author {
    color: var(--neutral-left-68, rgba(255, 255, 255, 0.68));
    font-size: 12px;
    font-weight: 500;
    line-height: 128%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.game-data {
  display: flex;
  gap: 2px;
}

.game-schema {
  border-radius: 2px;
  background: linear-gradient(249deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.08) 100%);
}

.info-score {
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--neutral-left-68, rgba(255, 255, 255, 0.68));
  font-size: 12px;
  font-weight: 500;
  line-height: 128%;

  &__item {
    padding: 4px;
    height: 24px;
    color: var(--Neutral-1, #E9EAEC);
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%;
    border-radius: 2px;
    border: 1px solid var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.games {
  margin-top: 40px;
}



.current-score {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &__item {
    border-radius: 4px;
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    font-weight: 700;
    font-size: 15px;
    line-height: 128%;
    text-align: center;
    color: var(--gray-1);
    width: 25px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.last-games-status {
  &__list {
    display: flex;
    gap: 6px;
    height: 15px;
    align-items: center;
  }

  &__item {
    width: 4px;
    height: 4px;
    border-radius: 50%;

    &--win {
      background: var(--green-5);;
    }
    &--lose {
      background: var(--cd3d00);
    }
    &--draw{
      background: var(--gray-3);
    }
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
