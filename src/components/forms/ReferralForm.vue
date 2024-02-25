<script setup>
import { useForm } from 'vee-validate'
import { object, string } from "yup"
import BaseInput from '@/components/ui/BaseInput.vue'
import { useAuthStore } from '@/stores/auth.js'
import { ref } from 'vue'

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
    <button class="btn btn--primary">Сменить</button>
    <div class="form__text form__text--centered">
      После регистрации и верификации по приглашению. Вы получите премиум на 3 дня
    </div>
  </form>
</template>

<style scoped lang="scss">
.form-referral__radio {
  border-radius: toRem(4);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:  rgba(25, 27, 34, 0.12);
  padding: toRem(4);
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: toRem(4);
  height: toRem(40);

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
    font-size: toRem(14);
    font-weight: 400;
    line-height: 150%; /* 21px */
  }

  &-input:checked + &-box {
    background: #E9EAEC;
    color: #191B22;
  }
}
</style>
