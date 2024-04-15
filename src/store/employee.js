import {defineStore} from "pinia"
import {ref} from "vue"
import useFetch from "../composables/useFetch.js"

export const useEmployeeStore = defineStore("employee", () => {
    const employee = ref({
        name: "",
        email: "",
        verified: false,
        createdAt: null,
    })

    const employeeList = ref([])

    async function getEmployeeList(orgId) {
        const res = await useFetch(`/organization/employees/${orgId}`)

        employeeList.value = res.map(item => ({
            id: item.id,
            name: item.name,
            email: item.email,
            verified: item.verified,
            createdAt: new Date(item.createdAt).toDateString(),
        }))
    }

    async function getEmployee(organizationId, employeeId) {
        const res = await useFetch(`/organization/employees/${organizationId}/${employeeId}`)
        employee.value = {
            ...res,
            createdAt: new Date(res.createdAt).toDateString(),
        }
    }

    function updateEmployee(organizationId, employeeId) {
        return useFetch(`/organization/employees/${organizationId}/${employeeId}`, {
            method: "PUT",
            body: {
                name: employee.value.name,
                email: employee.value.email,
                verified: employee.value.verified,
            }
        })
    }

    function deleteEmployee(id) {}

    function clear() {
        employee.value = {
            name: "",
            email: "",
            verified: false,
            createdAt: null,
        }
    }

    return {
        getEmployeeList,
        getEmployee,
        updateEmployee,
        deleteEmployee,
        clear,
        employee,
        employeeList,
    }
})
