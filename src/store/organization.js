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

    const organizationList = ref([])

    function createOrganization() {
        return useFetch("/organization", {
            method: "POST",
            body: organization.value
        })
    }

    function updateOrganization(id) {
        return useFetch(`/organization/${id}`, {
            method: "PUT",
            body: organization.value
        })
    }

    async function getOrganizationById(id) {
        const res = await useFetch(`/organization/${id}`)

        organization.value = {
            name: res.name,
            description: res.description,
            address: res.address,
            email: res.email
        }
    }

    async function getOrganizations() {
        organizationList.value = [...await useFetch("/organizations", )]
    }

    function deleteOrganization(id) {
        return useFetch(`/organization/${id}`, {
            method: "DELETE",
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
        organizationList,
        createOrganization,
        updateOrganization,
        getOrganizationById,
        getOrganizations,
        deleteOrganization,
        clear,
    }
})