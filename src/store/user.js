import {defineStore} from "pinia"
import {ref} from "vue"
import useFetch from "../composables/useFetch.js"

export const useUserStore = defineStore("user", () => {
    const user = ref({
        firstName: "",
        lastName: "",
        patronymic: "",
        email: "",
        password: ""
    })

    function userSignup() {
        return useFetch("/users", {
            method: "POST",
            body: {
                ...user.value
            }
        })
    }

    function employeeRegistration(orgId) {
        return useFetch(`/employee-registration?organizationId=${orgId}`, {
            method: "POST",
            body: {
                name: user.value.firstName,
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

    return {
        user,
        userSignup,
        employeeRegistration,
        getOrganizationName
    }
})