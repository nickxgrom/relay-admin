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
    {
        path: "/organization/:id",
        component: () => import("~pages/Organization.vue")
    },
    {
        path: "/organization/new",
        component: () => import("~pages/NewOrganization.vue")
    },
    {
        path: "/organization-manager",
        component: () => import("~pages/OrganizationList.vue")
    },
    {
        path: "/operator-manager",
        component: () => import("~pages/EmployeeList.vue")
    },
    {
        path: "/employee/:organizationId/:employeeId",
        component: () => import("~pages/Employee.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
