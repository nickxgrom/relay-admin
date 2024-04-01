import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        meta: { layout: "empty" },
        path: "/signup/:organizationId?",
        component: () => import("~pages/Signup.vue")
    },
    {
        meta: { layout: "empty" },
        path: "/login/:organizationId?",
        component: () => import("~pages/Login.vue")
    },
    {
        path: "/",
        component: () => import("~pages/Home.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router