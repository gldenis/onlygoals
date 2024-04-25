<script setup>

import LangSwitcher from '@/components/LangSwitcher.vue'
import IconAppStore from '@/components/icons/IconAppStore.vue'
import IconGooglePlay from '@/components/icons/IconGooglePlay.vue'
import BaseModal from '@/components/BaseModal.vue'
import { ref } from 'vue'
import DonatModal from '@/components/DonatModal.vue'

const modalDonatIsOpened = ref(false)
const openDonat = () => {
  modalDonatIsOpened.value = true
}
</script>

<template>
<footer class="footer">
  <div class="container footer__container">
    <div class="footer__main">
      <LangSwitcher />
      <div class="apps__list">
        <div class="apps__item apps__item--disabled">
          <IconAppStore />
        </div>
        <div class="apps__item apps__item--disabled">
          <IconGooglePlay />
        </div>
      </div>
    </div>
    <div class="footer-links">
      <div class="footer-links__item" @click="openDonat">Донат</div>
      <div class="footer-links__item">Написать там</div>
      <div class="footer-links__item">О нас</div>
      <RouterLink to="/tariff" class="footer-links__item">О тарифах</RouterLink>
    </div>
    <div class="copyright">© 2019 Overgoals</div>
  </div>
  <Teleport to="body">
    <BaseModal :opened="modalDonatIsOpened" @close="modalDonatIsOpened = false">
      <DonatModal @close="modalDonatIsOpened = false" />
    </BaseModal>
  </Teleport>
</footer>
</template>

<style scoped lang="scss">
.apps {
  &__list {
    display: flex;
  }

  &__item {
    width: rem(40);
    height: rem(40);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    &--disabled {
      svg {
        opacity: 0.2;
      }

      &:hover {
        &:before {
          display: block;
          content: 'В разработке';
          border-radius: rem(4);
          position: absolute;
          bottom: 100%;
          left: 0;
          white-space: nowrap;
          background: rgba(77, 80, 87, 0.32);
          font-size: rem(14);
          font-weight: 400;
          padding: rem(8);
        }
      }
    }
  }
}
.footer {
  padding: rem(20) 0;
  margin-top: auto;
  background: rgb(19 25 31 / 80%);

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__main {
    display: flex;
    gap: rem(16);
    align-items: center;
  }

  &__logo {
    margin-left: - rem(25);
  }
}
.copyright {
  color: rgba(255, 255, 255, 0.32);
  font-size: rem(13);
  font-weight: 700;
  line-height: 132%; /* 17.16px */
}
.footer-links {
  display: flex;
  align-items: center;
  gap: rem(40);

  &__item {
    color: rgba(255, 255, 255, 0.68);
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    cursor: pointer;
  }
}

.footer__lang-switcher {
  border-radius: 16px;
  background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
}

:deep(.lang-switcher__trigger) {
  border-radius: rem(16);
  background: rgba(255, 255, 255, 0.12);
  padding: rem(4) rem(8);
}

@media screen and (max-width: $tablet) {
  .footer {
    &__container {
      flex-wrap: wrap;
      gap: rem(20);
    }
    &__main {
      order: 3;
      margin-right: rem(20);
    }
    .copyright {
      order: 2;
    }
  }
  .footer-links {
    order: -1;
    width: 100%;
  }

  .apps__list {
    margin-left: auto;
  }
}
:deep(.modal__close) {
  display: none;
}

@media screen and (max-width: $tablet) {
  .footer__container {
    padding-left: rem(24);
    padding-right: rem(24);
  }
}
</style>
