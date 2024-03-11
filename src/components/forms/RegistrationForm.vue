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
import { createConfirmDialog } from 'vuejs-confirm-dialog'
import AgreementModal from '@/components/AgreementModal.vue'
const authStore = useAuthStore()

const toLogin = () => {
  authStore.registrationFormIsOpened = false
  authStore.loginFormIsOpened = true
}

const openAgreement = () => {

  const { reveal } = createConfirmDialog(AgreementModal)

  reveal()
}
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
      <BaseInput type="password"
                 v-model="password"
                 v-bind="passwordAttrs"
                 placeholder="Пароль"
                 :error="errors.password"/>
    </div>
    <div class="form__agreement">
      <BaseCheckbox v-model="agreement"  v-bind="agreementAttrs" :error="errors.password">
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
  </form>
</template>

<style scoped lang="scss">

</style>
