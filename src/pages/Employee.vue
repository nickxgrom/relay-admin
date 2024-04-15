<script setup>
import {useI18n} from "vue-i18n"
import {useEmployeeStore} from "../store/employee.js"
import InputText from "primevue/inputtext"
import Button from "primevue/button"
import Message from "primevue/message"
import InputSwitch from "primevue/inputswitch"
import {useRoute, useRouter} from "vue-router"
import {onMounted, ref} from "vue"

const {t} = useI18n()
const store = useEmployeeStore()
const route = useRoute()
const router = useRouter()

const errors = ref([])

onMounted(async () => {
    await store.getEmployee(route.params.organizationId, route.params.employeeId)
})

function update() {
    errors.value = []

    store.updateEmployee(route.params.organizationId, route.params.employeeId)
        .then(() => {
            router.push("/operator-manager/")
        })
        .catch(err => {
            errors.value.push(err)
        })
}
</script>

<template>
    <h1>{{t('employee.updateEmployeeTitle')}}</h1>

    <div class="py-5 flex flex-col gap-3">
        <InputText
            v-model="store.employee.name"
            variant="filled"
            :placeholder="t(`employee.fields.name`)"
        />
        <InputText
            v-model="store.employee.email"
            variant="filled"
            :placeholder="t(`employee.fields.email`)"
        />
        <InputText
            v-model="store.employee.createdAt"
            variant="filled"
            disabled
            :placeholder="t(`employee.fields.createdAt`)"
        />

        <div class="flex gap-2">
            {{ t(`employee.fields.verified`) }}
            <InputSwitch v-model="store.employee.verified" />
        </div>

        <div v-if="errors.length">
            <Message
                v-for="error in errors"
                :key="error.alias"
                severity="error"
            >{{ t(`errors.${error.alias}`) }}</Message>
        </div>

        <Message
            class="w-1/3"
            severity="warn"
        >
            {{t('employee.warning')}}
        </Message>

        <div>
            <Button
                @click="update"
                class="w-fit"
            >
                {{ t(`employee.update`) }}
            </Button>
        </div>
    </div>
</template>

<style scoped>

</style>
