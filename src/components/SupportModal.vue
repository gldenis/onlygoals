<script setup>

import AppGuide from '@/components/AppGuide.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import IconSupportSend from '@/components/icons/IconSupportSend.vue'
import BaseModal from '@/components/BaseModal.vue'
import SupportMessageForm from '@/components/support/SupportMessageForm.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import SupportIdeaForm from '@/components/support/SupportIdeaForm.vue'
import SupportErrorForm from '@/components/support/SupportErrorForm.vue'
import SupportHelpForm from '@/components/support/SupportHelpForm.vue'
import IconSupportChat from '@/components/icons/IconSupportChat.vue'

const supportWindowIsOpened = ref(false)
const content = ref()

onClickOutside(content, () => {
  supportWindowIsOpened.value = false
})

const supportModalIsOpened = ref(false)
const supportMessageIsOpened = ref(false)
const supportIdeaIsOpened = ref(false)
const supportErrorIsOpened = ref(false)
const supportHelpIsOpened = ref(false)

</script>

<template>
  <div class="support">
    <IconSupportChat class="support__trigger" @click="supportWindowIsOpened = true"  />
    <div class="support__content" ref="content">
      <AppGuide v-if="supportWindowIsOpened" @close="supportWindowIsOpened = false" :show-close-btn="true">
        <div class="support__buttons">
          <button class="btn btn--small btn--outlined-gradient">
            Получите весь курс со скидкой!
          </button>
          <button class="btn btn--small btn--gray" @click="supportModalIsOpened = true">
            Overgoals поддержка
            <IconSupportSend />
          </button>
        </div>
      </AppGuide>
    </div>
    <Teleport to="body">
      <BaseModal v-if="supportModalIsOpened" :opened="supportModalIsOpened" @close="supportModalIsOpened = false">
        <div class="form">
          <div class="form__head">
            <div class="form__title form__title--centered">Overgoals поддержка</div>
          </div>
          <div class="support__items">
            <div class="support__item" @click="supportModalIsOpened = false; supportMessageIsOpened = true;">
              Написать в поддержку
              <IconArrowRight width="16" height="16" />
            </div>
            <div class="support__item" @click="supportModalIsOpened = false; supportIdeaIsOpened = true;">
              Предложить идею
              <IconArrowRight width="16" height="16" />
            </div>
            <div class="support__item" @click="supportModalIsOpened = false; supportErrorIsOpened = true;">
              Сообщить об ошибке
              <IconArrowRight width="16" height="16" />
            </div>
            <div class="support__item" @click="supportModalIsOpened = false; supportHelpIsOpened = true;">
              Вклад в развитие
              <IconArrowRight width="16" height="16" />
            </div>
          </div>
        </div>
      </BaseModal>
    </Teleport>
    <Teleport to="body">
      <BaseModal v-if="supportMessageIsOpened"
                 :showAgainBtn="true"
                 @cancel="supportModalIsOpened = true; supportMessageIsOpened = false;"
                 :opened="supportMessageIsOpened"
                 @close="supportMessageIsOpened = false">
        <SupportMessageForm />
      </BaseModal>
    </Teleport>
    <Teleport to="body">
      <BaseModal v-if="supportIdeaIsOpened"
                 :showAgainBtn="true"
                 @cancel="supportModalIsOpened = true; supportIdeaIsOpened = false;"
                 :opened="supportIdeaIsOpened" @close="supportIdeaIsOpened = false">
        <SupportIdeaForm />
      </BaseModal>
    </Teleport>
    <Teleport to="body">
      <BaseModal v-if="supportErrorIsOpened"
                 :showAgainBtn="true"
                 @cancel="supportModalIsOpened = true; supportErrorIsOpened = false;"
                 :opened="supportErrorIsOpened"
                 @close="supportErrorIsOpened = false">
        <SupportErrorForm />
      </BaseModal>
    </Teleport>
    <Teleport to="body">
      <BaseModal v-if="supportHelpIsOpened"
                 :showAgainBtn="true"
                 @cancel="supportModalIsOpened = true; supportHelpIsOpened = false;"
                 :opened="supportHelpIsOpened"
                 @close="supportHelpIsOpened = false">
        <SupportHelpForm />
      </BaseModal>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">

.support__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(40);
  color: rgba(255, 255, 255, 0.84);
  font-size: rem(16);
  font-weight: 700;
  line-height: 128%; /* 20.48px */
  cursor: pointer;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: rem(10) 0;
  min-height: rem(52);

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
}

.support {
  position: fixed;
  bottom: rem(40);
  right: rem(40);
  z-index: 3;

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: rem(32);
  }

  &__btn {
    border-radius: rem(24);
    background: rgba(227, 134, 26, 0.12);
    color: #E3861A;
    text-align: center;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__trigger {
    cursor: pointer;
    clip-path: url("@/assets/img/ask.svg");
    overflow: hidden;
  }

  &__content {
    width: rem(324);
    position: absolute;
    right: 0;
    bottom: 0;
  }
}



.form {
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    content: '';
    display: block;
    width: rem(280);
    height: rem(280);
    border-radius: 50%;
    opacity: 0.4;
    background: conic-gradient(from 0deg at 50% 50%, #3073FA 0.9259677026420832deg, #EF8641 121.87499642372131deg, #C4648F 232.49999284744263deg, #933CEA 333.9734101295471deg);
    filter: blur(40px);
    z-index: -1;
  }
}
</style>

<style lang="scss">
@media screen and (max-width: $phablet) {
  .premium-notification ~ .support {
    bottom: rem(84);
  }
}
</style>
