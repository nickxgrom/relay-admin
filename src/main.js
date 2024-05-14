import {createApp, ref} from "vue"
import App from "./App.vue"

import PrimeVue from "primevue/config"
import "./style.css"
import "primevue/resources/themes/aura-light-green/theme.css"
import "primeicons/primeicons.css"

import router from "../router.js"
import {createPinia} from "pinia"

import { createI18n } from "vue-i18n"
import ru from "./locales/ru.js"
import {useUserStore} from "./store/user.js"

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
    legacy: false,
    locale: "ru",
    messages: {
        ru
    }
})

app.config.globalProperties.$currentLayout = ref("default")

app.use(PrimeVue)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount("#app")


const userStore = useUserStore()

router.beforeEach((to, from) => {
    app.config.globalProperties.$currentLayout.value = to.meta?.layout ?? "default"

    if (to.meta?.role) {
        if (userStore.user.role && userStore.user.role !== to.meta.role && !to.meta.force) {
            return { path: "/not-found" } // or any other route you want to redirect to
        }
    }
})