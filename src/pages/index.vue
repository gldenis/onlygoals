<script setup>

import IconCharts from '@/components/icons/hero/IconCharts.vue'
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
            <button class="btn btn--accent">Институт голов</button>
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


        </div>
      </div>

    </section>
  </main>
</template>

<style lang="scss" scoped>
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

.game-info {
  height: 44px;
  border-radius: 2px;
  background: linear-gradient(249deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.08) 100%);
  padding: 0px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: calc((100% - 4px) / 3);

  &__content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &--chance {
    width: calc((100% - 2px) / 2);
  }

  &--goals {
    width: calc((100% - 2px) - 33%);
  }

  &--schema {
    width: calc((100% - 2px) - 66%);
  }

  &__chance {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &--chart {
    width: 100%;
    padding: 8px 8px 0px 8px;
    height: 67px;
    display: flex;
    align-items: flex-start;
  }

  &__title {
    overflow: hidden;
    color: var(--neutral-left-68, rgba(255, 255, 255, 0.68));
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: 500;
    line-height: 128%;
  }
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

.game-timeline {
  display: flex;
  gap: 2px;

  &__item {
    height: 4px;
    border-radius: 2px;
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    width: calc((100% - 2px) / 2);
    position: relative;
    display: flex;
    align-items: center;
    transition: .2s;
  }

  &__value {
    height: 100%;

    &--current {
      opacity: 0.4;
      background: var(--Neutral-Left-R1, linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%));
    }
  }

  &__current-time {
    position: absolute;
    height: 6px;
    width: 2px;
    background: var(--Neutral-1, #E9EAEC);
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  &__goal {
    position: absolute;
    width: 6px;
    height: 6px;
    transition: .3s;

    &--team-1 {
      background: var(--2, #49C79A);
    }

    &--team-2 {
      background: var(--Secondary-5, #6F63FF);
    }
  }

  &:hover {
    .game-timeline__value {
      opacity: 1;
      background: var(--neutral-left-84, rgba(255, 255, 255, 0.84));
    }
    .game-timeline__goal {
      width: 12px;
      height: 12px;
      transform: rotate(-135deg);
      border-radius: 2px;
      border: 1px solid var(--Neutral-1, #E9EAEC);
    }
  }
}

.games {
  margin-top: 40px;
}

.game-card {
  border-radius: 4px;
  background: var(--neutral-right-84, rgba(25, 27, 34, 0.84));
  backdrop-filter: blur(4px);
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2px;

  &__column {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    width: 594px;

    &--wide {
      flex-direction: column;
      width: 400px;
    }

    &--charts {
      width: 166px;
    }
  }
}

.game-meta {
  border-radius: 2px;
  padding: 0 4px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background: linear-gradient(249deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.08) 100%);

  &__part {
    display: flex;
    width: 157px;
    gap: 8px;
    align-items: center;

    &--revert {
      flex-direction: row-reverse;

      .last-games-status__list {
        justify-content: flex-end;
      }
    }
  }

  &__name {
    overflow: hidden;
    color: var(--Neutral-1, #E9EAEC);
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%;
  }
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

.hero-tiles {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 416px;

  &__item {
    border-radius: 8px;
    padding: 16px 8px;
    width: 100px;
    height: 100px;
    backdrop-filter: blur(8px);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.16) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &--wide {
      width: 200px;
      flex-direction: row;
    }
  }

  &__icon {

  }

  &__title {
    font-weight: 700;
    font-size: 13px;
    line-height: 132%;
    text-align: center;
    color: var(--neutral-1);
  }

  &__value {
    font-weight: 900;
    font-size: 32px;
    line-height: 132%;
    text-transform: uppercase;
    text-align: right;
    color: var(--neutral-1);
    white-space: nowrap;

    span {
      font-weight: 800;
      font-size: 16px;
      line-height: 128%;
    }
  }
}

</style>
