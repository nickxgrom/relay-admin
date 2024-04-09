<script setup>
import {useI18n} from "vue-i18n"
import {useOrganizationStore} from "../store/organization.js"
import {onMounted, onUnmounted, ref} from "vue"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import {useRouter} from "vue-router"

const {t} = useI18n()
const store = useOrganizationStore()
const router = useRouter()

const selected = ref()

onMounted(async () => {
    store.clear()
    await store.getOrganizations()
})

onUnmounted(() => {
    store.organizationList.value = []
})

function openOrganization(event) {
    router.push(`/organization/${event.data.id}`)
}
</script>

<template>
    <h1 class="mb-5">{{ t('organization.organizationListTitle') }}</h1>

    <DataTable
        v-model:selection="selected"
        selection-mode="single"
        :value="store.organizationList"
        @row-select="openOrganization"
    >
        <Column
            field="name"
            :header="t('organization.fields.name')"
        />
        <Column
            field="email"
            :header="t('organization.fields.email')"
        />
        <Column
            field="description"
            :header="t('organization.fields.description')"
        />
        <Column
            field="address"
            :header="t('organization.fields.address')"
        />
        <!--        TODO: creation date-->
    </DataTable>
</template>

<style scoped>

</style>