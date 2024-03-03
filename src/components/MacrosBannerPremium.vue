<script setup>

import IconLock from '@/components/icons/IconLock.vue'
</script>

<template>
  <div class="banner-premium">
    <IconLock class="banner-premium__icon" width="32" height="32" />
    <div class="banner-premium__text">Купить Премиум и разблокируйте персонализацию <br>
      поиска футбольных матчей </div>
    <button class="btn btn--small btn--gray banner-premium__btn">Узнать подробней</button>
  </div>
</template>

<style scoped lang="scss">
.banner-premium {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: rem(16) rem(24);
  gap: rem(20);
  border-radius: rem(8);
  background: linear-gradient(89deg, #3F45CE 23.96%, #EF6F38 48.96%, #7841BD 77.6%);
  box-shadow: 0 rem(4px) rem(4px) 0 rgba(0, 0, 0, 0.25);

  &__icon {
    flex-shrink: 0;
    width: rem(32);
    height: rem(32);
  }

  &__text {
    overflow: hidden;
    color: #E9EAEC;
    text-overflow: ellipsis;
    font-size: rem(16);
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    flex-grow: 1;
  }

  &__btn {
    flex-shrink: 0;
  }
}

@media screen and (max-width: $phablet) {
  .banner-premium {
    flex-wrap: wrap;

    &__text {
      flex-grow: 1;
      max-width: calc(100% - rem(52));
    }
  }
}
</style>
