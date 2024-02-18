<script setup>

import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconLetter from '@/components/icons/IconLetter.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="page-head">
        <h1 class="title">Okeymaxim@gmail.com</h1>
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
          <button class="btn btn--primary referral-banner__btn">Пригласить</button>
          <img src="@/assets/img/referral-banner.png" alt="" class="referral-banner__img" loading="lazy" width="212" height="282">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.referral-banner {
  position: relative;
  width: 320px;

  &__text {
    width: 160px;
    padding: 16px;
    border-radius: var(--8, 8px);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));

    box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
    color: var(--Dark-Neutral-1, #EEE);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 28.8px */
  }

  &__btn {
    width: 160px;
    margin-top: 20px;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 108px;
  }
}

.referral {
  &__item {
    padding: 16px 0;
    border-top: 1px solid #131820;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      border-bottom: 1px solid #131820;
    }
  }

  &__title {
    color: var(--Dark-Neutral-1, #EEE);
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 128%; /* 19.2px */
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: right;
  }

  &__date {
    color: var(--Neutral-1, #E9EAEC);
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__bonus {
    height: 32px;
    min-width: 32px;
    padding: 7px 12px;
    border-radius: var(--20, 20px);
    background: var(--green-other-12, rgba(31, 168, 78, 0.16));
    color: var(--Green-5, #099853);
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__pending {
    color: var(--Yellow-5, var(--Yellow, #E3861A));
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__resending {
    color: var(--Neutral-1, #FFF);
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    border-radius: 20px;
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
    height: 32px;
    min-width: 32px;
    padding: 7px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
}

.referral-container {
  display: flex;
  gap: 32px;
  margin-top: 40px;
}

.referrals {
  border-radius: var(--8, 8px);
  border: 1px solid var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  background: var(--Neutral-8, #24262D);
  padding: 24px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 24px;
}

.page-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  &__separator {
    flex-grow: 1;
    opacity: 0.12;
    height: 1px;
    background: var(--Neutral-Left-L1, linear-gradient(to left, #FFF 0%, rgba(255, 255, 255, 0.00) 100%));
  }
}

main {
  padding-top: 40px;
}

.title {
  color: var(--gray-1, #E9EAEC);
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 132%; /* 42.24px */
  text-transform: uppercase;
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
      gap: 16px;
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
