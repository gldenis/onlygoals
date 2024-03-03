<script setup>
import { useForm } from 'vee-validate'
import { object, string } from "yup"
import BaseInput from '@/components/ui/BaseInput.vue'
import { useAuthStore } from '@/stores/auth.js'
import { ref } from 'vue'

const schema = object({
  email: string().required('email не может быть пустым').email("введите валидный email"),
  sms: string().required('sms не может быть пустым'),
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false,
})

const [sms, smsAttrs] = defineField('sms', {
  validateOnModelUpdate: false,
})

const smsSended = ref(false)

const formSubmit = handleSubmit(values => {
  console.log(3333)
  if (smsSended.value) {
    console.log(1111111111)
  } else {
    smsSended.value = true
    console.log(22222222)
  }
})

const authStore = useAuthStore()

</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title">Верификация</div>
    </div>
    <div class="form__group">
      <BaseInput type="text"
                 v-model="email"
                 v-bind="emailAttrs"
                 placeholder="Email"
                 :error="errors.email"/>
      <BaseInput type="text"
                 v-if="smsSended"
                 v-model="sms"
                 v-bind="smsAttrs"
                 placeholder="СМС для подтверждения"
                 :error="errors.sms"/>
    </div>
    <button class="btn btn--primary">Получить код СМС</button>
  </form>
</template>

<style scoped lang="scss">

</style>
