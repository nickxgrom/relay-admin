import { createApp } from "vue"
import App from "./App.vue"

import PrimeVue from "primevue/config"
import "primevue/resources/themes/aura-light-green/theme.css"
import "./style.css"

import router from "../router.js"
import {createPinia} from "pinia"

import { createI18n } from "vue-i18n"
import ru from "./locales/ru.js"

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
    legacy: false,
    locale: "ru",
    messages: {
        ru
    }
})

app.use(PrimeVue)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount("#app")