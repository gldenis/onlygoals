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
      <img src="@/assets/img/footer-logo.png" class="footer__logo" alt="">
      <LangSwitcher />
      <div class="apps__list">
        <div class="apps__item">
          <IconAppStore />
        </div>
        <div class="apps__item">
          <IconGooglePlay />
        </div>
      </div>
    </div>
    <div class="footer-links">
      <div class="footer-links__item" @click="openDonat">Донат</div>
      <div class="footer-links__item">Написать там</div>
    </div>
    <div class="copyright">© 2019 Lift Media. All rights reserved.</div>
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

@media screen and (max-width: $tablet) {
  .footer {
    &__container {
      flex-wrap: wrap;
      gap: rem(20);
    }
    &__main {
      width: 100%;
    }
  }
  .footer-links {
    order: 3;
  }

  .apps__list {
    margin-left: auto;
  }
}
:deep(.modal__close) {
  display: none;
}
</style>
