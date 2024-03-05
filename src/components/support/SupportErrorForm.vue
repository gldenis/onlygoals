<script setup>
import { useForm } from 'vee-validate'
import { object, string } from "yup"
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import { ref } from 'vue'
import IconImage from '@/components/icons/IconImage.vue'

const schema = object({
  email: string().required('email не может быть пустым').email("введите валидный email"),
  message: string().required('не может быть пустым')
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false,
})

const [message, messageAttrs] = defineField('message', {
  validateOnModelUpdate: false,
})


const formSubmit = handleSubmit(values => {

})
const inputFile = ref()
const file = ref()
const changeFile = (event) => {
  file.value = event.target.files[0]
}
</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title form__title--centered">Сообщить
        об ошибке
      </div>
    </div>
    <div class="form__group">
      <BaseTextarea
        v-model="message"
        v-bind="messageAttrs"
        placeholder="Опишите, какую ошибку вы обнаружили?"
        :error="errors.message" />
      <input type="file"
             hidden="hidden"
             ref="inputFile"
             accept=".jpg, .png"
             class="payment-check__input"
             @change="changeFile" />
      <button class="btn btn--gray btn--small" type="button" @click="inputFile.click()">
        <IconImage />
        {{ file ? file.name : 'Добавить скриншот (JPG, PNG до 2 мб)' }}
      </button>


    </div>
    <button class="btn btn--primary">Отправить</button>
  </form>
</template>

<style scoped lang="scss">

</style>
