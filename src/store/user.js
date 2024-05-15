import {defineStore} from "pinia"
import {ref} from "vue"
import useFetch from "../composables/useFetch.js"
import {userRoles} from "../constants/userRoles.js"

export const useUserStore = defineStore("user", () => {
    const user = ref({
        firstName: "",
        lastName: "",
        patronymic: "",
        email: "",
        password: "",
        role: ""
    })

    function userSignup() {
        return useFetch("/users", {
            method: "POST",
            body: {
                ...user.value
            }
        })
    }

    function userLogin() {
        return useFetch("/login", {
            method: "POST",
            body: {
                email: user.value.email,
                password: user.value.password,
            }
        })
    }

    function employeeSignup(orgId) {
        return useFetch(`/employee-registration?organizationId=${orgId}`, {
            method: "POST",
            body: {
                name: user.value.firstName,
                email: user.value.email,
                password: user.value.password
            }
        })
    }

    function employeeLogin(orgId) {
        return useFetch(`/employee-login/${orgId}`, {
            method: "POST",
            body: {
                email: user.value.email,
                password: user.value.password
            }
        })
    }


    function getOrganizationName(orgId) {
        return useFetch(`/organization-name/${orgId}`)
            .then(name => name.name)
            .catch(() => "")
    }

    async function getUser() {
        const res = await useFetch("/users")

        user.value.role = res.isOwner ? userRoles.OWNER : userRoles.EMPLOYEE
    }

    return {
        user,
        userSignup,
        employeeSignup,
        getOrganizationName,
        userLogin,
        employeeLogin,
        getUser,
    }
})