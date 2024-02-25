<script setup>
import { ref } from 'vue'
import IconCopy from '@/components/icons/IconCopy.vue'

const selectedPayment = ref('btc')
const changePayment = payment => selectedPayment.value = payment

const inputFile = ref()
const file = ref()
const changeFile = (event) => {
  file.value = event.target.files[0]
}
</script>

<template>
  <div class="payment">
    <div class="payment__title">Покупка
      <br>
      премиум</div>
    <div class="payment__subtitle">Покупка подписки </div>
    <div class="payment-method">
      <div class="payment-method__item" :class="{ 'payment-method__item--selected': selectedPayment === 'btc' }" @click="changePayment('btc')">
        <img src="@/assets/img/bitcoin.png" alt="" loading="lazy" width="32" height="32">
      </div>
      <div class="payment-method__item" :class="{ 'payment-method__item--selected': selectedPayment === 'usdt' }" @click="changePayment('usdt')">
        <img src="@/assets/img/usdt.png" alt="" loading="lazy" width="32" height="32">
      </div>
    </div>
    <div class="payment-wallet">
      <div class="payment-wallet__coin">{{ selectedPayment === 'btc' ? 'Bitcoin' : 'USDT' }}</div>
      <button class="btn btn--small btn--gray payment-wallet__copy">
        <IconCopy />
        Скопировать
      </button>
      <div class="payment-type__wallet">
        <div class="payment-type__wallet-number" v-for="number of 16">{{ Math.floor(Math.random()*9) }}</div>
      </div>
    </div>

    <div class="payment-check">
      <div class="payment-check__title">Загрузите чек для ускорения процесса перевода</div>
      <input type="file" hidden="hidden" ref="inputFile" class="payment-check__input" @change="changeFile"/>
      <button class="btn btn--primary payment-check__btn" @click="inputFile.click()">
        Загрузить чек
      </button>

      <div v-if="file" class="payment-check__file-name">{{ file.name }}</div>
      <button v-if="file" class="btn btn--primary payment-check__btn">
        Отправить
      </button>
      <div class="payment-check__text">
        После оплаты ссылка на урок прийдет на почту okeymaksim@gmail.com
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.payment-check {
  border-radius: toRem(8);
  background: rgba(31, 168, 78, 0.16);
  padding: toRem(20);
  display: flex;
  flex-direction: column;
  gap: toRem(20);

  &__title {
    color: #099853;
    font-size: 16px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
  }

  &__input {
  }

  &__btn {
    width: 100%;
  }

  &__file-name {
    color: #E9EAEC;
    text-align: center;
    font-size: toRem(14);
    font-weight: 600;
  }

  &__text {
    color: #E9EAEC;
    text-align: center;
    font-size: toRem(14);
    font-weight: 600;
  }
}

.payment-type {

  &__wallet {
    display: flex;
    gap: 1px;
    width: 100%;
  }

  &__wallet-number {
    width: 18px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid rgb(217, 217, 217);
    background: linear-gradient(180.00deg, rgba(217, 217, 217, 0),rgba(217, 217, 217, 0.04) 100%);

    &:nth-child(4n + 1) {
      margin-left: 8px;
    }
    &:first-child {
      margin-left: 0;
    }
  }
}

.payment-wallet {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: toRem(16);

  &__coin {
    color: #E9EAEC;
    font-size: 24px;
    font-style: italic;
    font-weight: 900;
    line-height: 125%;
    text-transform: uppercase;
  }
}
.payment-method {
  padding: toRem(16) 0;
  border-top: toRem(1) solid rgba(255, 255, 255, 0.12);
  border-bottom: toRem(1) solid rgba(255, 255, 255, 0.12);
  display: flex;
  gap: toRem(8);

  &__item {
    width: toRem(80);
    height: toRem(80);
    padding: 20px;
    border-radius: toRem(8);
    border: 2px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(4px);

    &--selected {
      background: rgba(250, 178, 39, 0.40);
      border: 2px solid transparent;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

.payment {
  border-radius: toRem(24);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);
  padding: toRem(52) toRem(32) toRem(32);
  width: toRem(400);
  display: flex;
  flex-direction: column;
  gap: toRem(32);

  &__title {
    color: #E9EAEC;
    font-size: toRem(32);
    font-weight: 800;
    line-height: 132%;
    text-align: left;
  }

  &__subtitle {
    color: #E9EAEC;
    font-size: toRem(14);
    font-weight: 400;
    line-height: 132%;
    display: flex;
    min-height: toRem(40);
    align-items: center;
  }
}
</style>
