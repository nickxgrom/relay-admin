import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: "/signup/:organizationId?",
        component: () => import("~pages/Signup.vue")
    },
    {
        path: "/login/:organizationId?",
        component: () => import("~pages/Login.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router