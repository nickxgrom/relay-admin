<script setup>
import {useI18n} from "vue-i18n"
import {onMounted, onUnmounted, ref, watch} from "vue"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import {useRouter} from "vue-router"
import {useEmployeeStore} from "../store/employee.js"
import {useOrganizationStore} from "../store/organization.js"
import Dropdown from "primevue/dropdown"

const {t} = useI18n()
const store = useEmployeeStore()
const organizationStore = useOrganizationStore()
const router = useRouter()

const selectedEmployee = ref()
const selectedOrganization = ref()


onMounted(async () => {
    if (!organizationStore.organizationList.length) {
        await organizationStore.getOrganizations()
    }

    selectedOrganization.value = organizationStore.organizationList?.[0]

    store.clear()
    await store.getEmployeeList(organizationStore.organization[0])
})

onUnmounted(() => {
    store.employeeList.value = []
})

watch(selectedOrganization, async () => {
    await store.getEmployeeList(selectedOrganization.value.id)
})

function openEmployee(event) {
    router.push(`/employee/${event.data.id}`)
}
</script>

<template>
    <!--    TODO: consider about loader-->
    <h1 class="mb-5">{{ t('employee.employeeListTitle') }}</h1>
    <Dropdown
        v-model="selectedOrganization"
        :options="organizationStore.organizationList"
        option-label="name"
    ></Dropdown>

    <DataTable
        v-if="store.employeeList.length"
        v-model:selection="selectedEmployee"
        selection-mode="single"
        :value="store.employeeList"
        @row-select="openEmployee"
    >
        <Column
            field="name"
            :header="t('employee.fields.name')"
        />
        <Column
            field="email"
            :header="t('employee.fields.email')"
        />
        <Column
            field="verified"
            :header="t('employee.fields.verified')"
        />
        <Column
            field="createdAt"
            :header="t('employee.fields.createdAt')"
        />
    </DataTable>
    <div
        v-else
        class="flex flex-col gap-4 items-center"
    >
        <img
            width="200px"
            src="/nodata.svg"
            alt=""
        >
        {{ t('employee.noData') }}
    </div>
</template>

<style scoped>

</style>
