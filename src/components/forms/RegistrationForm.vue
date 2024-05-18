<script setup>
import { useForm } from 'vee-validate'
import { boolean, object, string } from 'yup'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'

const schema = object({
  email: string().required('email не может быть пустым').email("введите валидный email"),
  password: string().required('пароль не может быть пустым'),
  agreement: boolean().required('ознакомтесь с соглашениями')
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false,
})

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false,
})

const [agreement, agreementAttrs] = defineField('agreement', {
  type: 'checkbox',
  checkedValue: true,
  uncheckedValue: false,
})

const formSubmit = handleSubmit(values => {

})
import { useAuthStore } from '@/stores/auth.js'
import { ref } from 'vue'
import IconEye from '@/components/icons/IconEye.vue'
import IconEyeClosed from '@/components/icons/IconEyeClosed.vue'
const authStore = useAuthStore()

const toLogin = () => {
  authStore.registrationFormIsOpened = false
  authStore.loginFormIsOpened = true
}

const openAgreement = () => {
  authStore.registrationFormIsOpened = false
  authStore.agreementIsOpened = true
}

const showPassword = ref(false)
</script>

<template>
  <form v-bind="$attrs" class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title">Регистрация</div>
      <button class="btn btn--small btn--gray" type="button" @click="toLogin">Вход</button>
    </div>
    <div class="form__group">
      <BaseInput type="text"
                 v-model="email"
                 v-bind="emailAttrs"
                 placeholder="Email"
                 :error="errors.email"/>
      <BaseInput :type="showPassword ? 'text': 'password'"
                 v-model="password"
                 v-bind="passwordAttrs"
                 placeholder="Пароль"
                 :error="errors.password">
        <IconEyeClosed v-if="showPassword" class="form-field__icon" @click="showPassword = false" />
        <IconEye v-else class="form-field__icon" @click="showPassword = true" />
      </BaseInput>
    </div>
    <div class="form__agreement">
      <BaseCheckbox v-model="agreement" class="form__agreement-field"  v-bind="agreementAttrs" :error="errors.password">
        <p>
          Я согласен с
          <a class="form__link" href="#" @click.prevent="openAgreement">Пользовательскими соглашениями</a>,
          <a href="#" class="form__link">Правилами и Условиями</a>
          и подтверждаю, что мне исполнилось 18 лет.
        </p>
      </BaseCheckbox>
      <div v-if="errors.agreement" class="form-field__error">{{ errors.agreement }}</div>
    </div>
    <button class="btn btn--primary" type="submit">Зарегистрироваться</button>
    <div class="form__separator"><span>Или</span></div>
    <button class="btn btn--gray" type="button">Вход по приглашению</button>
  </form>
</template>

<style scoped lang="scss">
.form__agreement-field {
  align-items: flex-start;
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
</style>
