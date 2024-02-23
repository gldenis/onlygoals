<script setup>

import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconLetter from '@/components/icons/IconLetter.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="page-head">
        <h1 class="page-head__title">Okeymaxim@gmail.com</h1>
        <div class="page-head__separator"></div>
        <div class="lang-switcher">
          <div class="lang-switcher__trigger">
            Ру
            <IconArrowDown />
          </div>
        </div>
        <button class="btn btn--small btn--outlined">Change Email</button>
        <button class="btn btn--small btn--outlined">Change Password</button>
      </div>

      <div class="referral-container">
        <div class="referrals">
          <div class="referrals__head">
            <div class="referral__title">Мои рефералы (32)</div>
          </div>
          <div class="referral__list">
            <div class="referral__item">
              <div class="referral__title">curtis.weaver@example.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
                <div class="referral__bonus">3 дня премиум</div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">curtis.weaver@example.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
                <div class="referral__bonus">3 дня премиум</div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">curtis.weaver@example.com</div>
              <div class="referral__info">
                <div class="referral__pending">Ожидание верификации</div>
                <div class="referral__resending">
                  <IconLetter />
                  Отправить снова
                </div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">curtis.weaver@example.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
              </div>
            </div>
          </div>
        </div>
        <div class="referral-banner">
          <div class="referral-banner__text">Премиум +3 дня за каждого друга</div>
          <button class="btn btn--primary btn--small referral-banner__btn">Пригласить</button>
          <img src="@/assets/img/referral-banner.png" alt="" class="referral-banner__img" loading="lazy" width="212" height="282">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.referral-banner {
  position: relative;
  width: toRem(320);

  &__text {
    width: toRem(160);
    padding: toRem(16);
    border-radius: toRem(8);
    background: rgba(255, 255, 255, 0.12);

    box-shadow: - toRem(20) toRem(20) toRem(60) (- toRem(16)) rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    color: #eee;
    font-size: toRem(16);
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 28.8px */
  }

  &__btn {
    width: toRem(160);
    margin-top: toRem(20);
  }

  &__img {
    position: absolute;
    width: toRem(212);
    height: auto;
    top: 0;
    left: toRem(108);
  }
}

.referral {
  &__item {
    padding: toRem(16) 0;
    border-top: toRem(1) solid #131820;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      border-bottom: toRem(1) solid #131820;
    }
  }

  &__title {
    color: #eee;
    font-size: toRem(15);
    font-style: normal;
    font-weight: 700;
    line-height: 128%; /* 19.2px */
  }

  &__info {
    display: flex;
    align-items: center;
    gap: toRem(16);
    text-align: right;
  }

  &__date {
    color: #E9EAEC;
    font-size: toRem(13);
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__bonus {
    height: toRem(32);
    min-width: toRem(32);
    padding: toRem(7) toRem(12);
    border-radius: toRem(20);
    background: rgba(31, 168, 78, 0.16);
    color: #099853;
    text-align: center;
    font-size: toRem(13);
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__pending {
    color:  #E3861A;
    font-size: toRem(13);
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__resending {
    color: #fff;
    text-align: center;
    font-size: toRem(13);
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    border-radius: toRem(20);
    background: rgba(255, 255, 255, 0.12);
    height: toRem(32);
    min-width: toRem(32);
    padding: toRem(7) toRem(12);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: toRem(8);
    flex-shrink: 0;
  }
}

.referral-container {
  display: flex;
  gap: toRem(32);
  margin-top: toRem(40);
}

.referrals {
  border-radius: toRem(8);
  border: toRem(1) solid rgba(255, 255, 255, 0.12);
  background: #24262D;
  padding: toRem(24);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: toRem(24);
}



main {
  padding-top: toRem(40);
}



@media screen and (max-width: $laptop) {
  .referral-container {
    flex-direction: column;
  }

  .page-head {
    flex-wrap: wrap;
    justify-content: flex-start;

    .title {
      width: 100%;
    }

    &__separator {
      display: none;
    }
  }
}

@media screen and (max-width: $phablet) {
  .referral {
    &__item {
      flex-direction: column;
      align-items: flex-start;
      gap: toRem(16);
    }

    &__info {
      flex-direction: column;
      text-align: left;
      align-items: flex-start;
    }
  }

  .referral-banner {
    margin-left: auto;
    margin-right: auto;
  }

  .page-head {
    .title {
      word-break: break-word;
    }
  }
}
</style>
