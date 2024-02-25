<script setup>
import { useForm } from 'vee-validate'
import { object, string } from "yup"
import BaseInput from '@/components/ui/BaseInput.vue'

const schema = object({
  oldPassword: string().required('пароль не может быть пустым'),
  password: string().required('пароль не может быть пустым'),
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [oldPassword, oldPasswordAttrs] = defineField('oldPassword', {
  validateOnModelUpdate: false,
})

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false,
})

const formSubmit = handleSubmit(values => {

})

import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()

</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title">Смена пароля</div>
    </div>
    <div class="form__group">
      <BaseInput type="password"
                 v-model="oldPassword"
                 v-bind="oldPasswordAttrs"
                 placeholder="старый пароль"
                 :error="errors.oldPassword" />
      <BaseInput type="password"
                 v-model="password"
                 v-bind="passwordAttrs"
                 placeholder="новый пароль"
                 :error="errors.password" />
    </div>
    <button class="btn btn--primary">Сменить</button>
  </form>
</template>

<style scoped lang="scss">

</style>
