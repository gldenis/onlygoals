<script setup>

import IconLetter from '@/components/icons/IconLetter.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import BannerVerification from '@/components/BannerVerification.vue'
import ReferralBanner from '@/components/ReferralBanner.vue'
import BaseModal from '@/components/BaseModal.vue'
import { useAuthStore } from '@/stores/auth.js'
import ChangeEmailForm from '@/components/forms/ChangeEmailForm.vue'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm.vue'
import LangSwitcher from '@/components/LangSwitcher.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import { useWindowSize } from '@vueuse/core'
import ThinSettings from '@/components/ThinSettings.vue'
import { ref } from 'vue'
import IconPlusInCircle from '@/components/icons/IconPlusInCircle.vue'
import IconPlusInCircleFilled from '@/components/icons/IconPlusInCircleFilled.vue'
const authStore = useAuthStore()
const { width } = useWindowSize()
const isPro = ref(false)

const togglePro = () => {
  isPro.value = true
}
</script>

<template>
  <main>
    <div class="container">
      <div class="page-head page-profile__page-head">
        <h1 class="page-head__title">Профиль</h1>
        <div class="page-head__separator"></div>
        <LangSwitcher class="page-profile__lang-switcher"/>
        <template v-if="true">
            <div class="settings__education">
              <BaseCheckbox />
              Скрыть блок обучения с главной
            </div>
            <div class="profile-verification__label">Подтвердите аккаунт для
              доступа ко всем функциям</div>
            <button class="btn btn--small btn--light">Повторить отправку</button>
        </template>
        <template v-else>
          <button class="btn btn--small btn--outlined" @click="authStore.changeEmailFormIsOpened = true">Change Email</button>
          <button class="btn btn--small btn--outlined" @click="authStore.changePasswordFormIsOpened = true">Change Password</button>
        </template>
      </div>
      <div class="referral__wrapper">
        <div class="referrals">
          <div class="referrals__head">
            <div class="referral__title referral__title--head">Мои рефералы (32)</div>
            <div class="referrals__head-right">
              <div class="referral__limit">Лимит в день: <span>2 из 10</span></div>
              <div class="referral__mobile-invite-btn btn btn--icon">
                <IconPlusInCircleFilled />
              </div>
              <Teleport to="body" :disabled="width >= 640">
                <div class="referrals-invite">
                  <div class="referrals-invite__label">
                    Премиум +3 дня
                    за каждого друга
                  </div>
                  <button class="btn btn--primary btn--small" @click.prevent="authStore.referralFormIsOpened = true">Пригласить</button>
                </div>
              </Teleport>
            </div>
          </div>
          <div class="referral__list">
            <div class="referral__item">
              <div class="referral__title">ca**r@e.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
                <div class="referral__bonus">
                  <IconPlus width="16" height="16" />
                  3 дня <span>премиум</span>
                </div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">ni**s@e.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
                <div class="referral__bonus">
                  <IconPlus width="16" height="16" />
                  3 дня <span>премиум</span>
                </div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">tw**s@e.com</div>
              <div class="referral__info">
                <div class="referral__pending">Ожидание верификации</div>
                <div class="referral__resending">
                  <IconLetter />
                  <span>Отправить снова</span>
                </div>
              </div>
            </div>
            <div class="referral__item">
              <div class="referral__title">wi**s@e.com</div>
              <div class="referral__info">
                <div class="referral__date">10.10.2019</div>
              </div>
            </div>
          </div>
        </div>
        <ThinSettings @togglePro="togglePro" :locked="!isPro" />
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

.profile-verification__label {
  color: #E3861A;
  text-align: right;
  font-size: rem(13);
  font-weight: 700;
  line-height: 132%; /* 17.16px */
  max-width: rem(176);
}

.settings__education {
  color: #FFF;
  font-size: rem(14);
  font-style: normal;
  font-weight: 600;
  line-height: 142.857%;
  display: flex;
  align-items: center;
  gap: rem(12);
}

.referrals__head-right {
  display: flex;
  align-items: center;
  gap: rem(32);
}

.referrals-invite {
  display: flex;
  align-items: center;
  gap: rem(16);

  &__label {
    color: #EEE;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    max-width: rem(117);
  }
}

@media screen and (max-width: $laptop){
  .page-profile__page-head {
    .settings__education {
      width: 100%;
    }

    .page-head__separator {
      display: block;
    }
  }

  .profile-verification__label {
    text-align: left;
  }

}

@media screen and (max-width: $phablet){
  .referrals-invite {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: rem(16);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: -20px 20px 60px -16px rgba(24, 24, 41, 0.52);
    backdrop-filter: blur(20px);
  }

  .referrals__head-right {
    gap: rem(12);
  }
}

</style>

<style lang="scss">
@media screen and (max-width: $laptop){
  .page-profile__lang-switcher .lang-switcher__body {
    left: auto;
    right: 0;
  }

}
</style>
