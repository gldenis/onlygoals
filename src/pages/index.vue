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
            </div>
          </div>

        </div>
      </div>

    </section>
  </main>
</template>

<style lang="scss" scoped>
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

  &__column {
    display: flex;
    flex-direction: column;
    gap: 2px;

    &--wide {
      width: 400px;
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

.game-card {

}
</style>
