import {defineStore} from "pinia"
import {ref} from "vue"
import useFetch from "../composables/useFetch.js"

export const useOrganizationStore = defineStore("organization", () => {
    const organization = ref({
        name: "",
        description: "",
        address: "",
        email: ""
    })

    function createOrganization() {
        return useFetch("/organization", {
            method: "POST",
            body: organization.value
        })
    }

    function clear() {
        organization.value = {
            name: "",
            description: "",
            address: "",
            email: ""
        }
    }

    return {
        organization,
        createOrganization,
        clear,
    }
})