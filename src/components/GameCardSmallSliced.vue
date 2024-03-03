<script setup>

import IconStar from '@/components/icons/IconStar.vue'
</script>

<template>
  <div class="game-card game-card--small">
    <div class="game-card__column game-card__column--wide game-card__main">
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
        <div class="game-meta__current-score info-score info-score--large">
          <div class="info-score__item info-score__item--large">3</div>
          :
          <div class="info-score__item info-score__item--large">2</div>
        </div>
        <div class="game-meta__part game-meta__part--revert">
          <div class="game-meta__logo">
            <img src="@/assets/img/content/manchester.png" alt="">
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
          <div class="game-info__add">+3</div>
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
    </div>
    <div class="game-card__favorite">
      <IconStar />
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

  width: 100%;
}

@media screen and (max-width: $laptop-small) and (min-width: $phablet) {
  .game-card--small {
    grid-template-areas:
        "main add"
  ;
  }

  .game-card__add {
    flex-direction: column;

    .game-info {
      width: 100%;
    }


  }
  .game-meta {
    height: rem(67);
  }
  .game-data {
    height: rem(67);

    .game-info {
      height: 100%;
    }
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
