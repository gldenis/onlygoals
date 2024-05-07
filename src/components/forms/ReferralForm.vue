<script setup>
import { useForm } from 'vee-validate'
import { object, string } from "yup"
import BaseInput from '@/components/ui/BaseInput.vue'
import { useAuthStore } from '@/stores/auth.js'
import { ref } from 'vue'
import IconCopy from '@/components/icons/IconCopy.vue'
import IconShareBtn from '@/components/icons/IconShareBtn.vue'
import IconShare from '@/components/icons/IconShare.vue'

const schema = object({
  email: string().required('email не может быть пустым').email("введите валидный email"),
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false,
})

const formSubmit = handleSubmit(values => {

})

const authStore = useAuthStore()
const inviteType = ref('email')
</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title form__title--centered">Приглашение пользователя</div>
    </div>
    <div class="form__group">
      <div class="form-referral__radio">
        <label class="form-referral__radio-item">
          <input type="radio" class="form-referral__radio-input" name="type" value="phone" v-model="inviteType">
          <span class="form-referral__radio-box">По SMS</span>
        </label>
        <label class="form-referral__radio-item">
          <input type="radio" class="form-referral__radio-input" name="type" value="email" v-model="inviteType">
          <span class="form-referral__radio-box">По эл. почте</span>
        </label>
      </div>
      <BaseInput type="text"
                 v-model="email"
                 v-bind="emailAttrs"
                 :placeholder="inviteType === 'email' ? 'Email' : 'Номер телефона'"
                 :error="errors.email"/>
    </div>
    <button class="btn btn--primary">Отправить</button>
    <div class="form__separator"><span>Или перешлите ссылку</span></div>
    <div class="shared-link">
      <div class="shared-link__value">https://example.com/?ref=12345&campaign=spring_sale</div>
      <div class="shared-link__actions">
        <button class="btn btn--icon" type="button">
          <IconShare />
        </button>
        <button class="btn btn--icon btn--gray" type="button">
          <IconCopy />
        </button>
      </div>
    </div>
    <div class="form__text form__text--centered">
      После регистрации и верификации по приглашению. Вы получите премиум на 3 дня
    </div>
  </form>
</template>

<style scoped lang="scss">
.shared-link {
  border-radius: rem(8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(25, 27, 34, 0.12);
  padding: rem(16);
  display: flex;
  align-items: center;
  gap: rem(8);

  &__value {
    color: #E9EAEC;
    font-size: rem(14);
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    word-break: break-all;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: rem(8);
  }
}
.form {
  &__separator {
    text-align: center;
    color: #FFF;
    font-size: rem(13);
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    gap: rem(8);
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      background: rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: rem(20);
      padding: rem(4) rem(8);    border-radius: rem(12);

    }

    &::before, &::after {
      display: inline-block;
      content: '';
      opacity: 0.12;
      height: 1px;
      background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
      flex-grow: 1;
    }

    &:before {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    }

  }
}
.form-referral__radio {
  border-radius: rem(4);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:  rgba(25, 27, 34, 0.12);
  padding: rem(4);
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: rem(4);
  height: rem(40);

  &-input {
    display: none;
  }

  &-item {
    width: calc((100%  - 4px) / 2);

  }

  &-box {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.12);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E9EAEC;
    font-size: rem(14);
    font-weight: 400;
    line-height: 150%; /* 21px */
  }

  &-input:checked + &-box {
    background: #E9EAEC;
    color: #191B22;
  }
}
</style>
