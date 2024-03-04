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
      <div class="page-head page-profile__page-head">
        <h1 class="page-head__title">Okeymaxim@gmail.com</h1>
        <div class="page-head__separator"></div>
        <LangSwitcher />
        <button class="btn btn--small btn--outlined" @click="authStore.changeEmailFormIsOpened = true">Change Email</button>
        <button class="btn btn--small btn--outlined" @click="authStore.changePasswordFormIsOpened = true">Change Password</button>
      </div>
      <div class="referral__wrapper">
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
main {
  padding-top: rem(40);
}

@media screen and (max-width: $tablet){
  .page-profile__page-head {
    .page-head__title {
      width: 100%;
    }

    .page-head__separator {
      display: block;
    }
  }
}

</style>
