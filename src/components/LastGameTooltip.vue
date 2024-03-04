<script setup>

</script>

<template>
  <div class="last-game-tooltip">
    <div class="last-game-tooltip__top">
      <div class="last-game-tooltip__date">
        02/12/2023
      </div>
      <div class="info-score">
        <div class="info-score__item">
          9
        </div>
        :
        <div class="info-score__item">
          9
        </div>
      </div>
    </div>
    <div class="last-game-tooltip__bottom">
      <img src="@/assets/img/content/manchester.png"
           alt=""
           class="last-game-tooltip__logo"
           loading="lazy"
           width="28"
           height="28">
      <div class="last-game-tooltip__opponent">
        <div class="last-game-tooltip__opponent-label">Соперник</div>
        <div class="last-game-tooltip__opponent-name">West Ham United</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.last-game-tooltip {
  display: none;
  border-radius: rem(8);
  border: rem(1) solid rgba(255, 255, 255, 0.32);
  background: rgba(77, 80, 87, 0.32);
  box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
  flex-direction: column;
  gap: rem(4);
  padding: rem(8);
  position: absolute;
  bottom: calc(100% + rem(8));
  left: 50%;
  transform: translateX(-50%);

  & > * {
    z-index: 2;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: rem(8);
    z-index: 1;
    backdrop-filter: blur(20px);
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(8);
  }

  &__date {
    color: rgba(255, 255, 255, 0.68);
    font-size: rem(12);
    font-weight: 500;
    line-height: 128%; /* 15.36px */
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(8);
  }

  &__logo {
    width: rem(28);
    height: rem(28);
    object-fit: contain;
  }

  &__opponent {
    display: flex;
    flex-direction: column;
    gap: rem(2);
  }

  &__opponent-label {
    color: rgba(255, 255, 255, 0.68);
    font-size: rem(12);
    font-weight: 500;
    line-height: 128%; /* 15.36px */
  }

  &__opponent-name {
    color: #E9EAEC;
    font-size: rem(12);
    font-weight: 800;
    line-height: 128%; /* 15.36px */
    white-space: nowrap;
  }
}

@media screen and (max-width: $phablet){
  .last-game-tooltip {

    &__inner {
    display: none;
    }
  }

  .last-games-status__item--hovered {
    .last-game-tooltip {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(22, 29, 36, 0.8);
      backdrop-filter: blur(4px);
      z-index: 5;

      &__inner {
        position: relative;
        left: auto;
        right: auto;
        top: auto;
        bottom: auto;
        transform: translate(0, 0);
        display: flex;
      }
    }
  }
}
</style>
