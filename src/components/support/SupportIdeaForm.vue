<script setup>
import { useForm } from 'vee-validate'
import { object, string,  } from "yup"
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import { ref } from 'vue'
import IconImage from '@/components/icons/IconImage.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'

const schema = object({
  selectedCategory: object().required('Выберите категорию'),
  message: string().required('не может быть пустым')
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [selectedCategory, selectedCategoryAttrs] = defineField('selectedCategory', {
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

const categories = ref([
  {
    name: 'Категория 1',
    value: 1
  },
  {
    name: 'Категория 2',
    value: 1
  }
])
</script>

<template>
  <form class="form" @submit.prevent="formSubmit">
    <div class="form__head">
      <div class="form__title form__title--centered">Предложить идею</div>
    </div>
    <div class="form__group">
      <div class="form__field">
        <BaseSelect :options="categories"
                    v-model="selectedCategory"
                    v-bind="selectedCategoryAttrs"
                    placeholder="Выберите категорию"/>
        <span v-if="errors.selectedCategory" class="form-field__error">{{ errors.selectedCategory }}</span>
      </div>
      <BaseTextarea
        v-model="message"
        v-bind="messageAttrs"
        placeholder="О чем ваша идея?"
        :error="errors.message"/>
      <input type="file" hidden="hidden" ref="inputFile" accept=".jpg, .png" class="payment-check__input" @change="changeFile"/>
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
