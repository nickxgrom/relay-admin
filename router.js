import {createRouter, createWebHistory} from "vue-router"
import {userRoles} from "./src/constants/userRoles.js"

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
        meta: { layout: "chat", role: userRoles.EMPLOYEE },
        path: "/chat/:chatId?",
        component: () => import("~pages/Chat.vue")
    },
    {
        meta: { role: userRoles.OWNER },
        path: "/organization/:id",
        component: () => import("~pages/Organization.vue")
    },
    {
        meta: { role: userRoles.OWNER },
        path: "/organization/new",
        component: () => import("~pages/NewOrganization.vue")
    },
    {
        meta: { role: userRoles.OWNER },
        path: "/organization-manager",
        component: () => import("~pages/OrganizationList.vue")
    },
    {
        meta: { role: userRoles.OWNER },
        path: "/operator-manager",
        component: () => import("~pages/EmployeeList.vue")
    },
    {
        meta: { role: userRoles.OWNER },
        path: "/employee/:organizationId/:employeeId",
        component: () => import("~pages/Employee.vue")
    },
    {
        meta: { layout: "empty" },
        path: "/not-found",
        component: () => import("~pages/NotFound.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
