<script setup>
import { useForm } from 'vee-validate'
import { object, string } from "yup"
import BaseInput from '@/components/ui/BaseInput.vue'

const schema = object({
  email: string().required('email не может быть пустым').email("введите валидный email"),
  password: string().required('пароль не может быть пустым'),
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

const formSubmit = handleSubmit(values => {

})

import { useAuthStore } from '@/stores/auth.js'
import IconEye from '@/components/icons/IconEye.vue'
import IconEyeClosed from '@/components/icons/IconEyeClosed.vue'
import { ref } from 'vue'
const authStore = useAuthStore()
const toRegistration = () => {
  authStore.loginFormIsOpened = false
  authStore.registrationFormIsOpened = true
}

const toRestorePassword = () => {
  authStore.loginFormIsOpened = false
  authStore.restorePasswordFormIsOpened = true
}

const showPassword = ref(false)
</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title">Вход</div>
      <button class="btn btn--small btn--gray" @click="toRegistration">Регистрация</button>
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
      <a href="#" class="form__link" @click.prevent="toRestorePassword">Забыли пароль?</a>
    </div>
    <button class="btn btn--primary">Войти</button>
  </form>
</template>

<style scoped lang="scss">

</style>
