import './assets/scss/main.scss'
import 'overlayscrollbars/overlayscrollbars.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import ru from "./locales/ru.json"
import en from "./locales/en.json"
import * as ConfirmDialog from 'vuejs-confirm-dialog'

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'ru', // set locale
  fallbackLocale: 'ru',
  messages: { ru, en }
})


const app = createApp(App)

app.use(i18n)
app.use(ConfirmDialog)
app.use(createPinia())
app.use(router)

app.mount('#app')
