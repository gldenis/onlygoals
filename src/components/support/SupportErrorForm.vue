<script setup>
import { useForm } from 'vee-validate'
import { object, string } from "yup"
import BaseInput from '@/components/ui/BaseInput.vue'

const schema = object({
  email: string().required('email не может быть пустым').email("введите валидный email")
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false,
})



const formSubmit = handleSubmit(values => {

})

import { useAuthStore } from '@/stores/auth.js'
const authStore = useAuthStore()
const toLogin = () => {
  authStore.loginFormIsOpened = true
  authStore.restorePasswordFormIsOpened = false
}
</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title">Восстановление пароля</div>
    </div>
    <div class="form__group">
      <BaseInput type="text"
                 v-model="email"
                 v-bind="emailAttrs"
                 placeholder="Email"
                 :error="errors.email"/>
    </div>
    <button class="btn btn--primary">Отправить ссылку на почту</button>
  </form>
</template>

<style scoped lang="scss">

</style>
