import { createApp } from "vue"
import App from "./App.vue"

import PrimeVue from "primevue/config"
import "primevue/resources/themes/aura-light-green/theme.css"
import "./style.css"

import router from "../router.js"
import {createPinia} from "pinia"

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue)
    .use(router)
    .use(pinia)
    .mount("#app")