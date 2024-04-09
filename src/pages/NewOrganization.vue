<script setup>
import {useI18n} from "vue-i18n"
import {useOrganizationStore} from "../store/organization.js"
import InputText from "primevue/inputtext"
import Textarea from "primevue/textarea"
import Button from "primevue/button"
import {ref} from "vue"
import Message from "primevue/message"
import {useRouter} from "vue-router"

const {t} = useI18n()
const store = useOrganizationStore()
const router = useRouter()

const errors = ref([])

store.clear()

function submit() {
    errors.value = []

    store.createOrganization()
        .then((res) => {
            router.push(`/organization-manager/${res.id}`)
        })
        .catch(err => {
            errors.value.push(err)
        })
}
</script>

<template>
    <h1>{{ t("organization.newOrganizationTitle") }}</h1>

    <div class="py-5 flex flex-col gap-3">
        <InputText
            v-model="store.organization.name"
            variant="filled"
            :placeholder="t(`organization.fields.name`)"
        />
        <Textarea
            v-model="store.organization.description"
            variant="filled"
            :placeholder="t(`organization.fields.description`)"
        />
        <InputText
            v-model="store.organization.email"
            variant="filled"
            :placeholder="t(`organization.fields.email`)"
        />
        <InputText
            v-model="store.organization.address"
            variant="filled"
            :placeholder="t(`organization.fields.address`)"
        />

        <div v-if="errors.length">
            <Message
                v-for="error in errors"
                :key="error.alias"
                severity="error"
            >{{ t(`errors.${error.alias}`) }}</Message>
        </div>

        <Button
            @click="submit"
            class="w-fit"
        >
            {{ t(`organization.create`) }}
        </Button>
    </div>
</template>

<style scoped>

</style>