<script setup>
import { useForm } from 'vee-validate'
import { object, string } from "yup"
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import { ref } from 'vue'
import IconImage from '@/components/icons/IconImage.vue'

const schema = object({
  sum: string().required('не может быть пустым')
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [sum, sumAttrs] = defineField('sum', {
  validateOnModelUpdate: false,
})


const formSubmit = handleSubmit(values => {

})
</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title form__title--centered">Вклад в развитие</div>
    </div>
    <div class="form__group">
      <BaseInput type="text"
                 v-model="sum"
                 v-bind="sumAttrs"
                 placeholder="Указать сумму вручную"
                 :error="errors.sum" />

    </div>
    <button class="btn btn--primary">Отправить</button>
  </form>
</template>

<style scoped lang="scss">

</style>
