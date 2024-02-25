<script setup>

import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconLetter from '@/components/icons/IconLetter.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import BannerVerification from '@/components/BannerVerification.vue'
import ReferralBanner from '@/components/ReferralBanner.vue'
import BaseModal from '@/components/BaseModal.vue'
import { useAuthStore } from '@/stores/auth.js'
import ChangeEmailForm from '@/components/forms/ChangeEmailForm.vue'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm.vue'
import LangSwitcher from '@/components/LangSwitcher.vue'
const authStore = useAuthStore()
</script>

<template>
  <main>
    <div class="container">
      <div class="page-head">
        <h1 class="page-head__title">Okeymaxim@gmail.com</h1>
        <div class="page-head__separator"></div>
        <LangSwitcher />
        <button class="btn btn--small btn--outlined" @click="authStore.changeEmailFormIsOpened = true">Change Email</button>
        <button class="btn btn--small btn--outlined" @click="authStore.changePasswordFormIsOpened = true">Change Password</button>
      </div>

      <div class="referral-container">
        <div class="referrals">
          <div class="referrals__head">
            <div class="referral__title referral__title--head">Мои рефералы (32)</div>
            <div class="referral__limit">Лимит в сутки: <span>2 из 10</span></div>
          </div>
          <div class="referral__list">
            <div class="referral__item">
              <div class="referral__title">curtis.weaver@example.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
                <div class="referral__bonus">
                  <IconPlus width="16" height="16" />
                  3 дня премиум
                </div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">nathan.roberts@example.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
                <div class="referral__bonus">
                  <IconPlus width="16" height="16" />
                  3 дня премиум
                </div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">tim.jennings@example.com</div>
              <div class="referral__info">
                <div class="referral__pending">Ожидание верификации</div>
                <div class="referral__resending">
                  <IconLetter />
                  Отправить снова
                </div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">willie.jennings@example.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
              </div>
            </div>
          </div>
        </div>
        <ReferralBanner />
      </div>
    </div>
    <BannerVerification />

    <teleport to="body">
      <BaseModal v-if="authStore.changeEmailFormIsOpened" @close="authStore.changeEmailFormIsOpened = false">
        <ChangeEmailForm />
      </BaseModal>
    </teleport>
    <teleport to="body">
      <BaseModal v-if="authStore.changePasswordFormIsOpened" @close="authStore.changePasswordFormIsOpened = false">
        <ChangePasswordForm />
      </BaseModal>
    </teleport>
  </main>
</template>

<style scoped lang="scss">


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

    &--head {
      font-size: toRem(16);
    }
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
    min-width: toRem(180);
    padding: toRem(7) toRem(12);
    border-radius: toRem(20);
    background: rgba(31, 168, 78, 0.16);
    color: #099853;
    text-align: center;
    font-size: toRem(13);
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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
    min-width: toRem(180);
    padding: toRem(7) toRem(12);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: toRem(8);
    flex-shrink: 0;
  }

  &__limit {
    color: rgba(255, 255, 255, 0.32);
    font-size: toRem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */

    span {
      color: #eee;
    }
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

  &__head {
    height: toRem(40);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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

  .page-head {
    .title {
      word-break: break-word;
    }
  }
}
</style>
