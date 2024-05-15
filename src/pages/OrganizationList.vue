<script setup>
import {useI18n} from "vue-i18n"
import {useOrganizationStore} from "../store/organization.js"
import {onMounted, onUnmounted, ref} from "vue"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import {useRouter} from "vue-router"
import Button from "primevue/button"

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
        v-if="store.organizationList.length"
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
        <Column
            field="createdAt"
            :header="t('organization.fields.creationDate')"
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
        {{ t('organization.noData') }}

        <Button
            @click="router.push('/organization/new')"
            class="w-fit"
        >
            {{ t(`organization.newOrganizationTitle`) }}
        </Button>
    </div>
</template>

<style scoped>

</style>
