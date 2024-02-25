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

</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title form__title--centered">Приглашение пользователя</div>
    </div>
    <div class="form__group">
      <BaseInput type="text"
                 v-model="email"
                 v-bind="emailAttrs"
                 placeholder="Email"
                 :error="errors.email"/>
    </div>
    <button class="btn btn--primary">Сменить</button>
    <div class="form__text form__text--centered">
      После регистрации и верификации по приглашению. Вы получите премиум на 3 дня
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>
