<script setup>

const emit = defineEmits(['close'])
import IconClose from '@/components/icons/IconClose.vue'
</script>

<template>
  <div class="donat-modal">
    <div class="donat-modal__head">
      <div class="donat-modal__title">Поддержите наш сервис</div>
      <div class="donat-modal__head-part">
        <button class="btn btn--small btn--outlined-gradient">Прокачать до Премиум</button>
        <IconClose class="donat-modal__close" @click="emit('close')"/>
      </div>

    </div>
    <div class="donat-modal__subtitle">Ваш вклад — ключ к развитию и улучшению нашего сервиса для вас и всех фанатов футбола</div>

    <div class="donat-modal__body">
      <div class="donat__list">
        <div class="donat__item donat__item--5">
          <img src="@/assets/img/donat-5.png" alt="" class="donat__img">
          <div class="donat__value">
            5
            <span class="donat__currency">USDT</span>
          </div>
          <button class="btn btn--outlined donat__btn">Отправить</button>
        </div>

        <div class="donat__item donat__item--10">
          <img src="@/assets/img/donat-10.png" alt="" class="donat__img">
          <div class="donat__value">
            10
            <span class="donat__currency">USDT</span>
          </div>
          <button class="btn btn--outlined donat__btn">Отправить</button>
        </div>

        <div class="donat__item donat__item--20">
          <img src="@/assets/img/donat-20.png" alt="" class="donat__img">
          <div class="donat__value">
            20
            <span class="donat__currency">USDT</span>
          </div>
          <button class="btn btn--outlined donat__btn">Отправить</button>
        </div>

        <div class="donat__item donat__item--other">
          <img src="@/assets/img/donat-other.png" alt="" class="donat__img">
          <input type="text" class="donat__input" placeholder="Указать сумму..">
          <button class="btn btn--outlined donat__btn">Отправить</button>
        </div>
      </div>
    </div>

    <button class="btn btn--small btn--outlined-gradient donat-modal__premium-btn">Прокачать до Премиум</button>
  </div>
</template>

<style scoped lang="scss">
.donat {
  &__list {
    display: flex;
    margin-top: rem(32);
    gap: rem(20);
  }
  &__item {
    border-radius: rem(16);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: rem(20);
    gap: rem(20);
    width: calc((100% - rem(60)) / 4);
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      width: rem(120);
      height: rem(120);
      z-index: -1;

      opacity: 0.32;
      filter: blur(30px);
    }

    &--5 {
      border: 1px solid rgba(254, 170, 199, 0.32);
      background: rgba(254, 170, 199, 0.16);

      &:before {
        background: #FEAAC7;
      }
    }
    &--10 {
      border: 1px solid rgba(238, 190, 119, 0.32);
      background: rgba(238, 190, 119, 0.16);

      &:before {
        background: #EEBE77;
      }
    }
    &--20 {
      border: 1px solid rgba(176, 189, 86, 0.32);
      background: rgba(176, 189, 86, 0.16);

      &:before {
        background: #B0BD56;
      }
    }
    &--other {
      border: 1px solid rgba(206, 162, 213, 0.32);
      background: rgba(206, 162, 213, 0.16);

      &:before {
        background: #CEA2D5;
      }
    }
  }

  &__img {
    width: rem(80);
    height: rem(80);
  }

  &__value {
    color: #E9EAEC;
    font-size: rem(24);
    font-weight: 700;
    line-height: 132%; /* 31.68px */
  }

  &__currency {
    color: #E9EAEC;
    font-size: rem(16);
    font-weight: 500;
    line-height: 150%; /* 24px */
  }

  &__btn {
    max-width: 100%;
  }

  &__input {
    border-radius: rem(8);
    background: rgba(25, 27, 34, 0.32);
    width: 100%;
    height: rem(56);
    padding: rem(12);
    color: rgba(255, 255, 255, 0.68);
    font-size: rem(14);
    font-weight: 600;
    line-height: normal;
  }
}
.donat-modal {
  backdrop-filter: blur(40px);
  box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
  background: #24262D;
  border-radius: rem(24);
  width: rem(800);
  height: rem(444);
  padding: rem(32) rem(24) rem(24);

  &__title {
    color: #FFF;
    font-size: rem(24);
    font-weight: 700;
    line-height: 132%; /* 31.68px */
  }

  &__subtitle {
    color: #E9EAEC;
    font-size: rem(16);
    font-weight: 500;
    line-height: 150%; /* 24px */
    margin-top: rem(12);
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(20);
  }

  &__head-part {
    display: flex;
    align-items: center;
    gap: rem(20);
  }

  &__close {
    width: rem(20);
    height: rem(20);
    cursor: pointer;
  }

  &__premium-btn {
    display: none;
  }
}

@media screen and (max-width: $tablet) {
  .donat-modal {
    width: 100%;
    height: auto;
  }

  .donat {
    &__list {
      flex-wrap: wrap;
    }

    &__item {
      width: calc((100% - rem(20)) / 2);
    }
  }
}

@media screen and (max-width: $phablet) {
  .donat-modal {

    &__head {
      .btn {
        display: none;
      }
    }
    &__premium-btn {
      font-size: rem(15);
      margin-top: rem(32);
      width: 100%;
      display: flex;
    }
  }
}
</style>
