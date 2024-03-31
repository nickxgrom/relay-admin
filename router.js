import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: "/signup",
        component: import("~pages/Signup.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router